"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SAAS_PRODUCTS } from "@/data/companyData";
import { ArrowUpRight, CheckCircle, ExternalLink, Layers } from "lucide-react";

export default function SaaSProductsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Fail-safe animation: Subtle y-shift while keeping opacity fully visible at 1
      gsap.from(".saas-card", {
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "transform",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="saas-products"
      ref={sectionRef}
      className="relative py-24 md:py-36 px-6 sm:px-8 lg:px-12 bg-[#050505] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono-code text-xs text-zinc-400 uppercase tracking-widest mb-3">
              <span className="h-1.5 w-1.5 bg-white" />
              <span>04 // IN-HOUSE SAAS ECOSYSTEM</span>
            </div>
            <h2 className="font-display font-extrabold clamp-section text-white tracking-tight uppercase leading-none">
              PROPRIETARY SAAS PRODUCTS.
            </h2>
          </div>
          <p className="text-sm font-mono-code text-zinc-400 max-w-md">
            Beyond client engineering, Inlinebase Technologies builds, operates, and scales in-house SaaS platforms powering thousands of global teams.
          </p>
        </div>

        {/* SaaS Products Grid */}
        <div className="space-y-12">
          {SAAS_PRODUCTS.map((prod, idx) => (
            <div
              key={prod.id}
              className={`saas-card opacity-100 group relative p-8 sm:p-12 rounded-3xl bg-[#12121a] border border-white/20 hover:border-white hover:bg-[#181824] hover:shadow-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              data-cursor="SAAS"
            >
              {/* Product Info Left Column */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono-code text-xs font-bold text-white bg-white/15 px-4 py-1.5 rounded-full border border-white/25">
                    {prod.status}
                  </span>
                  <span className="font-mono-code text-xs text-white font-bold">
                    {prod.users}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight mb-2">
                    {prod.name}
                  </h3>
                  <p className="font-mono-code text-xs text-zinc-300 uppercase tracking-wider mb-4 font-bold">
                    {prod.tagline}
                  </p>
                  <p className="text-sm sm:text-base text-zinc-200 font-normal leading-relaxed">
                    {prod.description}
                  </p>
                </div>

                {/* Key Features List */}
                <div className="space-y-2.5 pt-2">
                  {prod.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5 text-sm text-white font-medium">
                      <CheckCircle className="h-4.5 w-4.5 text-white shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href={prod.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs font-mono-code uppercase font-bold tracking-wider text-black hover:bg-zinc-200 transition-colors shadow-lg"
                  >
                    <span>Launch Platform</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>

                  <div className="flex flex-wrap gap-1.5">
                    {prod.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono-code text-[10px] uppercase px-3 py-1 rounded bg-white/15 border border-white/20 text-white font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Product UI Interface Screenshot Frame */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden border border-white/40 shadow-2xl bg-black aspect-[16/10] group-hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="h-full w-full object-cover transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 font-mono-code text-[10px] font-bold text-white bg-black/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/30">
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
