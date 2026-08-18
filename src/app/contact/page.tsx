"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookCallModal } from "@/components/common/BookCallModal";
import { ContactSection } from "@/components/sections/ContactSection";

export default function ContactPage() {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-white text-black">
      <Header onOpenBookCall={() => setIsBookCallOpen(true)} />

      <section className="pt-40 pb-12 px-6 md:px-12 max-w-7xl mx-auto space-y-6">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500">
          CONTACT US
        </span>
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tighter text-black">
          Initiate Your Project Brief.
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 font-light max-w-2xl">
          Whether you require a complete digital overhaul or a flagship brand launch, we are ready to analyze your architectural requirements.
        </p>
      </section>

      <ContactSection />

      <Footer onOpenBookCall={() => setIsBookCallOpen(true)} />

      <BookCallModal
        isOpen={isBookCallOpen}
        onClose={() => setIsBookCallOpen(false)}
      />
    </main>
  );
}
