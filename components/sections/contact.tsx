"use client";

import React from "react";
import { MessageSquare, ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export const Contact = ({ cityName }: { cityName?: string }) => (
  <section id="contato" className="py-24 md:py-32 px-8 bg-[#efe5d5] border-t-2 border-[#2d2d2d]/10 relative overflow-hidden scroll-mt-20">
    {/* Subtle paper pattern */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2d2d2d 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

    <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-16 md:gap-24 items-center relative z-10">
      <div className="space-y-10">
        <div className="space-y-6">
          <span className="text-[10px] font-sketch font-bold uppercase tracking-[0.5em] text-[#2d2d2d]/40 block">Contato</span>
          <h2 className="text-3xl md:text-5xl font-marker text-[#1a1a1a] uppercase tracking-tighter leading-[1.1] relative">
            <span className="pen-text">Vamos construir sua</span> <br />
            <span className="bg-[#f6eec7] px-3 sketch-border rotate-[-1deg] inline-block mt-2 pen-text">Infraestrutura.</span>
          </h2>
          <p className="text-[#2d2d2d]/60 text-sm md:text-base font-hand italic leading-relaxed max-w-md">
            O primeiro passo para dominar o seu mercado local {cityName ? `em ${cityName}` : ""} começa com uma conversa estratégica. Estamos prontos para escalar seu negócio.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="relative bg-white sketch-border shadow-[12px_12px_0px_#2d2d2d] p-10 md:p-16 text-center space-y-10 rotate-[0.5deg]">
          <div className="w-20 h-20 sketch-border bg-[#d4f1f4] flex items-center justify-center text-[#2d2d2d] mx-auto">
            <MessageSquare size={40} />
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl font-marker text-[#1a1a1a] uppercase tracking-tighter">
              {cityName ? `Diagnóstico gratuito para empresas em ${cityName}` : "Diagnóstico Gratuito"}
            </h3>
            <p className="text-[#2d2d2d]/60 text-sm md:text-base font-hand italic leading-relaxed max-w-md mx-auto">
              Analisamos sua presença digital atual {cityName ? `em ${cityName}` : ""} e mostramos o caminho exato para o topo do Google. Sem compromisso.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-6 bg-[#d4f1f4] text-[#2d2d2d] sketch-border font-marker uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-3 hover-jitter shadow-[6px_6px_0px_#2d2d2d]"
          >
            Falar com Especialista
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  </section>
);
