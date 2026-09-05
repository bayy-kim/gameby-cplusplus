"use client";

import React from "react";
import Link from "next/link";
import { ChevronLeft, ArrowRight, BookOpen, ShieldAlert } from "lucide-react";
import { motion } from "motion/react";
import ReactMarkdown, { Components } from "react-markdown";

interface TheoryViewProps {
  levelId: string;
  levelTitle: string;
  worldTitle: string;
  instructions: string;
  isBossLevel: boolean;
}

export default function TheoryView({
  levelId,
  levelTitle,
  worldTitle,
  instructions,
  isBossLevel,
}: TheoryViewProps) {
  return (
    <div className="flex flex-col w-full min-h-[100dvh] bg-[#09090b] font-sans text-zinc-100 selection:bg-zinc-800 pb-24">
      {/* ─── APPLE STYLE HEADER (STICKY) ─── */}
      <header className="h-[60px] md:h-[72px] sticky top-0 w-full flex items-center justify-between px-4 md:px-8 bg-[#09090b]/80 backdrop-blur-xl z-40 border-b border-zinc-800/80">
        <Link href="/" className="flex items-center gap-1.5 text-zinc-400 hover:text-white font-medium text-sm transition-colors">
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Peta Skill Tree</span>
        </Link>
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-mono font-semibold tracking-widest uppercase text-indigo-500">
            {worldTitle}
          </span>
          <h1 className="text-sm md:text-base font-semibold text-zinc-100 tracking-tight">Materi: {levelTitle}</h1>
        </div>
        <div className="w-[80px]"></div> {/* Spacer for centering */}
      </header>

      <main className="flex-1 w-full max-w-3xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-10">
        
        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 items-center text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-lg mb-2">
            {isBossLevel ? (
              <ShieldAlert className="w-8 h-8 text-amber-500" />
            ) : (
              <BookOpen className="w-8 h-8 text-indigo-400" />
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">{levelTitle}</h1>
          {isBossLevel && (
            <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-md border border-amber-500/30 text-amber-500 bg-amber-500/10 uppercase tracking-widest">
              Persiapan Boss Battle
            </span>
          )}
        </motion.div>

        {/* Content Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="prose prose-invert prose-zinc max-w-none text-base md:text-lg leading-relaxed text-zinc-300
                     prose-headings:tracking-tight prose-headings:text-zinc-100
                     prose-code:px-1.5 prose-code:py-0.5 prose-code:bg-white/10 prose-code:rounded-md prose-code:text-[#34C759] prose-code:font-mono prose-code:text-[0.9em] prose-code:border prose-code:border-zinc-800
                     prose-strong:text-zinc-100 prose-a:text-indigo-400
                     bg-zinc-950 p-8 md:p-12 rounded-[2rem] border border-zinc-800 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle noise inside the card */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay pointer-events-none"></div>
          
          <div className="relative z-10">
            <ReactMarkdown
              components={{
                pre({ node, children, ...props }) {
                  return (
                    <div className="my-6 rounded-2xl overflow-hidden bg-[#0d0d0f] border border-zinc-800 shadow-xl">
                      {/* Terminal Header */}
                      <div className="flex items-center px-4 py-3 bg-[#161618] border-b border-zinc-800/50">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                        </div>
                        <div className="mx-auto text-[11px] font-mono text-zinc-500 flex items-center gap-2">
                          cppforge_engine
                        </div>
                        <div className="w-12"></div> {/* spacer for centering */}
                      </div>
                      {/* Terminal Body */}
                      <pre className="p-6 text-[14px] leading-relaxed overflow-x-auto text-zinc-300 bg-transparent m-0 font-mono" {...props}>
                        {children}
                      </pre>
                    </div>
                  );
                }
              }}
            >
              {instructions}
            </ReactMarkdown>
          </div>
        </motion.div>

        {/* Action Bottom */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mt-4"
        >
          <Link
            href={`/lesson/${levelId}/practice`}
            className="group relative flex items-center justify-center gap-3 bg-white hover:bg-zinc-200 text-black px-8 py-4 rounded-xl text-base font-semibold transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          >
            {isBossLevel ? "Masuk ke Arena Battle" : "Paham, Lanjut ke Misi Koding"}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </main>
    </div>
  );
}