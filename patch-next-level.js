const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src/components/LessonPlayground.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Ganti Console Header (nambahin flex gap untuk nampilin dua tombol kalau sukses)
const oldConsoleHeader = `<div className="bg-[#09090b] px-3 md:px-5 py-2 md:py-3 flex justify-between items-center border-b border-zinc-800">
                <span className="text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500">Console Output</span>
                {status === "success" && (
                  <span className="flex items-center gap-1 md:gap-1.5 text-[9px] md:text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-1.5 md:px-2 py-0.5 rounded-md border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3 md:w-3.5 md:h-3.5" /> SUKSES
                  </span>
                )}
                {status === "failed" && (
                  <span className="flex items-center gap-1 md:gap-1.5 text-[9px] md:text-[10px] font-mono font-bold text-red-400 bg-red-500/10 px-1.5 md:px-2 py-0.5 rounded-md border border-red-500/20">
                    <XCircle className="w-3 h-3 md:w-3.5 md:h-3.5" /> GAGAL
                  </span>
                )}
              </div>`;

const newConsoleHeader = `<div className="bg-[#09090b] px-3 md:px-5 py-2 md:py-3 flex justify-between items-center border-b border-zinc-800">
                <span className="text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500">Console Output</span>
                {status === "success" && (
                  <div className="flex items-center gap-3">
                    <Link 
                      href="/#kurikulum" 
                      className="hidden sm:flex text-[9px] md:text-[10px] font-mono font-bold text-zinc-900 bg-emerald-400 hover:bg-emerald-300 px-3 py-1 rounded-md transition-colors shadow-[0_0_10px_rgba(52,211,153,0.3)]"
                    >
                      LANJUT LEVEL BERIKUTNYA
                    </Link>
                    <span className="flex items-center gap-1 md:gap-1.5 text-[9px] md:text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-1.5 md:px-2 py-0.5 rounded-md border border-emerald-500/20">
                      <CheckCircle2 className="w-3 h-3 md:w-3.5 md:h-3.5" /> SUKSES
                    </span>
                  </div>
                )}
                {status === "failed" && (
                  <span className="flex items-center gap-1 md:gap-1.5 text-[9px] md:text-[10px] font-mono font-bold text-red-400 bg-red-500/10 px-1.5 md:px-2 py-0.5 rounded-md border border-red-500/20">
                    <XCircle className="w-3 h-3 md:w-3.5 md:h-3.5" /> GAGAL
                  </span>
                )}
              </div>`;

content = content.replace(oldConsoleHeader, newConsoleHeader);

// 2. Ganti Console Footer / Target Match (agar di mobile juga bisa menekan tombol Lanjut Level Berikutnya)
const oldConsoleFooter = `<div className="bg-[#09090b] px-3 md:px-5 py-2 text-[9px] md:text-[10px] font-mono text-zinc-500 flex justify-between items-center border-t border-zinc-800">
                <span>Target: <span className="text-zinc-300 font-bold bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded">{expectedOutput}</span></span>
              </div>`;

const newConsoleFooter = `<div className="bg-[#09090b] px-3 md:px-5 py-2 text-[9px] md:text-[10px] font-mono text-zinc-500 flex justify-between items-center border-t border-zinc-800">
                <span>Target: <span className="text-zinc-300 font-bold bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded">{expectedOutput}</span></span>
                {status === "success" && (
                  <Link 
                    href="/#kurikulum" 
                    className="sm:hidden text-[9px] font-bold text-zinc-900 bg-emerald-400 px-2.5 py-1 rounded transition-colors"
                  >
                    LANJUT &rarr;
                  </Link>
                )}
              </div>`;

content = content.replace(oldConsoleFooter, newConsoleFooter);

// 3. Tambahkan ke tombol mobile bawah (Floating Action Button) biar kalau sukses, button Run Code berubah jadi tombol Lanjut.
const oldMobileFab = `<button
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
        </button>`;

const newMobileFab = `{status === "success" ? (
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

content = content.replace(oldMobileFab, newMobileFab);

fs.writeFileSync(filePath, content);
console.log('Next level button patched in LessonPlayground.tsx');
