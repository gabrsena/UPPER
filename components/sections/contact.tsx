
import React from "react";
import { MessageSquare, ArrowRight, MapPin, Mail, Phone } from "lucide-react";
import { ShimmerWord } from "@/components/ui/shimmer-word";
import { WHATSAPP_URL } from "@/lib/blog-data";

export const Contact = () => (
  <section id="contato" className="py-24 md:py-32 px-8 bg-zinc-950 relative overflow-hidden scroll-mt-20">
    <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-16 md:gap-24 items-center">
      <div className="space-y-10">
        <div className="space-y-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 block">Contato</span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[1.1]">
            Vamos construir sua <br />
            <ShimmerWord>Infraestrutura.</ShimmerWord>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-medium leading-relaxed max-w-md">
            O primeiro passo para dominar o seu mercado local começa com uma conversa estratégica. Estamos prontos para escalar seu negócio.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-4 bg-emerald-500/10 blur-3xl rounded-full opacity-50"></div>
        <div className="relative bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-10 md:p-16 shadow-2xl text-center space-y-10">
          <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mx-auto">
            <MessageSquare size={40} />
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Diagnóstico Gratuito</h3>
            <p className="text-zinc-500 text-sm md:text-base leading-relaxed max-w-md mx-auto">
              Analisamos sua presença digital atual e mostramos o caminho exato para o topo do Google. Sem compromisso.
            </p>
          </div>
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-6 bg-emerald-500 text-zinc-950 rounded-full font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-[0_0_30px_rgba(16,185,129,0.3)]"
          >
            Falar com Especialista
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  </section>
);
