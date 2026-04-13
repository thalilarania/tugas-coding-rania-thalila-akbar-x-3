"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Award, Globe, Cpu, Sparkles, ExternalLink, ArrowUpRight, Medal, Star } from "lucide-react";
import { useState } from "react";

const achievements = [
  { 
    id: "01",
    title: 'Professional System Design', 
    level: 'Advanced Level', 
    desc: 'Penguasaan mendalam pada arsitektur sistem digital modern dan optimasi performa tinggi.', 
    year: '2024', 
    icon: Award,
    color: "#fbbf24"
  },
  { 
    id: "02",
    title: 'Elite Web Architecture', 
    level: 'Elite Ops', 
    desc: 'Implementasi solusi web kompleks menggunakan teknologi React, Next.js, dan cloud infrastructure.', 
    year: '2024', 
    icon: Globe,
    color: "#60a5fa"
  },
  { 
    id: "03",
    title: 'Advanced Core Development', 
    level: 'S-Rank Specialist', 
    desc: 'Membangun logika backend yang efisien dan skalabel untuk menangani data besar.', 
    year: '2023', 
    icon: Cpu,
    color: "#a855f7"
  },
  { 
    id: "04",
    title: 'Visual Engineering Mastery', 
    level: 'Expert Designer', 
    desc: 'Transformasi konsep desain tingkat tinggi menjadi antarmuka yang presisi dan estetis.', 
    year: '2023', 
    icon: Sparkles,
    color: "#f472b6"
  },
];

export default function CertificatesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="certificates" className="py-32 bg-[#050b1a] relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#fbbf24]/10 blur-[100px] rounded-full" />
      </div>

      <div className="container px-6 mx-auto max-w-6xl relative z-10">
        <div className="mb-24 text-left">
          <div className="flex items-center gap-4 mb-4">
            <Medal className="text-[#fbbf24]" size={24} />
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/50">Recognition Archive</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-serif text-white tracking-tighter">
            Ethereal <span className="italic text-[#f472b6]">Records</span>
          </h2>
        </div>

        {/* INTERACTIVE STRIP LIST */}
        <div className="flex flex-col border-t border-white/10">
          {achievements.map((item, i) => {
            const isActive = activeIndex === i;
            return (
              <div
                key={i}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
                className="relative group border-b border-white/10"
              >
                <motion.div 
                  className="relative z-10 py-10 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between cursor-none transition-all duration-500"
                >
                  {/* Left: ID & Title */}
                  <div className="flex items-center gap-8 md:gap-16">
                    <span className="text-sm font-mono text-white/20 group-hover:text-[#fbbf24] transition-colors">
                      {item.id}
                    </span>
                    <h3 className={`text-3xl md:text-5xl font-serif transition-all duration-500 ${
                      isActive ? "text-white italic translate-x-4" : "text-white/40"
                    }`}>
                      {item.title}
                    </h3>
                  </div>

                  {/* Right: Year & Icon */}
                  <div className="flex items-center gap-8 mt-6 md:mt-0 ml-20 md:ml-0">
                    <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${
                      isActive ? "text-[#fbbf24]" : "text-white/20"
                    }`}>
                      Record {item.year}
                    </span>
                    <div className={`p-3 rounded-full border transition-all duration-500 ${
                      isActive ? "bg-white text-[#050b1a] border-white scale-125" : "border-white/10 text-white/20"
                    }`}>
                      <item.icon size={20} />
                    </div>
                  </div>
                </motion.div>

                {/* HIDDEN CONTENT REVEAL */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-14 pl-20 md:pl-32 pr-10 flex flex-col md:flex-row gap-10 justify-between items-end">
                        <div className="max-w-xl space-y-4">
                          <p className="text-xl text-slate-400 font-medium leading-relaxed italic">
                            "{item.desc}"
                          </p>
                          <div className="flex items-center gap-3">
                            <Star size={14} className="text-[#fbbf24] fill-[#fbbf24]" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                              Verified Status: {item.level}
                            </span>
                          </div>
                        </div>
                        
                        <a 
                          href="#" 
                          className="group/link flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-[#050b1a] transition-all duration-500"
                        >
                          <span className="text-[10px] font-black uppercase tracking-widest">Access Document</span>
                          <ArrowUpRight size={16} className="group-hover/link:rotate-45 transition-transform" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* BACKGROUND GLOW ON HOVER */}
                {isActive && (
                  <motion.div 
                    layoutId="stripGlow"
                    className="absolute inset-0 z-0 bg-gradient-to-r from-white/[0.03] to-transparent pointer-events-none"
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Unique Summary Footer */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8 pt-10 border-t border-white/5">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20">
              © Evolution Archive 2024
            </p>
            <div className="flex gap-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/10" />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}