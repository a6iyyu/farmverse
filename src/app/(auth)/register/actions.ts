"use server";

import { AuthService as Auth } from "@/utils/auth.service";
import { AuthUtils as Utils } from "@/utils/auth.utils";
import { Schema } from "@/utils/schema";
import { Role } from "@/types/auth";

export async function Register(prev: { error?: Record<string, string>, redirect?: string; values?: Record<string, string> }, form: FormData): Promise<{ error?: Record<string, string>, redirect?: string, values?: Record<string, string> }> {
  const { data, error } = Auth.Validation(Schema.Register, Utils.ParseForm<typeof Schema.Register._output>(form));
  const values = {
    username: form.get("username")?.toString() ?? "",
    email: form.get("email")?.toString() ?? "",
    role: form.get("role")?.toString() ?? "",
    password: form.get("password")?.toString() ?? "",
    confirm_password: form.get("confirm_password")?.toString() ?? "",
  };

  if (error) return { error, values };

  try {
    await Auth.Register({
      username: data!.username,
      email: data!.email,
      password: data!.password,
      confirm_password: data!.confirm_password,
      role: form.get("role") as Role,
    });

    return { redirect: "/login" };
  } catch (error) {
    if (error instanceof Error) return { error: { form: process.env.NODE_ENV !== "production" ? error.message : "Terjadi kesalahan pada server." } };
  }

  return { values };
}