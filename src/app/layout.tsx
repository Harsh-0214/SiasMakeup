import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sia's Makeup — Freelance Makeup Artist",
  description:
    "Professional freelance makeup artist based in the GTA. Specializing in bridal, editorial, SFX, and everyday glam. Book your appointment today.",
  keywords: ["makeup artist", "GTA", "bridal makeup", "freelance makeup", "Toronto"],
  openGraph: {
    title: "Sia's Makeup",
    description: "Professional freelance makeup artist — Bridal, Editorial & Everyday Glam",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
