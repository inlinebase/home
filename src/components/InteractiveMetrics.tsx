"use client";

import React, { useState } from "react";
import { Sliders, Zap, CheckCircle2, Server } from "lucide-react";

export default function InteractiveMetrics() {
  const [volume, setVolume] = useState<number>(10); // millions per sec

  // Dynamic calculations
  const inlinebaseLatency = (0.12 + (volume / 50) * 0.05).toFixed(2);
  const legacyLatency = (4.8 + (volume / 50) * 12.5).toFixed(2);
  const costSavings = Math.round((1 - 0.14) * 100);
  const nodesRequiredInlinebase = Math.max(2, Math.ceil(volume / 5));
  const nodesRequiredLegacy = Math.max(12, Math.ceil(volume * 4.5));

  return (
    <section id="benchmarks" className="py-28 bg-[#030303] border-b border-[#1f1f1f]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-neutral-900">
          <div>
            <div className="status-badge mb-4">
              <span>BENCHMARK CALCULATOR</span>
            </div>
            <h2 className="font-heading text-4xl md:text-6xl font-extrabold uppercase text-white tracking-tight">
              Scale Simulator
            </h2>
          </div>
          <p className="text-neutral-400 font-body max-w-md mt-4 md:mt-0">
            Adjust the workload volume to compare inlinebase sub-millisecond execution against legacy cloud databases.
          </p>
        </div>

        {/* Interactive Slider & Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Slider Control Box */}
          <div className="lg:col-span-5 bg-[#080808] border border-neutral-800 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-ui text-xs text-neutral-400 uppercase tracking-widest flex items-center gap-2">
                  <Sliders size={14} /> Query Workload Volume
                </span>
                <span className="font-mono text-xs text-white bg-neutral-900 px-2 py-1 border border-neutral-800">
                  REAL-TIME SIMULATION
                </span>
              </div>

              <div className="my-8">
                <div className="flex justify-between items-baseline mb-4">
                  <span className="text-sm font-ui text-neutral-400">Operations / sec</span>
                  <span className="font-heading font-extrabold text-4xl text-white">
                    {volume}M
                  </span>
                </div>

                <input
                  type="range"
                  min="1"
                  max="50"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-800 rounded-none appearance-none cursor-pointer accent-white"
                />
                <div className="flex justify-between font-mono text-[10px] text-neutral-500 mt-2">
                  <span>1M ops/sec</span>
                  <span>25M ops/sec</span>
                  <span>50M ops/sec</span>
                </div>
              </div>
            </div>

            {/* Impact Highlights */}
            <div className="space-y-4 pt-6 border-t border-neutral-900 font-ui text-xs">
              <div className="flex items-center justify-between text-neutral-300">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400" /> Infrastructure Cost Reduction
                </span>
                <span className="font-bold text-white text-sm">{costSavings}% LOWER</span>
              </div>
              <div className="flex items-center justify-between text-neutral-300">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400" /> Max Memory Copy Penalty
                </span>
                <span className="font-bold text-white text-sm">0 BYTES</span>
              </div>
            </div>
          </div>

          {/* Comparison Display */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Inlinebase Card */}
            <div className="bg-[#0c0c0c] border-2 border-white p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-white text-black font-ui font-extrabold text-[10px] uppercase px-3 py-1 tracking-wider">
                INLINEBASE
              </div>

              <div>
                <span className="font-ui text-xs text-neutral-400 uppercase tracking-wider">
                  Engine Latency
                </span>
                <div className="font-heading font-extrabold text-5xl text-white my-3">
                  {inlinebaseLatency} <span className="text-lg font-normal text-neutral-400">ms</span>
                </div>
                <p className="text-xs text-neutral-400 font-body leading-relaxed mb-6">
                  Zero-copy ring buffer with lock-free vector index.
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-800 flex items-center justify-between font-ui text-xs">
                <span className="text-neutral-400 flex items-center gap-1.5">
                  <Server size={14} /> AWS Instances Needed
                </span>
                <span className="font-mono text-white font-bold text-base">
                  {nodesRequiredInlinebase} x c7g.xlarge
                </span>
              </div>
            </div>

            {/* Traditional DB Card */}
            <div className="bg-[#060606] border border-neutral-800 p-8 flex flex-col justify-between">
              <div>
                <span className="font-ui text-xs text-neutral-500 uppercase tracking-wider">
                  Traditional RDBMS / NoSQL
                </span>
                <div className="font-heading font-extrabold text-5xl text-neutral-500 my-3">
                  {legacyLatency} <span className="text-lg font-normal text-neutral-600">ms</span>
                </div>
                <p className="text-xs text-neutral-500 font-body leading-relaxed mb-6">
                  Serialization locks, thread context switches, and cache thrashing.
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-900 flex items-center justify-between font-ui text-xs">
                <span className="text-neutral-500 flex items-center gap-1.5">
                  <Server size={14} /> AWS Instances Needed
                </span>
                <span className="font-mono text-neutral-400 font-bold text-base">
                  {nodesRequiredLegacy} x c7g.xlarge
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
