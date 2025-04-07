import { Metadata } from "next";
import Carousel from "@/components/auth/carousel";
import Form from "@/components/auth/register";

export const metadata: Metadata = {
  title: "Daftar",
  description: "",
  openGraph: {
    title: "Daftar",
    description: "",
  },
  twitter: {
    title: "Daftar",
    description: "",
  },
};

export default function Register() {
  return (
    <main className="relative grid h-full min-h-screen w-full grid-cols-1 lg:grid-cols-2">
      <Carousel />
      <Form />
    </main>
  );
}