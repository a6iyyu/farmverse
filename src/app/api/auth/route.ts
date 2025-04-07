import { NextResponse } from "next/server";
import { Prisma } from "@/utils/prisma";

export async function POST(request: Request) {
  try {
    const { refreshToken } = await request.json();

    const session = await Prisma.sessions.findUnique({
      where: { token: refreshToken },
      include: { user: true },
    });

    if (!session || !session.expires_at || new Date() > session.expires_at) return NextResponse.json({ valid: false }, { status: 401 });

    const user = await Prisma.users.findUnique({ where: { id_user: session.id_user } });
    if (!user) return NextResponse.json({ valid: false }, { status: 401 });

    return NextResponse.json({ valid: true, role: user.role });
  } catch {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}