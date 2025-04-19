import { NextResponse } from "next/server";
import { Prisma } from "@/utils/prisma";
import { hash } from "bcrypt";
import { Register, Role } from "@/types/auth";

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const body: Register = await request.json();
    const username = body.data.username;
    const email = body.data.email;
    const password = body.data.password;
    const confirm_password = body.confirm_password;
    const role = body.data.role;
    const existingUser = await Prisma.users.findFirst({ where: { OR: [{ email }, { username }] } });

    if (!["ADMIN", "BANK", "CUSTOMER", "FARMER"].includes(role)) return NextResponse.json({ message: "Peran Anda tidak valid!" }, { status: 400 });
    if (password !== confirm_password) return NextResponse.json({ message: "Konfirmasi kata sandi tidak sesuai!" }, { status: 400 });
    if (existingUser) return NextResponse.json({ message: "Pengguna sudah ada!" }, { status: 400 });

    const hashing = await hash(password, 10);
    const user = await Prisma.users.create({
      data: {
        username,
        name: username,
        email,
        password: hashing,
        role: role as Role,
      },
    });

    return NextResponse.json({
      message: "Pendaftaran akun Anda berhasil!",
      data: {
        id_user: user.id_user,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(process.env.NODE_ENV !== "production" && `Terjadi kesalahan saat mendaftarkan akun Anda: ${error}`);
    throw new Error("Terjadi kesalahan saat mendaftarkan akun Anda!");
  }
}