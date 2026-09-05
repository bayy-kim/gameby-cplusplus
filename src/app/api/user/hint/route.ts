import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ success: true, message: "Guest mode: hint transaction ignored." });
    }

    const userId = session.user.id;
    const body = await req.json();
    const { costCoins, levelId } = body;

    if (typeof costCoins !== "number" || costCoins <= 0) {
      return NextResponse.json({ error: "Invalid cost" }, { status: 400 });
    }

    // Periksa koin user
    const user = await prisma.user.findUnique({ where: { id: userId }, select: { syntaxCoin: true } });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (user.syntaxCoin < costCoins) {
      return NextResponse.json({ error: "Insufficient coins" }, { status: 400 });
    }

    // Kurangi koin
    await prisma.user.update({
      where: { id: userId },
      data: { syntaxCoin: { decrement: costCoins } }
    });

    // Catat hint mana yang sudah dibeli di UserProgress
    if (levelId) {
      await prisma.userProgress.upsert({
         where: { userId_levelId: { userId, levelId } },
         update: { unlockedHints: { increment: 1 } },
         create: { userId, levelId, status: "IN_PROGRESS", unlockedHints: 1 }
      });
    }

    return NextResponse.json({ success: true, remainingCoins: user.syntaxCoin - costCoins });
  } catch (error: any) {
    console.error("[API /hint] Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
