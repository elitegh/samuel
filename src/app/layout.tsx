import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/data/content";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} | Senior AI/ML Engineer`,
  description: site.description,
  keywords: [
    "Samuel Murguia",
    "AI/ML engineer",
    "MLOps",
    "deep learning",
    "production AI",
    "PyTorch",
    "Databricks",
    "portfolio",
  ],
  openGraph: {
    title: `${site.name} | Senior AI/ML Engineer`,
    description: site.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
