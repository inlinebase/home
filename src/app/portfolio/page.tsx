"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookCallModal } from "@/components/common/BookCallModal";
import { PortfolioSection } from "@/components/sections/PortfolioSection";

export default function PortfolioPage() {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-black text-white">
      <Header onOpenBookCall={() => setIsBookCallOpen(true)} />

      {/* Hero Header */}
      <section className="pt-40 pb-16 px-6 md:px-12 max-w-7xl mx-auto space-y-6">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500">
          CURATED PORTFOLIO
        </span>
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tighter text-white">
          Digital Works & Case Studies.
        </h1>
        <p className="text-base sm:text-lg text-neutral-400 font-light max-w-2xl">
          Explore our complete showcase of award-winning digital platforms engineered for Medical, Restaurant, Resort, and Law Firm leaders.
        </p>
      </section>

      <PortfolioSection onOpenBookCall={() => setIsBookCallOpen(true)} />

      <Footer onOpenBookCall={() => setIsBookCallOpen(true)} />

      <BookCallModal
        isOpen={isBookCallOpen}
        onClose={() => setIsBookCallOpen(false)}
      />
    </main>
  );
}
