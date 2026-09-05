"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, FileCode2, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function HeroSection() {
  const [terminalState, setTerminalState] = useState(0);

  useEffect(() => {
    // Sequence animasi terminal
    const t1 = setTimeout(() => setTerminalState(1), 1000);
    const t2 = setTimeout(() => setTerminalState(2), 2200);
    const t3 = setTimeout(() => setTerminalState(3), 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);
  return (
    <section className="relative z-10 pt-24 pb-16 lg:pt-48 lg:pb-32 px-4 sm:px-6 w-full max-w-[100vw] overflow-hidden flex flex-col lg:flex-row items-center gap-12 lg:gap-8 font-sans mx-auto max-w-7xl" suppressHydrationWarning>
      
      {/* ─── TEXT CONTENT (LEFT) ─── */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left" suppressHydrationWarning>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 mb-6 lg:mb-8 shadow-inner"
          suppressHydrationWarning
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Engine C++20 Aktif
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-4 lg:mb-6 leading-[1.15]"
        >
          Berhenti membaca.<br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          Mulai <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">membangun.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg text-zinc-400 mb-8 max-w-lg leading-relaxed font-medium"
        >
          Jalur modern bergaya game untuk menguasai C++. Eksekusi kode langsung di browser, taklukkan error compiler di Boss Battle, dan tingkatkan level programming kamu.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
          suppressHydrationWarning
        >
          <Link 
            href="#kurikulum" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-100 text-zinc-900 px-8 py-3.5 rounded-xl font-bold hover:bg-white transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            Masuk ke Skill Tree <ArrowRight className="w-4 h-4" />
          </Link>
          <Link 
            href="/dashboard" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-900 text-zinc-300 border border-zinc-800 px-8 py-3.5 rounded-xl font-semibold hover:bg-zinc-800 transition-colors"
          >
            Lihat Progres Saya
          </Link>
        </motion.div>

        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 lg:mt-12 pt-8 border-t border-zinc-800/80 flex justify-center lg:justify-start items-center gap-6 sm:gap-8 w-full"
          suppressHydrationWarning
        >
          <div suppressHydrationWarning className="text-center lg:text-left">
            <p className="text-2xl sm:text-3xl font-bold text-white mb-1">8</p>
            <p className="text-[10px] sm:text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest">Dunia</p>
          </div>
          <div suppressHydrationWarning className="w-px h-8 bg-zinc-800"></div>
          <div suppressHydrationWarning className="text-center lg:text-left">
            <p className="text-2xl sm:text-3xl font-bold text-white mb-1">26+</p>
            <p className="text-[10px] sm:text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest">Tantangan</p>
          </div>
          <div suppressHydrationWarning className="w-px h-8 bg-zinc-800"></div>
          <div suppressHydrationWarning className="text-center lg:text-left">
            <p className="text-2xl sm:text-3xl font-bold text-white mb-1">100%</p>
            <p className="text-[10px] sm:text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest">Browser</p>
          </div>
        </motion.div>
      </div>

      {/* ─── VISUAL ASSET (RIGHT) ─── */}
      <motion.div 
        initial={{ opacity: 0, x: 30, rotateY: -15, rotateX: 10 }}
        animate={{ opacity: 1, x: 0, rotateY: -5, rotateX: 5 }}
        whileHover={{ rotateY: 0, rotateX: 0, scale: 1.02 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
        className="w-full lg:w-1/2 max-w-full sm:max-w-xl cursor-crosshair"
        suppressHydrationWarning
      >
        <div suppressHydrationWarning className="rounded-[1.5rem] bg-zinc-950 border border-zinc-800 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] overflow-hidden w-full max-w-full">
          
          {/* Editor Header */}
          <div suppressHydrationWarning className="flex items-center px-4 py-3 bg-[#0d0d0f] border-b border-zinc-800/80">
            <div suppressHydrationWarning className="flex gap-2">
              <div suppressHydrationWarning className="w-3 h-3 rounded-full bg-zinc-800"></div>
              <div suppressHydrationWarning className="w-3 h-3 rounded-full bg-zinc-800"></div>
              <div suppressHydrationWarning className="w-3 h-3 rounded-full bg-zinc-800"></div>
            </div>
            <div className="mx-auto text-[11px] font-mono font-bold text-zinc-600 flex items-center gap-2" suppressHydrationWarning>
              <FileCode2 className="w-3.5 h-3.5" /> boss_battle.cpp
            </div>
          </div>

          {/* Editor Body */}
          <div suppressHydrationWarning className="p-4 sm:p-6 text-[11px] sm:text-sm font-mono leading-relaxed bg-zinc-950 overflow-x-auto">
            <div className="flex min-w-max" suppressHydrationWarning>
              <div suppressHydrationWarning className="text-zinc-700 select-none pr-3 sm:pr-4 text-right flex flex-col gap-1 border-r border-zinc-800/80 mr-3 sm:mr-4">
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
              </div>
              <div suppressHydrationWarning className="text-zinc-300 flex flex-col gap-1">
<pre className="m-0">
<span className="text-indigo-400">#include</span> <span className="text-emerald-400">&lt;iostream&gt;</span>
<span className="text-indigo-400">#include</span> <span className="text-emerald-400">&lt;memory&gt;</span>

<span className="text-indigo-400">using namespace</span> std;

<span className="text-indigo-400">int</span> <span className="text-blue-400">main</span>() {"{"}
    <span className="text-zinc-500 italic">// Kalahkan Memory Leak Phantom</span>
    <span className="text-indigo-400">auto</span> weapon = <span className="text-blue-400">make_unique</span>&lt;<span className="text-indigo-400">int</span>&gt;(999);
    cout &lt;&lt; <span className="text-emerald-400">"Damage: "</span> &lt;&lt; *weapon &lt;&lt; <span className="text-emerald-400">"\\n"</span>;
    <span className="text-indigo-400">return</span> <span className="text-amber-400">0</span>;
{"}"}
</pre>
              </div>
            </div>
          </div>

          {/* Fake Execution Terminal */}
          <div suppressHydrationWarning className="bg-[#09090b] p-4 border-t border-zinc-800/80 min-h-[90px] sm:min-h-[110px]">
            <div suppressHydrationWarning className="flex justify-between items-center mb-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-600">Terminal</span>
              <AnimatePresence>
                {terminalState >= 1 && (
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-1.5 px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20"
                  >
                    <Check className="w-3 h-3" /> COMPILED
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
            
            <div suppressHydrationWarning className="font-mono text-[11px] sm:text-xs text-zinc-400">
              {/* Line 1: The command */}
              <div suppressHydrationWarning className="flex items-center">
                <span className="text-indigo-500 mr-2">$</span>
                <span className="relative">
                  {terminalState >= 1 ? (
                    <motion.span
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.5, ease: "linear" }}
                      className="inline-block overflow-hidden whitespace-nowrap align-bottom text-zinc-300 font-medium"
                    >
                      ./main
                    </motion.span>
                  ) : null}
                  {/* Blinking Cursor */}
                  {terminalState < 2 && (
                    <motion.span 
                      animate={{ opacity: [1, 0, 1] }} 
                      transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                      className="inline-block w-1.5 h-3.5 bg-zinc-500 ml-1 align-middle"
                    />
                  )}
                </span>
              </div>

              {/* Line 2: The output */}
              {terminalState >= 2 && (
               <motion.div 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-1.5 text-zinc-200"
                >
                  Damage: 999
                </motion.div>
              )}

              {/* Line 3: The success message */}
              {terminalState >= 3 && (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2.5 text-emerald-400 font-bold"
                >
                  &gt; System Safe. +150 XP awarded.
                  {/* Blinking Cursor pindah ke bawah */}
                  <motion.span 
                    animate={{ opacity: [1, 0, 1] }} 
                    transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                    className="inline-block w-1.5 h-3.5 bg-emerald-400 ml-2 align-middle"
                  />
                </motion.div>
              )}
            </div>
          </div>

        </div>
      </motion.div>

    </section>
  );
}