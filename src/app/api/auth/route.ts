import { NextResponse } from "next/server";
import { JWT } from "@/utils/jwt";
import { Prisma } from "@/utils/prisma";

export async function POST(request: Request) {
  try {
    const { token, refreshToken } = await request.json();
    const payload = await JWT.verify<{ id_user: string; role: string }>(token);
    if (!payload) return NextResponse.json({ valid: false }, { status: 401 });

    const session = await Prisma.sessions.findUnique({ where: { token: refreshToken }, include: { user: true } });
    if (!session || !session.expires_at || new Date() > session.expires_at) return NextResponse.json({ valid: false }, { status: 401 });

    const user = await Prisma.users.findUnique({ where: { id_user: session.id_user } });
    if (!user || user.id_user !== payload.id_user) return NextResponse.json({ valid: false }, { status: 401 });

    return NextResponse.json({ valid: true, role: user.role });
  } catch {
    return NextResponse.json({ valid: false }, { status: 401 });
  }
}