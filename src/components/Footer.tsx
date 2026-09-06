import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#09090b] py-8 border-t border-zinc-800/80 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-bold tracking-tight text-lg text-white flex items-center gap-2">
            Cpp<span className="text-zinc-500">Forge</span>
          </span>
          <p className="text-sm text-zinc-500 mt-1 max-w-sm">
            Belajar C++ dari nol jadi jago, sambil main game.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 text-[13px] font-mono font-medium text-zinc-400">
          <a href="/#kurikulum" className="hover:text-indigo-400 transition-colors">Skill Tree</a>
          <a href="/dashboard" className="hover:text-indigo-400 transition-colors">Dashboard</a>
          <a href="/docs" className="hover:text-indigo-400 transition-colors">Cheat Sheet</a>
          <a href="/faq" className="hover:text-indigo-400 transition-colors">FAQ</a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-8 text-center md:text-left text-xs text-zinc-600 border-t border-zinc-800/40 pt-6">
        © 2026 GAMEBY_C++. Dibuat buat siapapun yang mau belajar coding dari nol.
      </div>
    </footer>
  );
}
