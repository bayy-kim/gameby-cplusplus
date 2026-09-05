import { PrismaClient } from "@prisma/client";
import { SEED_WORLDS } from "../src/lib/seedData";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding GAMEBY_C++ Database...");

  // Seed Badges
  const badges = [
    { name: "First Code", description: "Menyelesaikan level pertama di C++", icon: "🌱", criteria: "LEVEL_1_COMPLETED" },
    { name: "Loop Ninja", description: "Lulus perulangan tanpa error", icon: "🥷", criteria: "WORLD_2_COMPLETED" },
    { name: "Syntax Debugger", description: "Mengalahkan Boss World 1", icon: "⚔️", criteria: "BOSS_WORLD_1" },
    { name: "Memory Master", description: "Kuasai Pointer & Dynamic Memory", icon: "🧠", criteria: "WORLD_6_COMPLETED" },
    { name: "C++ Grandmaster", description: "Tamatkan seluruh Dunia GAMEBY_C++", icon: "👑", criteria: "ALL_WORLDS_COMPLETED" },
  ];

  for (const b of badges) {
    await prisma.badge.upsert({
      where: { name: b.name },
      update: b,
      create: b,
    });
  }

  // Seed Worlds, Levels, and Hints
  for (const wData of SEED_WORLDS) {
    const world = await prisma.world.upsert({
      where: { order: wData.order },
      update: {
        title: wData.title,
        description: wData.description,
        difficultyTier: wData.difficultyTier,
        icon: wData.icon,
      },
      create: {
        id: wData.id,
        title: wData.title,
        description: wData.description,
        order: wData.order,
        difficultyTier: wData.difficultyTier,
        icon: wData.icon,
      },
    });

    for (const lData of wData.levels) {
      const level = await prisma.level.upsert({
        where: {
          worldId_order: {
            worldId: world.id,
            order: lData.order,
          },
        },
        update: {
          title: lData.title,
          content: lData.content,
          starterCode: lData.starterCode,
          expectedOutput: lData.expectedOutput,
          xpReward: lData.xpReward,
          coinReward: lData.coinReward,
          isBossLevel: lData.isBossLevel,
          timeLimitSec: lData.timeLimitSec,
        },
        create: {
          id: lData.id,
          worldId: world.id,
          title: lData.title,
          content: lData.content,
          starterCode: lData.starterCode,
          expectedOutput: lData.expectedOutput,
          xpReward: lData.xpReward,
          coinReward: lData.coinReward,
          order: lData.order,
          isBossLevel: lData.isBossLevel,
          timeLimitSec: lData.timeLimitSec,
        },
      });

      for (const hData of lData.hints) {
        await prisma.hint.upsert({
          where: {
            levelId_tier: {
              levelId: level.id,
              tier: hData.tier,
            },
          },
          update: {
            content: hData.content,
            costCoins: hData.costCoins,
          },
          create: {
            id: hData.id,
            levelId: level.id,
            tier: hData.tier,
            content: hData.content,
            costCoins: hData.costCoins,
          },
        });
      }
    }
  }

  console.log("Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
