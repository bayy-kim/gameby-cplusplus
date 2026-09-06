const fs = require('fs');
const path = require('path');

const faqPath = path.join(process.cwd(), 'src/app/faq/page.tsx');
let content = fs.readFileSync(faqPath, 'utf8');

// Tambahkan FAQ tentang siapa kita (Manifesto)
const oldFaqArray = `const faqs = [`;
const newFaqArray = `const faqs = [
    { q: "Siapa di balik CppForge & Apa tujuannya?", a: "CppForge adalah inisiatif sumber terbuka (open-source) yang dibangun untuk meruntuhkan stigma bahwa belajar C++ itu kuno, sulit, dan membosankan. Kami menggabungkan gamifikasi, Dark Tech UI, dan compiler berbasis browser agar generasi developer baru bisa mencicipi kehebatan C++ modern se-simpel belajar bahasa lain." },`;

content = content.replace(oldFaqArray, newFaqArray);

fs.writeFileSync(faqPath, content);
console.log('Manifesto FAQ added.');
