import { Metadata } from "next";
import Client from "@/app/support/client";
import HubungiKami from "@/components/support/hubungi-kami";

export const metadata: Metadata = {
  title: "Dukungan",
  description: "Bingung menggunakan Farmverse? Tenang! Halaman dukungan ini siap bantu kamu dengan panduan, jawaban atas pertanyaan umum, dan tim support yang siap membantu.",
  openGraph: {
    title: "Dukungan",
    description: "Bingung menggunakan Farmverse? Tenang! Halaman dukungan ini siap bantu kamu dengan panduan, jawaban atas pertanyaan umum, dan tim support yang siap membantu.",
  },
  twitter: {
    title: "Dukungan",
    description: "Bingung menggunakan Farmverse? Tenang! Halaman dukungan ini siap bantu kamu dengan panduan, jawaban atas pertanyaan umum, dan tim support yang siap membantu.",
  },
};

export default function Support() {
  return (
    <>
      <Client />
      <HubungiKami />
    </>
  );
}