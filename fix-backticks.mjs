import fs from 'fs';
import path from 'path';

const seedPath = path.join(process.cwd(), 'src', 'lib', 'seedData.ts');
let content = fs.readFileSync(seedPath, 'utf8');

// Memperbaiki kutip / backtick di Dunia 6
content = content.replace(
  /Di C\+\+ modern, kita \*\*DILARANG\*\* menggunakan `new` dan `delete` secara manual\. Kenapa\? Karena jika kita lupa memanggil `delete`, memori akan "bocor" selamanya — disebut \*\*Memory Leak\*\*\./g,
  'Di C++ modern, kita **DILARANG** menggunakan \\`new\\` dan \\`delete\\` secara manual. Kenapa? Karena jika kita lupa memanggil \\`delete\\`, memori akan "bocor" selamanya — disebut **Memory Leak**.'
);

// Memperbaiki kutip / backtick di Dunia 7
content = content.replace(
  /Tidak perlu lagi menyebut `\.begin\(\)` dan `\.end\(\)`!/g,
  'Tidak perlu lagi menyebut \\`.begin()\\` dan \\`.end()\\`!'
);

fs.writeFileSync(seedPath, content);
console.log("Fixed backticks in seedData.ts");
