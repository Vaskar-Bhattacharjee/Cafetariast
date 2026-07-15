import db from "@/app/db";
import imagekit from "@/app/lib/imagekit";
import { menuItemsTable } from "@/app/db/schema";
import { toFile } from "@imagekit/nodejs";
import { NextResponse } from "next/server";
import sharp from "sharp";
import { z } from "zod";
import { eq } from "drizzle-orm";

const UpdateSchema = z.object({
    id: z.number().int().positive("Valid item id is required"),
    categoryId: z.number().int().positive("Category is required"),
    name: z.string().min(1, "Name is required"),
    description: z.string().min(1, "Description is required"),
    price: z.number().int().positive("Price is required"),
    image: z.string().min(1, "Image URL is required"),
    imagePublicId: z.string().min(1, "Image public ID is required"),
    alt: z.string().min(1, "Alt text is required"),
})
function sanitizeFilename(originalName: string): string {
  const base = originalName
    .replace(/\.[^.]+$/, "")
    .replace(/[^a-zA-Z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase()
    .slice(0, 50);
  return `${base}-${Date.now()}.webp`;
}


export async function PATCH(request: Request) {
   try {
    const data = await request.formData();
    const id = Number(data.get("id"));
    if (!id) {
      return NextResponse.json(
        { message: "Valid item id is required" },
        { status: 400 },
      );
    }
    const [existingData] = await db
                                .select()
                                .from(menuItemsTable)
                                .where(eq(menuItemsTable.id, id));

    if (!existingData) {
        return NextResponse.json(
            { message: "Item not found" },
            { status: 404 },
        );
    }
    const file = data.get("image") as File | null;
    let imageUrl = existingData.image;
    let imagePublicId = existingData.imagePublicId;

        if (file && file instanceof File && file.size > 0) {
      const rawBuffer = Buffer.from(await file.arrayBuffer());

      const cleanBuffer = await sharp(rawBuffer)
        .rotate()
        .resize(4096, 4096, {
          fit: "inside",
          withoutEnlargement: true,
        })
        .toColorspace("srgb")
        .webp({ quality: 95 })
        .toBuffer();

      const safeName = sanitizeFilename(file.name);
      const ImageUploadResult = await imagekit.files.upload({
        file: await toFile(cleanBuffer, safeName),
        fileName: safeName,
        folder: "/Cafetariast",
      });

      if (!ImageUploadResult.url || !ImageUploadResult.fileId) {
        return NextResponse.json(
          { message: "Image upload failed" },
          { status: 500 },
        );
      }
      await imagekit.files.delete(existingData.imagePublicId);
      imageUrl = ImageUploadResult.url;
      imagePublicId = ImageUploadResult.fileId;
    }
    const rawPrice = data.get("price") as string;
    const priceInCents = Math.round(parseFloat(rawPrice) * 100);

    const menuItemData = {
      id,
      categoryId: Number(data.get("categoryId")),
      name: data.get("name") as string,
      description: data.get("description") as string,
      price: priceInCents,
      image: imageUrl,
      imagePublicId: imagePublicId,
      alt: data.get("alt") as string,
    };
    const parsedMenuItem = UpdateSchema.safeParse(menuItemData);
    if (!parsedMenuItem.success) {
      return NextResponse.json(
        { errors: parsedMenuItem.error },
        { status: 400 },
      );
    }
    const { id: _unused, ...updateData } = parsedMenuItem.data;
    const [updatedMenuItem] = await db
      .update(menuItemsTable)
      .set(updateData)
      .where(eq(menuItemsTable.id, id))
      .returning();

    return NextResponse.json(
      { message: "Menu item updated successfully", item: updatedMenuItem },
      { status: 200 },
    );

  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json({ error: "Internal server error while updating product" }, { status: 500 });
   }
}

