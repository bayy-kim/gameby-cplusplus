import React from "react";
import Link from "next/link";
import { Terminal, LogIn, LogOut } from "lucide-react";
import { auth, signIn, signOut } from "@/auth";

// Kita tidak menggunakan "use client" penuh di sini karena auth() 
// dari NextAuth v5 sangat mudah digunakan sebagai Server Component.
export default async function Navbar() {
  const session = await auth();

  return (
    <nav 
      className="fixed top-0 w-full z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-zinc-800/80 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Terminal className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
          <span className="font-bold tracking-tight text-lg text-white">
            Cpp<span className="text-zinc-500">Forge</span>
          </span>
        </Link>

        {/* Links Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm font-mono font-semibold uppercase tracking-wider text-zinc-500">
          <Link href="/#kurikulum" className="hover:text-indigo-400 transition-colors">Kurikulum</Link>
          <Link href="/dashboard" className="hover:text-indigo-400 transition-colors">Progres</Link>
          <Link href="/docs" className="hover:text-indigo-400 transition-colors">Docs</Link>
        </div>

        {/* CTA & Auth */}
        <div className="flex items-center gap-4">
          {session?.user ? (
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="hidden sm:flex items-center gap-2 text-sm font-mono font-semibold text-zinc-300 hover:text-white">
                {session.user.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={session.user.image} alt="Avatar" className="w-6 h-6 rounded-full border border-zinc-700" />
                )}
                <span>{session.user.name?.split(" ")[0]}</span>
              </Link>
              <form action={async () => {
                "use server";
                await signOut();
              }}>
                <button type="submit" className="text-zinc-500 hover:text-red-400 transition-colors p-1" title="Sign Out">
                  <LogOut className="w-4 h-4" />
                </button>
              </form>
            </div>
          ) : (
            <form action={async () => {
              "use server";
              await signIn("github");
            }}>
              <button type="submit" className="flex items-center gap-2 text-sm font-mono font-semibold text-zinc-400 hover:text-white transition-colors hidden sm:flex">
                <LogIn className="w-4 h-4" /> Log In
              </button>
            </form>
          )}

          <Link 
            href="/#kurikulum" 
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-[0_0_15px_rgba(79,70,229,0.3)]"
          >
            Start Mission
          </Link>
        </div>
      </div>
    </nav>
  );
}
