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
        console.log("Session:", session);

        if (!session || (session.user as UserWithRole).role !== "admin") {
        return NextResponse.json(
            { message: "Not authorized" },
            { status: 403 },
        );
        }

        const data = await request.json()
        const validatedData = addModSchema.parse(data)
        const name = validatedData.email.split("@")[0]

    
                let newUser;
        try {
            newUser = await auth.api.createUser({
                body: {
                    email: validatedData.email,
                    password: validatedData.password,
                    name,
                    role: validatedData.role as "admin" | "moderator",
                }
            });
            console.log("newUser:", newUser);
        } catch (e) {
            console.error("createUser error:", e);
            if (e instanceof Error && 'body' in e && 'statusCode' in e) {
                const apiError = e as Error & { body: { message: string }; statusCode: number };
                return NextResponse.json({ error: apiError.body.message }, { status: apiError.statusCode });
            }
            return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
        }

        return NextResponse.json({ message: "Moderator added successfully" }, { status: 200 })
        
        

    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: error.issues }, { status: 400 })
        }
        return NextResponse.json({ error: error instanceof Error ? error.message : String(error) }, { status: 500 })
    }
}