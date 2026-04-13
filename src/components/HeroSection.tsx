"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github, Instagram, Sparkles, Star, Moon, Wand2 } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Efek Parallax
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yPhoto = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    { icon: Github, link: "https://github.com/thalilaraniah" },
    { icon: Instagram, link: "https://instagram.com/rniathlila" },
  ];

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050b1a]"
    >
      {/* 1. LAYERED BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,_rgba(251,191,36,0.1),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_rgba(244,114,182,0.1),transparent_60%)]" />
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      </div>

      {/* 2. BACKGROUND WATERMARK */}
      <motion.div style={{ y: yBg }} className="absolute -left-10 top-20 select-none opacity-[0.02] z-0 hidden lg:block">
        <h2 className="text-[30vw] font-serif italic text-white leading-none tracking-tight">
          Aesthetic
        </h2>
      </motion.div>

      <div className="container relative z-10 px-6 py-20 md:py-0 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-20">
          
          {/* FOTO PROFILE - Ethereal Orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            style={{ y: yPhoto }}
            className="relative flex-shrink-0 z-20"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute -inset-6 bg-[#fbbf24]/20 rounded-full blur-2xl" />
              <div className="absolute -inset-4 bg-[#f472b6]/10 rounded-full blur-xl" />
              
              <div className="relative w-full h-full rounded-full border border-white/10 p-2 overflow-hidden bg-[#0a1024]/50 backdrop-blur-sm shadow-2xl">
                <img 
                  src="/profile.jpeg" 
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-full grayscale-[30%] opacity-90 transition-all duration-700"
                />
              </div>

              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15 + i*5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-15px] rounded-full border border-dashed border-white/5 opacity-50"
                  style={{ transformOrigin: "center center" }}
                />
              ))}
            </div>
          </motion.div>

          {/* TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ y: yText }}
            className="flex-grow space-y-10 text-center lg:text-left flex flex-col items-center lg:items-start z-30 max-w-2xl"
          >
            {/* Judul Utama dengan Tipografi Berlapis */}
            <h1 className="text-6xl md:text-8xl font-serif text-white tracking-tight leading-[0.8]">
              RANIA <br /> 
              <span className="relative inline-block mt-3">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbbf24] via-white to-[#f472b6]">Thalita</span>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.5, duration: 1 }}
                  className="absolute -bottom-2 left-0 h-[2px] bg-white/20"
                />
              </span>
              <br /> 
              <span className="relative inline-block mt-1">
                AKBAR
                <Star className="absolute -top-6 -right-6 w-6 h-6 text-[#fbbf24]/50 animate-pulse" />
              </span>
            </h1>

            <p className="text-xl md:text-2xl font-medium text-slate-300 leading-relaxed">
              Menenun keajaiban visual ke dalam struktur kode yang fungsional, menciptakan harmoni di samudera digital.
            </p>

            <div className="flex flex-wrap gap-5 pt-6 justify-center lg:justify-start items-center">
              <Button 
                onClick={scrollToAbout}
                className="bg-transparent text-white border border-white/20 rounded-full px-12 py-8 text-xl font-medium tracking-tight hover:bg-white hover:text-[#050b1a] hover:border-white transition-all duration-500 shadow-xl shadow-[#fbbf24]/10 group"
              >
                Start Voyage <Wand2 className="ml-3 w-5 h-5 group-hover:rotate-45 transition-transform" />
              </Button>
              
              <div className="flex gap-4 p-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm">
                {socialLinks.map((social, i) => (
                  <a key={i} href={social.link} target="_blank" className="p-3 rounded-full text-white/40 hover:text-[#fbbf24] hover:bg-white/5 transition-all">
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[50]">
        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex flex-col items-center gap-3 group"
        >
          <span className="text-[10px] font-mono tracking-[0.3em] text-slate-500 group-hover:text-white transition-colors">Genesis</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-[#fbbf24]"
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}