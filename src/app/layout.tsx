import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GAMEBY_C++ — Belajar C++ Interaktif & Gamifikasi",
  description: "Web app game edukasi belajar C++ dengan skill tree, code playground Piston API, dan boss battle.",
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
