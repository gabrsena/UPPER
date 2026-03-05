

import React from "react";
import { ArrowRight, Star, TrendingUp, Search, Cpu, Users, Sparkles } from "lucide-react";
import dynamic from "next/dynamic";

import HeroTypewriter from "@/components/hero-typewriter";
import { WHATSAPP_URL } from "@/lib/constants";
import Image from "next/image";

export const Hero = ({
  cityName,
  serviceLabel,
  serviceDescription,
  serviceBadge
}: {
  cityName?: string;
  serviceLabel?: string;
  serviceDescription?: string;
  serviceBadge?: string;
}) => {
  const typewriterWords = [
    "faturamento previsível.",
    "autoridade regional.",
    "lucro no caixa.",
    "novos clientes."
  ];

  return (
    <section id="inicio" data-hero className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 md:pt-40 md:pb-32 hero-gradient overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
          <path d="M-50 750C200 700 350 780 500 650C650 520 800 600 950 400C1100 200 1300 150 1500 50" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 md:gap-24 lg:gap-16 items-center">
          <div className="space-y-12 md:space-y-16 text-left">
            <div className="space-y-8">
              {serviceBadge && (
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-zinc-500 border-l border-emerald-500 pl-4 block">
                  {serviceBadge}
                </span>
              )}
              <h1
                className="text-[32px] sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-[1.05] text-white flex flex-col items-start justify-start gap-1"
              >
                {serviceLabel ? (
                  <>
                    <span className="block opacity-90">Infraestrutura</span>
                    <span className="text-emerald-500">Digital de {serviceLabel}</span>
                  </>
                ) : cityName ? (
                  <>
                    <span className="block opacity-90">Dominando o Google</span>
                    <span className="text-emerald-500">& IA em {cityName}</span>
                  </>
                ) : (
                  <>
                    <span className="block opacity-90">
                      Transformamos buscase em
                    </span>
                    <span className="flex items-center justify-start gap-x-3 whitespace-nowrap min-h-[1.1em]">
                      <HeroTypewriter words={typewriterWords} isLCP={true} />
                    </span>
                  </>
                )}
              </h1>

              <p className="max-w-xl text-zinc-400 font-medium text-base sm:text-lg md:text-xl leading-relaxed opacity-80">
                {serviceDescription
                  ? serviceDescription
                  : cityName
                    ? `SEO Local, GEO & IA, Criação de Site e Automação com IA em ${cityName} — construímos a infraestrutura digital que coloca sua empresa como primeira opção.`
                    : "Google + IA = lucro real 24h"}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-start gap-6 w-full">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 bg-white text-zinc-950 px-10 py-5 rounded-full text-[12px] font-black uppercase tracking-widest transition-all duration-500 ease-out hover:scale-105 active:scale-95 w-full sm:w-auto overflow-hidden shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
              >
                <span className="relative z-10">Ativar Sistema de Conversão</span>
                <div className="absolute inset-0 bg-emerald-500 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500"></div>
                <ArrowRight size={16} className="relative z-10 group-hover:text-white transition-colors duration-500" />
              </a>
              <a
                href="#manifesto"
                className="group inline-flex items-center justify-center gap-3 text-zinc-500 px-6 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 hover:text-white w-full sm:w-auto"
              >
                Diagnóstico Gratuito
              </a>
            </div>

            {/* Social Proof - Human Centric */}
            <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[
                    "/avatar hero/fachadaativa13.webp",
                    "/avatar hero/NZN_7.jpg",
                    "/avatar hero/FLY01.PNG",
                  ].map((src, i) => (
                    <div key={i} className="w-12 h-12 rounded-2xl border-2 border-zinc-950 bg-zinc-900 overflow-hidden relative shadow-2xl transition-transform hover:scale-110 hover:z-20 rotate-[3deg] even:rotate-[-3deg]">
                      <Image
                        src={src}
                        alt={`Cliente ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                  ))}
                </div>
                <div className="space-y-0.5">
                  <div className="text-[13px] font-black text-white uppercase tracking-tight">Estratégia Superior</div>
                  <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">+147 empresas no topo</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 max-w-sm">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest">Google Maps SEO</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest">IA Optimization</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest">WhatsApp IA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group perspective-1000 hidden lg:block">
            {/* Artistic Floating Tiles */}
            <div className="relative w-full aspect-[4/5] flex items-center justify-center">
              {/* Main Card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] bg-zinc-900/40 backdrop-blur-3xl border border-white/5 rounded-[40px] shadow-2xl overflow-hidden p-10 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <div className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em]">Infrastructure Monitor</div>
                    <h3 className="text-3xl font-black text-white leading-none uppercase tracking-tighter">Performance<br />Live</h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                    <TrendingUp size={24} />
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <span className="text-[11px] font-black text-zinc-500 uppercase tracking-widest">Search Authority</span>
                      <span className="text-xl font-black text-white">99.8%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 w-[95%]"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/5">
                    <div className="space-y-1">
                      <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Lead Gen</div>
                      <div className="text-2xl font-black text-white">+147%</div>
                    </div>
                    <div className="space-y-1 text-right">
                      <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Efficiency</div>
                      <div className="text-2xl font-black text-emerald-500">MAX</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Tiles */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-[32px] overflow-hidden shadow-2xl rotate-6 translate-x-8 -translate-y-8 border-4 border-zinc-950 group-hover:rotate-3 group-hover:translate-x-10 transition-all duration-700">
                <Image src="/avatar hero/fachadaativa13.webp" alt="Estratégia Upper" fill className="object-cover" sizes="200px" />
              </div>

              <div className="absolute bottom-0 left-0 w-56 h-40 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-[32px] p-6 shadow-2xl -translate-x-10 translate-y-6 -rotate-3 group-hover:rotate-0 group-hover:-translate-x-12 transition-all duration-700 flex flex-col justify-between">
                <div className="flex gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
                </div>
                <div className="space-y-1">
                  <div className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Live Integration</div>
                  <p className="text-xs font-bold text-white uppercase leading-tight">WhatsApp IA conversando agora em {cityName || "Sorocaba"}</p>
                </div>
              </div>

              {/* UI Elements */}
              <div className="absolute -top-10 -left-10 text-zinc-900 opacity-20 pointer-events-none">
                <Sparkles size={200} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
