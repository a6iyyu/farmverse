import { NextResponse } from "next/server";
import { JWT } from "@/utils/jwt";
import { Prisma } from "@/utils/prisma";

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const { token, refreshToken } = await request.json();
    if (!token || !refreshToken) return NextResponse.json({ message: "Token tidak valid" }, { status: 401 });

    const payload = await JWT.verify<{ id_user: string; role: string }>(token);
    if (!payload) return NextResponse.json({ message: "Token tidak valid" }, { status: 401 });

    const session = await Prisma.sessions.findFirst({ where: { token: refreshToken },  include: { user: true } });
    if (!session || !session.expires_at || new Date() > session.expires_at) return NextResponse.json({ message: "Sesi tidak valid" }, { status: 401 });
    if (session.id_user !== payload.id_user) return NextResponse.json({ message: "Token tidak cocok dengan sesi" }, { status: 401 });

    return NextResponse.json({ role: session.user.role });
  } catch (error) {
    console.error(process.env.NODE_ENV !== "production" && `[Validation Error]: ${error}`);
    return NextResponse.json({ message: "Gagal untuk memvalidasi token!" }, { status: 500 });
  }
}