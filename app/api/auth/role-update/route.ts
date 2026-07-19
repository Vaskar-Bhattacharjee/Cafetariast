import { NextResponse } from "next/server";
import { auth } from "../../../lib/auth";
import { APIError } from "better-auth/api";
import { z } from "zod";

const allowedRoles = ["admin", "moderator"] as const;
const roleUpdateSchema = z.object({
    userId: z.string(),
    role: z.enum(allowedRoles),
});


export async function PATCH(request: Request) {
    try {
       const session = await auth.api.getSession({
        headers: request.headers,
       }) 
       if (!session) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
       }
       if (session.user.role !== "admin") {
        return NextResponse.json({ message: "Forbidden" }, { status: 403 });
       }
       const body = await request.json();
       const validatedData = roleUpdateSchema.parse(body);
       const { userId, role } = validatedData;
       
       const result = await auth.api.setRole({
        body: {
            userId,
            role,
        },
        headers: request.headers,
       });
       
       return NextResponse.json({ message: "Role updated successfully" }, { status: 200 });
    } catch (error) {
        if (error instanceof APIError) {
            return NextResponse.json({ message: error.message }, { status: error.statusCode });
        }
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}
