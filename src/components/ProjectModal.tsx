"use client";

import { useEffect } from "react";
import { ProjectItem } from "@/data/companyData";
import { CheckCircle, X } from "lucide-react";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-[#0e0e14] border border-white/20 p-5 sm:p-10 text-white shadow-2xl">
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          className="sticky top-0 float-right z-20 p-2.5 sm:p-3 rounded-full bg-white text-black hover:bg-zinc-200 transition-colors shadow-lg cursor-pointer"
          aria-label="Close Case Study"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header Metadata */}
        <div className="clear-both pt-2">
          <div className="flex items-center gap-3 font-mono-code text-xs text-zinc-400 uppercase tracking-widest mb-2">
            <span>{project.category}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight mb-3">
            {project.title}
          </h2>
          <p className="text-xs sm:text-sm font-mono-code text-zinc-400 mb-6">
            Client: <span className="text-white font-semibold">{project.client}</span>
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative h-48 sm:h-80 w-full rounded-xl sm:rounded-2xl overflow-hidden mb-6 border border-white/15">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Key Performance Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 mb-6">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <span className="font-display text-xl sm:text-3xl font-extrabold text-white block">
                {m.value}
              </span>
              <span className="font-mono-code text-[11px] sm:text-xs text-zinc-400 uppercase tracking-wider">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {/* Case Study Details */}
        <div className="space-y-5 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
          <div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-1.5">Project Overview</h3>
            <p className="text-zinc-200">{project.overview}</p>
          </div>

          <div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-1.5">Engineering &amp; Architecture</h3>
            <p className="text-zinc-200">{project.architecture}</p>
          </div>

          <div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-1.5">Commercial Impact</h3>
            <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-zinc-950 border border-white/10">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-white shrink-0 mt-0.5" />
              <p className="text-white font-medium">{project.impact}</p>
            </div>
          </div>

          <div className="pt-4 border-t border-zinc-800">
            <span className="font-mono-code text-xs text-zinc-400 uppercase tracking-widest block mb-2.5">
              Technologies &amp; Architecture Stack
            </span>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono-code text-[10px] sm:text-xs px-3 py-1 rounded bg-white/10 border border-white/15 text-white font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="mt-8 pt-5 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="font-mono-code text-[10px] text-zinc-500 uppercase">INLINEBASE CASE STUDY // CONFIDENTIAL ARCHITECTURE</span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white text-black font-mono-code text-xs uppercase font-bold tracking-wider hover:bg-zinc-200 cursor-pointer"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
}
