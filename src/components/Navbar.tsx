"use client";

import React from "react";
import Link from "next/link";
import { Terminal, LogIn } from "lucide-react";
import { motion } from "motion/react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 w-full z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-zinc-800/80 shadow-sm"
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
        <div suppressHydrationWarning className="hidden md:flex items-center gap-8 text-sm font-mono font-semibold uppercase tracking-wider text-zinc-500">
          <Link href="/#kurikulum" className="hover:text-indigo-400 transition-colors">Kurikulum</Link>
          <Link href="/dashboard" className="hover:text-indigo-400 transition-colors">Progres</Link>
          <Link href="/docs" className="hover:text-indigo-400 transition-colors">Docs</Link>
        </div>

        {/* CTA */}
        <div suppressHydrationWarning className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-2 text-sm font-mono font-semibold text-zinc-400 hover:text-white transition-colors hidden sm:flex">
            <LogIn className="w-4 h-4" /> Log In
          </a>
          <Link 
            href="/#kurikulum" 
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-[0_0_15px_rgba(79,70,229,0.3)]"
          >
            Start Mission
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
