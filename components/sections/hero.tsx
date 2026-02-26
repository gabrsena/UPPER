
"use client";

import React from "react";
import { ArrowRight, Star, TrendingUp, Search, Cpu, Users, Sparkles } from "lucide-react";
import { Typewriter } from "@/components/ui/typewriter";
import { ShimmerWord } from "@/components/ui/shimmer-word";
import { WHATSAPP_URL } from "@/lib/blog-data";
import Image from "next/image";

export const Hero = () => {
  const typewriterWords = [
    "faturamento previsível.",
    "autoridade regional.",
    "lucro no caixa.",
    "novos clientes."
  ];

  return (
    <section id="inicio" className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 md:pt-40 md:pb-32 bg-grid-subtle hero-gradient overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
          <path d="M-50 750C200 700 350 780 500 650C650 520 800 600 950 400C1100 200 1300 150 1500 50" stroke="#10b981" strokeWidth="1" />
        </svg>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24 lg:gap-32 items-center">
          <div className="space-y-8 md:space-y-10 text-left">
            <div className="space-y-6">
              <h1 
                className="text-[24px] sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.2] text-white flex flex-col items-start justify-start gap-2 md:gap-4"
              >
                <span className="block">Transformamos buscas pelo seu negócio em</span>
                <span className="flex items-center justify-start gap-x-3 whitespace-nowrap">
                  <ShimmerWord><Typewriter words={typewriterWords} speed={80} delayBetweenWords={2500} cursor={true} cursorChar="|" /></ShimmerWord>
                </span>
              </h1>
              
              <p className="max-w-xl text-zinc-400 font-medium text-sm sm:text-base md:text-lg leading-relaxed">
               A infraestrutura definitiva que une Visibilidade no Google e Conversão via IA para gerar lucro real, 24h por dia
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start justify-start gap-4 w-full">
              <a 
                href="#manifesto" 
                className="group btn-shimmer animate-glow inline-flex items-center justify-center gap-3 border border-emerald-500 bg-transparent text-emerald-500 px-6 py-4 md:px-8 md:py-4 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ease-in-out hover:bg-emerald-500 hover:text-white hover:scale-105 active:scale-95 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] w-full sm:w-auto"
                aria-label="Entender se a Upper é para minha empresa"
              >
                Entender se a Upper é para mim
              </a>
              <a 
                href={WHATSAPP_URL} 
                target="_blank"
                rel="noopener noreferrer"
                className="group btn-shimmer inline-flex items-center justify-center gap-3 bg-emerald-500 text-zinc-950 px-6 py-4 md:px-8 md:py-4 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ease-in-out hover:bg-emerald-400 hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                Ativar meu Sistema de Conversão
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Social Proof - Trusted By */}
            <div className="pt-8 border-t border-zinc-900/50 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-zinc-950 bg-zinc-800 flex items-center justify-center overflow-hidden relative">
                      <Image 
                        src={`https://picsum.photos/seed/user${i}/100/100`} 
                        alt={`Cliente satisfeito da UPPER ${i}`} 
                        fill
                        className="object-cover" 
                      />
                    </div>
                  ))}
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                  +147 empresas locais dominando o Maps
                </div>
              </div>
              <div className="flex items-center gap-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-600 whitespace-nowrap">Especialistas em:</span>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  <span className="text-[10px] font-bold text-zinc-500">Google search</span>
                  <span className="text-[10px] font-bold text-zinc-500">Google Maps SEO</span>
                  <span className="text-[10px] font-bold text-zinc-500">GEO / IA</span>
                  <span className="text-[10px] font-bold text-zinc-500">Automação WhatsApp Business</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative group lg:translate-x-12 xl:translate-x-20">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-emerald-500/0 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-zinc-950/50 backdrop-blur-xl border border-zinc-800 p-8 rounded-[2rem] shadow-2xl overflow-hidden aspect-square lg:aspect-auto lg:h-[600px] flex flex-col gap-6">
              {/* Header do Monitor */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Infrastructure Monitor: Active</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                    <Star size={10} className="text-emerald-500 fill-emerald-500" />
                    <span className="text-[9px] font-black text-emerald-500">5.0 RATING</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-1 h-4 bg-zinc-800 rounded-full"></div>
                    <div className="w-1 h-6 bg-emerald-500 rounded-full"></div>
                    <div className="w-1 h-3 bg-zinc-800 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Grid de Performance */}
              <div className="grid grid-cols-2 gap-4">
                {/* SEO Local Card */}
                <div className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex flex-col justify-between group/card hover:border-emerald-500/30 transition-colors">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                      <Search size={20} />
                    </div>
                    <div className="text-xs font-black text-white uppercase tracking-tight">SEO Local</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 w-[85%] animate-pulse"></div>
                    </div>
                    <div className="flex justify-between text-[8px] font-bold text-zinc-500 uppercase tracking-widest">
                      <span>Visibility</span>
                      <span className="text-emerald-500">85%</span>
                    </div>
                  </div>
                </div>

                {/* GEO / IA Card */}
                <div className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex flex-col justify-between group/card hover:border-emerald-500/30 transition-colors">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                      <Cpu size={20} />
                    </div>
                    <div className="text-xs font-black text-white uppercase tracking-tight">GEO & IA</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 w-[92%] animate-pulse" style={{ animationDelay: '500ms' }}></div>
                    </div>
                    <div className="flex justify-between text-[8px] font-bold text-zinc-500 uppercase tracking-widest">
                      <span>AI Training</span>
                      <span className="text-purple-500">92%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Activity Feed */}
              <div className="flex-1 bg-zinc-950/50 border border-zinc-900 rounded-2xl p-4 overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-zinc-950 to-transparent z-10"></div>
                <div className="space-y-3 animate-marquee-vertical">
                  {[
                    { type: 'SEO', msg: 'Keyword "SEO Local Sorocaba" ranked #1', time: '2m ago' },
                    { type: 'IA', msg: 'Google Gemini recommended business in GEO', time: '5m ago' },
                    { type: 'WA', msg: 'WhatsApp lead converted automatically', time: '12m ago' },
                    { type: 'SEO', msg: 'GMB Profile optimized for 12 new categories', time: '18m ago' },
                    { type: 'WA', msg: 'New customer scheduled via secretária digital', time: '25m ago' },
                    { type: 'SEO', msg: 'Keyword "SEO Local Sorocaba" ranked #1', time: '2m ago' },
                    { type: 'IA', msg: 'Google Gemini recommended business in GEO', time: '5m ago' },
                    { type: 'WA', msg: 'WhatsApp lead converted automatically', time: '12m ago' },
                    { type: 'SEO', msg: 'GMB Profile optimized for 12 new categories', time: '18m ago' },
                    { type: 'WA', msg: 'New customer scheduled via secretária digital', time: '25m ago' },
                  ].map((log, i) => (
                    <div key={i} className="flex items-center justify-between gap-4 border-b border-zinc-900/50 pb-2">
                      <div className="flex items-center gap-3">
                        <span className={`text-[8px] font-black px-1.5 py-0.5 rounded ${
                          log.type === 'SEO' ? 'bg-emerald-500/10 text-emerald-500' : 
                          log.type === 'IA' ? 'bg-purple-500/10 text-purple-500' : 'bg-blue-500/10 text-blue-500'
                        }`}>
                          {log.type}
                        </span>
                        <span className="text-[10px] font-medium text-zinc-400 truncate max-w-[180px]">{log.msg}</span>
                      </div>
                      <span className="text-[8px] font-bold text-zinc-600 uppercase whitespace-nowrap">{log.time}</span>
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-zinc-950 to-transparent z-10"></div>
              </div>

              {/* Footer do Monitor */}
              <div className="bg-emerald-500/5 border border-emerald-500/10 p-4 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-zinc-950">
                    <TrendingUp size={16} />
                  </div>
                  <div>
                    <div className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">Conversion Rate</div>
                    <div className="text-white font-bold text-sm">+124% Growth</div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-1">
                    <Users size={10} className="text-zinc-500" />
                    <span className="text-[9px] font-black text-white">147 CLIENTS</span>
                  </div>
                  <div className="text-[8px] font-black text-zinc-600 uppercase tracking-[0.2em]">Live</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
