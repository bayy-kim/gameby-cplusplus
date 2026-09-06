const fs = require('fs');
const path = require('path');

const files = [
  'src/components/HeroSection.tsx',
  'src/components/NavbarClient.tsx',
  'src/components/Footer.tsx',
  'src/components/LessonPlayground.tsx',
  'src/app/docs/page.tsx',
];

for (const file of files) {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/href="\/?#kurikulum"/g, 'href="/kurikulum"');
    fs.writeFileSync(filePath, content);
  }
}
console.log('Links updated from /#kurikulum to /kurikulum');
