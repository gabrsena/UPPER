
import React from "react";
import { Search, TrendingUp, ArrowRight } from "lucide-react";
import { ShimmerWord } from "@/components/ui/shimmer-word";
import { WHATSAPP_URL } from "@/lib/blog-data";

export const Manifesto = ({ cityName }: { cityName?: string }) => (
  <section id="manifesto" className="py-20 md:py-32 px-8 bg-zinc-950 border-t border-zinc-900 scroll-mt-20">
    <div className="max-w-6xl mx-auto space-y-16">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-tight uppercase">
            Qual dessas situações <br/><ShimmerWord color="emerald">parece com o seu negócio {cityName ? `em ${cityName}` : "hoje"}?</ShimmerWord>
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Bloco 1 */}
        <div className="p-8 md:p-12 rounded-3xl bg-zinc-900/30 border border-zinc-800 space-y-8 hover:border-red-500/30 transition-all duration-500 relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
             <Search size={24} />
            </div>
            <div className="text-right">
              <div className="text-[10px] font-black text-red-500 uppercase tracking-widest">Perda de Oportunidade</div>
              <div className="text-3xl font-black text-white">~10</div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-black text-white uppercase tracking-tight">Seu negócio aparece no Google, mas não vira cliente</h3>
            <p className="text-zinc-500 text-[13px] md:text-sm leading-relaxed">
              Visitas chegam, mas o telefone não toca. Alguém te achou e foi embora para o concorrente sem agir. Isso não é azar. É falta de infraestrutura de conversão. Você está pagando para o seu concorrente vender {cityName ? `em ${cityName}` : ""}.
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t border-zinc-800">
            <div className="text-[10px] font-black uppercase text-red-500 tracking-widest mb-1">Cálculo de Perda Mensal</div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-1">
                <div className="text-[8px] text-zinc-500 uppercase">Buscas/Dia</div>
                <div className="text-xs font-bold text-white">10+</div>
              </div>
              <div className="space-y-1">
                <div className="text-[8px] text-zinc-500 uppercase">Ticket Médio</div>
                <div className="text-xs font-bold text-white">R$ 300</div>
              </div>
              <div className="space-y-1">
                <div className="text-[8px] text-zinc-500 uppercase">Perda Est.</div>
                <div className="text-xs font-bold text-red-500">R$ 2.7k</div>
              </div>
            </div>
            <div className="relative h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
               <div className="absolute top-0 left-0 h-full bg-red-500 w-[30%] group-hover:w-[45%] transition-all duration-1000"></div>
            </div>
          </div>
        </div>

        {/* Bloco 2 */}
        <div className="p-8 md:p-12 rounded-3xl bg-zinc-900/30 border border-zinc-800 space-y-8 hover:border-red-500/30 transition-all duration-500 relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
              <TrendingUp size={24} />
            </div>
            <div className="text-right">
              <div className="text-[10px] font-black text-red-500 uppercase tracking-widest">Custo Invisível</div>
              <div className="text-3xl font-black text-white">R$ 32k</div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-white uppercase tracking-tight">Concorrentes piores aparecem mais que você</h3>
            <p className="text-zinc-500 text-[13px] md:text-sm leading-relaxed">
              Um negócio com serviço inferior está na sua frente {cityName ? `em ${cityName}` : ""}. Não porque é melhor. Porque tem a infraestrutura digital certa. E você não.
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t border-zinc-800">
            <div className="text-[10px] font-black uppercase text-red-500 tracking-widest mb-1">Impacto Anual Acumulado</div>
            <div className="flex items-end gap-2 h-12">
               <div className="flex-1 bg-zinc-800 h-[20%] rounded-t-sm"></div>
               <div className="flex-1 bg-zinc-800 h-[40%] rounded-t-sm"></div>
               <div className="flex-1 bg-zinc-800 h-[60%] rounded-t-sm"></div>
               <div className="flex-1 bg-red-500/50 h-[80%] rounded-t-sm group-hover:bg-red-500 transition-colors"></div>
               <div className="flex-1 bg-red-500 h-full rounded-t-sm animate-pulse"></div>
            </div>
            <div className="flex justify-between text-[10px] text-zinc-400 uppercase font-black">
              <span>Perda de Mercado</span> 
              <span className="text-red-500">R$ 32.400/ano</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center space-y-6">
        <p className="text-zinc-300 text-xs md:text-base font-bold uppercase tracking-widest">
          O problema não é não vender. É não saber quanto você está perdendo {cityName ? `em ${cityName}` : ""}.
        </p>
        <p className="text-zinc-600 text-[9px] uppercase tracking-widest font-bold">
          * Os valores e cálculos acima variam de acordo com o nicho de mercado e ticket médio de cada negócio.
        </p>
      </div>

      <div className="flex justify-center pt-8">
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group btn-shimmer animate-glow inline-flex items-center justify-center gap-3 border border-emerald-500 bg-transparent text-emerald-500 px-6 py-4 md:px-10 md:py-5 rounded-full text-[11px] md:text-[12px] font-black uppercase tracking-[0.2em] transition-all duration-300 ease-in-out hover:bg-emerald-500 hover:text-white hover:scale-105 active:scale-95 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] w-full sm:w-auto">
          Quero parar de perder dinheiro
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </section>
);
