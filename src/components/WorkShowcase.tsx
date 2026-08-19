"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS, ProjectItem } from "@/data/companyData";
import ProjectModal from "./ProjectModal";
import { ArrowUpRight, Laptop, Smartphone, Monitor } from "lucide-react";

export default function WorkShowcase() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const sectionRef = useRef<HTMLElement>(null);

  const categories = ["ALL", "Website", "Mobile App", "SaaS Product"];

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeCategory === "ALL") return true;
    return p.category === activeCategory;
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll(".work-card");
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
  }, [activeCategory]);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-8 lg:px-12 bg-[#050505] border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono-code text-[11px] sm:text-xs text-zinc-400 uppercase tracking-widest mb-2.5">
              <span className="h-1.5 w-1.5 bg-white" />
              <span>02 // VISUAL WORK &amp; DEVICE MOCKUPS</span>
            </div>
            <h2 className="font-display font-extrabold clamp-section text-white tracking-tight uppercase leading-none">
              FEATURED PORTFOLIO.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono-code text-zinc-400 max-w-md leading-relaxed">
            Explore our production websites, native iOS &amp; Android mobile apps, and SaaS interfaces in realistic device mockups.
          </p>
        </div>

        {/* Filter Pills with Horizontal Touch Scroll */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-mono-code text-xs uppercase tracking-wider transition-all duration-300 shrink-0 ${
                  activeCategory === cat
                    ? "bg-white text-black font-bold scale-[1.02] shadow-lg"
                    : "bg-white/5 text-zinc-400 hover:text-white border border-white/10 hover:border-white/30"
                }`}
                data-cursor="FILTER"
              >
                {cat === "ALL" ? "All Works" : `${cat}s`}
              </button>
            ))}
          </div>

          <span className="hidden sm:inline-block font-mono-code text-[11px] text-zinc-500 uppercase tracking-widest shrink-0">
            Swipe to Explore →
          </span>
        </div>

        {/* Swipe Indicator for Mobile */}
        <div className="flex md:hidden items-center justify-between text-zinc-400 font-mono-code text-[10px] uppercase tracking-wider mb-6">
          <span>{filteredProjects.length} Projects Available</span>
          <span className="animate-pulse flex items-center gap-1 text-white">
            <span>Swipe Horizontally</span> →
          </span>
        </div>

        {/* Device Mockup Portfolio Grid / Mobile Touch Carousel */}
        <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 gap-5 sm:gap-8 lg:gap-12 pb-6 md:pb-0 no-scrollbar">
          {filteredProjects.map((project) => {
            const isMobile = project.deviceType === "mobile";
            const isDesktop = project.deviceType === "desktop";
            const isSaaS = project.deviceType === "saas";

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="work-card snap-center shrink-0 w-[85vw] sm:w-[420px] md:w-auto group relative rounded-2xl sm:rounded-3xl bg-[#0e0e16] border border-white/20 p-4 sm:p-8 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-500 hover:border-white hover:bg-[#141420] hover:shadow-2xl"
                data-cursor="INSPECT"
              >
                {/* Top Badge & Category Icon */}
                <div className="flex items-center justify-between mb-4 sm:mb-6 z-10">
                  <div className="flex items-center gap-2 font-mono-code text-[11px] sm:text-xs text-white bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/25">
                    {isDesktop && <Laptop className="h-3.5 w-3.5 text-zinc-200" />}
                    {isMobile && <Smartphone className="h-3.5 w-3.5 text-zinc-200" />}
                    {isSaaS && <Monitor className="h-3.5 w-3.5 text-zinc-200" />}
                    <span className="uppercase font-bold tracking-wider">{project.category}</span>
                  </div>
                  <span className="font-mono-code text-[11px] sm:text-xs font-bold text-white bg-black/90 px-3 py-1 rounded-full border border-white/30">
                    {project.year}
                  </span>
                </div>

                {/* Device Frame Visual Mockup Container */}
                <div className="relative my-3 sm:my-4 w-full flex items-center justify-center min-h-[220px] sm:min-h-[320px] rounded-xl sm:rounded-2xl overflow-hidden bg-black/80 p-3 sm:p-4 border border-white/15">
                  {/* Desktop Browser Frame */}
                  {isDesktop && (
                    <div className="w-full rounded-lg sm:rounded-xl overflow-hidden border border-white/30 shadow-2xl bg-zinc-900">
                      <div className="h-5 sm:h-6 bg-zinc-950 px-2.5 flex items-center gap-1.5 border-b border-zinc-800">
                        <div className="h-2 w-2 rounded-full bg-rose-500" />
                        <div className="h-2 w-2 rounded-full bg-amber-500" />
                        <div className="h-2 w-2 rounded-full bg-emerald-500" />
                        <div className="ml-2 h-3 sm:h-3.5 w-36 sm:w-52 rounded bg-zinc-800 font-mono-code text-[8px] sm:text-[9px] text-zinc-300 flex items-center px-2 truncate">
                          https://{project.id}.inlinebase.com
                        </div>
                      </div>
                      <div className="relative aspect-[16/9] w-full overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  )}

                  {/* Mobile iPhone Device Frame */}
                  {isMobile && (
                    <div className="w-40 sm:w-56 rounded-[28px] sm:rounded-[32px] overflow-hidden border-4 border-zinc-700 shadow-2xl bg-black p-1 sm:p-1.5 relative">
                      <div className="w-16 sm:w-20 h-3.5 sm:h-4 bg-zinc-900 rounded-b-xl mx-auto mb-1 flex items-center justify-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
                      </div>
                      <div className="relative aspect-[9/18] w-full rounded-[20px] sm:rounded-[24px] overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  )}

                  {/* SaaS Split Screen Frame */}
                  {isSaaS && (
                    <div className="w-full rounded-lg sm:rounded-xl overflow-hidden border border-white/30 shadow-2xl bg-zinc-900">
                      <div className="h-5 sm:h-6 bg-zinc-950 px-2.5 flex items-center justify-between border-b border-zinc-800">
                        <span className="font-mono-code text-[8px] sm:text-[9px] text-zinc-300 truncate">SAAS DASHBOARD // REVISION 4.2</span>
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                      </div>
                      <div className="relative aspect-[16/9] w-full overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Content & Meta */}
                <div className="z-10 pt-3 sm:pt-4 border-t border-zinc-800">
                  <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight mb-1.5">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed mb-3 sm:mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="font-mono-code text-[9px] sm:text-[10px] uppercase tracking-wider px-2.5 py-1 rounded bg-white/15 border border-white/20 text-white font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-1 font-mono-code text-xs font-bold text-white group-hover:underline">
                      <span>Inspect</span>
                      <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Inspector Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
