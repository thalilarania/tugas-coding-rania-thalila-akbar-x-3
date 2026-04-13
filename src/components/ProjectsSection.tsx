"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Youtube, ArrowUpRight, Sparkles, Globe, Monitor } from 'lucide-react'; 
import { useState } from 'react';

const projects = [
  {
    id: "01",
    title: 'Ethereal Commerce',
    category: 'Fullstack Solution',
    description: 'Platform perdagangan digital dengan fokus pada pengalaman pengguna yang transparan dan alur transaksi yang mulus.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
    github: 'https://github.com/thalilarania',
    demo: 'https://vercel.app/',
    image: '/about.jpg',
    color: "#fbbf24"
  },
  {
    id: "02",
    title: 'Lumina Archive',
    category: 'Visual Showcase',
    description: 'Ruang kurasi visual untuk dokumentasi fotografi jalanan dan manipulasi digital tingkat lanjut.',
    tags: ['Photography', 'Figma', 'Framermotion'],
    github: 'https://github.com/thalilarania',
    youtube: 'https://youtube.com/',
    image: '/about2.jpg',
    color: "#f472b6"
  },
  {
    id: "03",
    title: 'Nova Engine',
    category: 'Performance Tool',
    description: 'Alat pengembang untuk memantau metrik performa aplikasi secara real-time dengan visualisasi data yang presisi.',
    tags: ['Node.js', 'Redis', 'D3.js'],
    github: 'https://github.com/thalilarania',
    demo: 'https://vercel.app/',
    image: '/about3.jpg',
    color: "#60a5fa"
  }
];

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="projects" className="py-32 bg-[#050b1a] relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-0 text-[20vw] font-serif italic text-white leading-none -translate-y-1/2 opacity-10">
          Works
        </div>
      </div>

      <div className="container px-6 mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* LEFT: PROJECT SELECTOR (Kartu Bertumpuk) */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <div className="mb-10 space-y-4">
              <div className="flex items-center gap-3 text-[#fbbf24]">
                <Sparkles size={16} />
                <span className="text-[10px] font-bold uppercase tracking-[0.5em]">Selected Works</span>
              </div>
              <h2 className="text-6xl md:text-7xl font-serif text-white leading-none">
                Digital <br /> <span className="italic text-[#f472b6]">Expeditions</span>
              </h2>
            </div>

            <div className="flex flex-col gap-3">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`relative cursor-pointer p-6 rounded-2xl border transition-all duration-500 overflow-hidden group ${
                    activeIndex === index 
                    ? "bg-white/5 border-white/20 scale-[1.02] shadow-2xl" 
                    : "bg-transparent border-white/5 opacity-40 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <span className="text-xs font-mono text-white/20">{project.id}</span>
                      <h3 className="text-2xl md:text-3xl font-serif text-white">{project.title}</h3>
                    </div>
                    <ArrowUpRight 
                      size={20} 
                      className={`transition-transform duration-500 ${activeIndex === index ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}`}
                      style={{ color: project.color }}
                    />
                  </div>
                  
                  {/* Indicator Glow */}
                  {activeIndex === index && (
                    <motion.div 
                      layoutId="activeGlow"
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent w-full"
                      style={{ color: project.color }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: SHOWCASE DISPLAY (Tampilan Sinematik) */}
          <div className="w-full lg:w-1/2 sticky top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.1, y: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 group"
              >
                {/* Gambar Proyek */}
                <img 
                  src={projects[activeIndex].image} 
                  alt={projects[activeIndex].title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Overlay Informasi */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050b1a] via-[#050b1a]/20 to-transparent p-12 flex flex-col justify-end gap-6">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#fbbf24]">
                      {projects[activeIndex].category}
                    </span>
                    <p className="text-xl md:text-2xl text-white/80 font-medium leading-relaxed italic">
                      "{projects[activeIndex].description}"
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {projects[activeIndex].tags.map(tag => (
                      <span key={tag} className="px-4 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white/60 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a 
                      href={projects[activeIndex].demo || projects[activeIndex].github} 
                      target="_blank"
                      className="flex items-center gap-3 px-8 py-4 bg-white text-[#050b1a] rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-[#fbbf24] transition-all group/btn"
                    >
                      Explore Project <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                    {projects[activeIndex].github && (
                      <a 
                        href={projects[activeIndex].github} 
                        target="_blank"
                        className="p-4 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white hover:text-[#050b1a] transition-all"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Vertical Watermark inside Card */}
                <div className="absolute top-12 right-12 [writing-mode:vertical-rl] text-white/10 font-serif italic text-4xl select-none">
                  {projects[activeIndex].title}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}