"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2, Sparkles, Star, Moon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mojyqevn", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({ 
          title: "Message Transmitted!", 
          description: "Pesan Anda telah meluncur melalui orbit menuju meja saya." 
        });
        form.reset(); 
      } else {
        const data = await response.json();
        toast({ 
          variant: "destructive",
          title: "Transmission Failed!", 
          description: data.errors ? data.errors[0].message : "Gagal mengirim pesan ke pusat kendali." 
        });
      }
    } catch (error) {
      toast({ 
        variant: "destructive",
        title: "Signal Lost!", 
        description: "Terjadi gangguan interferensi kosmik pada Den Den Mushi Anda." 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Frequency', value: ' thalilarania@gmail.com', color: "#60a5fa" },
    { icon: Phone, label: 'Hotline', value: '+62 851-8069-4650', color: "#f472b6" },
    { icon: MapPin, label: 'Coordinates', value: 'Banda Aceh, Indonesia', color: "#fbbf24" },
  ];

  return (
    <section id="contact" className="py-32 bg-[#050b1a] overflow-hidden relative border-t border-white/5">
      {/* Background Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#fbbf24]/5 blur-[120px] rounded-full pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#f472b6]/5 blur-[120px] rounded-full pointer-events-none opacity-30" />

      <div className="container px-6 mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT: INFO & AMBIENCE */}
          <div className="space-y-12 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center justify-center lg:justify-start gap-3 mb-6 text-[#fbbf24]"
              >
                <Sparkles size={18} />
                <span className="text-[10px] font-bold uppercase tracking-[0.5em]">Celestial Connection</span>
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-serif text-white leading-none tracking-tight">
                Let's Build <br /> <span className="italic text-[#f472b6]">The Future</span>
              </h2>
            </div>
            
            <div className="space-y-8 w-full max-w-md">
              {contactInfo.map((info, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex items-center gap-6 p-6 bg-white/5 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="p-4 rounded-xl bg-[#0a1024] border border-white/5" style={{ color: info.color }}>
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-1">{info.label}</p>
                    <p className="text-xl font-medium text-white group-hover:text-white transition-colors">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: THE PORTAL FORM (Kreatif & Berlapis) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative p-12 md:p-16 bg-[#0a1024]/80 backdrop-blur-2xl rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden"
          >
            {/* Decorative Corner Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#fbbf24]/10 to-transparent opacity-50" />
            <Moon className="absolute -bottom-10 -right-10 text-white/5" size={150} />

            <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
              {[
                { name: "name", label: "01 / Identity", type: "text", placeholder: "Siapa Nama Anda?" },
                { name: "email", label: "02 / Digital Frequency", type: "email", placeholder: "Alamat Radar / Email" },
              ].map((field) => (
                <div key={field.name} className="relative group">
                  <label className="text-[10px] font-bold text-[#fbbf24] uppercase tracking-widest ml-4 mb-2 block">
                    {field.label}
                  </label>
                  <input 
                    name={field.name}
                    type={field.type} 
                    required 
                    placeholder={field.placeholder}
                    onFocus={() => setFocusedField(field.name)}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-white/5 border border-white/5 p-5 rounded-2xl text-white placeholder:text-slate-600 focus:border-[#f472b6]/30 focus:ring-1 focus:ring-[#f472b6]/10 outline-none transition-all duration-300" 
                  />
                  {/* Fluid Focus Indicator */}
                  <AnimatePresence>
                    {focusedField === field.name && (
                      <motion.div 
                        layoutId="portalFocus"
                        className="absolute -inset-1 border-2 border-[#f472b6]/50 rounded-2xl blur-sm pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="relative group">
                <label className="text-[10px] font-bold text-[#fbbf24] uppercase tracking-widest ml-4 mb-2 block">
                  03 / The Mission
                </label>
                <textarea 
                  name="message"
                  rows={4} 
                  required 
                  placeholder="Apa Perintah atau Pesannya?"
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-white/5 border border-white/5 p-5 rounded-2xl text-white placeholder:text-slate-600 focus:border-[#f472b6]/30 focus:ring-1 focus:ring-[#f472b6]/10 outline-none resize-none transition-all duration-300" 
                />
                <AnimatePresence>
                  {focusedField === "message" && (
                    <motion.div 
                      layoutId="portalFocus"
                      className="absolute -inset-1 border-2 border-[#f472b6]/50 rounded-2xl blur-sm pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </AnimatePresence>
              </div>

              {/* TOMBOL TRANSMIT KREATIF */}
              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full bg-white text-[#050b1a] p-6 rounded-2xl font-bold uppercase tracking-[0.3em] hover:bg-[#fbbf24] transition-all duration-500 flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-50 group"
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Transmit Message
                  </>
                )}
              </button>

              <Star className="absolute top-10 right-10 text-[#fbbf24]/50 animate-pulse" size={16} />
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}