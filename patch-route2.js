const fs = require('fs');
const path = require('path');

let content = fs.readFileSync(path.join(process.cwd(), 'src/app/api/execute/route.ts'), 'utf8');

// Fix the exact line containing the error
content = content.replace(
  /code\.includes\("\\\\\\" \\\\""\)/g,
  "code.includes('\" \"')"
);

fs.writeFileSync(path.join(process.cwd(), 'src/app/api/execute/route.ts'), content);
console.log('Patch line 43 route.ts');
