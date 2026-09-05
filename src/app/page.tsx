import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillTree from "@/components/SkillTree";
import { SEED_WORLDS } from "@/lib/seedData";

export default function HomePage() {
  // Simulasi status progres pengguna
  const formattedWorlds = SEED_WORLDS.map((world, wIdx) => ({
    ...world,
    levels: world.levels.map((lvl, lIdx) => {
      let status: "completed" | "in_progress" | "locked" = "locked";
      if (wIdx === 0 && lIdx === 0) status = "completed";
      else if (wIdx === 0 && lIdx === 1) status = "in_progress";

      return {
        id: lvl.id,
        title: lvl.title,
        order: lvl.order,
        isBossLevel: lvl.isBossLevel,
        status,
      };
    }),
  }));

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
