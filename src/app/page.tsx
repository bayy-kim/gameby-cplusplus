import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#09090b]">
      <main className="flex-1" suppressHydrationWarning>
        <Navbar />
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}
