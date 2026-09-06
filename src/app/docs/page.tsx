import fs from "fs";
import path from "path";
import Link from "next/link";
import { ChevronLeft, BookText, Code2, Terminal } from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function DocsPage() {
  // Read the markdown file content (server-side execution in App Router)
  const filePath = path.join(process.cwd(), "src/app/docs/cheatsheet.md");
  const content = fs.readFileSync(filePath, "utf8");

  return (
    <div className="flex flex-col w-full min-h-[100dvh] bg-[#09090b] font-sans text-zinc-100 selection:bg-zinc-800 pb-24">
      {/* ─── HEADER (STICKY) ─── */}
      <header className="h-[72px] sticky top-0 w-full flex items-center justify-between px-4 md:px-8 bg-[#09090b]/80 backdrop-blur-xl z-40 border-b border-zinc-800/80">
        <Link href="/" className="flex items-center gap-2 text-zinc-400 hover:text-white font-medium text-sm transition-colors">
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Kembali</span>
        </Link>
        <div className="flex items-center gap-2">
          <BookText className="w-5 h-5 text-indigo-400" />
          <h1 className="text-base font-semibold text-zinc-100 tracking-tight">Dokumentasi & Cheat Sheet</h1>
        </div>
        <div className="w-[80px]"></div> {/* Spacer */}
      </header>

      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-12 md:py-16">
        
        {/* Content Section */}
        <div className="prose prose-invert prose-zinc max-w-none text-[15px] leading-relaxed text-zinc-300
                     prose-headings:tracking-tight prose-headings:text-zinc-100 prose-headings:font-bold
                     prose-h1:text-4xl prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-2 prose-h2:border-b prose-h2:border-zinc-800/50
                     prose-code:px-1.5 prose-code:py-0.5 prose-code:bg-white/5 prose-code:rounded-md prose-code:text-[#34C759] prose-code:font-mono prose-code:text-[0.9em] prose-code:border prose-code:border-zinc-800
                     prose-strong:text-white prose-a:text-indigo-400
                     bg-zinc-950 p-8 md:p-12 rounded-[2rem] border border-zinc-800 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle grid and noise inside the card */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay pointer-events-none"></div>
          
          <div className="relative z-10">
            <ReactMarkdown
              components={{
                pre({ node, children, ...props }) {
                  return (
                    <div className="my-8 rounded-2xl overflow-hidden bg-[#0d0d0f] border border-zinc-800 shadow-xl">
                      {/* Terminal Header */}
                      <div className="flex items-center px-4 py-3 bg-[#161618] border-b border-zinc-800/50">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                        </div>
                        <div className="mx-auto text-[11px] font-mono text-zinc-500 flex items-center gap-2">
                          cppforge_docs
                        </div>
                        <div className="w-12"></div>
                      </div>
                      {/* Terminal Body */}
                      <pre className="p-6 text-[14px] leading-relaxed overflow-x-auto text-zinc-300 bg-transparent m-0 font-mono" {...props}>
                        {children}
                      </pre>
                    </div>
                  );
                }
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </div>

        {/* Floating Action Button untuk Latihan */}
        <div className="fixed bottom-8 left-0 right-0 px-4 flex justify-center z-50 pointer-events-none">
          <Link
            href="/kurikulum"
            className="pointer-events-auto flex items-center justify-center gap-2 bg-[#0071E3] hover:bg-[#005bb5] text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-[0_10px_30px_rgba(0,113,227,0.4)] hover:-translate-y-1"
          >
            <Code2 className="w-4 h-4" /> Mulai Misi Koding
          </Link>
        </div>

      </main>
    </div>
  );
}