import { NextResponse } from "next/server";
import { Token } from "@/types/auth";
import { Prisma } from "@/utils/prisma";

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const { refresh_token }: Token = await request.json();
    if (!refresh_token) return NextResponse.json({ message: "Token tidak ditemukan, tetapi cookies telah dihapus.", redirect: "/login", success: true }, { status: 200 });

    const session = await Prisma.sessions.findFirst({ where: { token: refresh_token } });
    if (session) await Prisma.sessions.deleteMany({ where: { id_user: session.id_user } });

    const response = NextResponse.json({ message: "Berhasil keluar dari akun Anda.", redirect: "/login", success: true }, { status: 200 });
    response.cookies.delete("access_token");
    response.cookies.delete("refresh_token");
    return response;
  } catch (error) {
    console.error(process.env.NODE_ENV !== "production" && `Terjadi kesalahan saat keluar dari akun Anda: ${error}`);
    return NextResponse.json({
      message: "Terjadi kesalahan saat keluar dari akun Anda.",
      success: false,
    }, {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}