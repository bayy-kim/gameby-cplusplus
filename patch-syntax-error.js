const fs = require('fs');
const path = require('path');

let content = fs.readFileSync(path.join(process.cwd(), 'src/app/api/execute/route.ts'), 'utf8');

// Simplifikasi function detectSyntaxErrors agar tidak false positive
const oldFunc = `function detectSyntaxErrors(code: string): string[] {
  const errors: string[] = [];
  if (/#include\\s+<[^>]*$/.test(code.replace(/\\n/g, " ")) || /#include\\s+<[\\w.]+(?!\\>)/.test(code)) {
    errors.push("error: missing terminating '>' character in #include directive");
  }
  if (!code.includes("#include <iostream>") && !code.includes("#include<iostream>") && /\\bcout\\b/.test(code)) {
    errors.push("error: 'cout' was not declared in this scope\\nnote: did you forget '#include <iostream>'?");
  }
  const lines = code.split("\\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (/^auto\\s+\\w+\\s*=\\s*.+[^;{]$/.test(trimmed) && !trimmed.endsWith("{") && !trimmed.endsWith(",") && !trimmed.startsWith("//")) {
      errors.push(\`warning: possible missing ';' after declaration: '\${trimmed}'\`);
      break;
    }
  }
  return errors;
}`;

const newFunc = `function detectSyntaxErrors(code: string): string[] {
  const errors: string[] = [];
  
  // Hanya tangkap error yang paling jelas: #include yang diakhiri newline tanpa tutup >
  // Contoh: "#include <iostream"
  const lines = code.split("\\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("#include") && trimmed.includes("<") && !trimmed.includes(">")) {
      errors.push("error: missing terminating '>' character in #include directive");
    }
  }

  // Cek jika pakai cout tapi lupa iostream
  if (!code.includes("<iostream>") && /\\bcout\\b/.test(code)) {
    errors.push("error: 'cout' was not declared in this scope\\nnote: did you forget '#include <iostream>'?");
  }

  return errors;
}`;

content = content.replace(oldFunc, newFunc);

fs.writeFileSync(path.join(process.cwd(), 'src/app/api/execute/route.ts'), content);
console.log('Patch detectSyntaxErrors di route.ts');
