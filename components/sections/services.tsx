"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ShimmerWord } from "@/components/ui/shimmer-word";

const servicesData = [
  {
    id: 1,
    category: "Atração",
    title: "Google + IA recomendam você",
    details: "Pesquisa de palavras-chave com foco em intenção de compra → Otimização técnica on-page de cada página → Criação de conteúdo estruturado com schema markup → Construção de autoridade com link building → Otimização para motores de IA (GEO) garantindo que o seu negócio apareça nas respostas do ChatGPT, Gemini e Perplexity"
  },
  {
    id: 2,
    category: "Infraestrutura",
    title: "Site rápido que conduz à ação",
    details: "Desenvolvemos em Next.js com score 90+ no PageSpeed → Estrutura de navegação pensada para conduzir o visitante → CTAs estratégicos em cada seção → Layout responsivo e otimizado para mobile → Código limpo sem plugins desnecessários que travam o carregamento"
  },
  {
    id: 3,
    category: "Conversão",
    title: "WhatsApp que fecha, não enrola",
    details: "Mapeamos a jornada do seu cliente → Criamos fluxos de automação com IA que qualificam o lead automaticamente → Integramos com seu CRM ou planilha → Atendimento ativo 24h sem custo de equipe → Apenas leads quentes chegam até você"
  }
];

export const Services = ({ cityName }: { cityName?: string }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="servicos" className="py-20 md:py-32 px-8 bg-zinc-950 border-y border-zinc-900 relative overflow-hidden scroll-mt-20">
      {/* Neon Green Background Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[45%] h-[45%] bg-emerald-500/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[45%] h-[45%] bg-emerald-600/5 rounded-full blur-[120px] animate-pulse [animation-delay:2s]"></div>
        <div className="absolute top-[30%] left-[20%] w-[35%] h-[35%] bg-emerald-400/5 rounded-full blur-[100px] animate-pulse [animation-delay:4s]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          <div className="space-y-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 block">O Método Upper</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-tight uppercase">
              {cityName ? `Nossos serviços em ${cityName}` : (
                <>
                  Como a Upper transforma <br />
                  <ShimmerWord>buscas em clientes</ShimmerWord>
                </>
              )}
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-medium leading-relaxed">
              {cityName
                ? `Estruturamos a presença digital de empresas em ${cityName} através de um método comprovado de atração e conversão.`
                : "Construímos a infraestrutura por onde o faturamento da sua empresa vai passar."}
            </p>
          </div>

          <div className="relative">
            <div className="relative grid gap-4">
              {servicesData.map((service, idx) => (
                <div
                  key={service.id}
                  onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className={`p-6 rounded-2xl bg-zinc-900/40 backdrop-blur-sm border transition-all duration-500 cursor-pointer group hover:bg-zinc-900/60 ${activeIndex === idx
                      ? 'border-emerald-500/40 translate-x-2'
                      : 'border-zinc-800 ' + (idx % 2 === 0 ? 'translate-x-4' : '-translate-x-4')
                    }`}
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black transition-all duration-500 ${activeIndex === idx ? 'bg-emerald-500 text-zinc-950 scale-110' : 'bg-emerald-500/10 text-emerald-500'
                      }`}>
                      {service.id}
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] text-emerald-500 font-black uppercase tracking-widest">{service.category}</div>
                      <div className="text-white font-bold group-hover:text-emerald-400 transition-colors">{service.title}</div>
                    </div>
                    <ChevronDown className={`text-zinc-700 transition-transform duration-500 ${activeIndex === idx ? 'rotate-180 text-emerald-500' : ''}`} size={16} />
                  </div>

                  <div className={`grid transition-all duration-500 ease-in-out ${activeIndex === idx ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'
                    }`}>
                    <div className="overflow-hidden">
                      <p className="text-zinc-500 text-xs md:text-[13px] leading-relaxed border-t border-zinc-800 pt-4">
                        {service.details}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
