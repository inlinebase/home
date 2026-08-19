"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, Code2, Cpu, Layers, Zap } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

const CAPABILITIES = [
  { icon: Cpu, label: "Distributed Architecture", desc: "Engineered for zero-spof resilience" },
  { icon: Layers, label: "Design Systems", desc: "Cohesive visual architecture at scale" },
  { icon: Zap, label: "Sub-10ms Latency", desc: "Edge deployment across global hubs" },
  { icon: Code2, label: "Type-Safe Full-Stack", desc: "Strict end-to-end type safety" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".about-reveal", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
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
      id="about"
      ref={sectionRef}
      className="relative py-28 md:py-36 px-6 sm:px-8 lg:px-12 bg-[#050505] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Asymmetric Grid Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column Label & Sticky Badge */}
          <div className="lg:col-span-4 about-reveal">
            <div className="inline-flex items-center gap-2 font-mono-code text-xs text-zinc-400 uppercase tracking-widest mb-4">
              <span className="h-1.5 w-1.5 bg-white" />
              <span>01 // ABOUT INLINEBASE</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight uppercase leading-tight">
              We bridge high-end engineering with editorial design.
            </h2>
            <p className="mt-6 text-sm text-zinc-400 font-light leading-relaxed">
              Founded by principal software architects and creative directors, Inlinebase exists to eliminate the compromise between aesthetic beauty and technical power.
            </p>
          </div>

          {/* Right Column Content */}
          <div className="lg:col-span-8 space-y-12">
            <div className="about-reveal p-8 sm:p-12 rounded-3xl bg-[#0a0a0e] border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 font-mono-code text-6xl font-black text-white/5 select-none">
                ABOUT
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-white font-bold tracking-tight mb-6">
                Our Engineering &amp; Design Ethos
              </h3>
              <p className="text-zinc-300 font-light leading-relaxed text-base sm:text-lg mb-6">
                Most digital agencies build fragile marketing sites; traditional consultancies build clunky enterprise software. <strong className="text-white font-semibold">Inlinebase unites both worlds</strong> — creating high-throughput web applications with editorial visual craftsmanship.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-800/80">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold text-white block">Direct Senior Access</span>
                    <span className="text-xs text-zinc-400">Zero account managers or proxy layers.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold text-white block">Sub-100ms Page Loads</span>
                    <span className="text-xs text-zinc-400">Global edge caching &amp; asset optimization.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Capability Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CAPABILITIES.map((cap) => {
                const IconComponent = cap.icon;
                return (
                  <div
                    key={cap.label}
                    className="about-reveal group p-6 rounded-2xl bg-zinc-950/60 border border-white/10 hover:border-white/40 transition-all duration-300"
                    data-cursor="CAPABILITY"
                  >
                    <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-white mb-4 group-hover:bg-white group-hover:text-black transition-colors">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h4 className="font-display text-lg font-bold text-white mb-1">
                      {cap.label}
                    </h4>
                    <p className="text-xs font-mono-code text-zinc-400">
                      {cap.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
