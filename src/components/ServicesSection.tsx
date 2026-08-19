"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Laptop, Smartphone, Monitor } from "lucide-react";
import { SERVICES, ServiceItem } from "@/data/companyData";

export default function ServicesSection() {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES[0].id);

  const activeService = SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];

  return (
    <section
      id="services"
      className="relative py-24 md:py-36 px-6 sm:px-8 lg:px-12 bg-[#050505] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono-code text-xs text-zinc-400 uppercase tracking-widest mb-3">
              <span className="h-1.5 w-1.5 bg-white" />
              <span>03 // CORE CAPABILITIES</span>
            </div>
            <h2 className="font-display font-extrabold clamp-section text-white tracking-tight uppercase leading-none">
              WHAT WE BUILD.
            </h2>
          </div>
          <p className="text-sm font-mono-code text-zinc-400 max-w-md">
            Streamlined digital engineering focused on three high-impact pillars: Websites, Mobile Apps, and SaaS Platforms.
          </p>
        </div>

        {/* 3 Core Services Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Service Rows */}
          <div className="lg:col-span-7 space-y-4">
            {SERVICES.map((service) => {
              const isSelected = activeServiceId === service.id;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveServiceId(service.id)}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-white text-black border-white shadow-2xl scale-[1.01]"
                      : "bg-[#0a0a0e] text-white border-white/10 hover:border-white/30"
                  }`}
                  data-cursor="SERVICE"
                >
                  <div className="p-6 sm:p-8 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-6">
                      <span
                        className={`font-mono-code text-base font-bold ${
                          isSelected ? "text-black/60" : "text-zinc-500 group-hover:text-white"
                        }`}
                      >
                        {service.number}
                      </span>
                      <h3
                        className={`font-display text-xl sm:text-2xl font-extrabold tracking-tight ${
                          isSelected ? "text-black" : "text-white"
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center transition-all ${
                        isSelected
                          ? "bg-black text-white"
                          : "bg-white/5 text-white group-hover:bg-white group-hover:text-black"
                      }`}
                    >
                      <ArrowUpRight
                        className={`h-5 w-5 ${isSelected ? "rotate-45" : ""}`}
                      />
                    </div>
                  </div>

                  {/* Expandable Deliverables */}
                  {isSelected && (
                    <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 border-t border-black/10">
                      <p className="text-sm font-medium text-black/80 mb-4 pt-4">
                        {service.tagline}
                      </p>
                      <p className="text-xs text-black/70 leading-relaxed mb-4">
                        {service.description}
                      </p>

                      <div className="space-y-1.5 mb-4">
                        <span className="font-mono-code text-[11px] uppercase tracking-wider text-black/60 font-bold block">
                          Key Deliverables:
                        </span>
                        {service.deliverables.map((del) => (
                          <div key={del} className="flex items-center gap-2 text-xs text-black/80">
                            <Check className="h-3.5 w-3.5 text-black shrink-0" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono-code text-[10px] uppercase tracking-wider px-2.5 py-1 rounded bg-black/10 text-black font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Dynamic Visual Mockup Preview */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0e] p-2 aspect-[4/5] flex flex-col justify-between shadow-2xl">
              <div className="relative h-3/5 w-full overflow-hidden rounded-2xl">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="h-full w-full object-cover grayscale contrast-125 transition-all duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 font-mono-code text-xs font-bold tracking-widest text-white px-3.5 py-1.5 bg-black/70 backdrop-blur-md rounded-full border border-white/20 flex items-center gap-2">
                  {activeService.deviceType === "desktop" && <Laptop className="h-3.5 w-3.5" />}
                  {activeService.deviceType === "mobile" && <Smartphone className="h-3.5 w-3.5" />}
                  {activeService.deviceType === "saas" && <Monitor className="h-3.5 w-3.5" />}
                  <span>{activeService.number} // CAPABILITY</span>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="font-display text-xl font-bold text-white mb-2">
                    {activeService.title}
                  </h4>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed mb-4">
                    {activeService.description}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 py-3 text-xs font-mono-code uppercase tracking-wider text-white hover:bg-white hover:text-black transition-colors"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
