import db from "@/app/db";
import { menuCategoriesTable, menuItemsTable } from "@/app/db/schema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const categories = await db.select().from(menuCategoriesTable);
    const items = await db.select().from(menuItemsTable);

    const menu = categories.map((category) => ({
      id: category.slug,
      label: category.label,
      number: category.number,
      items: items
        .filter((item) => item.categoryId === category.id)
        .map((item) => ({
          id: item.id,
          name: item.name,
          description: item.description,
          price: item.price,
          image: item.image,
          alt: item.alt,
        })),
    }));

    return NextResponse.json({ products: menu }, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}