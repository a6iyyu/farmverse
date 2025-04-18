import { NextResponse } from "next/server";
import { Prisma } from "@/utils/prisma";

export async function POST(request: Request): Promise<Response> {
  try {
    const { full_name, email, phone, message } = await request.json();
    if (!full_name || !email || !phone || !message) return NextResponse.json({
      message: "Semua bidang wajib diisi.",
      success: false,
    }, {
      headers: { "Content-Type": "application/json" },
      status: 400,
    });

    const count = await Prisma.feedback.count({ where: {
      email,
      created_at: { gte: new Date(Date.now() - 24 * 60 * 60 * 1000) } }
    })

    if (count >= 5) return NextResponse.json({
      message: "Anda sudah mengirimkan lima umpan balik dalam 24 jam terakhir, harap bersabar.",
      success: false,
    }, {
      headers: { "Content-Type": "application/json" },
      status: 429,
    });

    const feedback = await Prisma.feedback.create({
      data: {
        full_name,
        email,
        phone,
        message,
        created_at: new Date(),
      }
    });

    return NextResponse.json({
      message: "Umpan balik Anda berhasil dikirim.",
      success: true,
      data: feedback,
    }, {
      headers: { "Content-Type": "application/json" },
      status: 201,
    });
  } catch (error) {
    console.error(process.env.NODE_ENV !== "production" && `Terjadi kesalahan saat mengirim umpan balik Anda: ${error}`);
    return NextResponse.json({
      message: "Terjadi kesalahan saat mengirim umpan balik Anda.",
      success: false,
    }, {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });    
  }
}