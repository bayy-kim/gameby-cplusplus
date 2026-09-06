const fs = require('fs');
const path = require('path');

const file = path.join(process.cwd(), 'src/lib/seedData.ts');
let content = fs.readFileSync(file, 'utf8');

// Secara manual escape beberapa string literal yang masih memicu error:
content = content.replace(/\*\*Placeholder `{}`\*\*/g, '**Placeholder \\`{}\\`**');

// Kalau ada lagi, kita tangkap satu per satu
fs.writeFileSync(file, content);
console.log('Fixed backtick issue 3 in seedData.ts');
