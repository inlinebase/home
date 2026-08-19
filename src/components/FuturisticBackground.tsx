"use client";

import { useEffect, useRef } from "react";

export default function FuturisticBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Mouse tracking for subtle glow spotlight
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Grid config
    const gridSize = 64;

    // Glowing data pulses traveling along grid lines
    const pulses: {
      x: number;
      y: number;
      dx: number;
      dy: number;
      length: number;
      speed: number;
      opacity: number;
    }[] = [];

    for (let i = 0; i < 18; i++) {
      const isHorizontal = Math.random() > 0.5;
      const gridX = Math.floor((Math.random() * width) / gridSize) * gridSize;
      const gridY = Math.floor((Math.random() * height) / gridSize) * gridSize;

      pulses.push({
        x: gridX,
        y: gridY,
        dx: isHorizontal ? (Math.random() > 0.5 ? 1 : -1) : 0,
        dy: !isHorizontal ? (Math.random() > 0.5 ? 1 : -1) : 0,
        length: Math.random() * 80 + 40,
        speed: Math.random() * 1.5 + 0.8,
        opacity: Math.random() * 0.4 + 0.2,
      });
    }

    let animationId: number;

    const render = () => {
      // Lerp mouse
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // 1. Mouse Spotlight Radial Glow
      const radGlow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 500);
      radGlow.addColorStop(0, "rgba(255, 255, 255, 0.06)");
      radGlow.addColorStop(0.5, "rgba(255, 255, 255, 0.02)");
      radGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = radGlow;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw Futuristic Grid Lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.035)";
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 3. Draw Grid Intersection Crosshairs (+)
      ctx.fillStyle = "rgba(255, 255, 255, 0.12)";
      for (let x = 0; x < width; x += gridSize * 2) {
        for (let y = 0; y < height; y += gridSize * 2) {
          ctx.fillRect(x - 1, y - 1, 3, 3);
        }
      }

      // 4. Update & Draw Grid Pulses
      pulses.forEach((p) => {
        p.x += p.dx * p.speed;
        p.y += p.dy * p.speed;

        // Reset offscreen
        if (p.x < -100 || p.x > width + 100 || p.y < -100 || p.y > height + 100) {
          const isHorizontal = Math.random() > 0.5;
          p.x = Math.floor((Math.random() * width) / gridSize) * gridSize;
          p.y = Math.floor((Math.random() * height) / gridSize) * gridSize;
          p.dx = isHorizontal ? (Math.random() > 0.5 ? 1 : -1) : 0;
          p.dy = !isHorizontal ? (Math.random() > 0.5 ? 1 : -1) : 0;
        }

        // Draw pulse beam
        const grad = ctx.createLinearGradient(
          p.x,
          p.y,
          p.x - p.dx * p.length,
          p.y - p.dy * p.length
        );
        grad.addColorStop(0, `rgba(255, 255, 255, ${p.opacity})`);
        grad.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - p.dx * p.length, p.y - p.dy * p.length);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
      {/* Background Interactive Canvas Grid & Beam Field */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-90" />

      {/* Floating Futuristic Ambient Radar Rings */}
      <div className="absolute top-1/4 -left-32 h-[500px] w-[500px] rounded-full border border-white/5 animate-spin-slow" />
      <div className="absolute top-1/3 -left-20 h-[380px] w-[380px] rounded-full border border-dashed border-white/10 animate-reverse-spin" />

      <div className="absolute bottom-1/4 -right-32 h-[600px] w-[600px] rounded-full border border-white/5 animate-spin-slow" />
      <div className="absolute bottom-1/3 -right-20 h-[420px] w-[420px] rounded-full border border-dashed border-white/10 animate-reverse-spin" />

      {/* Ambient Radial Vignette Shadows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#050505_95%)]" />

      {/* Futuristic Telemetry Data Badges */}
      <div className="hidden xl:block absolute top-40 left-8 font-mono-code text-[10px] text-zinc-600 space-y-1">
        <div>SYS // INLINEBASE_CORE</div>
        <div>STATUS // ACTIVE</div>
        <div>LATENCY // 4MS</div>
      </div>

      <div className="hidden xl:block absolute top-40 right-8 font-mono-code text-[10px] text-zinc-600 text-right space-y-1">
        <div>GRID // 64PX_VECTOR</div>
        <div>RENDER // WEBGL_CANVAS</div>
        <div>LOC // BHUBANESWAR_HQ</div>
      </div>
    </div>
  );
}
