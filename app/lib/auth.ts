import { betterAuth } from "better-auth";
import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import db from "../db";
import * as schema from "../db/schema";
import { admin as adminPlugin } from "better-auth/plugins";
import { ac, admin, moderator } from "./permissions";


export const auth = betterAuth({
  database: drizzleAdapter(db, { 
    provider: "pg",
    schema: schema,
  }), 
  emailAndPassword: { 
    enabled: true, 
  }, 
  plugins: [
    adminPlugin({
      ac,
      roles: { admin, moderator },
      defaultRole: "moderator",
    }),
  ],
});
