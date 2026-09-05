"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Flame, Coins, Medal, ArrowLeft, Share2, Sparkles, Terminal, Activity, Code2, Cpu, Sprout, Swords, BrainCircuit, User, Zap, CheckCircle2, Trophy, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import ShareCardModal from "@/components/ShareCardModal";

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedAt: string;
}

interface UserStats {
  id: string;
  name: string;
  email: string | null;
  image: string | null;
  xp: number;
  syntaxCoin: number;
  currentStreak: number;
  level: number;
  nextLevelXp: number;
  completedLevels: number;
  totalBossPassed: number;
  badges: Badge[];
  isGuest: boolean;
}

export default function DashboardPage() {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [selectedBadge, setSelectedBadge] = useState<{ name: string; iconId: string } | null>(null);
  const [userStats, setUserStats] = useState<UserStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("/api/user/stats");
        if (!res.ok) throw new Error("Failed to fetch");
        const data: UserStats = await res.json();
        setUserStats(data);
      } catch (err) {
        console.error("Error fetching user stats:", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchStats();
  }, []);

  const getBadgeIcon = (id: string, className?: string) => {
    switch (id) {
      case "sprout": return <Sprout className={className} />;
      case "swords": return <Swords className={className} />;
      case "brain":  return <BrainCircuit className={className} />;
      case "crown":  return <Trophy className={className} />;
      default:       return <Medal className={className} />;
    }
  };

  const handleShareBadge = (badge: { name: string; iconId: string }) => {
    setSelectedBadge(badge);
    setIsShareOpen(true);
  };

  const formatDate = (isoString: string) => {
    return new Date(isoString).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // ── Loading Skeleton ──────────────────────────────────────
  if (isLoading) {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center bg-[#09090b]">
        <div className="flex flex-col items-center gap-4 text-zinc-500">
          <Loader2 className="w-8 h-8 animate-spin text-indigo-400" />
          <span className="text-sm font-mono tracking-widest uppercase">Memuat sistem...</span>
        </div>
      </div>
    );
  }

  if (!userStats) {
    return (
      <div className="min-h-[100dvh] flex flex-col items-center justify-center gap-4 bg-[#09090b]">
        <p className="text-red-400 font-mono text-sm">Gagal memuat profil developer.</p>
        <Link href="/" className="text-sm text-indigo-400 hover:text-indigo-300 underline underline-offset-4">Kembali ke Beranda</Link>
      </div>
    );
  }

  const xpPercent = Math.min(100, Math.round((userStats.xp / userStats.nextLevelXp) * 100));

  return (
    <div className="min-h-[100dvh] py-8 px-4 md:px-8 max-w-5xl mx-auto flex flex-col gap-8 font-sans bg-[#09090b] text-zinc-100" suppressHydrationWarning>

      {/* ─── TOP BAR NAVIGATION ─── */}
      <div className="flex justify-between items-center">
        <Link href="/" className="px-4 py-2 text-[13px] font-medium rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 transition-all flex items-center gap-1.5 text-zinc-300 hover:text-white">
          <ArrowLeft className="w-4 h-4" /> Kembali
        </Link>
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-indigo-400" />
          <h1 className="text-sm font-mono font-bold text-zinc-500 uppercase tracking-widest">Dashboard</h1>
          {userStats.isGuest && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
              Demo
            </span>
          )}
        </div>
      </div>

      {/* ─── BENTO GRID LAYOUT ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >

        {/* ── User Card Profile ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative p-8 tech-card md:col-span-2 flex flex-col justify-between overflow-hidden group"
        >
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-700" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay pointer-events-none"></div>

          <div className="flex justify-between items-start relative z-10">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-[1rem] bg-zinc-950 flex items-center justify-center text-4xl border border-zinc-800 shadow-inner text-indigo-400">
                {userStats.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={userStats.image} alt="avatar" className="w-full h-full rounded-[1rem] object-cover" />
                ) : (
                  <User className="w-8 h-8" />
                )}
              </div>
              <div className="pt-1">
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md border border-indigo-500/20 text-indigo-400 bg-indigo-500/10 mb-3 inline-block uppercase tracking-widest">
                  Level {userStats.level} Coder
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-1 truncate max-w-full">{userStats.name}</h2>
                <p className="text-xs font-mono text-zinc-500 flex items-center gap-1.5 mt-2">
                  <Terminal className="w-3.5 h-3.5" />
                  {userStats.email ?? `ID: usr_${userStats.id.slice(0, 8)}`}
                </p>
              </div>
            </div>

            <button
              onClick={() => userStats.badges[0] && handleShareBadge({ name: userStats.badges[0].name, iconId: userStats.badges[0].icon })}
              className="px-3.5 py-1.5 text-[13px] font-medium rounded-full border border-zinc-700 bg-zinc-800 hover:bg-zinc-700 transition-colors flex items-center gap-2 text-white"
            >
              <Share2 className="w-3.5 h-3.5" /> Share
            </button>
          </div>

          {/* XP Progress Bar */}
          <div className="mt-12 relative z-10">
            <div className="flex justify-between items-end mb-2">
              <div>
                <span className="text-[11px] font-mono font-bold text-zinc-500 block mb-1 uppercase tracking-widest">Progress Level {userStats.level + 1}</span>
              </div>
              <span className="text-[13px] font-bold text-white">
                {userStats.xp} <span className="text-zinc-600 font-medium">/ {userStats.nextLevelXp} XP</span>
              </span>
            </div>
            <div className="w-full bg-zinc-950 border border-zinc-800 h-3 rounded-full overflow-hidden p-0.5">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${xpPercent}%` }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                className="bg-emerald-400 h-full rounded-full shadow-[0_0_10px_rgba(52,211,153,0.5)]"
              />
            </div>
          </div>
        </motion.div>

        {/* ── Stats Bento Tiles ── */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
          {/* Streak */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 tech-card flex flex-col justify-between"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-widest">Streak</span>
              <div className="w-8 h-8 rounded-md bg-red-500/10 border border-red-500/20 flex items-center justify-center shadow-inner">
                <Flame className="w-4 h-4 text-red-400" />
              </div>
            </div>
            <div>
              <span className="text-4xl font-bold tracking-tight text-white">{userStats.currentStreak}</span>
              <span className="text-[13px] font-medium text-zinc-500 block mt-1">Hari Beruntun</span>
            </div>
          </motion.div>

          {/* SyntaxCoin */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 tech-card flex flex-col justify-between"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-widest">Credits</span>
              <div className="w-8 h-8 rounded-md bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shadow-inner">
                <Coins className="w-4 h-4 text-amber-400" />
              </div>
            </div>
            <div>
              <span className="text-4xl font-bold tracking-tight text-white">{userStats.syntaxCoin}</span>
              <span className="text-[13px] font-medium text-zinc-500 block mt-1">SyntaxCoin</span>
            </div>
          </motion.div>
        </div>

        {/* ── Quick Stats Row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="tech-card p-6 md:col-span-3 grid grid-cols-3 gap-4 bg-zinc-900/50"
        >
          <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-zinc-950 border border-zinc-800/80">
            <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center">
              <Zap className="w-5 h-5 text-indigo-400" />
            </div>
            <span className="text-2xl font-bold text-white">{userStats.xp}</span>
            <span className="text-[10px] text-zinc-500 font-mono font-bold uppercase tracking-widest text-center">Total XP</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-zinc-950 border border-zinc-800/80">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="text-2xl font-bold text-white">{userStats.completedLevels}</span>
            <span className="text-[10px] text-zinc-500 font-mono font-bold uppercase tracking-widest text-center">Misi Selesai</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-zinc-950 border border-zinc-800/80">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-amber-400" />
            </div>
            <span className="text-2xl font-bold text-white">{userStats.totalBossPassed}</span>
            <span className="text-[10px] text-zinc-500 font-mono font-bold uppercase tracking-widest text-center">Boss Defeated</span>
          </div>
        </motion.div>

        {/* ── Badges & Achievements Bento Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-5 sm:p-6 md:p-8 tech-card md:col-span-3 relative overflow-hidden"
        >
          <div className="flex items-center gap-3 mb-8 relative z-10">
            <div className="w-8 h-8 rounded-md bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shadow-inner">
              <Medal className="w-4 h-4 text-indigo-400" />
            </div>
            <h3 className="text-lg font-semibold text-white tracking-tight">
              Pencapaian & Badge ({userStats.badges.length})
            </h3>
          </div>

          {userStats.badges.length === 0 ? (
            <div className="text-center py-12 text-zinc-600">
              <Sparkles className="w-8 h-8 mx-auto mb-3 opacity-30" />
              <p className="text-sm font-mono uppercase tracking-widest">Belum ada data. Mulai selesaikan misi.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
              {userStats.badges.map((badge) => (
                <div
                  key={badge.id}
                  onClick={() => handleShareBadge({ name: badge.name, iconId: badge.icon })}
                  className="group p-5 rounded-[1.25rem] bg-zinc-950 border border-zinc-800 hover:border-indigo-500/50 flex flex-col gap-4 transition-all cursor-pointer shadow-inner"
                >
                  <div className="flex justify-between items-start w-full">
                    <div className="w-14 h-14 rounded-[1rem] bg-zinc-900 border border-zinc-800 text-zinc-400 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:text-indigo-400 group-hover:border-indigo-500/30 transition-all duration-300">
                      {getBadgeIcon(badge.icon, "w-6 h-6")}
                    </div>
                    <Share2 className="w-4 h-4 text-zinc-600 opacity-0 group-hover:opacity-100 group-hover:text-indigo-400 transition-all duration-300" />
                  </div>

                  <div>
                    <h4 className="text-[15px] font-semibold text-zinc-100 leading-tight mb-1">{badge.name}</h4>
                    <p className="text-[13px] text-zinc-500 line-clamp-2 leading-relaxed h-10">{badge.description}</p>
                  </div>

                  <div className="pt-3 border-t border-zinc-800 mt-auto">
                    <span className="text-[11px] text-zinc-600 font-mono flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5" /> {formatDate(badge.earnedAt)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>

      {/* Share Modal */}
      <ShareCardModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        userName={userStats.name}
        badgeName={selectedBadge?.name || "Level Up!"}
        badgeIconId={selectedBadge?.iconId || "medal"}
        xpEarned={userStats.xp}
      />
    </div>
  );
}
