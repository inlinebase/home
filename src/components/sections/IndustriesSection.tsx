"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Utensils, Compass, Scale } from "lucide-react";

export const IndustriesSection: React.FC = () => {
  const industries = [
    {
      id: "medical",
      title: "Medical & Health",
      subtitle: "Clinics, Surgery Centers & Diagnostic Labs",
      description: "HIPAA-compliant, high-converting digital portals for private practices and healthcare organizations that build immediate patient trust.",
      icon: ShieldCheck,
      count: "3 Flagship Projects",
      href: "/portfolio/medical",
      bgGradient: "from-neutral-900 via-stone-900 to-black",
    },
    {
      id: "restaurant",
      title: "Restaurants & Cafés",
      subtitle: "Michelin Dining & Artisanal Roasteries",
      description: "Cinematic, appetizing web experiences designed to showcase culinary mastery, seamless reservations, and private dining bookings.",
      icon: Utensils,
      count: "3 Flagship Projects",
      href: "/portfolio/restaurant",
      bgGradient: "from-zinc-900 via-neutral-950 to-black",
    },
    {
      id: "resort",
      title: "Resorts & Hospitality",
      subtitle: "Luxury Hotels, Villas & Retreats",
      description: "Ultra-luxury hospitality showcases with room customizers, 360 villa walkthroughs, and direct booking engine integration.",
      icon: Compass,
      count: "3 Flagship Projects",
      href: "/portfolio/resort",
      bgGradient: "from-neutral-950 via-stone-950 to-neutral-900",
    },
    {
      id: "law-firm",
      title: "Law Firms & Legal",
      subtitle: "Corporate Practice & Trial Litigation",
      description: "Authoritative digital architecture engineered for international law firms, M&A counsel, and high-stakes litigation practices.",
      icon: Scale,
      count: "3 Flagship Projects",
      href: "/portfolio/law-firm",
      bgGradient: "from-black via-neutral-900 to-zinc-950",
    },
  ];

  return (
    <section id="industries" className="py-28 px-6 md:px-12 bg-white text-black overflow-hidden border-t border-neutral-200">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-neutral-200">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500">
              INDUSTRY SPECIALIZATIONS
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-2 text-black">
              Tailored for Prestige Sectors.
            </h2>
          </div>
          <p className="text-sm font-mono text-neutral-600 max-w-md leading-relaxed">
            We specialize deeply in four high-value industries where visual elegance, trust, and conversion architecture are non-negotiable.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <Link
                key={ind.id}
                href={ind.href}
                data-cursor="EXPLORE"
                className="group relative bg-neutral-950 text-white border border-neutral-800 p-8 md:p-12 overflow-hidden flex flex-col justify-between transition-all duration-700 hover:border-neutral-500 hover:shadow-2xl min-h-[380px]"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${ind.bgGradient} opacity-90 group-hover:scale-105 transition-transform duration-700`}
                />

                {/* Grid accent line */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

                {/* Top Info */}
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-none">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 border border-neutral-800 px-3 py-1 bg-black/50">
                      {ind.count}
                    </span>
                  </div>

                  <span className="block text-xs font-mono uppercase tracking-widest text-neutral-400">
                    {ind.subtitle}
                  </span>

                  <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white group-hover:translate-x-1 transition-transform">
                    {ind.title}
                  </h3>

                  <p className="text-xs text-neutral-300 leading-relaxed max-w-lg pt-2">
                    {ind.description}
                  </p>
                </div>

                {/* Bottom CTA */}
                <div className="relative z-10 pt-8 mt-6 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-300 group-hover:text-white transition-colors">
                  <span className="tracking-widest uppercase">VIEW INDUSTRY PORTFOLIO</span>
                  <div className="p-2 bg-white text-black rounded-none group-hover:translate-x-1 transition-transform">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
