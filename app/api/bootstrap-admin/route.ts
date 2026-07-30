import { NextResponse } from "next/server";
import { APIError } from "better-auth";
import { auth } from "@/app/lib/auth";
import z from "zod";

const adminSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
  name: z.string().min(1),
});

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json();
    const validatedData = adminSchema.parse({ email, password, name });

    await auth.api.createUser({
      body: {
        email: validatedData.email,
        password: validatedData.password,
        name: validatedData.name,
        role: "admin",
      },
    });

    return NextResponse.json(
      { message: "Admin created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    if (error instanceof APIError) {
        return NextResponse.json(
            { message: error.message },
            { status: error.statusCode }
        );
    }

    return NextResponse.json(
        {
            message: "Internal server error",
            error: String(error),
        },
        { status: 500 }
    );
  }
}