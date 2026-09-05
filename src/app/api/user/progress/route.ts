import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const session = await auth();
    // Jika tidak ada session / belum login, kita tidak lempar error
    // agar Guest tetap bisa "main", tapi progresnya tidak tersimpan di DB.
    if (!session?.user?.id) {
      return NextResponse.json({ success: true, message: "Guest mode: progress not saved." });
    }

    const userId = session.user.id;
    const body = await req.json();
    const { levelId, xpEarned, coinEarned, isBoss } = body;

    if (!levelId) {
      return NextResponse.json({ error: "Missing levelId" }, { status: 400 });
    }

    // Ambil level referensi dari DB
    const levelRef = await prisma.level.findUnique({
      where: { id: levelId },
      include: { world: true }
    });

    if (!levelRef) {
      return NextResponse.json({ error: "Level not found" }, { status: 404 });
    }

    // 1. Catat/Update progress user di level tersebut
    await prisma.userProgress.upsert({
      where: {
        userId_levelId: { userId, levelId },
      },
      update: {
        status: "COMPLETED",
        completedAt: new Date(),
      },
      create: {
        userId,
        levelId,
        status: "COMPLETED",
        completedAt: new Date(),
      },
    });

    // 2. Tambah XP dan Koin ke total profil User
    await prisma.user.update({
      where: { id: userId },
      data: {
        xp: { increment: xpEarned || levelRef.xpReward },
        syntaxCoin: { increment: coinEarned || levelRef.coinReward },
        lastActive: new Date(),
      },
    });

    // 3. Jika ini adalah Boss Level, catat Boss Attempt yang berhasil
    if (isBoss || levelRef.isBossLevel) {
      await prisma.bossAttempt.create({
        data: {
          userId,
          worldId: levelRef.worldId,
          passed: true,
          score: xpEarned || levelRef.xpReward,
        }
      });
      
      // Tambahkan badge khusus Boss Battle
      const bossBadge = await prisma.badge.findFirst({ where: { criteria: "BOSS_WORLD_1" }}); // (Idealnya disesuaikan per world)
      if (bossBadge) {
        await prisma.userBadge.upsert({
          where: { userId_badgeId: { userId, badgeId: bossBadge.id } },
          update: {},
          create: { userId, badgeId: bossBadge.id }
        });
      }
    } else {
      // Tambahkan badge dasar "First Code" jika ini level pertama yang diselesaikan
      const progressCount = await prisma.userProgress.count({ where: { userId, status: "COMPLETED" }});
      if (progressCount === 1) {
         const starterBadge = await prisma.badge.findFirst({ where: { criteria: "LEVEL_1_COMPLETED" }});
         if (starterBadge) {
           await prisma.userBadge.upsert({
              where: { userId_badgeId: { userId, badgeId: starterBadge.id } },
              update: {},
              create: { userId, badgeId: starterBadge.id }
           });
         }
      }
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("[API /progress] Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
