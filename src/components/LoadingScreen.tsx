"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Atom, Zap, Star } from "lucide-react";

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulasi Progress Bar yang Halus
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Variasikan kecepatan progress untuk kesan loading asli
        const remaining = 100 - prev;
        const speed = Math.max(1, Math.min(5, Math.floor(remaining / 10)));
        return prev + speed;
      });
    }, 80); // Total waktu loading sekitar 3-4 detik

    // Selesai Loading
    const timeout = setTimeout(() => {
      setVisible(false);
      setTimeout(onFinish, 800); // Beri waktu animasi exit selesai
    }, 4000); // Total waktu tampilan loading

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onFinish]);

  // Data pecahan orbit
  const orbitParticles = [...Array(12)].map((_, i) => ({
    id: i,
    radius: 80 + (i * 10),
    speed: 10 + (i * 2),
    color: i % 3 === 0 ? "#fbbf24" : i % 3 === 1 ? "#f472b6" : "#60a5fa",
    size: 2 + (i % 3)
  }));

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050b1a] overflow-hidden cursor-none"
        >
          {/* Background Decor - Efek Glitch & Grid Kosmik */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
            <motion.div 
              className="absolute top-0 left-0 w-full h-[1px] bg-white"
              animate={{ y: ["0vh", "100vh"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
          </div>

          {/* AREA PERAKITAN ORBITAL (Sirkuit Berpijar) */}
          <div className="relative w-96 h-96 flex items-center justify-center mb-16">
            
            {/* Inti Utama yang Berdenyut */}
            <motion.div
              className="absolute z-20 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0_0_50px_20px_rgba(251,191,36,0.3)]"
              animate={{ 
                scale: [1, 1.1, 1],
                boxShadow: ["0_0_50px_20px_rgba(251,191,36,0.3)", "0_0_70px_30px_rgba(251,191,36,0.5)", "0_0_50px_20px_rgba(251,191,36,0.3)"]
              }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <Sparkles className="text-[#050b1a] h-7 w-7" />
            </motion.div>

            {/* Partikel Orbit yang Berputar (Celestial Assembly) */}
            {orbitParticles.map(p => (
              <motion.div
                key={p.id}
                className="absolute border-t-2 border-dashed opacity-20"
                style={{ 
                  width: `${p.radius * 2}px`, 
                  height: `${p.radius * 2}px`,
                  borderRadius: '50%',
                  borderColor: p.color
                }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: p.speed, ease: "linear" }}
              />
            ))}

            {/* Pecahan Digital yang Masuk ke Inti */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full z-10"
                initial={{ 
                  x: `${(Math.random() - 0.5) * 800}px`, 
                  y: `${(Math.random() - 0.5) * 800}px`,
                  opacity: 0
                }}
                animate={{ 
                  x: 0, 
                  y: 0, 
                  opacity: [0, 1, 0] 
                }}
                transition={{ 
                  duration: 2, 
                  delay: Math.random() * 3, 
                  repeat: Infinity, 
                  ease: "easeIn" 
                }}
              />
            ))}
          </div>

          {/* TEKS & PROGRESS (Minimalis & Vertical) */}
          <div className="flex flex-col items-center gap-8 z-40 max-w-sm text-center">
            
            <div className="space-y-3">
                <motion.div 
                    className="flex items-center justify-center gap-3 text-[#f472b6]"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <Atom className="h-4 w-4" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/70">System Assembly</span>
                </motion.div>
                
                <h1 className="text-2xl md:text-3xl font-serif text-white tracking-tight leading-snug">
                  Assembling the <br /> <span className="italic text-[#fbbf24]">Digital Constellation</span>
                </h1>
            </div>

            {/* PROGRESS INDICATOR (Unique Minimalist Design) */}
            <div className="relative w-full flex items-center justify-center gap-2">
                <div className="text-[10px] font-mono text-[#60a5fa] tracking-widest">{progress.toString().padStart(3, '0')}</div>
                <div className="relative w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#60a5fa] via-[#f472b6] to-[#fbbf24]"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: "easeInOut" }}
                  />
                </div>
                <Zap className="h-3 w-3 text-white/20" />
            </div>
          </div>

          {/* GLOW UTAMA KOSMIK */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#fbbf24] blur-[180px] opacity-10 rounded-full pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}