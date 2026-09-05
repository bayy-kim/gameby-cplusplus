"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Flame, Coins, Medal, ArrowLeft, Share2, Sparkles, Terminal, Activity, Code2, Cpu } from "lucide-react";
import { motion } from "motion/react";
import ShareCardModal from "@/components/ShareCardModal";

export default function DashboardPage() {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [selectedBadge, setSelectedBadge] = useState<{name: string, icon: string} | null>(null);

  const userStats = {
    name: "Ciko C++ Hunter",
    level: 5,
    xp: 350,
    nextLevelXp: 500,
    streak: 3,
    syntaxCoins: 85,
    badges: [
      { id: "b1", name: "First Code", description: "Menyelesaikan level pertama di C++", icon: "🌱", date: "01 Sep 2026" },
      { id: "b2", name: "Loop Ninja", description: "Lulus perulangan tanpa error", icon: "🥷", date: "03 Sep 2026" },
      { id: "b3", name: "Syntax Debugger", description: "Mengalahkan Boss World 1", icon: "⚔️", date: "04 Sep 2026" },
      { id: "b4", name: "Memory Master", description: "Kuasai Pointer & Dynamic Memory", icon: "🧠", date: "15 Sep 2026" },
    ],
  };

  const handleShareBadge = (badge: {name: string, icon: string}) => {
    setSelectedBadge(badge);
    setIsShareOpen(true);
  };

  return (
    <div className="min-h-[100dvh] py-8 px-4 md:px-8 max-w-5xl mx-auto flex flex-col gap-8 font-sans bg-[#F5F5F7] dark:bg-black text-gray-900 dark:text-white" suppressHydrationWarning>
      
      {/* ─── TOP BAR NAVIGATION ─── */}
      <div className="flex justify-between items-center">
        <Link href="/" className="px-4 py-2 text-[13px] font-medium rounded-full bg-white dark:bg-[#1C1C1E] border border-gray-200 dark:border-gray-800 hover:shadow-sm transition-all flex items-center gap-1.5 text-[#0071E3]">
          <ArrowLeft className="w-4 h-4" /> Kembali
        </Link>
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-gray-400" />
          <h1 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Dashboard</h1>
        </div>
      </div>

      {/* ─── BENTO GRID LAYOUT ─── */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        
        {/* User Card Profile */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative p-8 apple-card md:col-span-2 flex flex-col justify-between overflow-hidden group"
        >
          {/* Subtle Glow Behind */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#0071E3]/5 dark:bg-[#0071E3]/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#0071E3]/10 dark:group-hover:bg-[#0071E3]/30 transition-all duration-700"></div>

          <div className="flex justify-between items-start relative z-10">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-2xl bg-gray-50 dark:bg-black flex items-center justify-center text-4xl border border-gray-200 dark:border-gray-800 shadow-sm">
                👾
              </div>
              <div className="pt-1">
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md border border-[#0071E3]/20 text-[#0071E3] bg-[#0071E3]/5 mb-3 inline-block">
                  Level {userStats.level} C++ Coder
                </span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-1">{userStats.name}</h2>
                <p className="text-xs font-medium text-gray-500 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" /> ID: usr_1337_0x9A
                </p>
              </div>
            </div>
            
            <button 
              onClick={() => handleShareBadge(userStats.badges[0])}
              className="px-3.5 py-1.5 text-[13px] font-medium rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-black hover:bg-gray-50 transition-colors flex items-center gap-2 text-[#0071E3]"
            >
              <Share2 className="w-3.5 h-3.5" /> Share
            </button>
          </div>

          {/* XP Progress Bar */}
          <div className="mt-12 relative z-10">
            <div className="flex justify-between items-end mb-2">
              <div>
                <span className="text-[11px] font-semibold text-gray-500 block mb-1">Progress ke Level {userStats.level + 1}</span>
              </div>
              <span className="text-[13px] font-bold text-gray-900 dark:text-white">{userStats.xp} <span className="text-gray-400 font-medium">/ {userStats.nextLevelXp} XP</span></span>
            </div>
            <div className="w-full bg-gray-100 dark:bg-gray-800 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-[#34C759] h-full rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${(userStats.xp / userStats.nextLevelXp) * 100}%` }}
              />
            </div>
          </div>
        </motion.div>

        {/* Stats Bento Tiles */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 apple-card flex flex-col justify-between"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest">Streak Harian</span>
              <div className="w-8 h-8 rounded-full bg-[#FF3B30]/10 flex items-center justify-center">
                 <Flame className="w-4 h-4 text-[#FF3B30]" />
              </div>
            </div>
            <div>
              <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{userStats.streak}</span>
              <span className="text-[13px] font-medium text-gray-500 block mt-1">Hari Beruntun</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 apple-card flex flex-col justify-between"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest">SyntaxCoin</span>
              <div className="w-8 h-8 rounded-full bg-[#FF9500]/10 flex items-center justify-center">
                 <Coins className="w-4 h-4 text-[#FF9500]" />
              </div>
            </div>
            <div>
              <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{userStats.syntaxCoins}</span>
              <span className="text-[13px] font-medium text-gray-500 block mt-1">Koin Tersedia</span>
            </div>
          </motion.div>
        </div>

        {/* Badges & Achievements Bento Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-6 md:p-8 apple-card md:col-span-3 relative overflow-hidden"
        >
          <div className="flex items-center gap-3 mb-8 relative z-10">
            <div className="w-8 h-8 rounded-full bg-[#0071E3]/10 flex items-center justify-center">
               <Medal className="w-4 h-4 text-[#0071E3]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white tracking-tight">
              Pencapaian & Badge ({userStats.badges.length})
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            {userStats.badges.map((badge) => (
              <div 
                key={badge.id} 
                onClick={() => handleShareBadge(badge)}
                className="group p-5 rounded-2xl bg-gray-50 dark:bg-black border border-gray-100 dark:border-gray-800 hover:border-[#0071E3]/30 dark:hover:border-[#0071E3]/50 flex flex-col gap-4 transition-all cursor-pointer"
              >
                <div className="flex justify-between items-start w-full">
                   <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#1C1C1E] border border-gray-200 dark:border-gray-800 text-3xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                     {badge.icon}
                   </div>
                   <Share2 className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div>
                  <h4 className="text-[15px] font-semibold text-gray-900 dark:text-white leading-tight mb-1">{badge.name}</h4>
                  <p className="text-[13px] text-gray-500 line-clamp-2 leading-relaxed h-10">{badge.description}</p>
                </div>

                <div className="pt-3 border-t border-gray-200 dark:border-gray-800 mt-auto">
                  <span className="text-[11px] text-gray-400 font-medium flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5" /> {badge.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Share Modal */}
      <ShareCardModal 
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        userName={userStats.name}
        badgeName={selectedBadge?.name || "Level Up!"}
        badgeIcon={selectedBadge?.icon || "🚀"}
        xpEarned={userStats.xp}
      />
    </div>
  );
}
