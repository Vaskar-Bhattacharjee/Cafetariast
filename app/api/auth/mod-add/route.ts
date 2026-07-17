import { auth } from "@/app/lib/auth";
import { z } from "zod";
import { NextResponse } from "next/server";
import { UserWithRole } from "better-auth/plugins";

const addModSchema = z.object({
  email: z.email("Valid email is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  role: z.enum(["admin", "moderator"]),
});

export async function POST(request: Request) {
    try {
        const session = await auth.api.getSession({ headers: request.headers });

        if (!session || (session.user as UserWithRole).role !== "admin") {
        return NextResponse.json(
            { message: "Not authorized" },
            { status: 403 },
        );
        }

        const data = await request.json()
        const validatedData = addModSchema.parse(data)
        const name = validatedData.email.split("@")[0]

        const newUser = await auth.api.createUser({
           body: {
            email: validatedData.email,
            password: validatedData.password,
            name,
            role: validatedData.role as "admin" | "user",
           }
        })

        return NextResponse.json({ message: "Moderator added successfully" }, { status: 200 })
        
        

    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: error.issues }, { status: 400 })
        }
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}