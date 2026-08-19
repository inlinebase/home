"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SAAS_PRODUCTS } from "@/data/companyData";
import { ArrowUpRight, CheckCircle, ExternalLink } from "lucide-react";

export default function SaaSProductsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll(".saas-card");
      if (!cards || cards.length === 0) return;

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            y: 60,
            scale: 0.95,
            opacity: 0,
          },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="saas-products"
      ref={sectionRef}
      className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-8 lg:px-12 bg-[#050505] border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono-code text-[11px] sm:text-xs text-zinc-400 uppercase tracking-widest mb-2.5">
              <span className="h-1.5 w-1.5 bg-white" />
              <span>04 // IN-HOUSE SAAS ECOSYSTEM</span>
            </div>
            <h2 className="font-display font-extrabold clamp-section text-white tracking-tight uppercase leading-none">
              PROPRIETARY SAAS PRODUCTS.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono-code text-zinc-400 max-w-md leading-relaxed">
            Beyond client engineering, Inlinebase Technologies builds, operates, and scales in-house SaaS platforms powering thousands of global teams.
          </p>
        </div>

        {/* SaaS Products Grid */}
        <div className="space-y-8 sm:space-y-12">
          {SAAS_PRODUCTS.map((prod, idx) => (
            <div
              key={prod.id}
              className={`saas-card group relative p-6 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl bg-[#0e0e16] border border-white/20 hover:border-white hover:bg-[#141420] hover:shadow-2xl transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              data-cursor="SAAS"
            >
              {/* Product Info Left Column */}
              <div className="lg:col-span-6 space-y-4 sm:space-y-6">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="font-mono-code text-[11px] sm:text-xs font-bold text-white bg-white/15 px-3.5 py-1 rounded-full border border-white/25">
                    {prod.status}
                  </span>
                  <span className="font-mono-code text-[11px] sm:text-xs text-white font-bold">
                    {prod.users}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight mb-1.5 sm:mb-2">
                    {prod.name}
                  </h3>
                  <p className="font-mono-code text-[11px] sm:text-xs text-zinc-300 uppercase tracking-wider mb-3 sm:mb-4 font-bold">
                    {prod.tagline}
                  </p>
                  <p className="text-xs sm:text-base text-zinc-200 font-normal leading-relaxed">
                    {prod.description}
                  </p>
                </div>

                {/* Key Features List */}
                <div className="space-y-2 sm:space-y-2.5 pt-1 sm:pt-2">
                  {prod.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5 text-xs sm:text-sm text-white font-medium">
                      <CheckCircle className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-white shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
                  <a
                    href={prod.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs font-mono-code uppercase font-bold tracking-wider text-black hover:bg-zinc-200 transition-colors shadow-lg"
                  >
                    <span>Launch Platform</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>

                  <div className="flex flex-wrap gap-1.5">
                    {prod.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono-code text-[9px] sm:text-[10px] uppercase px-2.5 py-1 rounded bg-white/15 border border-white/20 text-white font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Product UI Interface Screenshot Frame */}
              <div className="lg:col-span-6">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/30 shadow-2xl bg-black aspect-[16/10] group-hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="h-full w-full object-cover transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 font-mono-code text-[9px] sm:text-[10px] font-bold text-white bg-black/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                    SAAS UI // REAL-TIME PLATFORM DEMO
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
