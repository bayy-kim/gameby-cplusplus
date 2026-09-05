"use client";

import React from "react";
import Link from "next/link";
import { Terminal } from "lucide-react";
import { motion } from "motion/react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 w-full z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-white/5"
      suppressHydrationWarning
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between" suppressHydrationWarning>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Terminal className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
          <span className="font-bold tracking-tight text-lg text-white">
            Cpp<span className="text-zinc-500">Forge</span>
          </span>
        </Link>

        {/* Links Desktop */}
        <div suppressHydrationWarning className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link href="/#kurikulum" className="hover:text-white transition-colors">Kurikulum</Link>
          <Link href="/dashboard" className="hover:text-white transition-colors">Progres Saya</Link>
          <Link href="/docs" className="hover:text-white transition-colors">Dokumentasi</Link>
        </div>

        {/* CTA */}
        <div suppressHydrationWarning className="flex items-center gap-4">
          <a href="#" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors hidden sm:block">
            Masuk
          </a>
          <Link 
            href="/#kurikulum" 
            className="bg-white hover:bg-zinc-200 text-black px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            Mulai Belajar
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
