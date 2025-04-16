import { Metadata } from "next";
import Hero from "@/components/partners/hero";

export const metadata: Metadata = {
  title: "Mitra Kami",
  description: "",
  openGraph: {
    title: "Mitra Kami",
    description: "",
  },
  twitter: {
    title: "Mitra Kami",
    description: "",
  },
};

export default function Partners() {
  return (
    <>
      <Hero />
    </>
  );
}