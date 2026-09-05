import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Mock user ID — di production ini dari session auth
const MOCK_USER_ID = "mock-user-ciko";

export async function GET() {
  try {
    // Coba ambil user dari DB
    let user = await prisma.user.findUnique({
      where: { id: MOCK_USER_ID },
      include: {
        badges: {
          include: { badge: true },
          orderBy: { earnedAt: "desc" },
        },
        progress: {
          where: { status: "COMPLETED" },
        },
        bossAttempts: {
          where: { passed: true },
          orderBy: { attemptedAt: "desc" },
        },
      },
    });

    // Jika user belum ada di DB (mode demo/guest), buat data mock
    if (!user) {
      return NextResponse.json({
        id: MOCK_USER_ID,
        name: "Ciko C++ Hunter",
        email: null,
        image: null,
        xp: 350,
        syntaxCoin: 85,
        currentStreak: 3,
        level: 5,
        nextLevelXp: 500,
        completedLevels: 1,
        totalBossPassed: 1,
        badges: [
          { id: "b1", name: "First Code", description: "Menyelesaikan level pertama di C++", icon: "sprout", earnedAt: "2026-09-01T00:00:00Z" },
          { id: "b2", name: "Loop Ninja", description: "Lulus perulangan tanpa error", icon: "swords", earnedAt: "2026-09-03T00:00:00Z" },
          { id: "b3", name: "Syntax Debugger", description: "Mengalahkan Boss World 1", icon: "swords", earnedAt: "2026-09-04T00:00:00Z" },
          { id: "b4", name: "Memory Master", description: "Kuasai Pointer & Dynamic Memory", icon: "brain", earnedAt: "2026-09-15T00:00:00Z" },
        ],
        isGuest: true,
      });
    }

    // Hitung level dari XP (setiap 100 XP = 1 level)
    const level = Math.floor(user.xp / 100) + 1;
    const nextLevelXp = level * 100;

    return NextResponse.json({
      id: user.id,
      name: user.name ?? "C++ Hunter",
      email: user.email,
      image: user.image,
      xp: user.xp,
      syntaxCoin: user.syntaxCoin,
      currentStreak: user.currentStreak,
      level,
      nextLevelXp,
      completedLevels: user.progress.length,
      totalBossPassed: user.bossAttempts.length,
      badges: user.badges.map((ub) => ({
        id: ub.id,
        name: ub.badge.name,
        description: ub.badge.description,
        icon: ub.badge.icon,
        earnedAt: ub.earnedAt.toISOString(),
      })),
      isGuest: false,
    });
  } catch (error: any) {
    console.error("[API /user/stats] Error:", error);
    // Fallback ke data mock jika DB belum tersedia (development)
    return NextResponse.json({
      id: "guest",
      name: "Ciko C++ Hunter",
      email: null,
      image: null,
      xp: 350,
      syntaxCoin: 85,
      currentStreak: 3,
      level: 5,
      nextLevelXp: 500,
      completedLevels: 1,
      totalBossPassed: 1,
      badges: [
        { id: "b1", name: "First Code", description: "Menyelesaikan level pertama di C++", icon: "sprout", earnedAt: "2026-09-01T00:00:00Z" },
        { id: "b2", name: "Loop Ninja", description: "Lulus perulangan tanpa error", icon: "swords", earnedAt: "2026-09-03T00:00:00Z" },
        { id: "b3", name: "Syntax Debugger", description: "Mengalahkan Boss World 1", icon: "swords", earnedAt: "2026-09-04T00:00:00Z" },
        { id: "b4", name: "Memory Master", description: "Kuasai Pointer & Dynamic Memory", icon: "brain", earnedAt: "2026-09-15T00:00:00Z" },
      ],
      isGuest: true,
    });
  }
}
