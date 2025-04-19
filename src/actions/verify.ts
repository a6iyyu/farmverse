"use server";

import { cookies, headers } from "next/headers";
import { hash } from "bcrypt";
import { Auth } from "@/utils/auth";
import { JWT } from "@/utils/jwt";
import { Schema } from "@/utils/schema";
import { Prisma } from "@/utils/prisma";
import { Role } from "@/types/auth";

// prettier-ignore
export async function Verify(_prev: { error?: Record<string, string>; message?: string; redirect?: string; values?: Record<string, string> }, form: FormData): Promise<{ error?: Record<string, string>; message?: string; redirect?: string; values?: Record<string, string> }> {
  const baseUrl = `${process.env.NODE_ENV === "production" ? "https" : "http"}://${(await headers()).get("host")}`;
  const cookie = await cookies();
  
  const values = {
    role: form.get("role")?.toString() ?? "",
    password: form.get("password")?.toString() ?? "",
    confirm_password: form.get("confirm_password")?.toString() ?? "",
  };
  
  const { error } = Auth.Validation(Schema.Verify, Auth.ParseForm<typeof Schema.Verify._output>(form));
  if (error) return { error, values };

  try {
    const access_token = cookie.get("access_token")?.value;
    const refresh_token = cookie.get("refresh_token")?.value;

    const response = await fetch(`${baseUrl}/api/auth/verify-token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: access_token, refreshToken: refresh_token }),
    });

    const result = await response.json();
    if (!response.ok) return { error: { form: result.message ?? "Gagal memverifikasi token Anda." }, values };

    const decoded = await JWT.verify<{ id_user: string; role: string }>(access_token as string);
    const id_user = decoded?.id_user;
    if (!id_user) return { error: { form: "Token tidak valid." }, values };

    await Prisma.users.update({ where: { id_user }, data: { role: values.role as Role, password: await hash(values.password, 10) } });
    return { redirect: `/${values.role.toLowerCase()}`, message: "Akun berhasil diverifikasi!" };
  } catch (error) {
    console.error(process.env.NODE_ENV !== "production" && `Terjadi kesalahan saat memverifikasi akun Anda: ${error}`);
    return { error: { form: "Terjadi kesalahan saat memverifikasi akun Anda." } };
  }
}