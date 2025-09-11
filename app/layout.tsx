import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { GeistSans, GeistMono } from "geist/font";

export const metadata: Metadata = {
  title: "Chaeth - Professional AI chat",
  description: "Local-first AI for Thai enterprises",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
