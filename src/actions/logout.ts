"use server";

import { cookies } from "next/headers";
import { Auth } from "@/controllers/auth";

export async function Logout() {
  const cookie = cookies();
  const refresh_token = (await cookie).get("refresh_token");

  if (!refresh_token) throw new Error("Token tidak ditemukan.");

  const response = await Auth.Logout(refresh_token.value);
  (await cookie).delete("refresh_token");
  (await cookie).delete("access_token");

  return response;
}