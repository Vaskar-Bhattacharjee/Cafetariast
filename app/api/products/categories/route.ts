import db from "@/app/db";
import { menuCategoriesTable } from "@/app/db/schema";
import { NextResponse } from "next/server";



export async function GET() {
  try {
    const categories = await db.select().from(menuCategoriesTable);
    return NextResponse.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      { message: "Failed to fetch categories" },
      { status: 500 },
    );
  }
}