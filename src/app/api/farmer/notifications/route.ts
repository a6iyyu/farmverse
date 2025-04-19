import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const {} = request.json();
    return NextResponse.json({ message: "Notifikasi berhasil diambil." }, { status: 200 });
  } catch (error) {
    console.error(process.env.NODE_ENV !== "production" && `Terjadi kesalahan saat mengambil notifikasi: ${error}`);
    return NextResponse.json({ message: "Terjadi kesalahan saat mengambil notifikasi." }, { status: 500 });
  }
}