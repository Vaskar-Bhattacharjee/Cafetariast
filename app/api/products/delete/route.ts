import db from "@/app/db";
import { menuItemsTable } from "@/app/db/schema";
import imagekit from "@/app/lib/imagekit";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

    if (!id || typeof id !== "number") {
      return NextResponse.json(
        { message: "Valid item id is required" },
        { status: 400 },
      );
    }

    const [deletedItem] = await db
      .delete(menuItemsTable)
      .where(eq(menuItemsTable.id, id))
      .returning();

    if (!deletedItem) {
      return NextResponse.json(
        { message: "Menu item not found" },
        { status: 404 },
      );
    }

    await imagekit.files.delete(deletedItem.imagePublicId);

    return NextResponse.json(
      { message: "Menu item deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error deleting menu item:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}