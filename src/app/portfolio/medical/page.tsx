"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookCallModal } from "@/components/common/BookCallModal";
import { ProjectCard } from "@/components/common/ProjectCard";
import { PROJECTS } from "@/data/projects";

export default function MedicalPortfolioPage() {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const medicalProjects = PROJECTS.filter((p) => p.category === "medical");

  return (
    <main className="relative min-h-screen bg-black text-white">
      <Header onOpenBookCall={() => setIsBookCallOpen(true)} />

      {/* Hero Header */}
      <section className="pt-40 pb-16 px-6 md:px-12 max-w-7xl mx-auto space-y-6">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white uppercase tracking-widest transition-colors mb-4"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Portfolios</span>
        </Link>

        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-white/10 border border-white/20 text-white">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-400">
            INDUSTRY SPECIALIZATION
          </span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tighter text-white">
          Medical & Healthcare Digital Portals.
        </h1>

        <p className="text-base sm:text-lg text-neutral-400 font-light max-w-3xl leading-relaxed">
          High-end digital platforms for private clinics, cosmetic surgery suites, and health centers. Engineered with HIPAA compliance, zero-friction appointment booking, and instant patient trust.
        </p>
      </section>

      {/* Projects Showcase */}
      <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {medicalProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenBookCall={() => setIsBookCallOpen(true)}
            />
          ))}
        </div>
      </section>

      {/* Industry Specs Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-neutral-900 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-neutral-900 border border-neutral-800 space-y-3">
            <h3 className="text-xl font-bold font-mono">HIPAA Compliant</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Secure patient intake forms, encrypted document vaults, and compliant appointment APIs.
            </p>
          </div>
          <div className="p-8 bg-neutral-900 border border-neutral-800 space-y-3">
            <h3 className="text-xl font-bold font-mono">Sub-500ms Speed</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Immediate page loads ensuring zero patient drop-off on mobile browsers.
            </p>
          </div>
          <div className="p-8 bg-neutral-900 border border-neutral-800 space-y-3">
            <h3 className="text-xl font-bold font-mono">+148% Conversion</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Optimized appointment scheduling flows designed for high conversion.
            </p>
          </div>
        </div>
      </section>

      <Footer onOpenBookCall={() => setIsBookCallOpen(true)} />

      <BookCallModal
        isOpen={isBookCallOpen}
        onClose={() => setIsBookCallOpen(false)}
      />
    </main>
  );
}
