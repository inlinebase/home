"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookCallModal } from "@/components/common/BookCallModal";
import { IndustriesSection } from "@/components/sections/IndustriesSection";

export default function IndustriesPage() {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-white text-black">
      <Header onOpenBookCall={() => setIsBookCallOpen(true)} />

      <section className="pt-40 pb-12 px-6 md:px-12 max-w-7xl mx-auto space-y-6">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500">
          DOMAIN EXPERTISE
        </span>
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tighter text-black">
          Specialized Industry Focus.
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 font-light max-w-2xl">
          We don't try to serve everyone. We focus on four high-prestige verticals where luxury presentation and architectural precision dictate market leadership.
        </p>
      </section>

      <IndustriesSection />

      <Footer onOpenBookCall={() => setIsBookCallOpen(true)} />

      <BookCallModal
        isOpen={isBookCallOpen}
        onClose={() => setIsBookCallOpen(false)}
      />
    </main>
  );
}
