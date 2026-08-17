"use client";

import React, { useState } from "react";
import { Copy, Check, Play, Terminal as TerminalIcon, Sparkles } from "lucide-react";

export default function InteractiveTerminal() {
  const [activeTab, setActiveTab] = useState<"ts" | "rust" | "python">("ts");
  const [copied, setCopied] = useState(false);
  const [isRunningBenchmark, setIsRunningBenchmark] = useState(false);
  const [latencyHistory, setLatencyHistory] = useState<number[]>([0.16, 0.14, 0.15, 0.13, 0.14, 0.12]);

  const codeExamples = {
    ts: `import { InlinebaseClient } from "@inlinebase/sdk";

// Initialize sub-millisecond client connection
const db = new InlinebaseClient({
  endpoint: "wss://edge.inlinebase.io",
  apiKey: process.env.INLINEBASE_KEY,
});

// Perform high-frequency zero-copy point lookup
const record = await db.query("users", {
  id: "usr_99841",
  consistency: "strong_read",
});

console.log(\`Latency: \${record.meta.latencyMs}ms\`);`,

    rust: `use inlinebase_sdk::{Client, QueryOptions, Consistency};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::connect("wss://edge.inlinebase.io", "ib_sec_key").await?;
    
    let record = client
        .table("events")
        .get("evt_40912")
        .consistency(Consistency::Strong)
        .execute()
        .await?;

    println!("Read latency: {} µs", record.latency_micros());
    Ok(())
}`,

    python: `from inlinebase import InlinebaseEngine

# Initialize low-latency sync client
engine = InlinebaseEngine.connect("wss://edge.inlinebase.io", api_key="ib_key")

# Execute zero-copy batch fetch
results = engine.batch_get(
    table="financial_ticks",
    keys=["AAPL", "NVDA", "MSFT"],
    timeout_ms=1.0
)

print(f"Batch latency: {results.metrics.latency_ms} ms")`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const runBenchmark = () => {
    setIsRunningBenchmark(true);
    let count = 0;
    const interval = setInterval(() => {
      const nextVal = Number((0.11 + Math.random() * 0.05).toFixed(2));
      setLatencyHistory((prev) => [...prev.slice(1), nextVal]);
      count++;
      if (count > 6) {
        clearInterval(interval);
        setIsRunningBenchmark(false);
      }
    }, 150);
  };

  return (
    <section id="architecture" className="py-28 bg-[#030303] border-b border-[#1f1f1f]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-neutral-900">
          <div>
            <div className="status-badge mb-4">
              <span>DEVELOPER INTERFACE</span>
            </div>
            <h2 className="font-heading text-4xl md:text-6xl font-extrabold uppercase text-white tracking-tight">
              Interactive Terminal
            </h2>
          </div>
          <p className="text-neutral-400 font-body max-w-md mt-4 md:mt-0">
            Plug inlinebase into any language stack with zero-dependency SDKs and native binary bindings.
          </p>
        </div>

        {/* Console Container */}
        <div className="bg-[#080808] border border-neutral-800 shadow-2xl">
          {/* Console Header Bar */}
          <div className="flex flex-wrap items-center justify-between px-6 py-4 border-b border-neutral-800 bg-[#0c0c0c]">
            {/* Tabs */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab("ts")}
                className={`px-4 py-2 text-xs font-ui font-semibold uppercase tracking-wider transition-colors ${
                  activeTab === "ts"
                    ? "bg-white text-black"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                }`}
              >
                TypeScript / JS
              </button>
              <button
                onClick={() => setActiveTab("rust")}
                className={`px-4 py-2 text-xs font-ui font-semibold uppercase tracking-wider transition-colors ${
                  activeTab === "rust"
                    ? "bg-white text-black"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                }`}
              >
                Rust Native
              </button>
              <button
                onClick={() => setActiveTab("python")}
                className={`px-4 py-2 text-xs font-ui font-semibold uppercase tracking-wider transition-colors ${
                  activeTab === "python"
                    ? "bg-white text-black"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                }`}
              >
                Python
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 mt-3 sm:mt-0">
              <button
                onClick={runBenchmark}
                disabled={isRunningBenchmark}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white font-ui text-xs font-medium transition-all"
              >
                <Play size={12} className={isRunningBenchmark ? "animate-spin" : ""} />
                {isRunningBenchmark ? "Testing Latency..." : "Run Micro-Benchmark"}
              </button>

              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-2 text-xs font-ui text-neutral-400 hover:text-white transition-colors"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                {copied ? "Copied" : "Copy Code"}
              </button>
            </div>
          </div>

          {/* Main Console Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Code Output */}
            <div className="lg:col-span-8 p-6 lg:p-8 font-mono text-sm leading-relaxed overflow-x-auto text-neutral-200 bg-[#050505] border-r border-neutral-900">
              <pre>
                <code>{codeExamples[activeTab]}</code>
              </pre>
            </div>

            {/* Live Visual Latency Graph Panel */}
            <div className="lg:col-span-4 p-6 lg:p-8 bg-[#0a0a0a] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-ui text-xs text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                    <TerminalIcon size={14} /> Telemetry Monitor
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                </div>

                <div className="text-4xl font-heading font-extrabold text-white mb-1">
                  {latencyHistory[latencyHistory.length - 1]} <span className="text-sm font-normal text-neutral-400">ms</span>
                </div>
                <div className="text-xs font-ui text-neutral-400 mb-6">
                  Live response time across global nodes
                </div>

                {/* SVG Latency Bar Chart */}
                <div className="h-32 flex items-end gap-3 pt-4 pb-2 border-b border-neutral-800">
                  {latencyHistory.map((val, idx) => {
                    const heightPercent = Math.min(100, Math.max(20, (val / 0.2) * 100));
                    return (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                        <div
                          style={{ height: `${heightPercent}%` }}
                          className="w-full bg-gradient-to-t from-neutral-800 to-white transition-all duration-300"
                        ></div>
                        <span className="font-mono text-[10px] text-neutral-500">t-{6 - idx}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 pt-4 text-xs font-ui text-neutral-400 flex items-center justify-between">
                <span>AWS US-East-1 Edge</span>
                <span className="text-emerald-400 font-mono">0 PACKET LOSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
