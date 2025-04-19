import { Metadata } from "next";
import { Carousel } from "@/components/auth/carousel";
import { Verify as Form } from "@/components/auth/verify";

// prettier-ignore
export const metadata: Metadata = {
  title: "Verifikasi Akun Anda",
  description: "",
  openGraph: {
    title: "Verifikasi Akun Anda",
    description: "",
  },
  twitter: {
    title: "Verifikasi Akun Anda",
    description: "",
  },
};

export default function Verify() {
  return (
    <main className="relative grid h-full min-h-screen w-full grid-cols-1 lg:grid-cols-2">
      <Carousel />
      <Form />
    </main>
  );
}