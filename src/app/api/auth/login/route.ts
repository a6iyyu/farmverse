import { NextResponse } from "next/server";
import { compare } from "bcrypt";
import { getRandomValues } from "crypto";
import { JWT } from "@/utils/jwt";
import { Prisma } from "@/utils/prisma";

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const { email, password } = await request.json();
    if (!email || !password) return NextResponse.json({ message: !email ? "Email diperlukan!" : "Kata sandi diperlukan!" }, { status: 400 });

    const user = await Prisma.users.findUnique({ where: { email } });
    if (!user) return NextResponse.json({ message: "Akun Anda tidak ditemukan!" }, { status: 401 });
    if (!(await compare(password, user.password))) return NextResponse.json({ message: "Kata sandi yang Anda masukkan salah!" }, { status: 401 });

    const accessToken = await JWT.sign({ id_user: user.id_user, role: user.role });
    const refreshToken = Array.from(getRandomValues(new Uint8Array(32))).map((b) => b.toString(16).padStart(2, "0")).join("");

    await Prisma.sessions.deleteMany({ where: { id_user: user.id_user } });
    await Prisma.sessions.create({
      data: {
        id_user: user.id_user,
        token: refreshToken,
        expires_at: new Date(Date.now() + 1000 * 60 * 60 * 24),
      },
    });

    return NextResponse.json({
      message: "Berhasil masuk ke akun Anda.",
      data: {
        id_user: user.id_user,
        email: user.email,
        role: user.role,
        refresh_token: refreshToken,
        access_token: accessToken,
      },
    });
  } catch (error) {
    console.error(process.env.NODE_ENV !== "production" && `Terjadi kesalahan saat masuk ke akun Anda: ${error}`);
    return NextResponse.json({ message: "Terjadi kesalahan saat masuk ke akun Anda." }, { status: 500 });
  }
}