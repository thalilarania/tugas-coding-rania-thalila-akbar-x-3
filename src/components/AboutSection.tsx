"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Moon, Star, ChevronDown, User, Wand2, Orbit } from 'lucide-react';
import { useState } from 'react';

export default function AboutSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const stats = [
    { icon: Orbit, value: '25+', label: 'Digital Realms Created' },
    { icon: Star, value: '12+', label: 'Visual Treasures Found' },
  ];

  const accordion = [
    {
      title: 'The Visionary behind the Lens',
      icon: User,
      content: 'Seorang Web Developer dan Visual Creator yang melihat kode sebagai konstelasi dan desain sebagai cahaya. Berbasis di Aceh, saya mendedikasikan waktu untuk merakit harmoni digital yang tidak hanya fungsional, tapi juga memiliki jiwa.',
    },
    {
      title: 'Celestial Navigation',
      icon: Wand2,
      content: 'Navigasi saya adalah perpaduan antara logika React/Next.js dan insting visual street photography. Saya tidak hanya membangun situs web; saya menciptakan pengalaman yang membimbing pengguna melalui perjalanan digital yang tenang dan indah.',
    },
    {
      title: 'The Eternal Horizon',
      icon: Moon,
      content: 'Selalu menatap cakrawala teknologi yang baru. Ambisi saya adalah menciptakan karya yang abadi di tengah arus tren yang cepat berubah, membawa standar estetika baru ke dalam ekosistem pengembangan web global.',
    },
  ];

  return (
    <section id="about" className="py-32 bg-[#050b1a] relative overflow-hidden">
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#fbbf24]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#f472b6]/5 blur-[120px] rounded-full" />
      </div>

      <div className="container px-6 mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT: VISUAL COMPOSITION (Kreatif & Berlapis) */}
          <div className="relative group">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative z-20 aspect-square md:aspect-[4/5] overflow-hidden rounded-[3rem] border border-white/10"
            >
              <img 
                src="/about.jpg" 
                alt="Afif Shidqi" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050b1a] via-transparent to-transparent opacity-60" />
            </motion.div>

            {/* Floating Card Decorative */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-6 md:-right-12 p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl z-30 shadow-2xl"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">Cores Status</span>
                </div>
                <h4 className="text-2xl font-serif italic text-white leading-none">Radiant & Logic</h4>
              </div>
            </motion.div>

            {/* Ornament Lines */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t border-l border-[#fbbf24]/30 rounded-tl-[3rem] z-10" />
          </div>

          {/* RIGHT: STORY & ACCORDION */}
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3"
              >
                <div className="h-[1px] w-8 bg-[#fbbf24]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#fbbf24]">The Genesis</span>
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-serif text-white leading-none tracking-tight">
                Beyond the <br /> <span className="italic text-[#f472b6]">Visible Spectrum</span>
              </h2>
            </div>

            {/* ACCORDION KREATIF */}
            <div className="space-y-4">
              {accordion.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <div key={i} className={`group transition-all duration-500 border-b border-white/5 ${isOpen ? 'pb-8' : 'pb-4'}`}>
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full flex items-center justify-between py-4 text-left"
                    >
                      <div className="flex items-center gap-6">
                        <div className={`p-3 rounded-xl transition-all duration-500 ${isOpen ? 'bg-[#fbbf24] text-[#050b1a]' : 'bg-white/5 text-white/40'}`}>
                          <item.icon size={20} />
                        </div>
                        <h3 className={`text-xl md:text-2xl font-serif tracking-tight transition-colors ${isOpen ? 'text-white' : 'text-white/40 group-hover:text-white'}`}>
                          {item.title}
                        </h3>
                      </div>
                      <ChevronDown className={`text-[#fbbf24] transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="pl-20 text-slate-400 text-lg leading-relaxed font-medium">
                            {item.content}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* STATS AREA */}
            <div className="flex gap-12 pt-8">
              {stats.map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <stat.icon size={16} className="text-[#fbbf24]" />
                    <span className="text-3xl font-serif text-white">{stat.value}</span>
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}