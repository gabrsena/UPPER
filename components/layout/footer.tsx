import React from "react";
import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, Globe, Zap } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import { cityData } from "@/lib/city-service-data";

const SketchBadge = ({ children, className, rotation = "0" }: { children: React.ReactNode; className?: string; rotation?: string }) => (
  <div 
    className={`bg-white sketch-border px-4 py-3 shadow-[4px_4px_0px_#2d2d2d] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_#2d2d2d] ${className}`}
    style={{ transform: `rotate(${rotation}deg)` }}
  >
    {children}
  </div>
);

export const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] relative overflow-hidden flex flex-col pt-32">
      {/* Hand-drawn Top Border Effect */}
      <div className="absolute top-0 inset-x-0 h-10 pointer-events-none opacity-20">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 100">
          <path d="M0,50 Q250,30 500,50 T1000,50" fill="none" stroke="white" strokeWidth="4" strokeDasharray="10 15" />
        </svg>
      </div>

      {/* Subtle Noise / Paper Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/notebook.png')]" />

      {/* Top CTA Banner */}
      <div className="max-w-6xl mx-auto px-8 w-full pb-24 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="space-y-4 text-center lg:text-left">
          <h2 className="text-4xl md:text-6xl font-marker text-[#fdfaf3] uppercase tracking-tighter leading-tight max-w-2xl">
            Sua empresa <span className="text-[#DCF8C6] italic">onipresente</span> <br/>
            onde seus clientes buscam.
          </h2>
          <p className="text-white/40 font-sketch text-xs uppercase tracking-[0.3em]">Infraestrutura Digital de Alta Conversão</p>
        </div>
        
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-4 px-10 py-6 bg-[#DCF8C6] hover:bg-[#1DBA8A] text-[#1a1a1a] hover:text-white text-[13px] font-sketch font-black uppercase tracking-[0.25em] transition-all duration-300 hover:-translate-y-2 hover:translate-x-1 sketch-border shadow-[8px_8px_0px_rgba(0,0,0,0.5)] hover:shadow-[12px_12px_0px_#1a1a1a]"
        >
          {/* Hand-drawn button highlight */}
          <div className="absolute -inset-1 border-2 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          
          Consultoria Gratuita
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Main Footer Content Body */}
      <div className="bg-[#fcfaf5] relative z-20 px-8 pt-24 pb-12 border-t-4 border-[#2d2d2d] shadow-[0_-20px_60px_rgba(0,0,0,0.15)]">
        {/* Hand-drawn grid lines */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="h-px bg-[#2d2d2d] w-full" style={{ marginTop: `${(i + 1) * 60}px` }} />
          ))}
          {[...Array(10)].map((_, i) => (
            <div key={i} className="w-px bg-[#2d2d2d] h-full absolute top-0" style={{ left: `${(i + 1) * 200}px` }} />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-24">
            
            {/* Column 1: Core Brand */}
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-4xl font-marker uppercase tracking-tighter text-[#1a1a1a]">
                  Upper<span className="text-[#ef4444]">.</span>
                </h2>
                <p className="text-[#2d2d2d]/80 text-[13px] font-sketch font-bold uppercase tracking-widest leading-none">
                  Infraestrutura Digital de Conversão
                </p>
              </div>
              
              <p className="text-[#2d2d2d]/70 text-[16px] font-hand italic leading-relaxed">
                Construindo a infraestrutura digital que coloca empresas locais no topo do mercado.
              </p>

              <div className="flex gap-6">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-[#1a1a1a] text-[12px] font-sketch font-black uppercase tracking-widest hover:text-[#1DBA8A] transition-colors pb-1 border-b-2 border-transparent hover:border-[#1DBA8A]">
                  Site
                </a>
                <a href="#" className="text-[#1a1a1a] text-[12px] font-sketch font-black uppercase tracking-widest hover:text-[#1DBA8A] transition-colors pb-1 border-b-2 border-transparent hover:border-[#1DBA8A]">
                  Instagram
                </a>
              </div>
            </div>

            {/* Column 2: Hierarchical Services */}
            <div className="space-y-8">
              <h3 className="text-[11px] font-sketch font-black text-[#2d2d2d]/30 uppercase tracking-[0.4em] border-b border-[#2d2d2d]/10 pb-4">Serviços</h3>
              <ul className="space-y-4">
                {[
                  { name: "GEO & IA Dominance", href: "/servicos/geo-ia" },
                  { name: "SEO Local Estrutural", href: "/servicos/seo-local" },
                  { name: "Vendas Automáticas", href: "/servicos/automacao-whatsapp" },
                  { name: "Landing Pages de Elite", href: "/servicos/landing-page" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="group flex items-center gap-2 text-[#1a1a1a] text-[16px] font-hand italic hover:text-[#1DBA8A] transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2d2d2d]/20 group-hover:bg-[#1DBA8A] transition-colors" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Regional SEO */}
            <div className="space-y-8">
              <h3 className="text-[11px] font-sketch font-black text-[#2d2d2d]/30 uppercase tracking-[0.4em] border-b border-[#2d2d2d]/10 pb-4">Foco Regional</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {Object.keys(cityData).slice(0, 8).map((cityKey) => (
                  <Link
                    key={cityKey}
                    href={`/cidade/${cityKey}`}
                    className="text-[#2d2d2d]/60 hover:text-[#1DBA8A] text-[14px] font-hand italic hover:underline decoration-skip-ink"
                  >
                    {cityKey.charAt(0).toUpperCase() + cityKey.slice(1).replace("-", " ")}
                  </Link>
                ))}
              </div>
              <Link href="/cidades" className="inline-flex items-center gap-2 text-[#1DBA8A] text-[10px] font-sketch font-bold uppercase tracking-widest hover:translate-x-1 transition-transform pt-2">
                Explorar todas as regiões
                <ArrowRight size={12} />
              </Link>
            </div>

            {/* Column 4: Premium Trust Badges */}
            <div className="space-y-8">
              <h3 className="text-[11px] font-sketch font-black text-[#2d2d2d]/30 uppercase tracking-[0.4em] border-b border-[#2d2d2d]/10 pb-4">Autoridade</h3>
              <div className="grid grid-cols-1 gap-4">
                <SketchBadge className="bg-[#fdfaf3] flex items-center gap-4" rotation="-1.5">
                  <div className="w-10 h-10 bg-white sketch-border flex items-center justify-center shrink-0">
                    <span className="font-marker text-xl pt-1">5.0</span>
                  </div>
                  <div>
                    <div className="flex text-[#F5C518] mb-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} size={11} fill="currentColor" stroke="none" />)}
                    </div>
                    <div className="text-[9px] font-sketch font-bold uppercase tracking-widest text-[#2d2d2d]">Google Excellence</div>
                  </div>
                </SketchBadge>

                <SketchBadge className="bg-[#DCF8C6]/30 flex items-center gap-4" rotation="1.2">
                  <ShieldCheck size={24} className="text-[#2d2d2d]" />
                  <div className="text-[10px] font-sketch font-bold uppercase tracking-widest text-[#2d2d2d] leading-tight pt-0.5">
                    Meta Business <br/> Premium Partner
                  </div>
                </SketchBadge>

                <div className="grid grid-cols-2 gap-3">
                  <SketchBadge className="bg-white flex items-center justify-center py-2" rotation="-2">
                    <div className="text-[9px] font-sketch font-bold uppercase tracking-tighter text-[#2d2d2d]">Google AI</div>
                  </SketchBadge>
                  <SketchBadge className="bg-white flex items-center justify-center py-2" rotation="2">
                    <div className="text-[9px] font-sketch font-bold uppercase tracking-tighter text-[#2d2d2d]">UX Design</div>
                  </SketchBadge>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Legal & Extended SEO Section */}
          <div className="pt-12 border-t-2 border-dashed border-[#2d2d2d]/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start opacity-60 hover:opacity-100 transition-opacity">
              <div className="space-y-4">
                <p className="text-[#2d2d2d] text-[10px] font-sketch font-bold uppercase tracking-[0.2em] leading-relaxed">
                  © 2026 Upper — Infraestrutura Digital, SEO & IA para Empresas. Todos os direitos reservados.
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  <Link href="/politica-de-privacidade" className="text-[9px] font-sketch font-black uppercase tracking-widest hover:text-[#1DBA8A] transition-colors">Privacidade</Link>
                  <Link href="/termos" className="text-[9px] font-sketch font-black uppercase tracking-widest hover:text-[#1DBA8A] transition-colors">Termos de Uso</Link>
                  <Link href="/blog" className="text-[9px] font-sketch font-black uppercase tracking-widest hover:text-[#1DBA8A] transition-colors">Blog & Insights</Link>
                </div>
              </div>
              
              <p className="text-[#2d2d2d] text-[10px] font-hand italic leading-relaxed text-left lg:text-right max-w-xl ml-auto">
                A Upper constrói a infraestrutura digital por onde o faturamento de empresas locais passa — Google, IA e WhatsApp trabalhando juntos, 24h por dia.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};
