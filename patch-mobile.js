const fs = require('fs');
const path = require('path');

const file = path.join(process.cwd(), 'src/components/LessonPlayground.tsx');
let content = fs.readFileSync(file, 'utf8');

// 1. Ganti class console height agar lebih responsif di mobile
content = content.replace(/className="h-\[30\%\] min-h-\[150px\] rounded-\[1rem\] md:rounded-2xl border border-zinc-800 bg-zinc-950 text-white overflow-hidden flex flex-col shadow-xl"/g, 
  'className="h-1/3 min-h-[120px] max-h-[35vh] md:max-h-none rounded-[1rem] md:rounded-2xl border border-zinc-800 bg-zinc-950 text-white overflow-hidden flex flex-col shadow-xl"');

// 2. Padding dan text truncate di Header (Sticky)
content = content.replace(/<header className="h-\[60px\] flex-shrink-0 flex items-center justify-between px-4 md:px-6 bg-\[\#09090b\]\/80 backdrop-blur-md z-40 border-b border-zinc-800">/g, 
  '<header className="h-[60px] flex-shrink-0 flex items-center justify-between px-3 md:px-6 bg-[#09090b]/80 backdrop-blur-md z-40 border-b border-zinc-800">');

content = content.replace(/<Link href={`\/lesson\/\${levelId}\/theory`} className="flex items-center gap-1.5 text-zinc-400 hover:text-white font-medium text-sm transition-opacity">/g, 
  '<Link href={`/lesson/${levelId}/theory`} className="flex items-center gap-1 text-zinc-400 hover:text-white font-medium text-xs md:text-sm transition-opacity">');

content = content.replace(/<span className="text-\[10px\] font-mono font-bold tracking-widest uppercase text-indigo-400">\{worldTitle\}<\/span>/g, 
  '<span className="text-[9px] md:text-[10px] font-mono font-bold tracking-widest uppercase text-indigo-400 truncate max-w-[150px] sm:max-w-xs">{worldTitle}</span>');

content = content.replace(/<h1 className="text-\[15px\] font-semibold text-zinc-100">\{levelTitle\}<\/h1>/g, 
  '<h1 className="text-xs md:text-[15px] font-semibold text-zinc-100 truncate max-w-[150px] sm:max-w-sm">{levelTitle}</h1>');

// 3. Ukuran font dan padding di Mission & Hints (Mobile Left Panel)
content = content.replace(/px-4 md:px-6 py-6 pb-24 lg:pb-6 flex flex-col gap-6/g, 
  'px-4 md:px-6 py-4 md:py-6 pb-24 lg:pb-6 flex flex-col gap-4 md:gap-6');

content = content.replace(/<h3 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest">Target Output<\/h3>/g, 
  '<h3 className="text-[11px] md:text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest">Target Output</h3>');

content = content.replace(/<p className="text-xs text-zinc-400 leading-relaxed mb-4">/g, 
  '<p className="text-[11px] md:text-xs text-zinc-400 leading-relaxed mb-3 md:mb-4">');

// Simpan file
fs.writeFileSync(file, content);
console.log('Mobile responsiveness patched for LessonPlayground.tsx');
