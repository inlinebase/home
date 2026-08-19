"use client";

import { BRAND_MARQUEE_ITEMS } from "@/data/companyData";

export default function MarqueeSection() {
  return (
    <section className="relative py-16 bg-[#050505] border-y border-white/10 overflow-hidden select-none">
      {/* Track 1: Leftward Infinite Marquee */}
      <div className="flex overflow-hidden w-full mb-4">
        <div className="animate-marquee flex items-center whitespace-nowrap gap-8">
          {[...BRAND_MARQUEE_ITEMS, ...BRAND_MARQUEE_ITEMS].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase">
                {item}
              </span>
              <span className="text-2xl sm:text-4xl text-zinc-600 font-bold">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Track 2: Rightward Outlined Infinite Marquee */}
      <div className="flex overflow-hidden w-full">
        <div className="animate-marquee-reverse flex items-center whitespace-nowrap gap-8">
          {[...BRAND_MARQUEE_ITEMS, ...BRAND_MARQUEE_ITEMS].reverse().map((item, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-stroke-white tracking-tight uppercase">
                {item}
              </span>
              <span className="text-2xl sm:text-4xl text-zinc-700 font-bold">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
