"use client";

import React, { useRef, useState } from "react";
import { X, Download, Share2, Sparkles, Trophy, Code2, Zap } from "lucide-react";
import * as htmlToImage from "html-to-image";

interface ShareCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string;
  badgeName: string;
  badgeIcon: string;
  worldName?: string;
  xpEarned: number;
}

export default function ShareCardModal({
  isOpen,
  onClose,
  userName,
  badgeName,
  badgeIcon,
  worldName,
  xpEarned,
}: ShareCardModalProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  if (!isOpen) return null;

  const handleDownload = async () => {
    if (!cardRef.current) return;
    try {
      setIsDownloading(true);
      const dataUrl = await htmlToImage.toPng(cardRef.current, {
        quality: 1.0,
        pixelRatio: 3, 
        style: {
          transform: "scale(1)", 
        }
      });
      
      const link = document.createElement("a");
      link.download = `GAMEBY_CPP_${badgeName.replace(/\s+/g, "_")}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Gagal men-generate kartu:", err);
      alert("Maaf, terjadi kesalahan saat membuat gambar kartu.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#09090b]/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm flex flex-col items-center">
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 md:-right-12 w-10 h-10 bg-[#09090b] hover:bg-zinc-900 text-zinc-400 hover:text-white rounded-full flex items-center justify-center transition-colors shadow-sm border border-zinc-800"
        >
          <X className="w-5 h-5" />
        </button>

        {/* --- AREA KARTU YANG AKAN DI-SCREENSHOT --- */}
        <div 
          ref={cardRef}
          className="w-full bg-[#09090b] rounded-2xl p-8 text-zinc-100 relative overflow-hidden shadow-2xl border border-zinc-800"
        >
          {/* Efek Soft Gradient Shape di Background Kartu */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

          {/* Header Brand */}
          <div className="flex justify-between items-center mb-8 relative z-10">
            <span className="font-semibold tracking-tight text-sm text-zinc-100 flex items-center gap-2">
               <Code2 className="w-4 h-4 text-indigo-400"/> GAMEBY<span className="text-zinc-500">_C++</span>
            </span>
            <span className="bg-indigo-500/10 text-indigo-400 px-2.5 py-1 rounded-md text-[10px] font-mono tracking-widest uppercase flex items-center gap-1.5 border border-indigo-500/20">
              <Sparkles className="w-3 h-3" /> ACHIEVEMENT
            </span>
          </div>

          {/* Badge Icon Besar */}
          <div className="flex justify-center mb-8 relative z-10">
            <div className="w-32 h-32 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-inner flex items-center justify-center relative hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-indigo-500/5 rounded-2xl"></div>
              <div className="text-6xl drop-shadow-sm relative z-10">
                {badgeIcon}
              </div>
            </div>
          </div>

          {/* Konten Achievement */}
          <div className="text-center relative z-10 space-y-2 mb-8">
            <h2 className="text-2xl font-semibold text-zinc-100 tracking-tight">
              {badgeName}
            </h2>
            <p className="text-zinc-400 font-medium text-xs">
              Unlocked by <span className="text-zinc-100 font-bold">{userName}</span>
            </p>
            {worldName && (
              <p className="inline-block mt-3 text-[10px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                {worldName}
              </p>
            )}
          </div>

          {/* Stats Bawah */}
          <div className="flex items-center justify-between border-t border-zinc-800 pt-5 relative z-10">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 mb-1">Total XP</span>
              <span className="font-medium text-lg text-zinc-100 flex items-center gap-1.5">
                 {xpEarned} <Zap className="w-3 h-3 text-emerald-400" />
              </span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 mb-1">Role</span>
              <span className="font-mono text-[11px] text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">C++ HUNTER</span>
            </div>
          </div>
        </div>
        {/* --- END AREA KARTU --- */}

        {/* Action Buttons Luar Kartu */}
        <div className="flex gap-4 w-full mt-6">
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="flex-1 bg-white hover:bg-zinc-200 text-black py-3 text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            {isDownloading ? (
              <span className="w-4 h-4 border-2 border-zinc-300 border-t-black rounded-full animate-spin" />
            ) : (
              <><Download className="w-4 h-4" /> Save Card</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}