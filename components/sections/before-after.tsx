
import React from "react";
import { ArrowRightLeft } from "lucide-react";
import { ShimmerWord } from "@/components/ui/shimmer-word";

export const BeforeAfter = ({ cityName }: { cityName?: string }) => {
  const comparisons = [
    {
      before: "Aparece no Google, mas não gera contato",
      after: "Cada busca vira uma oportunidade real"
    },
    {
      before: "Site lento que não explica nem convence",
      after: "Estrutura rápida que conduz até o contato"
    },
    {
      before: "WhatsApp cheio de mensagens sem resposta",
      after: "IA que atende, qualifica e agenda na hora"
    }
  ];

  return (
    <section className="py-20 md:py-28 px-8 bg-zinc-900/10 border-y border-zinc-900">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="space-y-4 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 block">Evolução</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-[1.1]">
            Chega de perder <br />
            clientes em <span className="text-emerald-500">{cityName || "sua região"}</span>.
          </h2>
        </div>
        <div className="grid gap-4">
          {comparisons.map((item, i) => (
            <div key={i} className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-6 p-6 md:p-8 rounded-2xl bg-zinc-950 border border-zinc-900 group">
              <div className="text-center md:text-right order-2 md:order-1">
                <span className="text-[8px] font-black uppercase text-zinc-700 block mb-2 tracking-widest">Situação Atual</span>
                <p className="text-zinc-500 text-sm md:text-base font-medium leading-snug">{item.before}</p>
              </div>
              <div className="flex justify-center order-1 md:order-2">
                <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-emerald-500">
                  <ArrowRightLeft size={16} />
                </div>
              </div>
              <div className="text-center md:text-left order-3">
                <span className="text-[8px] font-black uppercase text-emerald-500 block mb-2 tracking-widest">Com a Upper</span>
                <p className="text-white text-sm md:text-base font-black uppercase leading-snug">{item.after}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
