"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Youtube, Instagram, Heart, Sparkles, Zap, Globe, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/thalilarania', label: 'GitHub', active: true, color: "#60a5fa" },
    { icon: Instagram, href: 'https://instagram.com/rniathlila', label: 'Instagram', active: true, color: "#f472b6" },
    { icon: Linkedin, href: '#', label: 'LinkedIn', active: false, color: "#fbbf24" },
    { icon: Youtube, href: '#', label: 'YouTube', active: false, color: "#a855f7" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050b1a] pt-32 pb-10 overflow-hidden border-t border-white/5">
      {/* Background Watermark - Lebih Halus & Artistik */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none overflow-hidden">
        <div className="absolute -bottom-10 -left-10 text-[20rem] font-serif italic leading-none whitespace-nowrap">
          Architect
        </div>
      </div>

      <div className="container relative z-10 px-6 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-16 mb-24">
          
          {/* Bagian Kiri: Brand & Philosophy */}
          <div className="max-w-md space-y-8">
            <div className="flex items-center gap-3 text-[#fbbf24]">
              <Sparkles size={20} className="animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.6em]">System Terminus</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif text-white leading-none">
              Building <span className="italic text-[#f472b6]">Beyond</span> The Horizon.
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed font-medium border-l-2 border-[#f472b6]/30 pl-6">
              Menggabungkan estetika visual dengan presisi kode untuk menciptakan pengalaman digital yang tak terlupakan.
            </p>
          </div>

          {/* Bagian Kanan: Social Orbit */}
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl border transition-all duration-500 ${
                  social.active 
                  ? "bg-white/5 border-white/10 text-white hover:border-white/30" 
                  : "bg-transparent border-white/5 text-white/20 grayscale cursor-not-allowed"
                }`}
              >
                <social.icon size={18} style={{ color: social.active ? social.color : 'inherit' }} />
                <span className="text-[10px] font-bold uppercase tracking-widest">{social.label}</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* BOTTOM SECTION: Status & Meta */}
        <div className="w-full pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* System Status Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-2 h-2 bg-[#2dd4bf] rounded-full" />
                <div className="absolute inset-0 w-2 h-2 bg-[#2dd4bf] rounded-full animate-ping" />
              </div>
              <span className="text-[9px] font-bold text-white uppercase tracking-[0.2em]">Signal: Stable</span>
            </div>
            
            <div className="h-4 w-[1px] bg-white/10 hidden md:block" />
            
            <div className="flex items-center gap-3">
              <Zap size={14} className="text-[#fbbf24]" />
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em]">CORE v3.0.4</span>
            </div>

            <div className="h-4 w-[1px] bg-white/10 hidden md:block" />

            <div className="flex items-center gap-3">
              <Globe size={14} className="text-[#60a5fa]" />
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em]">Banda Aceh, ID</span>
            </div>
          </div>

          {/* Copyright & Scroll Top */}
          <div className="flex items-center gap-8">
            <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500">
              © {currentYear} • Handcrafted by <span className="text-white italic font-serif">Rania</span>
            </p>
            
            <button 
              onClick={scrollToTop}
              className="p-4 bg-white/5 rounded-full border border-white/10 text-white hover:bg-white hover:text-[#050b1a] transition-all duration-500 group"
            >
              <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}