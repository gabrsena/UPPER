"use client";

import React from "react";
import { UserCheck } from "lucide-react";
import { motion } from "framer-motion";

const SketchIcons = {
  saude: (
    <svg width="40" height="40" viewBox="0 0 100 100" className="overflow-visible text-[#ef4444]">
      <defs>
        <filter id="sketch-blur-icons" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="1" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      <path d="M 50,20 L 50,80 M 20,50 L 80,50" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" 
        style={{ filter: "url(#sketch-blur-icons)" }} />
      <path d="M 45,25 L 45,75 M 25,45 L 75,45" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="10 4" style={{ filter: "url(#sketch-blur-icons)" }} />
    </svg>
  ),
  business: (
    <svg width="40" height="40" viewBox="0 0 100 100" className="overflow-visible text-[#34A853]">
      <path d="M 20,80 L 20,40 M 50,80 L 50,20 M 80,80 L 80,50" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" 
        style={{ filter: "url(#sketch-blur-icons)" }} />
      <path d="M 15,85 L 85,85" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" style={{ filter: "url(#sketch-blur-icons)" }} />
      <path d="M 55,25 L 80,10 L 80,45" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 4" />
    </svg>
  ),
  local: (
    <svg width="40" height="40" viewBox="0 0 100 100" className="overflow-visible text-[#FBBC05]">
      <path d="M 50,85 C 50,85 20,55 20,35 C 20,15 80,15 80,35 C 80,55 50,85 50,85 Z" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "url(#sketch-blur-icons)" }} />
      <circle cx="50" cy="35" r="10" fill="none" stroke="currentColor" strokeWidth="4" style={{ filter: "url(#sketch-blur-icons)" }} />
    </svg>
  ),
  check: (
    <svg width="14" height="14" viewBox="0 0 100 100" className="overflow-visible text-[#2d2d2d] shrink-0 mt-0.5">
      <path d="M 20,50 L 40,75 L 85,20" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "url(#sketch-blur-icons)" }} />
    </svg>
  )
};

export const WhoIsItFor = ({ cityName }: { cityName?: string }) => (
  <section id="quem-somos" className="py-24 md:py-32 px-8 bg-[#fdfaf3] border-t-2 border-[#2d2d2d]/10 relative overflow-hidden scroll-mt-20">
    {/* Subtle paper pattern */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2d2d2d 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

    <div className="max-w-6xl mx-auto space-y-20 relative z-10">
      <div className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 sketch-border bg-[#fae8ff] text-[#2d2d2d] text-[10px] font-marker uppercase tracking-widest rotate-[1deg]">
          <UserCheck size={12} />
          Foco Estratégico
        </div>
        <h2 className="text-4xl md:text-6xl font-inter font-bold text-[#1a1a1a] tracking-tightest leading-tight relative">
          <span className="">Para quem é a</span> <br />
          <span className="bg-[#f6eec7] px-3 sketch-border rotate-[-1deg] inline-block mt-2">Upper?</span>
        </h2>
        <p className="text-[#2d2d2d]/60 text-sm md:text-base font-hand italic max-w-2xl mx-auto leading-relaxed">
          Nossa infraestrutura é desenhada para negócios que dependem de clientes locais e buscam escala com previsibilidade.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Saúde & Bem-Estar",
            items: ["Clínicas Médicas", "Dentistas", "Fisioterapeutas", "Estética Avançada"],
            icon: SketchIcons.saude
          },
          {
            title: "Serviços Profissionais",
            items: ["Escritórios de Advocacia", "Contabilidades", "Arquitetura", "Engenharia"],
            icon: SketchIcons.business
          },
          {
            title: "Serviços Locais",
            items: ["Oficinas Mecânicas", "Pet Shops", "Escolas & Cursos", "Gastronomia"],
            icon: SketchIcons.local
          }
        ].map((group, i) => (
          <div key={i} className={`p-8 bg-white sketch-border shadow-[8px_8px_0px_#2d2d2d] transition-all duration-300 group hover:-translate-y-2 hover:shadow-[12px_12px_0px_#2d2d2d] relative ${i === 1 ? 'md:scale-[1.03] md:-translate-y-1 z-10 rotate-[0.5deg]' : 'rotate-[-0.5deg]'}`}>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none rotate-[12deg]">
              <div className="text-[#ef4444] font-marker text-[9px] uppercase tracking-widest border border-[#ef4444] p-1 sketch-border bg-white shadow-sm">
                ✓ SEU NEGÓCIO
              </div>
            </div>
            <div className="mb-6 group-hover:scale-110 group-hover:rotate-[-5deg] transition-transform inline-block origin-bottom-left w-[40px] h-[40px]">{group.icon}</div>
            <h3 className="text-xl font-marker text-[#1a1a1a] uppercase tracking-tighter mb-6">{group.title}</h3>
            <ul className="space-y-4">
              {group.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3 text-[#2d2d2d]/60 text-[11px] font-hand italic uppercase tracking-widest whitespace-nowrap">
                  {SketchIcons.check}
                  <span className="group-hover:text-[#1a1a1a] transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <motion.div
        className="p-10 bg-white sketch-border shadow-[12px_12px_0px_#2d2d2d] text-center space-y-6 rotate-[-0.5deg] relative cursor-pointer group hover-jitter transition-colors hover:bg-[#fdfaf3]"
        whileHover={{ scale: 1.02 }}
        animate={{ y: [0, -4, 0], rotate: [-0.5, 0.5, -0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Decorative elements that appear on hover */}
        <div className="absolute -top-6 -left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rotate-[-15deg] text-[#1a1a1a]">
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "url(#sketch-blur-icons)" }}>
            <path d="M 80,20 C 50,10 20,40 20,80 M 20,80 L 10,60 M 20,80 L 40,70" />
            <circle cx="85" cy="15" r="5" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute -bottom-4 -right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rotate-[10deg] text-[#ef4444]">
          <svg width="30" height="30" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "url(#sketch-blur-icons)" }}>
            <path d="M 20,50 C 40,20 60,80 80,50" />
            <path d="M 20,60 C 40,30 60,90 80,60" />
          </svg>
        </div>

        <h3 className="text-xl md:text-2xl font-marker text-[#1a1a1a] uppercase tracking-tighter group-hover:scale-105 transition-transform origin-center">
          Seu negócio depende de <span className="bg-[#f6eec7] px-2 sketch-border rotate-[1deg] inline-block pen-text group-hover:bg-[#f9d5e5] transition-colors">clientes locais?</span>
        </h3>
        <p className="text-[#2d2d2d]/60 font-hand italic text-sm md:text-base max-w-2xl mx-auto group-hover:text-[#2d2d2d]/80 transition-colors">
          {cityName ? `Se você atua em ${cityName}, precisa de uma infraestrutura` : `Se a resposta é sim, você precisa de uma infraestrutura`} que te coloque no topo e converta o interesse em faturamento.
        </p>
      </motion.div>
    </div>
  </section>
);
