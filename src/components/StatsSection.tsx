"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STATS, StatItem } from "@/data/companyData";

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    "stat-volume": 0,
    "stat-uptime": 0,
    "stat-projects": 0,
    "stat-latency": 0,
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 75%",
        onEnter: () => {
          if (hasAnimated) return;
          setHasAnimated(true);

          STATS.forEach((stat) => {
            const obj = { val: 0 };
            gsap.to(obj, {
              val: stat.value,
              duration: 2.2,
              ease: "power3.out",
              onUpdate: () => {
                setCounts((prev) => ({
                  ...prev,
                  [stat.id]: obj.val,
                }));
              },
            });
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [hasAnimated]);

  const formatValue = (stat: StatItem, currentVal: number) => {
    if (stat.decimals) {
      return currentVal.toFixed(stat.decimals);
    }
    return Math.floor(currentVal).toString();
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 sm:px-8 lg:px-12 bg-[#050505] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 font-mono-code text-xs text-zinc-400 uppercase tracking-widest mb-12">
          <span className="h-1.5 w-1.5 bg-white" />
          <span>04 // PROVEN METRICS &amp; SLA</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800">
          {STATS.map((stat, idx) => {
            const currentVal = counts[stat.id] || 0;
            return (
              <div
                key={stat.id}
                className={`pt-6 sm:pt-0 ${idx !== 0 ? "sm:pl-8" : ""}`}
                data-cursor="METRIC"
              >
                <div className="font-display font-black text-5xl sm:text-6xl text-white tracking-tight mb-2">
                  <span>{stat.prefix}</span>
                  <span>{formatValue(stat, currentVal)}</span>
                  <span>{stat.suffix}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-zinc-200 mb-1">
                  {stat.label}
                </h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
