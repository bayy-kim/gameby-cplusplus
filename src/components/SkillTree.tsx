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
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-6 md:py-12 flex flex-col gap-8 md:gap-16 font-sans bg-[#F5F5F7] dark:bg-black text-gray-900 dark:text-white" suppressHydrationWarning>
      
      {/* ─── HEADER: APPLE LIQUID GLASS ─── */}
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
        className="relative w-full rounded-3xl bg-[#0071E3]/5 dark:bg-[#0071E3]/10 p-8 md:p-12 overflow-hidden border border-[#0071E3]/10"
      >
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white dark:bg-black opacity-40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-[#34C759] opacity-10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-[#1C1C1E] border border-gray-200 dark:border-gray-800 text-[11px] font-semibold uppercase tracking-widest text-[#0071E3] shadow-sm">
                <Sparkles className="w-3.5 h-3.5" /> Petualangan Modern
              </span>
            </div>
            
            <h1 className="text-4xl md:text-[56px] font-bold tracking-tight leading-tight mb-4 text-gray-900 dark:text-white">
              C++ <span className="text-gray-400">Mastery Path</span>
            </h1>
            <p className="text-[15px] md:text-[17px] text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
              A structured curriculum from fundamentals to modern C++20 architecture. Execute code securely, collect achievements, and conquer the compiler.
            </p>
          </div>

          <div className="flex gap-4 w-full md:w-auto mt-4 md:mt-0">
             <div className="apple-glass-panel px-5 py-4 rounded-2xl flex-1 md:min-w-[120px] flex flex-col items-center justify-center">
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Total XP</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                  350 <Zap className="w-4 h-4 text-[#34C759]" />
                </p>
             </div>
             <div className="apple-glass-panel px-5 py-4 rounded-2xl flex-1 md:min-w-[120px] flex flex-col items-center justify-center">
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Credits</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                  50 <Coins className="w-4 h-4 text-[#FF9500]" />
                </p>
             </div>
          </div>
        </div>
      </motion.header>

      {/* ─── WORLD LIST ─── */}
      <nav aria-label="Curriculum" className="flex flex-col gap-16 pb-20 relative">
        {/* Garis koneksi vertical (Timeline line) */}
        <div className="absolute top-0 bottom-0 left-8 md:left-[52px] w-[2px] bg-gray-200 dark:bg-gray-800 z-0 hidden md:block"></div>

        {worlds.map((world, wIdx) => {
          const isWorldUnlocked = wIdx === 0 || world.levels.some(l => l.status !== "locked");

          return (
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.175, 0.885, 0.32, 1.275] }}
            key={world.id} 
            className="relative flex flex-col gap-8 group z-10" 
            aria-labelledby={`world-title-${world.id}`}
          >
            {/* World Header Card (Sticky Header Apple Style) */}
            <div className={`apple-card p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-sm border border-gray-100 dark:border-gray-800 ${isWorldUnlocked ? '' : 'opacity-60'}`}>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 flex items-center justify-center shadow-sm text-[#0071E3] z-20">
                  {getWorldIcon(world.icon)}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                     <span className="text-[10px] font-bold uppercase tracking-widest text-[#0071E3] bg-[#0071E3]/10 px-2 py-0.5 rounded-md">Modul {world.order}</span>
                     <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                     <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{world.difficultyTier}</span>
                  </div>
                  <h2 id={`world-title-${world.id}`} className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                    {world.title}
                  </h2>
                </div>
              </div>
              
              {isWorldUnlocked ? (
                <Link
                  href="/dashboard"
                  className="w-full md:w-auto text-center bg-gray-100 hover:bg-gray-200 dark:bg-[#2C2C2E] dark:hover:bg-gray-700 text-[#0071E3] dark:text-white px-5 py-2.5 text-[13px] font-semibold rounded-full transition-colors"
                >
                  View Analytics
                </Link>
              ) : (
                <div className="w-full md:w-auto text-center bg-gray-100 dark:bg-[#1C1C1E] text-gray-400 dark:text-gray-600 px-5 py-2.5 text-[13px] font-semibold rounded-full">
                  Locked
                </div>
              )}
            </div>

            {/* Level Nodes (Vertical Timeline in Mobile, Horizontal flow in Desktop) */}
            {isWorldUnlocked ? (
              <div className="pl-6 md:pl-20 pr-2 flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-6">
                {world.levels.map((level) => {
                  const isCompleted = level.status === "completed";
                  const isInProgress = level.status === "in_progress";
                  const isLocked = level.status === "locked";

                  return (
                    <Link
                      key={level.id}
                      href={isLocked ? "#" : `/lesson/${level.id}/theory`}
                      aria-disabled={isLocked}
                      className={`relative p-5 rounded-[20px] border flex flex-col justify-between w-full md:w-[280px] min-h-[140px] transition-all duration-300 ${
                        isCompleted
                          ? "bg-white dark:bg-[#1C1C1E] border-gray-200 dark:border-gray-800 hover:border-[#34C759]/50 shadow-sm"
                          : isInProgress
                          ? "bg-white dark:bg-[#1C1C1E] border-[#0071E3] shadow-[0_8px_24px_rgba(0,113,227,0.15)] transform hover:-translate-y-1"
                          : "bg-gray-50 dark:bg-black border-gray-200 dark:border-gray-900 opacity-70 cursor-not-allowed"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                           isCompleted ? "border-[#34C759]/30 text-[#34C759] bg-[#34C759]/10" :
                           isInProgress ? "border-[#0071E3]/30 text-[#0071E3] bg-[#0071E3]/10" :
                           "border-gray-300 dark:border-gray-800 text-gray-500 bg-gray-100 dark:bg-gray-900"
                        }`}>
                          LVL {level.order}
                        </span>
                        
                        {level.isBossLevel && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded border border-[#FF9500]/30 text-[#FF9500] bg-[#FF9500]/10 flex items-center gap-1">
                            <ShieldAlert className="w-3 h-3" /> BOSS
                          </span>
                        )}
                      </div>

                      <div className="mt-3">
                        <h3 className={`text-[15px] font-semibold leading-snug mb-3 ${isLocked ? 'text-gray-400 dark:text-gray-600' : 'text-gray-900 dark:text-white'}`}>
                          {level.title}
                        </h3>
                        
                        <div className="flex items-center gap-2">
                          {isCompleted ? (
                            <span className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                               <CheckCircle2 className="w-4 h-4 text-[#34C759]" /> Completed
                            </span>
                          ) : isInProgress ? (
                            <span className="flex items-center gap-1.5 text-xs text-[#0071E3] font-semibold">
                               <Play className="w-4 h-4 fill-current" /> Eksekusi Misi
                            </span>
                          ) : (
                            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                               <Lock className="w-3.5 h-3.5" /> Terkunci
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="pl-6 md:pl-20 pr-2 flex items-center">
                  <div className="w-full md:w-[280px] h-[140px] rounded-[20px] bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-900 flex items-center justify-center">
                    <p className="text-[13px] font-medium text-gray-400 flex items-center gap-2">
                        <Lock className="w-4 h-4" /> Complete previous module to unlock
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