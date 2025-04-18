"use server";

import { cookies, headers } from "next/headers";
import { Auth } from "@/utils/auth";
import { Schema } from "@/utils/schema";
import { Login as ILogin } from "@/types/auth";

export async function Login(_prev: { error?: Record<string, string>, redirect?: string; values?: Record<string, string> }, form: FormData): Promise<{ error?: Record<string, string>, redirect?: string, values?: Record<string, string> }> {
  const { error } = Auth.Validation(Schema.Login, Auth.ParseForm<typeof Schema.Login._output>(form));
  const baseUrl = `${process.env.NODE_ENV === "production" ? "https" : "http"}://${(await headers()).get("host")}`;
  const values = { email: form.get("email")?.toString() ?? "", password: form.get("password")?.toString() ?? "" };
  if (error) return { error, values };

  try {
    const result = await fetch(`${baseUrl}/api/login`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(values),
    });

    if (!result.ok) throw new Error((await result.json()).message || "Gagal masuk ke akun Anda.");

    const response = await result.json() as ILogin;
    if (!response.data || !response.data.role) throw new Error("Respons tidak valid dari server.");

    const { role } = response.data;
    if (!role) throw new Error("Peran Anda tidak ditemukan.");

    (await cookies()).set("access_token", response.data.access_token, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 15,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    (await cookies()).set("refresh_token", response.data.refresh_token, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    if (!["ADMIN", "BANK", "CUSTOMER", "FARMER"].includes(role)) throw new Error("Peran Anda tidak valid.");
    return { redirect: `/${role.toLowerCase()}` };
  } catch (error) {
    if (error instanceof Error) return { error: { form: error.message } };
    return { error: { form: "Terjadi kesalahan tidak dikenal." } };
  }
}