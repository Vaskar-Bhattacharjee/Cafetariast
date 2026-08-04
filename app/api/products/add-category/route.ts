export const dynamic = 'force-dynamic';

import db from "@/app/db";
import { menuCategoriesTable } from "@/app/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { z } from "zod";

const categorySchema = z.object({
  label: z.string().min(1, "Category name is required"),
});
function slugify(label: string): string {
  return label
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function GET() {
  try {
    const categories = await db.select().from(menuCategoriesTable);
    return NextResponse.json({ categories }, { status: 200 });
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const parsed = categorySchema.safeParse(body);
        if (!parsed.success) {
            return NextResponse.json(
                { error: "Invalid request body" },
                { status: 400 },
            );
        }
        const slug = slugify(parsed.data.label);
        const [existingData] = await db
            .select()
            .from(menuCategoriesTable)
            .where(eq(menuCategoriesTable.label, parsed.data.label));
            
        if (existingData) {
            return NextResponse.json(
                { error: "Category already exists" },
                { status: 400 },
            );
        }
        
    const allCategories = await db.select().from(menuCategoriesTable);
    const nextNumber = String(allCategories.length + 1).padStart(2, "0");

    const [newCategory] = await db
      .insert(menuCategoriesTable)
      .values({
        slug,
        label: parsed.data.label,
        number: nextNumber,
      })
      .returning();

    return NextResponse.json(
      { message: "Category created successfully", category: newCategory },
      { status: 201 },
    );
        
    } catch (error) {
        console.error("Error creating category:", error);
        return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 },
        );
    }
}

