"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, CATEGORIES } from "@/data/projects";
import { ProjectCard } from "@/components/common/ProjectCard";

interface PortfolioSectionProps {
  onOpenBookCall: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenBookCall }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-28 px-6 md:px-12 bg-black text-white overflow-hidden border-t border-neutral-900">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header & Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-neutral-900">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500">
              FEATURED WORK
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-2 text-white">
              Selected Projects & Case Studies.
            </h2>
          </div>

          {/* Filter Category Pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                data-cursor="FILTER"
                className={`px-4 py-2 text-xs font-mono tracking-widest uppercase transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-white text-black font-bold shadow-lg"
                    : "bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Masonry/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenBookCall={onOpenBookCall}
            />
          ))}
        </div>

        {/* Bottom Call to Action for Dedicated Industry Galleries */}
        <div className="pt-12 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Looking for Industry-Specific Proof Points?
            </h3>
            <p className="text-xs font-mono text-neutral-400 mt-1">
              Explore deep dive case studies categorized for Medical, Restaurant, Resort, and Law Firm clients.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/portfolio/medical"
              className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-mono text-neutral-300 transition-colors"
            >
              Medical Gallery
            </Link>
            <Link
              href="/portfolio/restaurant"
              className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-mono text-neutral-300 transition-colors"
            >
              Restaurant Gallery
            </Link>
            <Link
              href="/portfolio/resort"
              className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-mono text-neutral-300 transition-colors"
            >
              Resort Gallery
            </Link>
            <Link
              href="/portfolio/law-firm"
              className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-mono text-neutral-300 transition-colors flex items-center gap-1"
            >
              <span>Law Firm Gallery</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
