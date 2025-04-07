import { Metadata } from "next";
import Carousel from "@/components/auth/carousel";
import Form from "@/components/auth/login";

export const metadata: Metadata = {
  title: "Masuk",
  description: "",
  openGraph: {
    title: "Masuk",
    description: "",
  },
  twitter: {
    title: "Masuk",
    description: "",
  },
};

export default function Login() {
  return (
    <main className="relative grid min-h-screen w-full grid-cols-1 lg:grid-cols-2">
      <Carousel />
      <Form />
    </main>
  );
}