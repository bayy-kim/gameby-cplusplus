import LessonPlayground from "@/components/LessonPlayground";
import { SEED_WORLDS } from "@/lib/seedData";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default async function PracticePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  let targetLevel = null;
  let targetWorld = null;

  for (const world of SEED_WORLDS) {
    const found = world.levels.find((l) => l.id === id);
    if (found) {
      targetLevel = found;
      targetWorld = world;
      break;
    }
  }

  if (!targetLevel || !targetWorld) {
    return (
      <div className="min-h-[100dvh] flex flex-col items-center justify-center p-4 bg-[#09090b] text-white">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Level Tidak Ditemukan</h1>
        <Link href="/" className="px-4 py-2 border border-zinc-800 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-zinc-900 transition-colors">
          <ChevronLeft className="w-4 h-4" /> Kembali ke Skill Tree
        </Link>
      </div>
    );
  }

  return (
    <LessonPlayground
      levelId={targetLevel.id}
      levelTitle={targetLevel.title}
      worldTitle={targetWorld.title}
      initialCode={targetLevel.starterCode}
      expectedOutput={targetLevel.expectedOutput}
      isBossLevel={targetLevel.isBossLevel}
      timeLimitSec={targetLevel.timeLimitSec}
      hints={targetLevel.hints}
      userCoins={50}
    />
  );
}