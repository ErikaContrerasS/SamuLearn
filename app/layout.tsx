import type { Metadata } from "next";
import { Fredoka, Baloo_2 } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
});

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-baloo",
});

export const metadata: Metadata = {
  title: "Andawanda — Aprender jugando",
  description:
    "Andawanda es la plataforma donde los niños aprenden jugando, con actividades divertidas, seguras y pensadas para ellos.",
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport = {
  themeColor: "#FFF7E9",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${fredoka.variable} ${baloo.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
