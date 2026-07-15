import db from "@/app/db";
import imagekit from "@/app/lib/imagekit";
import { menuItemsTable } from "@/app/db/schema";
import { toFile } from "@imagekit/nodejs";
import { NextResponse } from "next/server";
import sharp from "sharp";
import { z } from "zod";

const menuItemSchema = z.object({
  categoryId: z.number().int().positive("Category is required"),
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.number().int().positive("Price is required"),
  image: z.string().min(1, "Image URL is required"),
  imagePublicId: z.string().min(1, "Image public ID is required"),
  alt: z.string().min(1, "Alt text is required"),
});
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

export async function POST(request: Request) {
 try {
    const data = await request.formData()
    const file = data.get("file") as File
    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }
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
                                folder: "/Cafetariast"
                                });
    if (!ImageUploadResult.url || !ImageUploadResult.fileId) {
      return NextResponse.json(
        { message: "Image upload failed" },
        { status: 500 },
      );
    }   
    const rawPrice = data.get("price") as string;
    const priceInCents = Math.round(parseFloat(rawPrice) * 100); 
    
    const menuItemData = {
      categoryId: Number(data.get("categoryId")),
      name: data.get("name") as string,
      description: data.get("description") as string,
      price: priceInCents,
      image: ImageUploadResult.url,
      imagePublicId: ImageUploadResult.fileId,
      alt: data.get("alt") as string,
    };
    
    const parsedMenuItem = menuItemSchema.safeParse(menuItemData);
    if (!parsedMenuItem.success) {
      return NextResponse.json(
        { errors: parsedMenuItem.error },
        { status: 400 },
      );
    }
    const [newMenuItem] = await db
      .insert(menuItemsTable)
      .values(parsedMenuItem.data)
      .returning();

    return NextResponse.json(
      { message: "Menu item created successfully", item: newMenuItem },
      { status: 201 },
    );

 } catch (error) {
    console.error("Error creating menu item:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );

 }
}
  
