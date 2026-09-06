const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src/components/LessonPlayground.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Ganti Header Kanan (Atas)
const oldHeader = `{status === "success" ? (
                  <Link
                    href="/kurikulum"
                    className="flex px-4 py-1.5 text-[11px] font-bold rounded-full items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(52,211,153,0.4)] bg-emerald-500 hover:bg-emerald-400 text-zinc-950 border border-emerald-400/50 z-50 relative pointer-events-auto"
                  >
                    LANJUT &rarr;
                  </Link>
                ) : (
                  <button
                    onClick={handleRunCode}
                    disabled={isRunning || (isBossLevel && timeLeft <= 0)}
                    className={\`flex px-4 py-1.5 text-[11px] font-bold rounded-full items-center gap-1.5 transition-all shadow-sm \${
                      isBossLevel && timeLeft <= 0 
                        ? "bg-zinc-800 text-zinc-500 cursor-not-allowed border border-zinc-700" 
                        : "bg-indigo-600 hover:bg-indigo-500 text-white cursor-pointer shadow-[0_0_15px_rgba(79,70,229,0.3)] border border-indigo-500/50"
                    }\`}
                  >
                    {isRunning ? (
                      <><Loader2 className="w-3 h-3 animate-spin" /> Compiling</>
                    ) : isBossLevel && timeLeft <= 0 ? (
                      "Waktu Habis"
                    ) : (
                      <><Play className="w-3 h-3 fill-current" /> Run Code</>
                    )}
                  </button>
                )}`;

const newHeader = `<button
                    onClick={handleRunCode}
                    disabled={isRunning || (isBossLevel && timeLeft <= 0)}
                    className={\`flex px-4 py-1.5 text-[11px] font-bold rounded-full items-center gap-1.5 transition-all shadow-sm \${
                      isBossLevel && timeLeft <= 0 
                        ? "bg-zinc-800 text-zinc-500 cursor-not-allowed border border-zinc-700" 
                        : "bg-indigo-600 hover:bg-indigo-500 text-white cursor-pointer shadow-[0_0_15px_rgba(79,70,229,0.3)] border border-indigo-500/50"
                    }\`}
                  >
                    {isRunning ? (
                      <><Loader2 className="w-3 h-3 animate-spin" /> Compiling</>
                    ) : isBossLevel && timeLeft <= 0 ? (
                      "Waktu Habis"
                    ) : (
                      <><Play className="w-3 h-3 fill-current" /> Run Code</>
                    )}
                  </button>

                  {/* Tombol Lanjut (Gembok vs Terbuka) */}
                  {status === "success" ? (
                    <Link
                      href="/kurikulum"
                      className="flex px-4 py-1.5 text-[11px] font-bold rounded-full items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(52,211,153,0.4)] bg-emerald-500 hover:bg-emerald-400 text-zinc-950 border border-emerald-400/50 pointer-events-auto"
                    >
                      LANJUT &rarr;
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="flex px-4 py-1.5 text-[11px] font-bold rounded-full items-center gap-1.5 transition-all bg-zinc-900 text-zinc-500 border border-zinc-800 cursor-not-allowed"
                    >
                      <Lock className="w-3 h-3" /> LANJUT
                    </button>
                  )}`;

content = content.replace(oldHeader, newHeader);


// 2. Ganti Console Footer (Hapus Banner sukses besar yang berlebihan tadi)
const oldConsoleFooter = `<div className="bg-[#09090b] px-3 md:px-5 py-2 text-[9px] md:text-[10px] font-mono text-zinc-500 flex justify-between items-center border-t border-zinc-800">
                <span>Target: <span className="text-zinc-300 font-bold bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded">{expectedOutput}</span></span>
              </div>
              
              {status === "success" && (
                <div className="bg-emerald-500/10 p-3 border-t border-emerald-500/20 flex justify-center">
                  <Link 
                    href="/kurikulum" 
                    className="flex w-full md:w-auto px-8 py-2.5 text-sm font-bold rounded-lg items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(52,211,153,0.3)] bg-emerald-500 hover:bg-emerald-400 text-zinc-950 border border-emerald-400/50"
                  >
                    Misi Sukses! Kembali ke Skill Tree &rarr;
                  </Link>
                </div>
              )}`;

const newConsoleFooter = `<div className="bg-[#09090b] px-3 md:px-5 py-2 text-[9px] md:text-[10px] font-mono text-zinc-500 flex justify-between items-center border-t border-zinc-800">
                <span>Target: <span className="text-zinc-300 font-bold bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded">{expectedOutput}</span></span>
              </div>`;

content = content.replace(oldConsoleFooter, newConsoleFooter);


// 3. Ganti Mobile FAB di bawah (agar menampilkan dua tombol di Mobile)
const oldMobileFab = `{status === "success" ? (
          <Link
            href="/#kurikulum"
            className="px-8 py-3 md:py-3.5 text-sm font-bold rounded-full shadow-[0_10px_30px_rgba(52,211,153,0.4)] pointer-events-auto flex items-center justify-center gap-2 transition-transform active:scale-95 border border-emerald-400/50 bg-emerald-500 hover:bg-emerald-400 text-zinc-950"
          >
            Lanjut ke Level Berikutnya &rarr;
          </Link>
        ) : (
          <button
            onClick={handleRunCode}
            disabled={isRunning || (isBossLevel && timeLeft <= 0)}
            className={\`px-8 py-3 md:py-3.5 text-sm font-semibold rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] pointer-events-auto flex items-center justify-center gap-2 transition-transform active:scale-95 border \${
              isBossLevel && timeLeft <= 0 
                ? "bg-zinc-800 text-zinc-500 border-zinc-700 cursor-not-allowed" 
                : "bg-indigo-600 hover:bg-indigo-500 text-white border-indigo-500/50"
            }\`}
          >
            {isRunning ? (
              <><Loader2 className="w-4 h-4 animate-spin" /> Compiling...</>
            ) : isBossLevel && timeLeft <= 0 ? (
              "Waktu Habis"
            ) : (
              <><Play className="w-4 h-4 fill-current" /> Run Code</>
            )}
          </button>
        )}`;

const newMobileFab = `<div className="flex gap-3 w-full max-w-sm">
          <button
            onClick={handleRunCode}
            disabled={isRunning || (isBossLevel && timeLeft <= 0)}
            className={\`flex-1 py-3.5 text-[13px] font-semibold rounded-full shadow-lg pointer-events-auto flex items-center justify-center gap-2 transition-transform active:scale-95 border \${
              isBossLevel && timeLeft <= 0 
                ? "bg-zinc-800 text-zinc-500 border-zinc-700 cursor-not-allowed" 
                : "bg-indigo-600 hover:bg-indigo-500 text-white border-indigo-500/50"
            }\`}
          >
            {isRunning ? (
              <><Loader2 className="w-4 h-4 animate-spin" /> ...</>
            ) : isBossLevel && timeLeft <= 0 ? (
              "Waktu Habis"
            ) : (
              <><Play className="w-4 h-4 fill-current" /> Run</>
            )}
          </button>

          {status === "success" ? (
            <Link
              href="/kurikulum"
              className="flex-1 py-3.5 text-[13px] font-bold rounded-full shadow-[0_0_20px_rgba(52,211,153,0.4)] pointer-events-auto flex items-center justify-center gap-2 transition-transform active:scale-95 border border-emerald-400/50 bg-emerald-500 hover:bg-emerald-400 text-zinc-950"
            >
              LANJUT &rarr;
            </Link>
          ) : (
            <button
              disabled
              className="flex-1 py-3.5 text-[13px] font-bold rounded-full items-center justify-center gap-2 bg-zinc-900 text-zinc-500 border border-zinc-800 cursor-not-allowed flex"
            >
              <Lock className="w-4 h-4" /> Lanjut
            </button>
          )}
        </div>`;

content = content.replace(oldMobileFab, newMobileFab);

fs.writeFileSync(filePath, content);
console.log('Fixed Button States to Locked/Unlocked approach');
