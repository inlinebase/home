"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const ProcessSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      number: "01",
      title: "Discovery",
      subtitle: "Alignment & Brand Audit",
      description: "Deep dive into your business model, audience persona, competitor matrix, and quantitative conversion targets.",
      deliverable: "Strategic Requirements Spec"
    },
    {
      number: "02",
      title: "Strategy",
      subtitle: "Architecture & Wireframing",
      description: "Crafting the information architecture, user flows, copy hierarchy, and conversion pathways prior to visual design.",
      deliverable: "Low-Fidelity Interactive Wireframes"
    },
    {
      number: "03",
      title: "Design",
      subtitle: "Visual Excellence & UI System",
      description: "Engineering custom bespoke visual design tokens, typography scales, micro-interaction motion specs, and high-fidelity layouts.",
      deliverable: "Figma Design System & High-Fi Prototypes"
    },
    {
      number: "04",
      title: "Development",
      subtitle: "Next.js & Motion Engineering",
      description: "Transforming design into production-grade Next.js App Router code with Lenis smooth scroll, GSAP animations, and sub-500ms loads.",
      deliverable: "Staging URL & Interactive Codebase"
    },
    {
      number: "05",
      title: "Launch",
      subtitle: "QA, SEO & Go-Live Strategy",
      description: "Thorough cross-device QA, Lighthouse 95+ performance optimization, technical SEO verification, domain cutover, and client team training.",
      deliverable: "Production Deployment & SLA Handoff"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate progress line fill on scroll
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={containerRef}
      className="py-28 px-6 md:px-12 bg-white text-black overflow-hidden border-t border-neutral-200"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-neutral-200">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500">
              METHODOLOGY
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-2 text-black">
              The 5-Step Precision Process.
            </h2>
          </div>
          <p className="text-sm font-mono text-neutral-600 max-w-md leading-relaxed">
            Our disciplined engineering framework ensures on-time delivery, predictable milestones, and uncompromised digital quality.
          </p>
        </div>

        {/* Timeline Grid with Center Connecting Line */}
        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-[2px] bg-neutral-200 -translate-x-1/2 hidden sm:block">
            <div
              ref={lineRef}
              className="w-full h-full bg-black origin-top transition-transform duration-100"
            />
          </div>

          <div className="space-y-12 sm:space-y-16">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={step.number}
                  data-cursor="STEP"
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Step Content Card */}
                  <div className="w-full sm:w-1/2 sm:px-8">
                    <div className="bg-neutral-50 border border-neutral-200 p-8 md:p-10 transition-all duration-300 hover:border-black hover:bg-white hover:shadow-xl">
                      <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-4">
                        <span className="text-xl font-extrabold text-black font-sans">
                          {step.number}
                        </span>
                        <span className="uppercase tracking-widest text-[10px] bg-neutral-200 text-neutral-800 px-2 py-0.5 font-bold">
                          MILESTONE {index + 1}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold tracking-tight text-black mb-1">
                        {step.title}
                      </h3>

                      <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-4">
                        {step.subtitle}
                      </p>

                      <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                        {step.description}
                      </p>

                      <div className="pt-4 border-t border-neutral-200 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                        <span className="uppercase text-neutral-400">Deliverable:</span>
                        <span className="font-bold text-black">{step.deliverable}</span>
                      </div>
                    </div>
                  </div>

                  {/* Center Node Badge on Line */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 top-10 w-8 h-8 rounded-full bg-black text-white text-xs font-mono items-center justify-center font-bold z-10 ring-4 ring-white">
                    {step.number}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
