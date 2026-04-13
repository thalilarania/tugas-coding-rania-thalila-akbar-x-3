"use client";

import { motion } from "framer-motion";
import { 
  Code, 
  Camera, 
  Database, 
  Sparkles, 
  Star, 
  Layout, 
  Cpu, 
  Globe,
  PenTool,
  Smartphone
} from "lucide-react";
import { useState } from "react";

const skillCategories = [
  {
    title: "Frontend Weaver",
    icon: Code,
    description: "Menyusun antarmuka digital dengan presisi tinggi dan logika yang bersih.",
    color: "#fbbf24", // Gold
    items: ["React / Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
  },
  {
    title: "Visual Alchemist",
    icon: Camera,
    description: "Menangkap esensi estetika melalui lensa dan desain antarmuka.",
    color: "#f472b6", // Soft Pink
    items: ["Street Photo", "UI/UX Design", "Figma", "Lightroom"],
  },
  {
    title: "System Architect",
    icon: Database,
    description: "Membangun pondasi data yang kokoh untuk ekosistem digital.",
    color: "#60a5fa", // Blue
    items: ["Node.js", "PostgreSQL", "Supabase", "REST API"],
  },
  {
    title: "Core Engineering",
    icon: Cpu,
    description: "Optimasi performa dan manajemen struktur kode tingkat lanjut.",
    color: "#a855f7", // Purple
    items: ["Clean Code", "Git / GitHub", "Vite", "Performance"],
  },
  {
    title: "Artistic Design",
    icon: PenTool,
    description: "Menciptakan identitas visual yang unik dan berkarakter.",
    color: "#2dd4bf", // Teal
    items: ["Branding", "Typography", "Vector Art", "Layouting"],
  },
  {
    title: "Mobile Interface",
    icon: Smartphone,
    description: "Adaptasi desain yang responsif untuk berbagai perangkat.",
    color: "#f87171", // Red
    items: ["Responsive", "Mobile First", "Touch UX", "PWA"],
  },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<number | null>(0);

  return (
    <section id="skills" className="py-32 bg-[#050b1a] relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#fbbf24]/5 blur-[120px] rounded-full opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#f472b6]/5 blur-[120px] rounded-full opacity-10" />
      </div>

      <div className="container px-6 mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20 space-y-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-3 text-[#fbbf24]"
          >
            <Sparkles size={16} />
            <span className="text-[10px] font-bold uppercase tracking-[0.5em]">Capabilities</span>
            <Sparkles size={16} />
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-serif text-white tracking-tight">
            Arcane <span className="italic text-[#f472b6]">Expertise</span>
          </h2>
        </div>

        {/* Grid Responsive: 1 kolom di mobile, 2 di tablet, 3 di desktop besar */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const isActive = activeCategory === idx;
            
            return (
              <div
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className="relative cursor-pointer group"
              >
                {/* Efek Glow Statis (Tanpa Goyang) */}
                <div 
                  className={`absolute -inset-0.5 rounded-[2rem] blur-xl transition-opacity duration-700 ${
                    isActive ? "opacity-25" : "opacity-0 group-hover:opacity-10"
                  }`}
                  style={{ backgroundColor: category.color }}
                />

                {/* Card Content */}
                <div className={`relative h-full p-8 rounded-[1.8rem] border transition-all duration-500 ${
                  isActive 
                    ? "bg-[#0a1024] border-white/20 shadow-2xl" 
                    : "bg-white/5 border-white/5 hover:border-white/10"
                }`}>
                  <div className="mb-6 flex justify-between items-start">
                    <div className={`p-3 rounded-xl transition-all duration-500 ${
                      isActive ? "bg-white text-[#050b1a]" : "bg-white/5 text-white/40"
                    }`}>
                      <category.icon size={22} />
                    </div>
                    {isActive && (
                      <motion.div layoutId="activeStar">
                        <Star size={14} className="text-[#fbbf24] fill-[#fbbf24]" />
                      </motion.div>
                    )}
                  </div>

                  <h3 className={`text-xl font-serif mb-3 transition-colors ${
                    isActive ? "text-white" : "text-white/40 group-hover:text-white"
                  }`}>
                    {category.title}
                  </h3>
                  
                  <p className="text-slate-500 text-xs leading-relaxed mb-6 font-medium">
                    {category.description}
                  </p>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span 
                        key={item}
                        className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border transition-all duration-500 ${
                          isActive 
                            ? "border-[#fbbf24]/30 text-[#fbbf24] bg-[#fbbf24]/5" 
                            : "border-white/5 text-white/20"
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}