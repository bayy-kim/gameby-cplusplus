import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillTree from "@/components/SkillTree";
import { SEED_WORLDS } from "@/lib/seedData";
import { prisma } from "@/lib/prisma";

// Ambil progress dari DB jika tersedia
async function getWorldsWithProgress() {
  try {
    // Coba query DB untuk mendapatkan worlds beserta levels
    const dbWorlds = await prisma.world.findMany({
      orderBy: { order: "asc" },
      include: {
        levels: {
          orderBy: { order: "asc" },
          select: {
            id: true,
            title: true,
            order: true,
            isBossLevel: true,
          },
        },
      },
    });

    // Jika DB kosong (belum di-seed), fallback ke SEED_WORLDS
    if (dbWorlds.length === 0) {
      return buildFromSeedData();
    }

    // Map world dari DB dengan status progress (guest: level pertama terbuka)
    return dbWorlds.map((world, wIdx) => ({
      id: world.id,
      title: world.title,
      description: world.description,
      order: world.order,
      difficultyTier: world.difficultyTier,
      icon: world.icon,
      levels: world.levels.map((lvl, lIdx) => ({
        id: lvl.id,
        title: lvl.title,
        order: lvl.order,
        isBossLevel: lvl.isBossLevel,
        status: getGuestStatus(wIdx, lIdx),
      })),
    }));
  } catch {
    // DB belum dikonfigurasi — gunakan data statis
    return buildFromSeedData();
  }
}

/** Status progress untuk pengguna tamu (demo) */
function getGuestStatus(
  worldIdx: number,
  levelIdx: number
): "completed" | "in_progress" | "locked" {
  if (worldIdx === 0 && levelIdx === 0) return "completed";
  if (worldIdx === 0 && levelIdx === 1) return "in_progress";
  return "locked";
}

/** Bangun dari SEED_WORLDS statis (fallback) */
function buildFromSeedData() {
  return SEED_WORLDS.map((world, wIdx) => ({
    ...world,
    levels: world.levels.map((lvl, lIdx) => ({
      id: lvl.id,
      title: lvl.title,
      order: lvl.order,
      isBossLevel: lvl.isBossLevel,
      status: getGuestStatus(wIdx, lIdx),
    })),
  }));
}

export default async function HomePage() {
  const formattedWorlds = await getWorldsWithProgress();

  return (
    <main className="min-h-[100dvh]" suppressHydrationWarning>
      <Navbar />
      <HeroSection />

      {/* Target jangkar untuk tautan "Mulai Belajar" */}
      <div id="kurikulum">
        <SkillTree worlds={formattedWorlds} />
      </div>
    </main>
  );
}
