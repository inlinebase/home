"use client";

import React, { useState } from "react";
import { ArrowUpRight, Cpu, Layers, HardDrive, RefreshCw, Check } from "lucide-react";

interface Pillar {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  specs: string[];
  snippet: string;
}

export default function PillarsSection() {
  const [activePillar, setActivePillar] = useState<string>("01");

  const pillars: Pillar[] = [
    {
      id: "01",
      num: "01",
      title: "Zero-Copy Execution",
      subtitle: "Direct Memory Buffer Mapping",
      description:
        "Bypasses kernel serialization layers to stream query results directly from physical memory buffers to client sockets with zero intermediate object allocation.",
      icon: <Cpu className="text-white" size={24} />,
      specs: ["P99 Latency: 0.12ms", "Memory Overhead: 0%", "Lock-Free Ring Buffers"],
      snippet: `// Inlinebase Zero-Copy Read
let buffer = inlinebase::mmap_ring_buffer("/var/data/table.ib")?;
let reader = buffer.zero_copy_reader();
let record = reader.read_direct(index_hash)?;`,
    },
    {
      id: "02",
      num: "02",
      title: "Deterministic Storage",
      subtitle: "B-Tree Vector Hybrid Engine",
      description:
        "Combines cache-line aligned B-Trees withSIMD vector indexes, enabling microsecond lookup speed across billions of high-dimensional records.",
      icon: <Layers className="text-white" size={24} />,
      specs: ["SIMD AVX-512 Optimized", "Cache-Line Aligned Nodes", "Constant-Time Hash Lookups"],
      snippet: `// Vector Index Traversal
val index = InlinebaseEngine.loadVectorIndex("embeddings.idx")
val nearest = index.searchSIMD(queryVector, k = 10, efSearch = 64)
println(nearest.latencyMicroseconds)`,
    },
    {
      id: "03",
      num: "03",
      title: "Distributed Consensus",
      subtitle: "Sub-Millisecond Raft Sync",
      description:
        "Ultra-lean binary consensus protocol designed for multi-region replication without synchronization penalty or tail-latency spikes.",
      icon: <HardDrive className="text-white" size={24} />,
      specs: ["Quorum Sync: < 1ms", "Zero-Downtime Failover", "Strict Serializability"],
      snippet: `// Multi-Region Quorum Replication
const node = new InlinebaseCluster({
  regions: ["us-east-1", "eu-west-1", "ap-northeast-1"],
  consensus: "raft-fast-path"
});
await node.commitSync(record);`,
    },
    {
      id: "04",
      num: "04",
      title: "Autonomous Schemas",
      subtitle: "Dynamic Type Compilation",
      description:
        "Compiles JSON and binary payload schemas on-the-fly into native JIT machine code, removing parsing bottlenecks completely.",
      icon: <RefreshCw className="text-white" size={24} />,
      specs: ["JIT Compiler Pipeline", "Schema-Less Agility", "Native Assembly Output"],
      snippet: `// JIT Schema Compilation
engine := inlinebase.NewJITCompiler()
compiledSchema := engine.CompileStruct(UserEvent{})
runtime.ExecuteJIT(compiledSchema, payloadBuffer)`,
    },
  ];

  const current = pillars.find((p) => p.id === activePillar) || pillars[0];

  return (
    <section id="capabilities" className="py-28 bg-[#050505] border-b border-[#1f1f1f]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-neutral-900">
          <div>
            <div className="status-badge mb-4">
              <span>ENGINE ARCHITECTURE</span>
            </div>
            <h2 className="font-heading text-4xl md:text-6xl font-extrabold uppercase text-white tracking-tight">
              Core Capabilities
            </h2>
          </div>
          <p className="text-neutral-400 font-body max-w-md mt-4 md:mt-0">
            Engineered from scratch for systems demanding absolute predictability, extreme concurrency, and sub-millisecond guarantees.
          </p>
        </div>

        {/* Pillars Grid & Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Grid Selector */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar) => {
              const isSelected = activePillar === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar.id)}
                  className={`text-left p-6 transition-all duration-300 border ${
                    isSelected
                      ? "bg-[#141414] border-white text-white shadow-2xl scale-[1.02]"
                      : "bg-[#0a0a0a] border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-ui font-bold text-sm tracking-widest text-neutral-500">
                      {pillar.num}
                    </span>
                    <div className="p-2 bg-neutral-900 border border-neutral-800">
                      {pillar.icon}
                    </div>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-2 uppercase">
                    {pillar.title}
                  </h3>
                  <p className="font-ui text-xs text-neutral-400">
                    {pillar.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Pillar Inspector */}
          <div className="lg:col-span-6 bg-[#0a0a0a] border border-neutral-800 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
                <span className="font-ui text-xs font-semibold tracking-widest text-neutral-500 uppercase">
                  Pillar Specs // {current.num}
                </span>
                <span className="text-xs font-mono text-white px-2 py-1 bg-neutral-900 border border-neutral-800">
                  {current.title}
                </span>
              </div>

              <h3 className="font-heading text-3xl font-extrabold text-white mb-4 uppercase">
                {current.title}
              </h3>
              <p className="text-neutral-300 font-body leading-relaxed mb-8">
                {current.description}
              </p>

              {/* Specs checklist */}
              <div className="space-y-3 mb-8">
                {current.specs.map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-3 font-ui text-sm text-neutral-300">
                    <div className="w-5 h-5 bg-white text-black flex items-center justify-center font-bold">
                      <Check size={12} />
                    </div>
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Snippet Box */}
            <div className="bg-[#030303] border border-neutral-800 p-4 font-mono text-xs text-neutral-300 overflow-x-auto">
              <div className="text-neutral-600 mb-2 flex items-center justify-between">
                <span>execution_kernel.rs</span>
                <span className="text-[10px] uppercase text-neutral-500">Rust Core</span>
              </div>
              <pre className="text-white leading-relaxed">{current.snippet}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
