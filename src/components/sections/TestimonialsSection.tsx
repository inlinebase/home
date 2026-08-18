"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, TrendingUp } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section className="py-28 px-6 md:px-12 bg-black text-white overflow-hidden border-t border-neutral-900">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-neutral-900">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-2 text-white">
              Verified Executive Impact.
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center space-x-3">
            <button
              onClick={prevSlide}
              data-cursor="PREV"
              className="p-3 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white transition-colors"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              data-cursor="NEXT"
              className="p-3 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white transition-colors"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonial Card Display */}
        <div className="relative bg-neutral-900/40 border border-neutral-800 p-8 md:p-16 transition-all duration-500">
          <Quote className="w-12 h-12 text-neutral-700 mb-8 opacity-40" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Quote Body */}
            <div className="lg:col-span-2 space-y-6">
              <blockquote className="text-2xl sm:text-3xl md:text-4xl font-light text-white leading-snug tracking-tight">
                "{currentTestimonial.quote}"
              </blockquote>

              <div className="pt-4 border-t border-neutral-800/60">
                <div className="text-lg font-bold text-white font-sans">
                  {currentTestimonial.author}
                </div>
                <div className="text-xs font-mono text-neutral-400">
                  {currentTestimonial.role} — <span className="text-white font-semibold">{currentTestimonial.company}</span>
                </div>
              </div>
            </div>

            {/* Metrics Sidebar */}
            <div className="lg:col-span-1 bg-black/60 border border-neutral-800 p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-widest">
                <TrendingUp className="w-4 h-4 text-white" />
                <span>MEASURED RESULT</span>
              </div>
              <div className="text-3xl font-extrabold font-mono text-white tracking-tight">
                {currentTestimonial.metrics}
              </div>
              <div className="text-[11px] font-mono text-neutral-500 uppercase border-t border-neutral-900 pt-3">
                INDUSTRY: {currentTestimonial.industry}
              </div>
            </div>
          </div>

          {/* Slider Dots */}
          <div className="flex justify-center space-x-2 pt-12">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 transition-all duration-300 ${
                  idx === currentIndex ? "w-10 bg-white" : "w-3 bg-neutral-700 hover:bg-neutral-500"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
