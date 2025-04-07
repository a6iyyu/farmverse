import { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Auth from "./auth";
import "./globals.css";

const fonts = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  icons: "/favicon.ico",
  metadataBase: new URL("https://farmverse.vercel.app/"),
  openGraph: {
    images: "/favicon.ico",
  },
  twitter: {
    images: "/favicon.ico",
  },
};

// prettier-ignore
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`scroll-py-2.5 ${fonts.variable} max-[8192px]:opacity-0 max-[3120px]:m-0 max-[3120px]:box-border max-[3120px]:p-0 max-[3120px]:[font-family:'Plus_Jakarta_Sans',Times,sans-serif,serif] max-[3120px]:opacity-100 max-[324px]:hidden`}>
      <body className="h-full min-h-screen overflow-x-hidden">
        <Auth>{children}</Auth>
      </body>
    </html>
  );
}