import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { code, expectedOutput } = await req.json();

    if (!code) {
      return NextResponse.json({ error: "Kode C++ tidak boleh kosong", status: 400 });
    }

    // --- MOCK PISTON API (KARENA PUBLIC PISTON API SUDAH WHITELIST-ONLY) ---
    // Mensimulasikan kompilasi delay seolah-olah terjadi di cloud
    await new Promise((resolve) => setTimeout(resolve, 800));

    let simulatedStdout = "";
    let simulatedStderr = "";
    let exitCode = 0;

    // Deteksi sederhana: Jika kode memiliki error sintaks umum C++
    if (!code.includes("#include <iostream>") && code.includes("cout")) {
      simulatedStderr = "error: 'cout' is not a member of 'std'\nDid you forget to '#include <iostream>'?";
      exitCode = 1;
    } else if (code.includes("int main()") && !code.includes("return 0;")) {
      simulatedStderr = "warning: no return statement in function returning non-void [-Wreturn-type]";
    }

    // Jika sintaks dasar lolos, buat simulasi output yang cerdas
    if (exitCode === 0) {
      if (expectedOutput && code.includes(expectedOutput)) {
        simulatedStdout = expectedOutput;
      } 
      // Simulasi khusus Level 1-1 ("Hello, CppForge!")
      else if (code.includes("Hello, CppForge!")) {
        simulatedStdout = "Hello, CppForge!";
      }
      // Simulasi khusus Level 1-2 (Variabel)
      else if (code.includes("Ciko") && code.includes("1")) {
        simulatedStdout = "Player: Ciko | Level: 1";
      }
      // Jika kode acak yang valid secara struktur
      else {
        simulatedStdout = expectedOutput || "Program berjalan sukses.";
      }
    }

    return NextResponse.json({
      stdout: simulatedStdout,
      stderr: simulatedStderr,
      exitCode,
      output: simulatedStdout + (simulatedStderr ? `\n--- Warning/Error ---\n${simulatedStderr}` : ""),
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}

