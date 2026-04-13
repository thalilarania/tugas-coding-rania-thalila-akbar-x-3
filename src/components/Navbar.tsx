"use client";

import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-[1000] transition-all duration-500 ${isScrolled ? 'py-4 bg-[#050b1a]/80 backdrop-blur-xl border-b border-white/5' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* LOGO */}
        <div 
          onClick={() => scrollToSection('#home')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#fbbf24]/50 transition-all">
            <Sparkles className="text-[#fbbf24] w-5 h-5" />
          </div>
          <span className="text-white font-serif tracking-[0.2em] text-sm uppercase hidden md:block">
            Celestial <span className="text-[#f472b6] italic">Folio</span>
          </span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 hover:text-[#fbbf24] transition-all relative group"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#fbbf24] transition-all group-hover:w-full" />
            </button>
          ))}
          <button onClick={toggleTheme} className="text-white/60 hover:text-[#fbbf24] transition-colors">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <div className="md:hidden flex items-center gap-6">
          <button onClick={toggleTheme} className="text-white/60">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Menu className="text-white cursor-pointer" size={28} onClick={() => setIsMobileMenuOpen(true)} />
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#050b1a]/95 backdrop-blur-2xl z-[1000]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-[80%] bg-[#0a1024] z-[1001] border-l border-white/10 p-12 flex flex-col"
            >
              <div className="flex justify-end mb-12">
                <X className="text-[#fbbf24] cursor-pointer" size={32} onClick={() => setIsMobileMenuOpen(false)} />
              </div>
              <div className="flex flex-col gap-10">
                {navItems.map((item, i) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="text-3xl font-serif text-white hover:text-[#f472b6] text-left transition-colors flex items-center gap-4"
                  >
                    <span className="text-[10px] font-sans font-bold text-[#fbbf24]/40 tracking-widest">0{i + 1}</span>
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}