import { Metadata } from "next";
import Carousel from "@/components/auth/carousel";
import Form from "@/components/auth/login";

export const metadata: Metadata = {
  title: "Masuk",
  description: "Ayo masuk dan teruskan perjalananmu di Farmverse. Dukung pertumbuhan agrikulturmu dengan teknologi dan dukungan berkelanjutan.",
  openGraph: {
    title: "Masuk",
    description: "Ayo masuk dan teruskan perjalananmu di Farmverse. Dukung pertumbuhan agrikulturmu dengan teknologi dan dukungan berkelanjutan.",
  },
  twitter: {
    title: "Masuk",
    description: "Ayo masuk dan teruskan perjalananmu di Farmverse. Dukung pertumbuhan agrikulturmu dengan teknologi dan dukungan berkelanjutan.",
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