import db from "@/app/db";
import { user } from "@/app/db/schema";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const res = await db
            .select()
            .from(user)
        return NextResponse.json(res, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
    }
}