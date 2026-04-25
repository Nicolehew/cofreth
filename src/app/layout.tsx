import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Cofreth (M) Sdn Bhd – Facilities Management & Energy Services",
  description:
    "Malaysia's leading Total Solutions Provider for Facilities Management and Energy Services since 1986. ISO certified, serving 30+ major clients across all sectors.",
  keywords: ["facilities management", "energy services", "green building", "Subang Jaya", "Malaysia", "FM"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
