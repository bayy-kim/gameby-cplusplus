const fs = require('fs');
const path = require('path');

// 1. DashboardPage.tsx
const dashboardFile = path.join(process.cwd(), 'src/app/dashboard/page.tsx');
let dashboardContent = fs.readFileSync(dashboardFile, 'utf8');
dashboardContent = dashboardContent.replace(/p-6 md:p-8/g, 'p-5 sm:p-6 md:p-8');
dashboardContent = dashboardContent.replace(/text-3xl md:text-4xl/g, 'text-2xl sm:text-3xl md:text-4xl');
dashboardContent = dashboardContent.replace(/truncate/g, 'truncate'); // jika belum, pastikan truncate di nama user
dashboardContent = dashboardContent.replace(/<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-1">\{userStats\.name\}<\/h2>/g, 
  '<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-1 truncate max-w-full">{userStats.name}</h2>');
fs.writeFileSync(dashboardFile, dashboardContent);


// 2. SkillTree.tsx
const skillTreeFile = path.join(process.cwd(), 'src/components/SkillTree.tsx');
let skillTreeContent = fs.readFileSync(skillTreeFile, 'utf8');
skillTreeContent = skillTreeContent.replace(/p-8 md:p-12/g, 'p-6 sm:p-8 md:p-12');
skillTreeContent = skillTreeContent.replace(/text-4xl md:text-\[56px\]/g, 'text-3xl sm:text-4xl md:text-[56px]');
fs.writeFileSync(skillTreeFile, skillTreeContent);


// 3. TheoryView.tsx
const theoryFile = path.join(process.cwd(), 'src/components/TheoryView.tsx');
let theoryContent = fs.readFileSync(theoryFile, 'utf8');
theoryContent = theoryContent.replace(/text-4xl md:text-5xl/g, 'text-3xl sm:text-4xl md:text-5xl');
// Fix <pre> element to prevent horizontal scroll breaking the page
theoryContent = theoryContent.replace(/<pre className="p-6 text-\[14px\] leading-relaxed overflow-x-auto text-zinc-300 bg-transparent m-0 font-mono" \{...props\}>/g, 
  '<pre className="p-4 sm:p-6 text-xs sm:text-[14px] leading-relaxed overflow-x-auto max-w-full text-zinc-300 bg-transparent m-0 font-mono whitespace-pre" {...props}>');
theoryContent = theoryContent.replace(/p-8 md:p-12/g, 'p-5 sm:p-8 md:p-12');
fs.writeFileSync(theoryFile, theoryContent);

console.log('Mobile layout tweaks applied to Dashboard, SkillTree, and TheoryView.');
