"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/data/services";

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-28 px-6 md:px-12 bg-neutral-950 text-white overflow-hidden border-t border-neutral-900">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-neutral-900">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500">
              OUR CAPABILITIES
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-2 text-white">
              Core Services & Engineering.
            </h2>
          </div>
          <p className="text-sm font-mono text-neutral-400 max-w-md leading-relaxed">
            We don't offer generic templates. Every website is engineered from scratch for brand authority, ultra-fast performance, and high conversion.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              data-cursor="SERVICE"
              className="group relative bg-neutral-900/60 border border-neutral-800 p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 hover:border-neutral-500 hover:bg-neutral-900 hover:shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-6">
                  <span>{service.number}</span>
                  <span className="w-2 h-2 rounded-full bg-neutral-700 group-hover:bg-white transition-colors" />
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-white mb-2 group-hover:text-neutral-200 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs font-mono text-neutral-400 mb-4 uppercase tracking-wider">
                  {service.subtitle}
                </p>

                <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="pt-6 border-t border-neutral-800/80">
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-3">
                  Key Deliverables
                </h4>
                <ul className="space-y-1.5 text-[11px] font-mono text-neutral-400">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-neutral-600 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Indicator */}
              <div className="mt-8 pt-4 flex items-center justify-between text-xs font-mono text-neutral-400 group-hover:text-white transition-colors">
                <span>EXPLORE SCOPE</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Link */}
        <div className="text-center pt-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 text-xs font-mono tracking-widest uppercase text-neutral-400 hover:text-white transition-colors border-b border-neutral-700 pb-1"
          >
            <span>View Comprehensive Service Breakdown</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
