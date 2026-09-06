const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src/components/LessonPlayground.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Modifikasi letak tombol NEXT LEVEL (Lanjut) supaya bersandar di sebelah Run Code.
const oldHeaderEditor = `<div className="flex items-center gap-2 md:gap-3">
                  <span className="text-[9px] md:text-[10px] font-mono text-zinc-600 hidden md:block border border-zinc-800 px-2 py-0.5 rounded">C++20/23</span>
                  {/* Action Button inside header for desktop */}
                  <button
                    onClick={handleRunCode}
                    disabled={isRunning || (isBossLevel && timeLeft <= 0)}
                    className={\`hidden lg:flex px-4 py-1.5 text-[11px] font-bold rounded-full items-center gap-1.5 transition-all shadow-sm \${
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
                </div>`;

const newHeaderEditor = `<div className="flex items-center gap-2 md:gap-3">
                  <span className="text-[9px] md:text-[10px] font-mono text-zinc-600 hidden md:block border border-zinc-800 px-2 py-0.5 rounded">C++20/23</span>
                  {/* Action Button inside header for desktop */}
                  
                  {status === "success" ? (
                    <Link
                      href="/kurikulum"
                      className="hidden lg:flex px-4 py-1.5 text-[11px] font-bold rounded-full items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(52,211,153,0.4)] bg-emerald-500 hover:bg-emerald-400 text-zinc-950 border border-emerald-400/50 z-50 relative pointer-events-auto"
                    >
                      LANJUT &rarr;
                    </Link>
                  ) : (
                    <button
                      onClick={handleRunCode}
                      disabled={isRunning || (isBossLevel && timeLeft <= 0)}
                      className={\`hidden lg:flex px-4 py-1.5 text-[11px] font-bold rounded-full items-center gap-1.5 transition-all shadow-sm \${
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
                  )}
                </div>`;

// Juga ganti href "/#kurikulum" lama menjadi "/kurikulum" untuk mobile kalau ada yang kelewat
content = content.replace(oldHeaderEditor, newHeaderEditor);
content = content.replace(/href="\/#kurikulum"/g, 'href="/kurikulum"');

fs.writeFileSync(filePath, content);
console.log("Desktop NEXT LEVEL button added.");
