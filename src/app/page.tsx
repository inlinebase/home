import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import FuturisticBackground from "@/components/FuturisticBackground";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ShowreelSection from "@/components/ShowreelSection";
import WorkShowcase from "@/components/WorkShowcase";
import ServicesSection from "@/components/ServicesSection";
import SaaSProductsSection from "@/components/SaaSProductsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      {/* Global Futuristic Ambient Background Graphics */}
      <FuturisticBackground />

      <div className="relative min-h-screen bg-[#050505]/90 text-[#ECECEC] selection:bg-white selection:text-black">
        <Header />
        <main className="relative z-10">
          {/* Section 1: Hero */}
          <HeroSection />

          {/* Section 2: Showreel & Visual Portfolio */}
          <ShowreelSection />

          {/* Section 3: Visual Work & Device Mockups */}
          <WorkShowcase />

          {/* Section 4: Services */}
          <ServicesSection />

          {/* Section 5: SaaS Products Ecosystem */}
          <SaaSProductsSection />

          {/* Section 6: Contact & CTAs */}
          <ContactSection />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
