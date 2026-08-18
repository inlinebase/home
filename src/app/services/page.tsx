"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookCallModal } from "@/components/common/BookCallModal";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function ServicesPage() {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-black text-white">
      <Header onOpenBookCall={() => setIsBookCallOpen(true)} />

      <section className="pt-40 pb-12 px-6 md:px-12 max-w-7xl mx-auto space-y-6">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500">
          SERVICES OVERVIEW
        </span>
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tighter text-white">
          Digital Capabilities & Engineering.
        </h1>
        <p className="text-base sm:text-lg text-neutral-400 font-light max-w-2xl">
          Bespoke visual systems, Next.js motion engineering, technical SEO, and sub-500ms core web vitals optimization.
        </p>
      </section>

      <ServicesSection />

      <Footer onOpenBookCall={() => setIsBookCallOpen(true)} />

      <BookCallModal
        isOpen={isBookCallOpen}
        onClose={() => setIsBookCallOpen(false)}
      />
    </main>
  );
}
