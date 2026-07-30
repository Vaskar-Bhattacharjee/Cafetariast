"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IconKey, IconMail } from "@tabler/icons-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/app/components/ui/toast";
import { authClient } from "@/app/lib/auth-client";

const loginSchema = z.object({
    email: z.email("Valid email is required"),
    password: z.string().min(8, "Password must be at least 8 characters"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });
const login = async (data: LoginForm) => {
    const { data: result, error } = await authClient.signIn.email({
        email: data.email,
        password: data.password,
    });

    if (error) {
        toast.add({
            title: "Login failed",
            description: error.message,
            type: "error",
        });
        return;
    }

    
    toast.add({
        title: "Login successful",
        description: "You have been logged in successfully",
        type: "success",
    });
};







  return (
    <main className="min-h-screen bg-neutral-50 font-inter flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.18 }}
        className="w-full max-w-[430px]"
      >
        <div className="rounded-2xl border border-neutral-300 bg-white p-8 shadow-[0_4px_18px_rgba(0,0,0,0.02)]">
          {/* Brand */}
          <div className="mb-8">
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-neutral-500">
              Cafeteriast
            </p>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900">
              Welcome!
            </h1>

            <p className="mt-2 text-md leading-6 text-neutral-500">
              Sign in to access your dashboard <br /> and manage your cafe with ease.
            </p>
          </div>

          {/* Form */}
          <form
          onSubmit={handleSubmit(login)}
          className="space-y-4">
            {/* Email */}
            <div className="rounded-xl border border-neutral-300 bg-neutral-50 transition-colors focus-within:border-neutral-900">
              <div className="flex items-center gap-3 px-4 h-12">
                <IconMail
                  size={18}
                  stroke={2}
                  className="text-neutral-400 flex-shrink-0"
                />

                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-transparent text-sm text-neutral-900 placeholder:text-neutral-400 outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div className="rounded-xl border border-neutral-300 bg-neutral-50 transition-colors focus-within:border-neutral-900">
              <div className="flex items-center gap-3 px-4 h-12">
                <IconKey
                  size={18}
                  stroke={2}
                  className="text-neutral-400 flex-shrink-0"
                />

                <input
                  {...register("password")}
                  type="password"
                  autoComplete="current-password"
                  placeholder="Password"
                  className="w-full bg-transparent text-sm text-neutral-900 placeholder:text-neutral-400 outline-none"
                />
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="h-12 w-full rounded-xl bg-neutral-900 text-sm font-medium text-white transition-colors hover:bg-neutral-800 cursor-pointer"
            >
              Sign In
            </button>
          </form>
        </div>
      </motion.div>
    </main>
  );
}