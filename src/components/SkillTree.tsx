"use client";

import React from "react";
import Link from "next/link";
import {
  Lock,
  CheckCircle2,
  Play,
  ShieldAlert,
  Terminal,
  Cpu,
  Database,
  Box,
  Layers,
  Code2,
  GitMerge,
  Crown,
  Zap,
  Coins,
  Sparkles
} from "lucide-react";
import { motion } from "motion/react";

interface LevelNode {
  id: string;
  title: string;
  order: number;
  isBossLevel: boolean;
  status: "completed" | "in_progress" | "locked";
}

interface WorldMap {
  id: string;
  title: string;
  description: string;
  difficultyTier: string;
  order: number;
  icon: string;
  levels: LevelNode[];
}

interface SkillTreeProps {
  worlds: WorldMap[];
}

export default function SkillTree({ worlds }: SkillTreeProps) {
  const getWorldIcon = (iconName: string) => {
    switch (iconName) {
      case "code": return <Code2 className="w-5 h-5 text-current" />;
      case "git-branch": return <GitMerge className="w-5 h-5 text-current" />;
      case "database": return <Database className="w-5 h-5 text-current" />;
      case "box": return <Box className="w-5 h-5 text-current" />;
      case "shield": return <Terminal className="w-5 h-5 text-current" />;
      case "cpu": return <Cpu className="w-5 h-5 text-current" />;
      case "layers": return <Layers className="w-5 h-5 text-current" />;
      case "crown": return <Crown className="w-5 h-5 text-current" />;
      default: return <Code2 className="w-5 h-5 text-current" />;
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-6 md:py-12 flex flex-col gap-8 md:gap-16 font-sans bg-[#09090b] text-zinc-100" suppressHydrationWarning>
      
      {/* ─── HEADER: DARK TECH ─── */}
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full rounded-[2rem] bg-zinc-900/40 p-6 sm:p-8 md:p-12 overflow-hidden border border-zinc-800/80 shadow-2xl"
      >
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[11px] font-mono font-semibold uppercase tracking-widest text-indigo-400">
                <Sparkles className="w-3.5 h-3.5" /> Misi Dimulai
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-[56px] font-bold tracking-tight leading-tight mb-4 text-white">
              C++ <span className="text-zinc-500">Mastery Path</span>
            </h1>
            <p className="text-[15px] md:text-[17px] text-zinc-400 leading-relaxed">
              Kurikulum terstruktur dari dasar hingga arsitektur C++20 modern. Eksekusi kode dengan aman, kumpulkan pencapaian, dan taklukkan kompilator.
            </p>
          </div>

          <div className="flex flex-row gap-4 w-full md:w-auto mt-4 md:mt-0">
             <div className="bg-[#121214] px-5 py-4 rounded-2xl flex-1 md:min-w-[120px] flex flex-col items-center justify-center border border-zinc-800 shadow-md">
                <p className="text-[10px] text-zinc-500 font-mono font-bold uppercase tracking-widest mb-1">Total XP</p>
                <p className="text-2xl font-bold text-white flex items-center gap-1.5">
                  350 <Zap className="w-4 h-4 text-emerald-400" />
                </p>
             </div>
             <div className="bg-[#121214] px-5 py-4 rounded-2xl flex-1 md:min-w-[120px] flex flex-col items-center justify-center border border-zinc-800 shadow-md">
                <p className="text-[10px] text-zinc-500 font-mono font-bold uppercase tracking-widest mb-1">Credits</p>
                <p className="text-2xl font-bold text-white flex items-center gap-1.5">
                  50 <Coins className="w-4 h-4 text-amber-400" />
                </p>
             </div>
          </div>
        </div>
      </motion.header>

      {/* ─── WORLD LIST ─── */}
      <nav aria-label="Curriculum" className="flex flex-col gap-16 pb-20 relative">
        {/* Garis koneksi vertical */}
        <div className="absolute top-0 bottom-0 left-8 md:left-[52px] w-[1px] bg-zinc-800/80 z-0 hidden md:block"></div>

        {worlds.map((world, wIdx) => {
          const isWorldUnlocked = wIdx === 0 || world.levels.some(l => l.status !== "locked");

          return (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            key={world.id} 
            className="relative flex flex-col gap-8 group z-10" 
            aria-labelledby={`world-title-${world.id}`}
          >
            {/* World Header Card */}
            <div className={`tech-card p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 ${isWorldUnlocked ? '' : 'opacity-50 grayscale-[50%]'}`}>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shadow-inner text-indigo-400 z-20">
                  {getWorldIcon(world.icon)}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                     <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-md border border-indigo-500/20">Modul {world.order}</span>
                     <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                     <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500">{world.difficultyTier}</span>
                  </div>
                  <h2 id={`world-title-${world.id}`} className="text-xl font-bold text-white tracking-tight">
                    {world.title}
                  </h2>
                </div>
              </div>
              
              {isWorldUnlocked ? (
                <Link
                  href="/dashboard"
                  className="w-full md:w-auto text-center bg-zinc-800 hover:bg-zinc-700 text-white px-5 py-2.5 text-[13px] font-medium rounded-full transition-colors border border-zinc-700"
                >
                  Lihat Analytics
                </Link>
              ) : (
                <div className="w-full md:w-auto text-center bg-zinc-900 border border-zinc-800 text-zinc-600 px-5 py-2.5 text-[13px] font-mono font-medium rounded-full">
                  LOCKED
                </div>
              )}
            </div>

            {/* Level Nodes */}
            {isWorldUnlocked ? (
              <div className="pl-0 md:pl-20 pr-0 flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-6 w-full">
                {world.levels.map((level) => {
                  const isCompleted = level.status === "completed";
                  const isInProgress = level.status === "in_progress";
                  const isLocked = level.status === "locked";

                  return (
                    <Link
                      key={level.id}
                      href={isLocked ? "#" : `/lesson/${level.id}/theory`}
                      aria-disabled={isLocked}
                      className={`relative p-5 rounded-2xl border flex flex-col justify-between w-full md:w-[280px] min-h-[140px] transition-all duration-300 ${
                        isCompleted
                          ? "bg-zinc-900 border-zinc-800 hover:border-emerald-500/50 shadow-sm"
                          : isInProgress
                          ? "bg-zinc-900 border-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.15)] transform hover:-translate-y-1"
                          : "bg-zinc-950 border-zinc-900 opacity-60 cursor-not-allowed"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
                           isCompleted ? "border-emerald-500/30 text-emerald-400 bg-emerald-500/10" :
                           isInProgress ? "border-indigo-500/30 text-indigo-400 bg-indigo-500/10" :
                           "border-zinc-800 text-zinc-600 bg-zinc-900"
                        }`}>
                          LVL {level.order}
                        </span>
                        
                        {level.isBossLevel && (
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-amber-500/30 text-amber-500 bg-amber-500/10 flex items-center gap-1">
                            <ShieldAlert className="w-3 h-3" /> BOSS
                          </span>
                        )}
                      </div>

                      <div className="mt-4">
                        <h3 className={`text-[15px] font-semibold leading-snug mb-3 ${isLocked ? 'text-zinc-600' : 'text-zinc-100'}`}>
                          {level.title}
                        </h3>
                        
                        <div className="flex items-center gap-2">
                          {isCompleted ? (
                            <span className="flex items-center gap-1.5 text-xs text-zinc-500 font-medium">
                               <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Selesai
                            </span>
                          ) : isInProgress ? (
                            <span className="flex items-center gap-1.5 text-xs text-indigo-400 font-semibold">
                               <Play className="w-4 h-4 fill-current" /> Eksekusi Misi
                            </span>
                          ) : (
                            <span className="flex items-center gap-1.5 text-xs text-zinc-600 font-medium font-mono">
                               <Lock className="w-3.5 h-3.5" /> TERKUNCI
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="pl-0 md:pl-20 pr-0 flex items-center w-full">
                  <div className="w-full md:w-[280px] h-[140px] rounded-2xl bg-zinc-950 border border-zinc-900 flex items-center justify-center">
                    <p className="text-[12px] font-mono text-zinc-600 flex items-center gap-2">
                        <Lock className="w-4 h-4" /> Selesaikan Modul 1
                    </p>
                  </div>
              </div>
            )}
          </motion.section>
        )})}
      </nav>
    </div>
  );
}