"use client";

import React, { useState, useEffect } from "react";
import { Search, MapPin, Star, TrendingUp, ArrowRight } from "lucide-react";
import { ShimmerWord } from "@/components/ui/shimmer-word";
import { GoogleWord } from "@/components/ui/google-word";
import { WHATSAPP_URL } from "@/lib/constants";

export const GeoDomination = ({ cityName }: { cityName?: string }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(98);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="geo-domination" className="py-24 md:py-32 px-8 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="space-y-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase tracking-widest">
              <Search size={12} />
              Engenharia de Visibilidade
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[1.1]">
              Domine o <GoogleWord uppercase /> <br />
              <ShimmerWord>Maps & IA.</ShimmerWord>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-medium leading-relaxed max-w-xl">
              Não basta estar no Google. Você precisa ser a primeira escolha do algoritmo e do cliente.
            </p>
          </div>

          <div className="grid gap-6">
            {[
              {
                title: "SEO Local Avançado",
                desc: "Otimização técnica do Perfil da Empresa para rankear no Top 3 do Maps.",
                icon: <MapPin size={20} />
              },
              {
                title: "GEO (AI Optimization)",
                desc: "Estruturação de dados para que ChatGPT e Gemini recomendem sua empresa.",
                icon: <Star size={20} />
              },
              {
                title: "Monitoramento de Ranking",
                desc: "Acompanhamento em tempo real da sua posição frente aos concorrentes.",
                icon: <TrendingUp size={20} />
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl bg-zinc-900/30 border border-zinc-900 hover:border-emerald-500/30 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-white font-black uppercase text-sm tracking-tight">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-8 md:p-12 shadow-2xl space-y-8">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-6">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Live Ranking: {cityName || "Regional"}</span>
              </div>
              <div className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Top 3 Secured</div>
            </div>

            <div className="space-y-4">
              {[
                { name: "Sua Empresa", score: 98, color: "bg-emerald-500", animated: true },
                { name: "Concorrente A", score: 65, color: "bg-zinc-800", animated: false },
                { name: "Concorrente B", score: 42, color: "bg-zinc-800", animated: false },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className={`text-xs font-black uppercase tracking-tight ${i === 0 ? 'text-white' : 'text-zinc-600'}`}>
                      {item.name}
                    </span>
                    <span className={`text-[10px] font-black ${i === 0 ? 'text-emerald-500' : 'text-zinc-700'}`}>
                      {item.animated ? progress : item.score}% Visibility
                    </span>
                  </div>
                  <div className="h-2 w-full bg-zinc-950 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} transition-all duration-[2000ms] ease-in-out`}
                      style={{ width: `${item.animated ? progress : item.score}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 space-y-6">
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <Search size={18} />
                </div>
                <div className="text-[10px] font-medium text-zinc-400 leading-relaxed">
                  "O algoritmo do Google agora prioriza <span className="text-white font-bold">infraestruturas de dados</span> sobre palavras-chave soltas."
                </div>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-5 bg-emerald-500 text-zinc-950 rounded-full font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 hover:scale-105 transition-transform"
              >
                Dominar meu mercado
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
