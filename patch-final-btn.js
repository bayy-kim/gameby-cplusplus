const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src/components/LessonPlayground.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. PASTIKAN TOMBOL LANJUT DI ATAS MUNCUL (GANTI RUN CODE)
const headerEditorOld = `{status === "success" ? (
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
                          : "bg-indigo-600 hover:bg-indigo-500 text-white cursor-pointer z-50 relative pointer-events-auto shadow-[0_0_15px_rgba(79,70,229,0.3)] border border-indigo-500/50"
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

const headerEditorNew = `{status === "success" ? (
                  <Link
                    href="/kurikulum"
                    className="flex px-4 py-1.5 text-[11px] font-bold rounded-full items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(52,211,153,0.4)] bg-emerald-500 hover:bg-emerald-400 text-zinc-950 border border-emerald-400/50"
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

if (content.includes(headerEditorOld)) {
   content = content.replace(headerEditorOld, headerEditorNew);
} else {
   // Fallback kalau pattern-nya beda dikit
   content = content.replace(/<button[^>]*>\s*\{isRunning \? \([\s\S]*?Run Code<\/>\)\s*}\s*<\/button>\s*}\s*<\/div>/, headerEditorNew + '\n                </div>');
}


// 2. TAMBAHKAN TOMBOL LANJUT BESAR DI BAWAH CONSOLE (LEBIH JELAS)
const consoleFooterOld = `<div className="bg-[#09090b] px-3 md:px-5 py-2 text-[9px] md:text-[10px] font-mono text-zinc-500 flex justify-between items-center border-t border-zinc-800">
                <span>Target: <span className="text-zinc-300 font-bold bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded">{expectedOutput}</span></span>
                {status === "success" && (
                  <Link 
                    href="/kurikulum" 
                    className="sm:hidden text-[9px] font-bold text-zinc-900 bg-emerald-400 px-2.5 py-1 rounded transition-colors"
                  >
                    LANJUT &rarr;
                  </Link>
                )}
              </div>`;

const consoleFooterNew = `<div className="bg-[#09090b] px-3 md:px-5 py-2 text-[9px] md:text-[10px] font-mono text-zinc-500 flex justify-between items-center border-t border-zinc-800">
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

content = content.replace(consoleFooterOld, consoleFooterNew);


// 3. Pastikan C++20 teks tetep kelihatan
content = content.replace(
  '<span className="text-[9px] md:text-[10px] font-mono text-zinc-600 hidden md:block border border-zinc-800 px-2 py-0.5 rounded">C++20/23</span>',
  '<span className="text-[9px] md:text-[10px] font-mono text-zinc-600 border border-zinc-800 px-2 py-0.5 rounded flex-shrink-0">C++20/23</span>'
);

fs.writeFileSync(filePath, content);
console.log('Final fix applied to Next Level button');
