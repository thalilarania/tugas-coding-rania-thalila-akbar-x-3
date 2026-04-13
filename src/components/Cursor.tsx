"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);

  // 1. Koordinat mentah dari mouse
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // 2. Konfigurasi Spring untuk efek delay yang halus
  const springConfig = { 
    damping: 35, 
    stiffness: 150, 
    mass: 0.8 
  };

  const edgeX = useSpring(mouseX, springConfig);
  const edgeY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    window.addEventListener("mousemove", moveCursor);

    // Menangani hover pada elemen interaktif
    const interactiveElements = document.querySelectorAll('button, a, input, textarea, [role="button"]');
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <motion.div
        className="w-10 h-10 bg-contain bg-no-repeat bg-center"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          x: edgeX,
          y: edgeY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundImage: "url('/logo.png')",
        }}
        // ANIMASI SAAT HOVER
        animate={{
          scale: isHovered ? 2.5 : 1, // Perbesar lebih banyak agar efek blur terlihat jelas
          rotate: isHovered ? 15 : 0,
          opacity: isHovered ? 0.4 : 1, // Menjadi transparan (0.4)
          filter: isHovered ? "blur(4px)" : "blur(0px)", // Memberikan efek blur
        }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 25,
          // Mengatur durasi khusus untuk filter agar transisi blur lebih smooth
          filter: { duration: 0.2 } 
        }}
      />
    </div>
  );
};

export default CustomCursor;