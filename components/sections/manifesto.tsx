"use client";

import React, { useState, useEffect } from "react";
import { ShimmerWord } from "@/components/ui/shimmer-word";

const variations = [
  { searches: "10+", ticket: "R$ 300", loss: "R$ 2.7k", annual: "R$ 32k" },
  { searches: "25+", ticket: "R$ 500", loss: "R$ 8.5k", annual: "R$ 102k" },
  { searches: "50+", ticket: "R$ 1.2k", loss: "R$ 18k", annual: "R$ 216k" },
  { searches: "15+", ticket: "R$ 150", loss: "R$ 1.5k", annual: "R$ 18k" },
];

export const Manifesto = ({ cityName }: { cityName?: string }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % variations.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const current = variations[index];

  return (
    <section id="manifesto" className="py-20 md:py-32 px-8 bg-zinc-950 border-t border-zinc-900 scroll-mt-20 relative overflow-hidden">
      {/* Neon Red Background Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-500/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-600/5 rounded-full blur-[120px] animate-pulse [animation-delay:2s]"></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-red-400/5 rounded-full blur-[100px] animate-pulse [animation-delay:4s]"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-tight uppercase">
              Qual dessas situações <br /><ShimmerWord color="red">parece com o seu negócio {cityName ? `em ${cityName}` : "hoje"}?</ShimmerWord>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bloco 1 */}
          <div className="p-8 md:p-12 rounded-3xl bg-zinc-900/20 backdrop-blur-sm border border-zinc-900 space-y-8 hover:border-red-500/20 transition-all duration-500 relative overflow-hidden group">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-red-500 transition-colors">Seu negócio aparece no Google, mas não vira cliente</h3>
              <p className="text-zinc-500 text-[13px] md:text-sm leading-relaxed">
                Alguém te achou e foi embora para o concorrente sem agir. Isso não é azar. É falta de infraestrutura de conversão. Você está pagando para o seu concorrente vender {cityName ? `em ${cityName}` : ""}.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-zinc-900">
              <div className="text-[10px] font-black uppercase text-zinc-600 tracking-widest mb-1">Cálculo de Perda Mensal Est.</div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-1">
                  <div className="text-[8px] text-zinc-700 uppercase font-bold tracking-widest">Buscas/Dia</div>
                  <div className="text-xs font-black text-white tabular-nums">{current.searches}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[8px] text-zinc-700 uppercase font-bold tracking-widest">Ticket Médio</div>
                  <div className="text-xs font-black text-white tabular-nums">{current.ticket}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[8px] text-zinc-700 uppercase font-bold tracking-widest">Perda Est.</div>
                  <div className="text-xs font-black text-red-500 tabular-nums">{current.loss}</div>
                </div>
              </div>
              <div className="relative h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-red-500 transition-all duration-1000"
                  style={{ width: `${(index + 1) * 25}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Bloco 2 */}
          <div className="p-8 md:p-12 rounded-3xl bg-zinc-900/20 backdrop-blur-sm border border-zinc-900 space-y-8 hover:border-red-500/20 transition-all duration-500 relative overflow-hidden group">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-red-500 transition-colors">Concorrentes piores aparecem mais que você</h3>
              <p className="text-zinc-500 text-[13px] md:text-sm leading-relaxed">
                Um negócio com serviço inferior está na sua frente {cityName ? `em ${cityName}` : ""}. Não porque é melhor. Porque tem a infraestrutura digital certa. E você não.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-zinc-900">
              <div className="text-[10px] font-black uppercase text-zinc-600 tracking-widest mb-1">Impacto Anual Acumulado</div>
              <div className="flex items-end gap-2 h-12">
                <div className={`flex-1 bg-zinc-900 rounded-t-sm transition-all duration-500 ${index >= 0 ? 'h-[20%] bg-red-500/20' : 'h-[10%]'}`}></div>
                <div className={`flex-1 bg-zinc-900 rounded-t-sm transition-all duration-500 ${index >= 1 ? 'h-[45%] bg-red-500/40' : 'h-[10%]'}`}></div>
                <div className={`flex-1 bg-zinc-900 rounded-t-sm transition-all duration-500 ${index >= 2 ? 'h-[70%] bg-red-500/60' : 'h-[10%]'}`}></div>
                <div className={`flex-1 bg-zinc-900 rounded-t-sm transition-all duration-500 ${index >= 3 ? 'h-[95%] bg-red-500' : 'h-[10%]'}`}></div>
              </div>
              <div className="flex justify-between text-[10px] text-zinc-500 uppercase font-black tracking-widest">
                <span>Perda de Mercado</span>
                <span className="text-red-500 tabular-nums">{current.annual}/ano</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-zinc-300 text-xs md:text-base font-bold uppercase tracking-widest">
            O problema não é não vender. É não saber quanto você está perdendo {cityName ? `em ${cityName}` : ""}.
          </p>
          <p className="text-zinc-700 text-[9px] uppercase tracking-widest font-bold">
            * Os valores e cálculos acima variam de acordo com o nicho de mercado e ticket médio de cada negócio.
          </p>
        </div>
      </div>
    </section>
  );
};
