const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src/components/LessonPlayground.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Memperbaiki visibilitas tombol "LANJUT" di Desktop yang sebelumnya 'hidden lg:flex' namun mungkin tertutupi atau tidak ter-render dengan benar.
const oldHeaderAction = `{status === "success" ? (
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
                  )}`;

const newHeaderAction = `{status === "success" ? (
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

content = content.replace(oldHeaderAction, newHeaderAction);

fs.writeFileSync(filePath, content);
console.log('Fixed Next Level button visibility!');
