import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CppForge — Belajar C++ Interaktif & Gamifikasi",
  description: "Platform edukasi untuk menempa skill C++ modern (C++20/C++23) Anda lewat code playground interaktif dan boss battle. Langsung dari browser Anda tanpa instalasi.",
  keywords: ["C++", "belajar C++", "tutorial C++", "C++20", "C++23", "coding interaktif", "game pemrograman"],
  authors: [{ name: "GAMEBY_C++" }],
  creator: "GAMEBY_C++",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://cppforge.vercel.app",
    title: "CppForge — Belajar C++ Interaktif & Gamifikasi",
    description: "Platform edukasi untuk menempa skill C++ modern Anda lewat code playground interaktif dan boss battle. Langsung dari browser Anda tanpa instalasi.",
    siteName: "CppForge",
  },
  twitter: {
    card: "summary_large_image",
    title: "CppForge — Belajar C++ Interaktif & Gamifikasi",
    description: "Pelajari C++ modern melalui jalur gaya game dengan compiler interaktif bawaan.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
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
    <html lang="id" className="dark" suppressHydrationWarning>
      <body
        className="antialiased selection:bg-indigo-500/30 bg-[#09090b] text-white"
        suppressHydrationWarning
      >
        <div suppressHydrationWarning>{children}</div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
