"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ExternalLink, Mail, ArrowUpRight, CheckCircle } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onOpenBookCall?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenBookCall }) => {
  const [copied, setCopied] = useState(false);

  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      data-cursor="VIEW"
      className="group relative bg-neutral-950 border border-neutral-800 rounded-none overflow-hidden transition-all duration-500 hover:border-neutral-500 hover:shadow-2xl flex flex-col justify-between"
    >
      {/* Desktop Viewport Browser Frame Header */}
      <div className="bg-neutral-900 border-b border-neutral-800 px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-700 group-hover:bg-red-500/80 transition-colors" />
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-700 group-hover:bg-yellow-500/80 transition-colors" />
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-700 group-hover:bg-green-500/80 transition-colors" />
        </div>
        <span className="text-[10px] font-mono text-neutral-500 tracking-widest uppercase truncate max-w-[180px]">
          {project.slug}.inlinebase.com
        </span>
        <div className="w-8" />
      </div>

      {/* Hero Visual Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 flex items-center justify-center p-6 text-white select-none">
        {/* Abstract Architectural Mockup Canvas */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.previewTheme} transition-transform duration-700 group-hover:scale-105`}
        />

        {/* Subtle Geometric Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

        {/* Center Mockup Content */}
        <div className="relative z-10 text-center space-y-3 p-4">
          <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md text-[10px] font-mono tracking-widest uppercase border border-white/20 text-neutral-300">
            {project.categoryLabel}
          </span>
          <h4 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white group-hover:translate-y-[-2px] transition-transform">
            {project.title}
          </h4>
          <p className="text-xs font-mono text-neutral-400 max-w-xs mx-auto line-clamp-1 italic">
            "{project.heroTagline}"
          </p>
        </div>

        {/* Metrics Badge */}
        {project.metrics && project.metrics[0] && (
          <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md border border-neutral-700 px-3 py-1.5 text-left">
            <div className="text-[9px] font-mono text-neutral-400 uppercase">
              {project.metrics[0].label}
            </div>
            <div className="text-xs font-bold text-white font-mono">
              {project.metrics[0].value}
            </div>
          </div>
        )}

        {/* Hover Overlay Fade */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] flex items-center justify-center">
          <Link
            href={`/portfolio/${project.category}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-xs font-mono tracking-widest uppercase font-semibold hover:bg-neutral-200 transition-all transform translate-y-2 group-hover:translate-y-0 duration-300"
          >
            <span>Explore Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Card Content Footer */}
      <div className="p-6 bg-neutral-950 text-white flex-1 flex flex-col justify-between border-t border-neutral-900">
        <div>
          <div className="flex items-center justify-between text-xs text-neutral-400 font-mono mb-2">
            <span>{project.client}</span>
            <span>{project.year}</span>
          </div>

          <h3 className="text-xl font-bold tracking-tight text-white mb-2 group-hover:text-neutral-200 transition-colors">
            {project.title}
          </h3>

          <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action CTA Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-4 border-t border-neutral-900">
          <button
            onClick={handleDemoClick}
            data-cursor="DEMO"
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-mono text-neutral-200 transition-colors"
          >
            {copied ? (
              <>
                <CheckCircle className="w-3.5 h-3.5 text-white" />
                <span>Demo Live</span>
              </>
            ) : (
              <>
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Visit Demo</span>
              </>
            )}
          </button>

          <button
            onClick={onOpenBookCall}
            data-cursor="BOOK"
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-white hover:bg-neutral-200 text-black text-xs font-mono font-bold tracking-wider transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </button>
        </div>
      </div>
    </div>
  );
};
