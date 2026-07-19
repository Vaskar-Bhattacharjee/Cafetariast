import { NextResponse } from "next/server";
import { auth } from "../../../lib/auth";
import { APIError } from "better-auth/api";
import z from "zod";

const deleteModSchema = z.object({
  userId: z.string().min(1, "User id is required"),
});

export async function DELETE(request: Request) {
    try {
        const session = await auth.api.getSession({
            headers: request.headers,
        });
        
        if (!session) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        
        if (session.user.role !== "admin") {
            return NextResponse.json({ message: "Forbidden" }, { status: 403 });
        }
        
        const body = await request.json();
        const validatedData = deleteModSchema.parse(body);
        const { userId } = validatedData;
        
        const result = await auth.api.removeUser({
            body: {
                userId,
            },
            headers: request.headers,
        });

        return NextResponse.json({ message: "Moderator deleted successfully" }, { status: 200 });
    } catch (error) {
        if (error instanceof APIError) {
            return NextResponse.json({ message: error.message }, { status: error.statusCode });
        }
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}