"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Terminal, LogIn, LogOut, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarClientProps {
  user: {
    name?: string | null;
    image?: string | null;
    id?: string;
  } | null;
  onSignIn: () => void;
  onSignOut: () => void;
}

export default function NavbarClient({ user, onSignIn, onSignOut }: NavbarClientProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-zinc-800/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group z-50" onClick={() => setIsMobileMenuOpen(false)}>
          <Terminal className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
          <span className="font-bold tracking-tight text-lg text-white">
            Cpp<span className="text-zinc-500">Forge</span>
          </span>
        </Link>

        {/* Links Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm font-mono font-semibold uppercase tracking-wider text-zinc-500">
          <Link href="/kurikulum" className="hover:text-indigo-400 transition-colors">Kurikulum</Link>
          <Link href="/dashboard" className="hover:text-indigo-400 transition-colors">Progres</Link>
          <Link href="/docs" className="hover:text-indigo-400 transition-colors">Docs</Link>
        </div>

        {/* CTA & Auth Desktop */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="flex items-center gap-2 text-sm font-mono font-semibold text-zinc-300 hover:text-white">
                {user.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={user.image} alt="Avatar" className="w-6 h-6 rounded-full border border-zinc-700" />
                )}
                <span>{user.name?.split(" ")[0]}</span>
              </Link>
              <form action={onSignOut}>
                <button type="submit" className="text-zinc-500 hover:text-red-400 transition-colors p-1" title="Sign Out">
                  <LogOut className="w-4 h-4" />
                </button>
              </form>
            </div>
          ) : (
            <form action={onSignIn}>
              <button type="submit" className="flex items-center gap-2 text-sm font-mono font-semibold text-zinc-400 hover:text-white transition-colors">
                <LogIn className="w-4 h-4" /> Log In
              </button>
            </form>
          )}

          <Link 
            href="/kurikulum" 
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-[0_0_15px_rgba(79,70,229,0.3)]"
          >
            Start Mission
          </Link>
        </div>

        {/* Hamburger Menu Toggle (Mobile) */}
        <button 
          className="md:hidden p-2 -mr-2 text-zinc-400 hover:text-white z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 w-full bg-[#0d0d0f] border-b border-zinc-800/80 shadow-2xl md:hidden overflow-hidden flex flex-col"
          >
            <div className="flex flex-col px-4 py-6 gap-6">
              {/* Navigation Links */}
              <div className="flex flex-col gap-4 text-base font-mono font-semibold uppercase tracking-wider text-zinc-400">
                <Link href="/kurikulum" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-indigo-400">Kurikulum</Link>
                <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-indigo-400">Progres</Link>
                <Link href="/docs" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-indigo-400">Dokumentasi</Link>
              </div>

              <hr className="border-zinc-800" />

              {/* Auth & CTA Mobile */}
              <div className="flex flex-col gap-4">
                {user ? (
                  <div className="flex items-center justify-between w-full">
                    <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 text-sm font-mono font-semibold text-zinc-200">
                      {user.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={user.image} alt="Avatar" className="w-8 h-8 rounded-full border border-zinc-700" />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
                          <Terminal className="w-4 h-4" />
                        </div>
                      )}
                      <span>{user.name}</span>
                    </Link>
                    <form action={onSignOut}>
                      <button type="submit" className="flex items-center gap-2 text-zinc-400 hover:text-red-400 transition-colors text-sm font-semibold bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800">
                        <LogOut className="w-4 h-4" /> Keluar
                      </button>
                    </form>
                  </div>
                ) : (
                  <form action={onSignIn}>
                    <button type="submit" className="w-full flex items-center justify-center gap-2 text-sm font-mono font-semibold text-zinc-300 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 py-3 rounded-xl transition-colors">
                      <LogIn className="w-4 h-4" /> Log In dengan GitHub
                    </button>
                  </form>
                )}

                <Link 
                  href="/kurikulum" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-3 rounded-xl text-sm font-semibold transition-all shadow-[0_0_15px_rgba(79,70,229,0.3)] mt-2"
                >
                  Start Mission
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
