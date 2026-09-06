"use client";

import React, { useState, useEffect } from "react";
import CodeEditor from "@/components/CodeEditor";
import { Play, Lightbulb, CheckCircle2, XCircle, Clock, ShieldAlert, Coins, ChevronLeft, Flag, Lock, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface LessonPlaygroundProps {
  levelId: string;
  levelTitle: string;
  worldTitle: string;
  initialCode: string;
  expectedOutput: string;
  isBossLevel?: boolean;
  timeLimitSec?: number;
  hints: { id: string; tier: number; content: string; costCoins: number }[];
  userCoins: number;
  onSuccess?: (xpEarned: number, coinsEarned: number) => void;
}

export default function LessonPlayground({
  levelId,
  levelTitle,
  worldTitle,
  initialCode,
  expectedOutput,
  isBossLevel = false,
  timeLimitSec,
  hints,
  userCoins,
  onSuccess,
}: LessonPlaygroundProps) {
  const router = useRouter();
  
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "failed">("idle");
  const [coins, setCoins] = useState(userCoins);
  const [unlockedHintTier, setUnlockedHintTier] = useState(0);
  const [mobileView, setMobileView] = useState<"mission" | "editor">("editor");
  const [timeLeft, setTimeLeft] = useState(timeLimitSec || 0);

  useEffect(() => {
    setCoins(userCoins);
  }, [userCoins]);

  useEffect(() => {
    if (!isBossLevel || timeLimitSec === undefined || status === "success" || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setStatus("failed");
          setOutput("WAKTU HABIS! Boss berhasil mengalahkan program kamu. Coba lagi.");
          setMobileView("editor"); 
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isBossLevel, timeLimitSec, status, timeLeft]);

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60).toString().padStart(2, "0");
    const s = (sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleRunCode = async () => {
    if (isBossLevel && timeLeft <= 0) return;
    setIsRunning(true);
    setStatus("idle");
    setOutput("Executing C++ code...");
    setMobileView("editor");

    try {
      const res = await fetch("/api/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, expectedOutput }),
      });
      const data = await res.json();
      const actualOutput = (data.stdout || "").trim();
      setOutput(data.output || "Tidak ada output dari konsol.");

      if (data.exitCode === 0) {
        setStatus("success");
        const xpEarned = isBossLevel ? 150 : 50;
        const coinEarned = isBossLevel ? 50 : 10;
        
        if (onSuccess) onSuccess(xpEarned, coinEarned);
        
        try {
          await fetch("/api/user/progress", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ levelId, xpEarned, coinEarned, isBoss: isBossLevel })
          });
          router.refresh();
        } catch (e) {
          console.error("Gagal simpan progres: ", e);
        }
      } else {
        setStatus("failed");
      }
    } catch (err: any) {
      setOutput(`System Error: ${err.message}`);
      setStatus("failed");
    } finally {
      setIsRunning(false);
    }
  };

  const handleUnlockHint = async (tier: number, cost: number) => {
    if (coins < cost) {
      alert("SyntaxCoin kamu tidak cukup!");
      return;
    }
    setCoins((prev) => prev - cost);
    setUnlockedHintTier(tier);
    
    try {
      await fetch("/api/user/hint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ costCoins: cost, levelId })
      });
      router.refresh();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col w-full h-[100dvh] bg-[#09090b] font-sans text-zinc-100 selection:bg-zinc-800 overflow-hidden" suppressHydrationWarning>
      
      {/* ─── HEADER (STICKY) ─── */}
      <header className="h-[60px] flex-shrink-0 flex items-center justify-between px-3 md:px-6 bg-[#09090b]/80 backdrop-blur-md z-40 border-b border-zinc-800">
        <Link href={`/lesson/${levelId}/theory`} className="flex items-center gap-1 text-zinc-400 hover:text-white font-medium text-xs md:text-sm transition-opacity">
          <ChevronLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Materi</span>
        </Link>
        <div className="flex flex-col items-center">
          <span className="text-[9px] md:text-[10px] font-mono font-bold tracking-widest uppercase text-indigo-400 truncate max-w-[150px] sm:max-w-xs">{worldTitle}</span>
          <h1 className="text-xs md:text-[15px] font-semibold text-zinc-100 truncate max-w-[150px] sm:max-w-sm">{levelTitle}</h1>
        </div>
        <div className="flex items-center gap-2">
           {isBossLevel && (
             <div className={`px-2.5 py-1 rounded-md text-xs font-bold font-mono border ${timeLeft <= 30 ? 'bg-red-500/10 text-red-500 border-red-500/30 animate-pulse' : 'bg-amber-500/10 text-amber-500 border-amber-500/30'}`}>
               {formatTime(timeLeft)}
             </div>
           )}
           <div className="hidden sm:flex items-center gap-1.5 bg-zinc-900 px-3 py-1.5 rounded-md border border-zinc-800">
             <Coins className="w-3.5 h-3.5 text-amber-400" />
             <span className="text-xs font-bold text-zinc-100">{coins}</span>
           </div>
        </div>
      </header>

      {/* ─── MOBILE VIEW SEGMENTED CONTROL ─── */}
      <div className="lg:hidden flex p-3 bg-[#09090b] z-30 border-b border-zinc-800">
        <div className="flex w-full bg-zinc-900 p-1 rounded-xl border border-zinc-800">
          <button 
            onClick={() => setMobileView("mission")}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${mobileView === "mission" ? 'bg-zinc-800 shadow-sm text-white' : 'text-zinc-500'}`}
          >
            Misi & Hint
          </button>
          <button 
            onClick={() => setMobileView("editor")}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${mobileView === "editor" ? 'bg-zinc-800 shadow-sm text-white' : 'text-zinc-500'}`}
          >
            Editor & Console
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden relative">
        
        {/* ─── LEFT PANEL: MISSION & HINTS ─── */}
        <div className={`w-full lg:w-4/12 h-full flex flex-col transition-transform duration-300 absolute lg:relative z-20 bg-[#09090b] lg:translate-x-0 ${mobileView === "mission" ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex-1 overflow-y-auto px-4 md:px-6 py-4 md:py-6 pb-24 lg:pb-6 flex flex-col gap-4 md:gap-6 break-words">
            
            {/* Target Misi */}
            <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Flag className="w-4 h-4 text-emerald-400" />
                <h3 className="text-sm font-bold text-zinc-100 uppercase tracking-widest">Target Output</h3>
              </div>
              <p className="text-[11px] md:text-xs text-zinc-400 leading-relaxed mb-3 md:mb-4">
                Tulis kode program sedemikian rupa sehingga ketika dieksekusi, konsol akan menampilkan output yang persis sama dengan blok di bawah ini.
              </p>
              <div className="bg-[#121214] p-4 rounded-xl border border-zinc-800/80 font-mono text-sm text-emerald-400 shadow-inner overflow-x-auto whitespace-pre">
                {expectedOutput}
              </div>
            </div>

            {/* Hints Section */}
            <div className="flex-1 bg-zinc-950 p-6 rounded-2xl border border-zinc-800 shadow-lg flex flex-col">
              <div className="flex items-center gap-2 mb-6">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                <h3 className="text-sm font-bold text-zinc-100 uppercase tracking-widest">Sistem Dekripsi Hint</h3>
              </div>
              
              <div className="flex flex-col gap-4 flex-1">
                {hints.map((hint) => {
                  const isUnlocked = unlockedHintTier >= hint.tier;
                  return (
                    <div
                      key={hint.id}
                      className="p-4 rounded-xl border border-zinc-800/80 bg-[#0d0d0f] transition-all"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest">
                          Tier {hint.tier} // {hint.tier === 1 ? "Petunjuk" : hint.tier === 2 ? "Contoh Code" : "Kunci Jawaban"}
                        </span>
                        {!isUnlocked && (
                          <button
                            onClick={() => handleUnlockHint(hint.tier, hint.costCoins)}
                            className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-[10px] font-mono uppercase tracking-wider px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-colors border border-zinc-700"
                          >
                            Decrypt ({hint.costCoins} ⚙)
                          </button>
                        )}
                      </div>
                      {isUnlocked ? (
                        <div className="bg-[#121214] text-emerald-400 p-4 rounded-lg border border-zinc-800/80 mt-2 font-mono text-xs whitespace-pre-wrap overflow-x-auto shadow-inner">
                          {hint.content}
                        </div>
                      ) : (
                        <p className="text-xs text-zinc-600 font-mono italic mt-2 flex items-center gap-2">
                          <Lock className="w-3 h-3" /> Data terenkripsi.
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* ─── RIGHT PANEL: EDITOR & CONSOLE ─── */}
        <div className={`w-full lg:w-8/12 h-full flex flex-col absolute lg:relative z-10 transition-transform duration-300 bg-[#09090b] lg:translate-x-0 ${mobileView === "editor" ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex-1 flex flex-col p-2 md:p-6 md:pl-0 gap-2 md:gap-4 h-[calc(100%-100px)] md:h-full pb-28 md:pb-6 w-full max-w-[100vw]">
            
            {/* Editor Container */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 rounded-2xl overflow-hidden flex flex-col border border-zinc-800 shadow-xl bg-zinc-950"
            >
              <div className="bg-[#09090b] px-4 py-2 border-b border-zinc-800/80 flex justify-between items-center">
                <div className="flex items-center gap-3">
                   <span className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                   </span>
                   <span className="text-xs font-semibold text-zinc-400 ml-2">main.cpp</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-zinc-500 hidden md:block">C++20</span>
                  {/* Action Button inside header for desktop */}
                  <button
                    onClick={handleRunCode}
                    disabled={isRunning || (isBossLevel && timeLeft <= 0)}
                    className={`hidden lg:flex px-4 py-1.5 text-[11px] font-bold rounded-full items-center gap-1.5 transition-all shadow-sm ${
                      isBossLevel && timeLeft <= 0 
                        ? "bg-zinc-800 text-zinc-500 cursor-not-allowed" 
                        : "bg-indigo-600 hover:bg-indigo-500 text-white cursor-pointer z-50 relative pointer-events-auto shadow-[0_0_15px_rgba(79,70,229,0.3)]"
                    }`}
                  >
                    {isRunning ? (
                      <><Loader2 className="w-3 h-3 animate-spin" /> Compiling</>
                    ) : isBossLevel && timeLeft <= 0 ? (
                      "Waktu Habis"
                    ) : (
                      <><Play className="w-3 h-3 fill-current" /> Run Code</>
                    )}
                  </button>
                </div>
              </div>
              <div className="flex-1 relative bg-[#1e1e1e]">
                <CodeEditor value={code} onChange={setCode} />
              </div>
            </motion.div>

            {/* Console */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-[30%] min-h-[150px] rounded-2xl border border-zinc-800 bg-zinc-950 text-white overflow-hidden flex flex-col shadow-xl"
            >
              <div className="bg-[#09090b] px-5 py-3 flex justify-between items-center border-b border-zinc-800/50">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500">Console</span>
                {status === "success" && (
                  <span className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                    <CheckCircle2 className="w-3.5 h-3.5" /> SUKSES
                  </span>
                )}
                {status === "failed" && (
                  <span className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded-md border border-red-500/20">
                    <XCircle className="w-3.5 h-3.5" /> GAGAL
                  </span>
                )}
              </div>
              <div className="p-5 flex-1 overflow-y-auto font-mono text-xs leading-relaxed text-zinc-300 whitespace-pre-wrap">
                {output || "Output eksekusi akan muncul di sini."}
              </div>
              <div className="bg-zinc-950 px-5 py-3 text-[10px] font-mono text-zinc-500 flex justify-between items-center border-t border-zinc-800/50">
                <span>Target: <span className="text-zinc-300 font-bold bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded">{expectedOutput}</span></span>
              </div>
            </motion.div>
          </div>
        </div>
        
      </div>

      {/* ─── FLOATING ACTION BUTTON (MOBILE ONLY) ─── */}
      <div className="lg:hidden fixed bottom-6 left-0 right-0 px-4 flex justify-center z-[100] pointer-events-none">
        <button
          onClick={handleRunCode}
          disabled={isRunning || (isBossLevel && timeLeft <= 0)}
          className={`px-8 py-3.5 text-sm font-semibold rounded-full shadow-[0_10px_30px_rgba(0,113,227,0.4)] pointer-events-auto flex items-center justify-center gap-2 transition-transform active:scale-95 ${
            isBossLevel && timeLeft <= 0 
              ? "bg-zinc-800 text-zinc-600 cursor-not-allowed shadow-none" 
              : "bg-indigo-600 hover:bg-indigo-500 text-white"
          }`}
        >
          {isRunning ? (
            <><Loader2 className="w-4 h-4 animate-spin" /> Compiling...</>
          ) : isBossLevel && timeLeft <= 0 ? (
            "Waktu Habis"
          ) : (
            <><Play className="w-4 h-4 fill-current" /> Run Code</>
          )}
        </button>
      </div>
    </div>
  );
}