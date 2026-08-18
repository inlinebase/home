"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookCallModal } from "@/components/common/BookCallModal";
import { AboutSection } from "@/components/sections/AboutSection";

export default function AboutPage() {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-neutral-950 text-white">
      <Header onOpenBookCall={() => setIsBookCallOpen(true)} />

      <section className="pt-40 pb-12 px-6 md:px-12 max-w-7xl mx-auto space-y-6">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500">
          ABOUT INLINEBASE
        </span>
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tighter text-white">
          Digital Craftsmanship & Philosophy.
        </h1>
        <p className="text-base sm:text-lg text-neutral-400 font-light max-w-2xl">
          Founded on the conviction that modern web platforms should combine quiet luxury aesthetic with uncompromising speed and mathematical precision.
        </p>
      </section>

      <AboutSection />

      <Footer onOpenBookCall={() => setIsBookCallOpen(true)} />

      <BookCallModal
        isOpen={isBookCallOpen}
        onClose={() => setIsBookCallOpen(false)}
      />
    </main>
  );
}
