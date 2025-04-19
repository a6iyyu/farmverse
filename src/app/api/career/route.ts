import { NextResponse } from "next/server";
import { Prisma } from "@/utils/prisma";

export async function GET(request: Request): Promise<NextResponse> {
  try {
    return NextResponse.json({ message: "Data lowongan pekerjaan berhasil diambil." }, { status: 200 });
  } catch (error) {
    console.error(process.env.NODE_ENV !== "production" && `Terjadi kesalahan saat mengambil data lowongan pekerjaan: ${error}`);
    return NextResponse.json({ message: "Terjadi kesalahan saat mengambil data lowongan pekerjaan." }, { status: 500 });
  }
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const {} = request.json();
    return NextResponse.json({ message: "Lowongan pekerjaan berhasil ditambahkan." }, { status: 200 });
  } catch (error) {
    console.error(process.env.NODE_ENV !== "production" && `Terjadi kesalahan saat menambahkan lowongan pekerjaan: ${error}`);
    return NextResponse.json({ message: "Terjadi kesalahan saat menambahkan lowongan pekerjaan." }, { status: 500 });
  }
}