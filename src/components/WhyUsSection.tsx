"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PILLARS } from "@/data/companyData";
import { ArrowUpRight } from "lucide-react";

export default function WhyUsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".why-card", {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="relative py-28 md:py-36 px-6 sm:px-8 lg:px-12 bg-[#050505] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono-code text-xs text-zinc-400 uppercase tracking-widest mb-3">
              <span className="h-1.5 w-1.5 bg-white" />
              <span>03 // THE INLINEBASE DIFFERENCE</span>
            </div>
            <h2 className="font-display font-extrabold clamp-section text-white tracking-tight uppercase leading-none">
              WHY PARTNER WITH US.
            </h2>
          </div>
          <p className="text-sm font-mono-code text-zinc-400 max-w-md">
            We operate with engineering rigor, radical transparency, and an obsession with measurable commercial results.
          </p>
        </div>

        {/* 4 Strategic Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="why-card group relative p-8 sm:p-10 rounded-3xl bg-[#0a0a0e] border border-white/10 hover:border-white/40 transition-all duration-300 flex flex-col justify-between"
              data-cursor="PILLAR"
            >
              <div>
                <div className="flex items-center justify-between mb-8 border-b border-zinc-800 pb-4">
                  <span className="font-mono-code text-2xl font-black text-white/40 group-hover:text-white transition-colors">
                    {pillar.number}
                  </span>
                  <div className="h-2 w-2 bg-white/20 group-hover:bg-white transition-colors rounded-none" />
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-4 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-zinc-900 flex items-center justify-between text-xs font-mono-code text-zinc-300">
                <span className="font-semibold text-white/90">
                  {pillar.highlight}
                </span>
                <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-white shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
