import { NextResponse } from "next/server";
import { auth } from "../../../lib/auth";
import { APIError } from "better-auth/api";
import z from "zod";

const blockModSchema = z.object({
  userId: z.string().min(1, "User id is required"),
  banReason: z.string().optional(),
});

export async function POST(request: Request) {
try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });
  
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    if (session.user.role !== "admin") {
      return NextResponse.json(
        { message: "Not authorized" },
        { status: 403 },
      );
    }
    const body = await request.json();
    const parsed = blockModSchema.parse(body);

    const result = await auth.api.banUser({
      body: {
        userId: parsed.userId,
        banReason: parsed.banReason || "Moderator blocked by admin",
      },
      headers: request.headers,
    });
    return NextResponse.json(
      { message: "Moderator blocked successfully", user: result },
      { status: 200 },
    );    
  
} catch (error) {
if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    if (error instanceof APIError) {
      return NextResponse.json(
        { message: error.message },
        { status: error.statusCode },
      );
    }
    console.error("Error blocking moderator:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}

