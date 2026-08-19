"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SHOWREEL_VIDEOS } from "@/data/companyData";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";

export default function ShowreelSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [activeTab, setActiveTab] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        videoWrapperRef.current,
        {
          scale: 0.88,
          borderRadius: "32px",
        },
        {
          scale: 1,
          borderRadius: "16px",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const currentVideo = SHOWREEL_VIDEOS[activeTab];

  return (
    <section
      id="showreel"
      ref={sectionRef}
      className="relative py-20 md:py-32 px-6 sm:px-8 lg:px-12 bg-[#050505] border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono-code text-xs text-zinc-400 uppercase tracking-widest mb-3">
              <span className="h-1.5 w-1.5 bg-white" />
              <span>01 // CINEMATIC SHOWREEL</span>
            </div>
            <h2 className="font-display font-extrabold clamp-section text-white tracking-tight uppercase leading-none">
              VISUAL REEL.
            </h2>
          </div>
          <p className="text-sm font-mono-code text-zinc-400 max-w-md">
            A quick glimpse at the websites, native mobile applications, and SaaS platforms built by Inlinebase Technologies.
          </p>
        </div>

        {/* Video Category Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {SHOWREEL_VIDEOS.map((item, idx) => (
            <button
              key={item.title}
              onClick={() => {
                setActiveTab(idx);
                setIsPlaying(true);
              }}
              className={`px-5 py-2.5 rounded-full font-mono-code text-xs uppercase tracking-wider transition-all duration-300 ${
                activeTab === idx
                  ? "bg-white text-black font-bold scale-[1.02]"
                  : "bg-white/5 text-zinc-400 hover:text-white border border-white/10"
              }`}
              data-cursor="PLAY"
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Large Cinematic Video Player Container */}
        <div
          ref={videoWrapperRef}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden bg-black border border-white/20 shadow-2xl group"
          data-cursor="SHOWREEL"
        >
          <video
            ref={videoRef}
            src={currentVideo.videoUrl}
            poster={currentVideo.thumbnail}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="h-full w-full object-cover grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0"
          />

          {/* Video Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Top Label */}
          <div className="absolute top-6 left-6 font-mono-code text-xs font-bold text-white bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
            SHOWREEL // {currentVideo.title.toUpperCase()}
          </div>

          {/* Bottom Floating Control Bar */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-10">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="p-3 rounded-full bg-white text-black hover:bg-zinc-200 transition-colors"
                aria-label={isPlaying ? "Pause Video" : "Play Video"}
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </button>

              <button
                onClick={toggleMute}
                className="p-3 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 transition-colors"
                aria-label={isMuted ? "Unmute Sound" : "Mute Sound"}
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </button>
            </div>

            <span className="font-mono-code text-xs text-zinc-300 hidden sm:block">
              Inlinebase Motion Design Studio
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
