"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AuthService } from "@/utils/auth.service";
import { AuthUtils } from "@/utils/auth.utils";
import { Schema } from "@/utils/schema";
import { z } from "zod";

export async function Login(prev: { error?: Record<string, string> }, form: FormData): Promise<{ error?: Record<string, string> }> {
  const { data, error } = AuthService.Validation(Schema.Login, AuthUtils.ParseForm<typeof Schema.Login._output>(form));  
  if (error) return { error };

  const role = z.enum(["ADMIN", "BANK", "FARMER"]).safeParse(form.get("role"));
  if (!role.success) return { error: { form: "Peran tidak valid." } };

  try {
    const result = await AuthService.Login({
      email: data?.email as string,
      password: data?.password as string,
      role: role.data,
    });

    (await cookies()).set("access_token", result.data.access_token, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 15,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    (await cookies()).set("refresh_token", result.data.refresh_token, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    redirect("/dashboard");
  } catch (error) {
    if (error instanceof Error) return { error: { form: error.message } };
    return { error: { form: "Terjadi kesalahan tidak dikenal." } };
  }
}