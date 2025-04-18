import { NextResponse } from "next/server";
import { Prisma } from "@/utils/prisma";
import { Token } from "@/types/auth";

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const { refresh_token }: Token = await request.json();
    if (!refresh_token) return NextResponse.json({ message: "Token tidak ditemukan." }, { status: 400 });

    const session = await Prisma.sessions.findFirst({ where: { token: refresh_token } });
    if (!session) return NextResponse.json({ message: "Sesi tidak ditemukan." }, { status: 404 });

    await Prisma.sessions.deleteMany({ where: { id_user: session.id_user } });
    return NextResponse.json({ message: "Berhasil keluar dari akun Anda.", redirect: "/login", success: true }, { status: 200 });
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