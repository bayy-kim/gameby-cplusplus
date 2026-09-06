import Navbar from "@/components/Navbar";
import SkillTree from "@/components/SkillTree";
import Footer from "@/components/Footer";
import { SEED_WORLDS } from "@/lib/seedData";
import { prisma } from "@/lib/prisma";

// Ambil progress dari DB jika tersedia
async function getWorldsWithProgress() {
  try {
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

    if (dbWorlds.length === 0) {
      return buildFromSeedData();
    }

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
    return buildFromSeedData();
  }
}

function getGuestStatus(worldIdx: number, levelIdx: number): "completed" | "in_progress" | "locked" {
  if (worldIdx === 0 && levelIdx === 0) return "completed";
  if (worldIdx === 0 && levelIdx === 1) return "in_progress";
  return "locked";
}

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

export default async function KurikulumPage() {
  const formattedWorlds = await getWorldsWithProgress();

  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#09090b]">
      <main className="flex-1 pt-16" suppressHydrationWarning>
        <Navbar />
        <SkillTree worlds={formattedWorlds} />
      </main>
      <Footer />
    </div>
  );
}
