"use server";

import { headers } from "next/headers";
import { Auth as Utils } from "@/utils/auth";
import { Schema } from "@/utils/schema";
import { Role } from "@/types/auth";

export async function Register(_prev: { error?: Record<string, string>, redirect?: string; values?: Record<string, string> }, form: FormData): Promise<{ error?: Record<string, string>, redirect?: string, values?: Record<string, string> }> {
  const { data, error } = Utils.Validation(Schema.Register, Utils.ParseForm<typeof Schema.Register._output>(form));

  const values = {
    username: form.get("username")?.toString() ?? "",
    email: form.get("email")?.toString() ?? "",
    role: form.get("role")?.toString() ?? "",
    password: form.get("password")?.toString() ?? "",
    confirm_password: form.get("confirm_password")?.toString() ?? "",
  };

  if (error) return { error, values };

  try {
    const baseUrl = `${process.env.NODE_ENV === "production" ? "https" : "http"}://${(await headers()).get("host")}`;
    const response = await fetch(`${baseUrl}/api/auth/register`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ ...data, role: data!.role as Role }),
    });

    const result = await response.json();
    if (!response.ok) return { error: { form: result.message ?? "Terjadi kesalahan saat mendaftarkan akun Anda." }, values };

    return { redirect: "/login" };
  } catch (error) {
    if (error instanceof Error) return { error: { form: process.env.NODE_ENV !== "production" ? error.message : "Terjadi kesalahan pada server." } };
  }

  return { values };
}