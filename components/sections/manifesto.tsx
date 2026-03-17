"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useReducedMotion, animate } from "framer-motion";

const LostValueCounter = ({ baseValue, className = "" }: { baseValue: string, className?: string }) => {
  const numericValue = parseInt(baseValue.replace(/[^0-9]/g, "")) || 100;
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!prefersReducedMotion && inView && ref.current) {
      const controls = animate(0, numericValue, {
        duration: 0.8,
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1.5,
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = `R$ ${Math.round(value).toLocaleString('pt-BR')}`;
          }
        }
      });
      return () => controls.stop();
    } else if (prefersReducedMotion && ref.current) {
      ref.current.textContent = `R$ ${numericValue.toLocaleString('pt-BR')}`;
    }
  }, [numericValue, inView, prefersReducedMotion]);

  return (
    <span ref={ref} className={`text-[#b91c1c] font-marker tabular-nums tracking-tighter ${className}`}>
      R$ 0
    </span>
  );
};

const variations = [
  { searches: "10+", ticket: "R$ 300", loss: "2700", annual: "32000" },
  { searches: "25+", ticket: "R$ 500", loss: "8500", annual: "102000" },
  { searches: "50+", ticket: "R$ 1.2k", loss: "18000", annual: "216000" },
  { searches: "15+", ticket: "R$ 150", loss: "1500", annual: "18000" },
];

const RetroMonitor = ({ children, className, type, cityName }: { children?: React.ReactNode; className?: string; type?: "search" | "maps" | "data"; cityName?: string }) => (
  <div className={`relative w-full max-w-[220px] mx-auto ${className}`}>
    <div className="relative bg-white sketch-border p-2 shadow-[6px_6px_0px_#2d2d2d] rotate-[-0.5deg]">
      <div className={`aspect-[4/3] rounded-sm p-3 flex flex-col relative overflow-hidden ${type === "data" ? "bg-[#0a0a0a]" : "bg-[#d1d1d1] shadow-inner"}`}>
        {/* CRT Scanline effect */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#000_2px,#000_4px)] z-20" />

        <div className="flex-1 flex items-center justify-center relative z-10 w-full h-full">
          {type === "search" ? (
            <div className="w-full h-full p-4 relative flex items-center justify-center">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100">
                <defs>
                  <filter id="sketch-blur-red-manifesto-1" x="-10%" y="-10%" width="120%" height="120%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="1" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
                  </filter>
                </defs>
                <path d="M 10,10 L 10,90 L 90,90" fill="none" stroke="#2d2d2d" strokeWidth="2" opacity="0.4" filter="url(#sketch-blur-red-manifesto-1)" strokeLinecap="round" />
                <motion.path 
                  d="M 15,30 Q 50,40 85,80" 
                  fill="none" stroke="#b91c1c" strokeWidth="4" strokeLinecap="round" 
                  filter="url(#sketch-blur-red-manifesto-1)"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <motion.path 
                  d="M 70,80 L 85,80 L 80,65" 
                  fill="none" stroke="#b91c1c" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                  filter="url(#sketch-blur-red-manifesto-1)"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 1.5, duration: 0.2 }}
                />
              </svg>
            </div>
          ) : type === "maps" ? (
            <div className="w-full h-full p-4 relative flex items-center justify-center">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100">
                <defs>
                  <filter id="sketch-blur-red-manifesto-2" x="-10%" y="-10%" width="120%" height="120%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="1" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
                  </filter>
                </defs>
                <path d="M 30,90 L 30,60 L 45,60 L 45,90 Z" fill="none" stroke="#2d2d2d" strokeWidth="2" strokeLinejoin="round" filter="url(#sketch-blur-red-manifesto-2)" />
                <text x="37.5" y="55" fontSize="10" fontFamily="marker" fill="#2d2d2d" textAnchor="middle">Você</text>
                
                <path d="M 60,90 L 60,20 L 75,20 L 75,90 Z" fill="none" stroke="#b91c1c" strokeWidth="3.5" strokeLinejoin="round" filter="url(#sketch-blur-red-manifesto-2)" />
                <text x="67.5" y="15" fontSize="10" fontFamily="marker" fill="#b91c1c" textAnchor="middle">Eles</text>
                
                <path d="M 5,90 L 95,90" fill="none" stroke="#2d2d2d" strokeWidth="2" opacity="0.4" strokeLinecap="round" filter="url(#sketch-blur-red-manifesto-2)" />
              </svg>
            </div>
          ) : (
            children
          )}
        </div>
      </div>
      <div className="mt-2 flex items-center justify-between px-2">
        <div className="flex gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#2d2d2d]/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#2d2d2d]/20" />
        </div>
        <div className="w-2 h-2 rounded-full bg-[#b91c1c] animate-pulse" />
      </div>
    </div>
    <div className="w-12 h-3 bg-[#2d2d2d] mx-auto -mt-1 sketch-border border-t-0 relative z-[-1]" />
    <div className="w-24 h-2 bg-[#2d2d2d] mx-auto sketch-border border-t-0 relative z-[-1]" />
  </div>
);

export const Manifesto = ({ cityName }: { cityName?: string }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % variations.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const current = variations[index];

  return (
    <section id="manifesto" className="py-20 md:py-32 px-8 bg-[#efe5d5] border-t-2 border-[#2d2d2d]/10 scroll-mt-20 relative overflow-hidden">
      {/* Subtle paper pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2d2d2d 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-inter font-bold tracking-tightest text-[#b91c1c] leading-tight max-w-4xl mx-auto relative z-10">
              <span className="">Qual dessas situações</span> <br />
              <span className="relative inline-block mt-2">
                <svg className="absolute inset-0 w-[110%] h-[120%] -z-10 -top-[10%] -left-[5%] rotate-[-1deg]" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M2,10 Q50,0 98,5 Q100,50 95,95 Q50,98 5,90 Z" fill="#b91c1c" fillOpacity="1" />
                </svg>
                <span className="relative z-10 px-2 text-white">parece com o seu negócio {cityName ? `em ${cityName}` : "hoje"}?</span>
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Bloco 1 */}
            <div className="p-8 md:p-12 bg-white sketch-border shadow-[12px_12px_0px_#2d2d2d] space-y-8 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[8px_8px_0px_#2d2d2d] transition-all rotate-[-0.5deg] group">
              <div className="space-y-4">
                <h3 className="text-xl font-marker text-[#1a1a1a] uppercase tracking-tightest group-hover:text-[#b91c1c] transition-colors">Seu negócio aparece no Google, mas não vira cliente</h3>
                <p className="text-[#2d2d2d]/40 text-[10px] font-sketch uppercase tracking-widest text-center py-2 border-y border-[#2d2d2d]/5">
                  Infraestrutura de conversão defasada
                </p>
              </div>

              <div className="space-y-6 flex flex-col items-center">
                <RetroMonitor type="search" cityName={cityName}>
                  <div className="text-center space-y-0.5">
                    <div className="text-[10px] font-sketch text-[#2d2d2d]/40 uppercase tracking-[0.2em]">Loss Analysis</div>
                    <div className="text-4xl md:text-5xl font-marker text-[#b91c1c] tracking-tighter tabular-nums drop-shadow-sm">
                      <LostValueCounter baseValue={current.loss} />
                    </div>
                    <div className="text-[9px] font-sketch text-[#2d2d2d]/40 uppercase tracking-widest italic pt-2 border-t border-dashed border-[#2d2d2d]/10">Perda Estimada</div>
                  </div>
                </RetroMonitor>

                <div className="w-full space-y-4 pt-4 border-t-2 border-dashed border-[#2d2d2d]/10">
                  <div className="text-[10px] font-sketch font-bold uppercase text-[#2d2d2d]/40 tracking-widest text-center">Métricas de Acesso</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center group-hover:scale-105 transition-transform">
                      <div className="text-xs text-[#b91c1c]/60 uppercase font-sketch font-bold tracking-widest">Buscas/Dia</div>
                      <div className="text-3xl md:text-5xl font-marker text-[#b91c1c] leading-none mt-1">{current.searches}</div>
                    </div>
                    <div className="text-center group-hover:scale-105 transition-transform">
                      <div className="text-xs text-[#b91c1c]/60 uppercase font-sketch font-bold tracking-widest">Ticket</div>
                      <div className="text-3xl md:text-5xl font-marker text-[#b91c1c] leading-none mt-1">{current.ticket}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bloco 2 */}
            <div className="p-8 md:p-12 bg-white sketch-border shadow-[12px_12px_0px_#2d2d2d] space-y-8 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[8px_8px_0px_#2d2d2d] transition-all rotate-[0.5deg] group">
              <div className="space-y-4">
                <h3 className="text-xl font-marker text-[#1a1a1a] uppercase tracking-tightest group-hover:text-[#b91c1c] transition-colors">Concorrentes piores aparecem mais que você</h3>
                <p className="text-[#2d2d2d]/40 text-[10px] font-sketch uppercase tracking-widest text-center py-2 border-y border-[#2d2d2d]/5">
                  Vantagem digital competitiva
                </p>
              </div>

              <div className="space-y-6 flex flex-col items-center">
                <RetroMonitor type="maps" cityName={cityName}>
                  <div className="text-center space-y-0.5">
                    <div className="text-[10px] font-sketch text-[#2d2d2d]/40 uppercase tracking-[0.2em]">Annual Impact</div>
                    <div className="text-4xl md:text-5xl font-marker text-[#b91c1c] tracking-tighter tabular-nums drop-shadow-sm">
                      <LostValueCounter baseValue={current.annual} />
                    </div>
                    <div className="text-[9px] font-sketch text-[#2d2d2d]/40 uppercase tracking-widest italic pt-2 border-t border-dashed border-[#2d2d2d]/10">Perda Acumulada</div>
                  </div>
                </RetroMonitor>

                <div className="w-full space-y-4 pt-4 border-t-2 border-dashed border-[#2d2d2d]/10">
                  <div className="text-[10px] font-sketch font-bold uppercase text-[#2d2d2d]/40 tracking-widest text-center">Impacto de Mercado</div>
                  <div className="flex items-end gap-2 h-8 px-4">
                    {[0, 1, 2, 3].map((i) => (
                      <div key={i} className={`flex-1 bg-[#efe5d5] sketch-border border-0 transition-all duration-500 ${index >= i ? 'bg-[#b91c1c]' : 'bg-[#b91c1c]/10 h-[20%]'}`} style={{ height: index >= i ? `${(i + 1) * 25}%` : '20%' }}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Estimativa de Perda Strip */}
          <div className="max-w-4xl mx-auto pt-8">
            <div className="relative group">
              {/* Warning Tape Aesthetic */}
              <div className="absolute inset-0 bg-[#b91c1c] -rotate-[0.5deg] translate-y-2 translate-x-1 opacity-5" />

              <div className="bg-white sketch-border p-6 md:p-8 shadow-[8px_8px_0px_#b91c1c20] rotate-[0.5deg] relative flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                <div className="absolute -top-3 left-4 bg-[#b91c1c] text-white text-[9px] font-sketch px-3 py-1 sketch-border rotate-[-2deg] animate-pulse z-20">
                  ESTIMATIVA DE PERDA
                </div>

                <div className="max-w-xs">
                  <div className="text-[10px] font-sketch text-[#b91c1c]/60 uppercase tracking-[0.3em] mb-1">Impacto Financeiro Estimado</div>
                  <h4 className="text-xl md:text-2xl font-marker text-[#1a1a1a] uppercase leading-tight">
                    Faturamento Anual Desperdiçado
                  </h4>
                </div>

                <div className="flex flex-col items-center md:items-end flex-1">
                  <div className="text-4xl md:text-6xl font-marker text-[#b91c1c]">
                    <LostValueCounter baseValue={current.annual} />
                  </div>
                  <div className="text-[9px] font-sketch text-[#2d2d2d]/40 uppercase tracking-widest mt-2 border-t border-dashed border-[#b91c1c]/20 pt-2">
                    Calculado com base no volume de buscas regional
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-[#2d2d2d]/60 text-xs md:text-base font-hand italic">
            O problema não é não vender. É não saber quanto você está perdendo {cityName ? `em ${cityName}` : ""}.
          </p>
          <p className="text-[#2d2d2d]/30 text-[9px] uppercase font-sketch font-bold tracking-widest">
            * Os valores e cálculos acima variam de acordo com o nicho de mercado e ticket médio de cada negócio.
          </p>
        </div>
      </div>
    </section>
  );
};
