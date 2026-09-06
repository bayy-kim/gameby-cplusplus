import { NextResponse } from "next/server";

// Cek infinite loop di dalam kode (pre-check agar tidak hang saat dipanggil ke API)
function detectInfiniteLoop(code: string): boolean {
  if (/while\s*\(\s*true\s*\)/.test(code) && !/break\s*;/.test(code)) return true;
  if (/while\s*\(\s*1\s*\)/.test(code) && !/break\s*;/.test(code)) return true;
  return false;
}

export async function POST(req: Request) {
  try {
    const { code, expectedOutput } = await req.json();

    if (!code || typeof code !== "string") {
      return NextResponse.json({ error: "Kode C++ tidak boleh kosong." }, { status: 400 });
    }

    if (detectInfiniteLoop(code)) {
      const simulatedStderr = "error: potential infinite loop detected.\n" +
                              "note: 'while(true)' or 'while(1)' without 'break' will run forever.";
      return NextResponse.json({
        stdout: "",
        stderr: simulatedStderr,
        exitCode: 1,
        output: `--- Compilation / Runtime Error ---\n${simulatedStderr}`,
      });
    }

    const PISTON_API_URL = process.env.PISTON_API_URL || "https://emkc.org/api/v2/piston";

    // Panggil Piston API untuk eksekusi kode riil
    const response = await fetch(`${PISTON_API_URL}/execute`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        language: "c++",
        version: "*", // Minta versi terbaru yang disupport Piston
        files: [{ content: code }]
      })
    });

    if (!response.ok) {
      // Piston error / rate limited
      return NextResponse.json({
        stdout: "",
        stderr: `Piston API Error: ${response.statusText}`,
        exitCode: 1,
        output: `--- Server Error ---\nKompilator sedang sibuk atau menolak permintaan (HTTP ${response.status}). Coba lagi beberapa saat.`,
      });
    }

    const result = await response.json();
    
    // Piston response structure
    const compileStderr = result.compile?.stderr || "";
    const runStdout = result.run?.stdout || "";
    const runStderr = result.run?.stderr || "";
    const exitCode = result.run?.code ?? 1;

    let outputDisplay = "";
    if (compileStderr) {
      outputDisplay += `--- Compilation Error ---\n${compileStderr}\n`;
    }
    if (runStdout) {
      outputDisplay += runStdout;
    }
    if (runStderr) {
      outputDisplay += `\n--- Runtime Error ---\n${runStderr}`;
    }

    // Bandingkan dengan target output
    const actualTrimmed = runStdout.trim();
    const expectedTrimmed = (expectedOutput || "").trim();
    
    let isPassing = false;
    
    // Logika passing: kompilasi sukses, exit code 0, dan stdout sama dengan expected output.
    if (exitCode === 0 && !compileStderr) {
      isPassing = actualTrimmed === expectedTrimmed;
      if (!isPassing && expectedTrimmed) {
        outputDisplay += `\n\n--- Evaluasi Gagal ---\nOutput tidak cocok.\nDiharapkan : "${expectedTrimmed}"\nDiperoleh  : "${actualTrimmed}"`;
      }
    }

    return NextResponse.json({
      stdout: runStdout,
      stderr: compileStderr || runStderr,
      exitCode: isPassing ? 0 : 1, // Kita paksakan exitCode 1 jika hasil tidak cocok agar UI merah
      output: outputDisplay || "Program selesai tanpa output.",
    });
    
  } catch (error: any) {
    console.error("Execute API Error:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
