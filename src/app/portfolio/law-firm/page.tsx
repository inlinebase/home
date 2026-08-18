"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Scale } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookCallModal } from "@/components/common/BookCallModal";
import { ProjectCard } from "@/components/common/ProjectCard";
import { PROJECTS } from "@/data/projects";

export default function LawFirmPortfolioPage() {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const lawProjects = PROJECTS.filter((p) => p.category === "law-firm");

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
            <Scale className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-400">
            INDUSTRY SPECIALIZATION
          </span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tighter text-white">
          Law Firms & Corporate Legal.
        </h1>

        <p className="text-base sm:text-lg text-neutral-400 font-light max-w-3xl leading-relaxed">
          Authoritative digital platforms engineered for international law firms, M&A practice groups, trial litigation boutiques, and intellectual property counsel.
        </p>
      </section>

      {/* Projects Showcase */}
      <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lawProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenBookCall={() => setIsBookCallOpen(true)}
            />
          ))}
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
