import { Metadata } from "next";
import Client from "@/app/career/client";
import DaftarLowonganPekerjaan from "@/components/career/daftar-lowongan-pekerjaan";

export const metadata: Metadata = {
  title: "Karier",
  description: "",
  openGraph: {
    title: "Karier",
    description: "",
  },
  twitter: {
    title: "Karier",
    description: "",
  },
};

export default function Career() {
  return (
    <>
      <Client />
      <DaftarLowonganPekerjaan />
    </>
  );
}