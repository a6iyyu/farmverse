"use server";

import { cookies } from "next/headers";
import { Auth } from "@/controllers/auth";
import { Auth as Utils } from "@/utils/auth";
import { Schema } from "@/utils/schema";

export async function Login(_prev: { error?: Record<string, string>, redirect?: string; values?: Record<string, string> }, form: FormData): Promise<{ error?: Record<string, string>, redirect?: string, values?: Record<string, string> }> {
  const { data, error } = Utils.Validation(Schema.Login, Utils.ParseForm<typeof Schema.Login._output>(form));  
  const values = {
    email: form.get("email")?.toString() ?? "",
    password: form.get("password")?.toString() ?? "",
  };
  
  if (error) return { error, values };

  try {
    const result = await Auth.Login({
      email: data?.email as string,
      password: data?.password as string,
    });

    const { role } = result.data;
    if (!role) throw new Error("Peran Anda tidak ditemukan.");

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

    if (!["ADMIN", "BANK", "CUSTOMER", "FARMER"].includes(role)) throw new Error("Peran Anda tidak valid.");
    return { redirect: `/${role.toLowerCase()}` };
  } catch (error) {
    if (error instanceof Error) return { error: { form: error.message } };
    return { error: { form: "Terjadi kesalahan tidak dikenal." } };
  }
}