"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, animate, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";

const AnimatedPercent = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, 124, {
        duration: 1.5,
        ease: [0.34, 1.56, 0.64, 1], // Custom bounce/punchy ease
        onUpdate(value) {
          if (ref.current) ref.current.textContent = `+${Math.round(value)}%`;
        }
      });
      return () => controls.stop();
    }
  }, [inView]);

  return <div ref={ref} className="text-3xl md:text-4xl font-marker text-[#1a1a1a] tabular-nums rotate-[-2deg] bg-[#f6eec7] px-3 sketch-border">+0%</div>;
};

const OldIphoneMockup = ({ children, onNext }: { children: React.ReactNode; onNext?: () => void }) => {
  return (
    <div className="relative w-[246px] aspect-[10/19.8] rounded-[38px] bg-[#141414] border border-black shadow-[0_22px_45px_rgba(0,0,0,0.28)] p-[10px]">
      <div className="absolute -left-[3px] top-[95px] h-7 w-[3px] rounded-l bg-[#1f1f1f]" />
      <div className="absolute -left-[3px] top-[132px] h-12 w-[3px] rounded-l bg-[#1f1f1f]" />
      <div className="absolute -right-[3px] top-[120px] h-16 w-[3px] rounded-r bg-[#1f1f1f]" />
      
      {onNext && (
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onNext();
          }}
          className="absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#2d2d2d] text-white rounded-full flex items-center justify-center sketch-border shadow-[4px_4px_0px_rgba(0,0,0,0.2)] hover:scale-110 active:scale-95 transition-all z-30 group"
        >
          <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-[#2d2d2d] text-[8px] font-marker uppercase px-2 py-1 sketch-border whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Ver IA</div>
        </button>
      )}

      <div className="relative h-full w-full rounded-[30px] bg-[#0f0f10] border border-[#1d1d1e] px-[10px] pt-[32px] pb-[58px] overflow-hidden">
        <div className="absolute left-1/2 top-[10px] -translate-x-1/2 w-[62px] h-[6px] rounded-full bg-[#2a2a2b]" />
        <div className="absolute left-1/2 top-[19px] -translate-x-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full bg-[#24384a] border border-black/60" />
        <div className="relative w-full h-full rounded-[4px] border border-[#2a2a2b] bg-white overflow-hidden">
          {children}
        </div>
        <div className="absolute inset-x-0 bottom-[8px] flex justify-center">
          <div className="relative w-8 h-8 rounded-full border border-[#505052]">
            <div className="absolute inset-[5px] rounded-full border border-[#29292a]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const BeforeAfter = ({ cityName }: { cityName?: string }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const images = ["/depois.jpg", "/evo.PNG"];
  const labels = ["Infraestrutura Upper Ativa", "Recomendado por IA"];

  return (
    <section id="evolucao" className="py-24 md:py-32 px-8 bg-[#fdfaf3] border-y-2 border-[#2d2d2d]/10 relative overflow-hidden scroll-mt-20">
      <style>{`
        @keyframes scrollUp {
          0% { transform: translateY(0) }
          to { transform: translateY(-80%) }
        }
        .animate-scroll-site {
          animation: 15s linear infinite scrollUp;
        }
      `}</style>
      <div style={{ backgroundImage: "radial-gradient(#2d2d2d 1px, transparent 1px)", backgroundSize: "30px 30px" }} className="absolute inset-0 opacity-[0.03] pointer-events-none" />
      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        <div className="space-y-4 text-center">
          <span className="text-[10px] font-sketch font-bold uppercase tracking-[0.5em] text-[#2d2d2d]/40 block">Evolução</span>
          <h2 className="text-4xl md:text-6xl font-inter font-bold text-[#1a1a1a] tracking-tightest leading-[1.1]">
            <span className="">Chega de perder</span> <br />
            <span className="bg-[#d4f1f4] px-3 sketch-border rotate-[-1deg] inline-block mt-2">clientes em {cityName || "sua região"}.</span>
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-start justify-center gap-12 md:gap-24 max-w-5xl mx-auto">
          <div className="space-y-6 flex flex-col items-center group relative">
            <div className="space-y-2 text-center h-12 flex flex-col justify-end">
              <span className="text-[10px] font-marker uppercase tracking-[0.3em] text-[#ef4444] block">Antes</span>
              <h3 className="text-xl font-marker text-[#1a1a1a] uppercase tracking-tight">Baixa Visibilidade</h3>
            </div>
            <OldIphoneMockup>
              <Image 
                src="/antes.png" 
                alt="Situação Antes" 
                fill 
                className="object-contain object-top bg-white grayscale contrast-125 opacity-40 mix-blend-multiply" 
                sizes="(max-width: 768px) 250px, 300px"
                quality={80}
              />
              <div className="absolute inset-0 bg-red-900/5 mix-blend-color" />
              <svg className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-1/2 pointer-events-none opacity-60 text-[#ef4444] z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <filter id="sketch-blur-red" x="-10%" y="-10%" width="120%" height="120%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="1" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
                  </filter>
                </defs>
                <path d="M10,10 L90,90 M90,10 L10,90" stroke="currentColor" strokeWidth="2" strokeLinecap="round" filter="url(#sketch-blur-red)" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center p-6 text-center z-20">
                <div className="text-[#ef4444] text-[10px] font-marker uppercase tracking-wider bg-white/95 px-4 py-3 sketch-border rotate-[2deg] shadow-sm">Invisível no Google</div>
              </div>
            </OldIphoneMockup>
            <p className="text-[#2d2d2d]/50 text-[11px] font-hand italic uppercase tracking-widest text-center max-w-[200px] leading-relaxed mt-4">
              * Perda constante de leads qualificados {cityName ? `em ${cityName}` : ""}
            </p>
          </div>
          
          <div className="hidden md:flex flex-col items-center justify-start mt-32 w-24">
            <svg width="100%" height="40" viewBox="0 0 100 40" className="overflow-visible">
              <defs>
                <filter id="sketch-blur-arrow" x="-10%" y="-10%" width="120%" height="120%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="1" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
                </filter>
              </defs>
              <motion.path 
                d="M 0,20 Q 50,5 95,20" 
                fill="none" stroke="#2d2d2d" strokeWidth="2" strokeLinecap="round"
                filter="url(#sketch-blur-arrow)"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.path 
                d="M 85,10 L 95,20 L 85,30" 
                fill="none" stroke="#2d2d2d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                filter="url(#sketch-blur-arrow)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 1.5, duration: 0.3 }}
              />
            </svg>
          </div>
          
          <div className="space-y-6 flex flex-col items-center group relative">
            <div className="space-y-2 text-center h-12 flex flex-col justify-end">
              <span className="text-[10px] font-marker uppercase tracking-[0.3em] text-[#2d2d2d] block">Depois</span>
              <h3 className="text-xl font-marker text-[#1a1a1a] uppercase tracking-tight">Domínio Regional</h3>
            </div>
            <div className="relative translate-x-[-12px] md:translate-x-0">
              <OldIphoneMockup onNext={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="relative w-full h-full"
                  >
                    <Image 
                      src={images[currentImageIndex]} 
                      alt={labels[currentImageIndex]} 
                      fill 
                      className="object-contain object-top bg-white" 
                      sizes="(max-width: 768px) 250px, 300px"
                      quality={100}
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-x-0 bottom-6 px-4 z-20 text-center">
                  <div className={`text-[#1a1a1a] font-marker uppercase text-[10px] tracking-tight py-2 bg-[#d4f1f4]/90 sketch-border transition-colors duration-500 ${currentImageIndex === 1 ? 'bg-[#f6eec7]/90' : 'bg-[#d4f1f4]/90'}`}>
                    {currentImageIndex === 1 && <Sparkles size={10} className="inline-block mr-1 mb-0.5" />}
                    {labels[currentImageIndex]}
                  </div>
                </div>
              </OldIphoneMockup>
            </div>
            <div className="flex flex-col items-center gap-4 mt-4">
              <AnimatedPercent />
              <p className="text-[#2d2d2d]/60 text-[10px] font-hand italic uppercase tracking-widest text-center max-w-[220px]">
                Aumento real em faturamento e escala local.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
