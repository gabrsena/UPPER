"use client";

import React, { useMemo, useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ScribbleAvatar } from "@/components/ui/scribble-avatar";

import HeroTypewriter from "@/components/hero-typewriter";
import { WHATSAPP_URL } from "@/lib/constants";
import { TargetLogo } from "@/components/ui/target-logo";

const ProjectSheets = () => {
  return (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center pointer-events-none">
      <div
        className="w-[140%] md:w-[110%] aspect-square relative flex items-center justify-center cursor-crosshair pointer-events-auto"
      >
        <TargetLogo size={500} interactive={true} className="scale-[0.85] sm:scale-100" />
      </div>
    </div>
  );
};

export const Hero = ({ cityName, serviceLabel, serviceDescription, serviceBadge }: { cityName?: string; serviceLabel?: string; serviceDescription?: string; serviceBadge?: string }) => {
  const typewriterWords = useMemo(() => ["faturamento previsível.", "autoridade regional.", "lucro no caixa.", "novos clientes."], []);
  const clientAvatars = [
    "/avatar hero/NZN_7.jpg",
    "/avatar hero/fachadaativa13.webp",
    "/avatar hero/favicon.webp",
    "/avatar hero/FLY01.PNG",
  ];

  return (
    <section id="inicio" data-hero className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center pt-44 pb-20 md:pt-40 md:pb-32 bg-[#efe5d5] overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
          <path d="M-50 750C200 700 350 780 500 650C650 520 800 600 950 400C1100 200 1300 150 1500 50" stroke="#2d2d2d" strokeWidth="2" strokeDasharray="5,5" />
          <circle cx="200" cy="200" r="100" stroke="#f9d5e5" strokeWidth="20" opacity="0.5" />
          <circle cx="1200" cy="150" r="50" stroke="#f6eec7" strokeWidth="10" opacity="0.3" />
        </svg>
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-[1.2fr_0.8fr] gap-0 md:gap-24 lg:gap-32 items-center">
          
          <div className="space-y-8 md:space-y-10 text-center lg:text-left mt-0 lg:mt-0 w-full min-w-0">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center lg:items-start space-y-4"
              >
                {serviceBadge ? (
                  <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#2d2d2d] bg-[#d4f1f4] px-2 py-1 sketch-border inline-block rotate-[-1deg]">{serviceBadge}</span>
                ) : cityName ? (
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.5em] text-[#2d2d2d] bg-[#d4f1f4] px-3 py-1.5 sketch-border inline-block rotate-[-1deg] mb-2">
                    Infraestrutura Digital para {cityName}
                  </span>
                ) : null}
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                style={{ letterSpacing: '-0.06em' }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-[#1a1a1a] tracking-tight relative flex flex-col lg:block items-center min-w-0"
              >
                {serviceLabel ? (
                  <div className="min-w-0">
                    <span className="underline decoration-wavy decoration-[#f9d5e5] underline-offset-8 pen-text text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-tight block break-words">{serviceLabel} para seu Negócio</span>
                  </div>
                ) : cityName ? (
                  <div className="min-w-0">
                    <span className="block pen-text">Sua Empresa no Topo do Google e da IA em</span>
                    <span className="bg-[#f6eec7] px-2 sketch-border rotate-[-1deg] translate-y-2 pen-text inline-block mt-4 lg:mt-4">{cityName}</span>
                  </div>
                ) : (
                  <>
                    <span className="block pen-text mb-2 text-3xl sm:text-4xl md:text-4xl lg:text-5xl">Transformamos buscas pelo seu negócio em</span>
                    <span style={{ letterSpacing: '0' }} className="flex items-center justify-center lg:justify-start gap-x-3 min-h-[1.2em] italic text-[#1a1a1a] pen-text text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-none min-w-0">
                      <HeroTypewriter words={typewriterWords} isLCP={true} />
                    </span>
                  </>
                )}
              </motion.h1>
            </div>

            {serviceDescription ? (
              <p className="text-xs md:text-base text-[#2d2d2d]/70 font-hand max-w-xl px-4 md:px-0">{serviceDescription}</p>
            ) : cityName ? (
              <p className="text-sm md:text-lg text-[#2d2d2d]/60 font-hand max-w-2xl px-4 md:px-0 leading-relaxed">
                SEO Local, GEO & IA, Automação WhatsApp, Automação com IA e Landing Pages para empresas de {cityName}.
              </p>
            ) : null}

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6 w-full px-4 md:px-0"
            >
                <a href="#manifesto" className="group btn-retro hover-jitter inline-flex items-center justify-center gap-3 bg-white text-[#2d2d2d] px-6 py-3 md:px-8 md:py-4 rounded-sm text-[11px] md:text-[12px] font-sketch uppercase tracking-widest transition-all duration-300 sketch-border w-full sm:w-auto overflow-hidden"><span className="relative z-10">Entender a Upper</span></a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group btn-retro hover-jitter inline-flex items-center justify-center gap-3 bg-[#2d2d2d] text-white px-6 py-3 md:px-8 md:py-4 rounded-sm text-[11px] md:text-[12px] font-sketch uppercase tracking-widest transition-all duration-300 w-full sm:w-auto"><span className="relative z-10 flex items-center gap-2">Ativar meu Sistema</span></a>
              </motion.div>

            <div className="pt-8 border-t-2 border-dashed border-[#2d2d2d]/10 flex flex-col gap-6">
              <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4">
                <div className="flex items-center">
                  {clientAvatars.map((src, i) => (
                    <div key={i} className={`w-10 h-10 md:w-12 md:h-12 relative shadow-md rounded-full border-[3px] border-[#efe5d5] ${i > 0 ? "-ml-4 md:-ml-5" : ""} z-[${10 - i}]`} style={{ zIndex: 10 - i }}>
                      <ScribbleAvatar
                        className="w-full h-full"
                        bgColor="bg-white"
                        imageUrl={src}
                      />
                    </div>
                  ))}
                </div>
                <div className="text-[14px] font-hand text-[#2d2d2d] flex flex-col text-center md:text-left">
                  <span className="font-bold text-sm md:text-base leading-none">Aumento médio de +47%</span>
                  <span className="font-sketch text-[#2d2d2d]/80 uppercase tracking-widest text-[9px] md:text-[10px] mt-1">em leads qualificados</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-1 relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[600px] items-center justify-center pt-0 pb-4 md:pb-8 lg:pt-0 w-full max-w-[90vw] md:max-w-[80vw] mx-auto">
            <ProjectSheets />
          </div>
        </div>
      </div>
    </section>
  );
};
