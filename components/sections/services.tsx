"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { ShimmerWord } from "@/components/ui/shimmer-word";

const GoogleText = () => (
  <span className="font-marker tracking-tighter">
    <span className="text-[#4285F4]">G</span>
    <span className="text-[#EA4335]">o</span>
    <span className="text-[#FBBC05]">o</span>
    <span className="text-[#4285F4]">g</span>
    <span className="text-[#34A853]">l</span>
    <span className="text-[#EA4335]">e</span>
  </span>
);

const servicesData = [
  {
    id: 1,
    category: "Atração",
    title: <><GoogleText /> + IA recomendam você</>,
    details: "Pesquisa de palavras-chave com foco em intenção de compra → Otimização técnica on-page de cada página → Criação de conteúdo estruturado com schema markup → Construção de autoridade com link building → Otimização para motores de IA (GEO) garantindo que o seu negócio apareça nas respostas do ChatGPT, Gemini e Perplexity",
    color: "#fff7ed", // Orange-50ish
    accent: "#ffedd5"
  },
  {
    id: 2,
    category: "Infraestrutura",
    title: "Site rápido que conduz à ação",
    details: "Desenvolvemos em Next.js com score 90+ no PageSpeed → Estrutura de navegação pensada para conduzir o visitante → CTAs estratégicos em cada seção → Layout responsivo e otimizado para mobile → Código limpo sem plugins desnecessários que travam o carregamento",
    color: "#f5f3ff", // Purple-50ish
    accent: "#ede9fe"
  },
  {
    id: 3,
    category: "Conversão",
    title: "WhatsApp que fecha, não enrola",
    details: "Mapeamos a jornada do seu cliente → Criamos fluxos de automação com IA que qualificam o lead automaticamente → Integramos com seu CRM ou planilha → Atendimento ativo 24h sem custo de equipe → Apenas leads quentes chegam até você",
    color: "#fefce8", // Yellow-50ish
    accent: "#fef9c3"
  }
];

export const Services = ({ cityName }: { cityName?: string }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="servicos" className="py-20 md:py-32 px-8 bg-[#efe5d5] border-y border-[#2d2d2d]/10 relative overflow-hidden scroll-mt-20">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2d2d2d 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          <div className="space-y-8">
            <span className="text-[10px] font-sketch font-bold uppercase tracking-[0.5em] text-[#2d2d2d]/60 block">O Método <span className="text-[#34A853]">Upper</span></span>
            <h2 className="text-4xl md:text-6xl font-inter font-bold tracking-tightest text-[#1a1a1a] leading-tight relative">
              {cityName ? (
                <span className="">{`Nossos serviços em ${cityName}`}</span>
              ) : (
                <div className="">
                  Como a <span className="text-[#34A853]">Upper</span> transforma <br />
                  <span className="bg-[#c8f4da] px-3 sketch-border rotate-[-1deg] inline-block mt-2">buscas em clientes</span>
                </div>
              )}
            </h2>
            <p className="text-[#2d2d2d]/70 text-sm md:text-base font-hand leading-relaxed max-w-md">
              {cityName
                ? `Estruturamos a presença digital de empresas em ${cityName} através de um método comprovado de atração e conversão.`
                : "Construímos a infraestrutura por onde o faturamento da sua empresa vai passar."}
            </p>
          </div>

          <div className="relative">
            <div className="relative grid gap-6">
              {servicesData.map((service, idx) => {
                const isActive = activeIndex === idx;
                const isAnotherActive = activeIndex !== null && !isActive;

                return (
                  <div
                    key={service.id}
                    onClick={() => setActiveIndex(isActive ? null : idx)}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onMouseLeave={() => setActiveIndex(null)}
                    style={{ backgroundColor: isActive ? service.accent : service.color }}
                    className={`p-6 transition-all duration-300 cursor-pointer group sketch-border shadow-[4px_4px_0px_#2d2d2d] hover:shadow-[2px_2px_0px_#2d2d2d] hover:translate-x-[2px] hover:translate-y-[2px] ${
                      isActive ? 'border-[#2d2d2d]' : 'border-[#2d2d2d] ' + (idx % 2 === 0 ? 'rotate-[0.5deg]' : 'rotate-[-0.5deg]')
                    } ${isAnotherActive ? 'opacity-60 saturate-50' : 'opacity-100 saturate-100'}`}
                  >
                    <div className="flex items-center gap-6">
                      <motion.div 
                        animate={isActive ? { 
                          scale: [1, 1.2, 1],
                          rotate: [0, -5, 5, 0],
                          backgroundColor: ["#ffffff", "#f6eec7", "#ffffff"]
                        } : { scale: 1 }}
                        transition={{ duration: 0.6, repeat: isActive ? Infinity : 0, repeatDelay: 1 }}
                        className={`shrink-0 w-10 h-10 rounded-full border-2 border-[#2d2d2d] flex items-center justify-center font-marker text-lg transition-colors duration-300 ${isActive ? 'bg-white text-[#2d2d2d] shadow-[3px_3px_0px_#2d2d2d]' : 'bg-white/50 text-[#2d2d2d]/40'}`}
                      >
                        {service.id}
                      </motion.div>
                      <div className="flex-1">
                        <div className="text-[10px] text-[#2d2d2d]/50 font-sketch uppercase tracking-widest">{service.category}</div>
                        <div className="text-[#1a1a1a] font-marker text-lg group-hover:underline decoration-wavy decoration-[#f9d5e5] underline-offset-4 transition-all">{service.title}</div>
                      </div>
                      <ChevronDown className={`text-[#2d2d2d]/30 transition-transform duration-500 ${isActive ? 'rotate-180 text-[#2d2d2d]' : ''}`} size={16} />
                    </div>

                    <div className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <p className="text-[#2d2d2d]/80 text-sm font-hand leading-relaxed border-t border-[#2d2d2d]/10 pt-4 italic">
                          {service.details}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
