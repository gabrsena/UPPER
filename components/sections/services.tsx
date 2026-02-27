
import React from "react";
import { CheckCircle2 } from "lucide-react";
import { ShimmerWord } from "@/components/ui/shimmer-word";

export const Services = ({ cityName }: { cityName?: string }) => (
  <section id="servicos" className="py-20 md:py-32 px-8 bg-zinc-900/20 border-y border-zinc-900 relative overflow-hidden scroll-mt-20">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
        <div className="space-y-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 block">O Método Upper</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-tight uppercase">
            {cityName ? `Nossos serviços em ${cityName}` : (
              <>
                Como a Upper transforma <br/>
                <ShimmerWord>buscas em clientes</ShimmerWord>
              </>
            )}
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-medium leading-relaxed">
            {cityName 
              ? `Estruturamos a presença digital de empresas em ${cityName} através de um método comprovado de atração e conversão.`
              : "Não fazemos marketing. Construímos a infraestrutura por onde o faturamento da sua empresa vai passar."}
          </p>
          <ul className="space-y-4 pt-4">
            {[
              "Autoridade Local no Google",
              "Estrutura Digital que Converte",
              "Conversão e Atendimento Inteligente",
              "Posicionamento nas Buscas por IA",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-white text-[13px] font-bold uppercase tracking-tight">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-full"></div>
          <div className="relative grid gap-4">
            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center gap-6 translate-x-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-black">1</div>
              <div>
                <div className="text-[10px] text-emerald-500 font-black uppercase tracking-widest">Atração</div>
                <div className="text-white font-bold">Google + IA recomendam você</div>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center gap-6 -translate-x-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-black">2</div>
              <div>
                <div className="text-[10px] text-emerald-500 font-black uppercase tracking-widest">Infraestrutura</div>
                <div className="text-white font-bold">Site rápido que conduz à ação</div>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center gap-6 translate-x-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-black">3</div>
              <div>
                <div className="text-[10px] text-emerald-500 font-black uppercase tracking-widest">Conversão</div>
                <div className="text-white font-bold">WhatsApp que fecha, não enrola</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
