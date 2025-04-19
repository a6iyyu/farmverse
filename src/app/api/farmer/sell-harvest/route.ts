import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const {} = request.json();
    return NextResponse.json({ message: "Hasil panen Anda berhasil dikirim ke sistem." }, { status: 200 });
  } catch (error) {
    console.error(process.env.NODE_ENV !== "production" && `Terjadi kesalahan saat menjual hasil panen Anda: ${error}`);
    return NextResponse.json({ message: "Terjadi kesalahan saat menjual hasil panen Anda." }, { status: 500 });
  }
}