import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MarqueeTicker from "@/components/MarqueeTicker";
import PillarsSection from "@/components/PillarsSection";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import ScrollManifesto from "@/components/ScrollManifesto";
import InteractiveMetrics from "@/components/InteractiveMetrics";
import FooterCTA from "@/components/FooterCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#fcfcfc] overflow-x-hidden">
      <Header />
      <HeroSection />
      <MarqueeTicker />
      <PillarsSection />
      <InteractiveTerminal />
      <ScrollManifesto />
      <InteractiveMetrics />
      <FooterCTA />
    </main>
  );
}
