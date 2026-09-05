import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CppForge — Belajar C++ Interaktif & Gamifikasi",
  description: "Platform edukasi untuk menempa skill C++ modern Anda lewat code playground interaktif dan boss battle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark" suppressHydrationWarning>
      <body
        className="antialiased selection:bg-[#6B5AED]/30 bg-black text-white"
        suppressHydrationWarning
      >
        <div suppressHydrationWarning>{children}</div>
      </body>
    </html>
  );
}
