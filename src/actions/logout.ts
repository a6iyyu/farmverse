"use server";

import { cookies, headers } from "next/headers";

export async function Logout(): Promise<{ message: string; redirect: string }> {
  const baseUrl = `${process.env.NODE_ENV === "production" ? "https" : "http"}://${(await headers()).get("host")}`;
  const cookie = await cookies();
  const refreshToken = cookie.get("refresh_token");
  if (!refreshToken) throw new Error("Token tidak ditemukan.");

  const response = await fetch(`${baseUrl}/api/logout`, {
    body: JSON.stringify({ refresh_token: refreshToken.value }),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  });

  const result = await response.json();
  if (!response.ok) throw new Error("Gagal keluar dari akun Anda.");

  cookie.delete("refresh_token");
  cookie.delete("access_token");
  return { message: result.message, redirect: "/login" };
}