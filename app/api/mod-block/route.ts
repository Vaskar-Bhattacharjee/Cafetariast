import { NextResponse } from "next/server";
import { auth } from "@/app/lib/auth";
import db from "@/app/db";
import { user } from "@/app/db/schema";
import { eq } from "drizzle-orm";
import { APIError } from "better-auth/api";
import { z } from "zod";

const blockModSchema = z.object({
  userId: z.string().min(1, "User id is required"),
  banReason: z.string().optional(),
});

export async function PATCH(request: Request) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    if (session.user.role !== "admin") {
      return NextResponse.json(
        { message: "Not authorized" },
        { status: 403 }
      );
    }

    const body = await request.json();
    const parsed = blockModSchema.parse(body);

    // Prevent admin from blocking themselves
    if (session.user.id === parsed.userId) {
      return NextResponse.json(
        { message: "You cannot block your own account." },
        { status: 400 }
      );
    }
const targetUser = await db
  .select()
  .from(user)
  .where(eq(user.id, parsed.userId))
  .limit(1);

if (targetUser.length === 0) {
  return NextResponse.json(
    { message: "User not found." },
    { status: 404 }
  );
}

const moderator = targetUser[0];
if (!moderator) {
  return NextResponse.json(
    { message: "User not found." },
    { status: 404 }
  );
}

    // If already banned, unban
    if (moderator.banned) {
      await auth.api.unbanUser({
        body: {
          userId: parsed.userId,
        },
        headers: request.headers,
      });

      return NextResponse.json(
        {
          message: "Moderator unblocked successfully.",
        },
        { status: 200 }
      );
    }

    // Otherwise ban
    await auth.api.banUser({
      body: {
        userId: parsed.userId,
        banReason: parsed.banReason ?? "Moderator blocked by admin",
      },
      headers: request.headers,
    });

    return NextResponse.json(
      {
        message: "Moderator blocked successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues },
        { status: 400 }
      );
    }

    if (error instanceof APIError) {
      return NextResponse.json(
        { message: error.message },
        { status: error.statusCode }
      );
    }

    console.error("Error toggling moderator block:", error);

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}