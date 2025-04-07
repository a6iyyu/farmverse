"use server";

import { redirect } from "next/navigation";
import { AuthService as Auth } from "@/utils/auth.service";
import { AuthUtils as Utils } from "@/utils/auth.utils";
import { Schema } from "@/utils/schema";
import { Role } from "@/types/auth";

export async function Register(prev: { error?: Record<string, string> }, form: FormData): Promise<{ error?: Record<string, string> }> {
  const parsed = Utils.ParseForm<typeof Schema.Register._output>(form);
  const { data, error } = Auth.Validation(Schema.Register, parsed);
  if (error) return { error };

  try {
    await Auth.Register({
      username: data!.username,
      email: data!.email,
      password: data!.password,
      confirm_password: data!.confirm_password,
      role: form.get("role") as Role,
    });

    redirect("/login");
  } catch (error) {
    if (error instanceof Error) return { error: { form: process.env.NODE_ENV !== "production" ? error.message : "Terjadi kesalahan pada server." } };
  }

  return {};
}