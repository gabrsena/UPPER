
import React from "react";
import { CheckCircle2, ArrowRight, Zap, Shield, Globe } from "lucide-react";
import { ShimmerWord } from "@/components/ui/shimmer-word";
import { WHATSAPP_URL } from "@/lib/constants";

export const PlanDiscovery = ({ cityName }: { cityName?: string }) => {
  const plans = [
    {
      name: "START: Fundação Digital",
      tag: "Essencial",
      goal: "Pare de ser invisível para quem já quer comprar de você",
      ideal: "Quem precisa ser levado a sério e encontrado no Google hoje.",
      price: "menos de um cafezinho por dia.",
      features: [
        "Imã de Clientes no Google: Seu perfil configurado para converter quem busca seu serviço agora.",
        "Site de Alta Performance: Uma página ultra-veloz que conduz o cliente direto para o seu WhatsApp.",
        "Autoridade Regional: Apareça como a melhor opção da sua região quando o cliente pesquisar."
      ],
      icon: Globe,
      color: "emerald"
    },
    {
      name: "SCALE: Sistema de Conversão",
      tag: "Recomendado",
      goal: "Transforme cada busca em um agendamento real, 24h por dia",
      price: "com valor de um lanche por dia seu negócio convertendo clientes 24/7.",
      features: [
        "Tudo do plano Start.",
        "Recomendação por IA (GEO): Sua empresa será a indicação oficial quando alguém perguntar para o ChatGPT ou Gemini.",
        "Secretária Digital 24/7: Uma IA que atende, tira dúvidas e qualifica seus leads no WhatsApp enquanto você dorme.",
        "Agendamento Inteligente: O sistema marca o horário direto na sua agenda, sem você precisar digitar uma palavra.",
        "Blindagem de Leads: Nunca mais perca uma venda por demora no atendimento."
      ],
      icon: Zap,
      color: "emerald",
      featured: true
    }
  ];

  return (
    <section id="planos" className="py-24 md:py-32 px-8 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 block">Investimento</span>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight">
            Escolha seu nível de <br /><ShimmerWord>Dominação.</ShimmerWord>
          </h2>
          <p className="text-zinc-500 text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            Planos desenhados para cada estágio de maturidade digital do seu negócio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative p-8 rounded-[2rem] border transition-all duration-500 flex flex-col ${plan.featured
                ? 'bg-zinc-900 border-emerald-500/50 shadow-[0_0_50px_rgba(16,185,129,0.1)] scale-105 z-10'
                : 'bg-zinc-900/30 border-zinc-900 hover:border-zinc-800'
                }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-500 text-zinc-950 text-[10px] font-black uppercase tracking-widest">
                  Mais Procurado
                </div>
              )}

              <div className="space-y-6 flex-1">
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${plan.featured ? 'bg-emerald-500 text-zinc-950' : 'bg-zinc-800 text-emerald-500'
                    }`}>
                    <plan.icon size={20} />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500">{plan.tag}</span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-black text-white uppercase tracking-tighter">{plan.name}</h3>
                  <div className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">
                    {plan.goal}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="text-[9px] font-black uppercase tracking-widest text-zinc-600">O que está incluso:</div>
                    <ul className="space-y-3">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2 text-white text-[11px] font-bold uppercase tracking-tight leading-tight">
                          <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          {feature.includes(':') ? (
                            <span>
                              {feature.split(':')[0]}:
                              <span className="text-zinc-600 font-medium lowercase ml-1">
                                {feature.split(':').slice(1).join(':')}
                              </span>
                            </span>
                          ) : (
                            feature
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800 space-y-4">
                <div className="text-center group-hover/card:-translate-y-1 transition-transform duration-500">
                  <div className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-3">Investimento</div>
                  <div className="relative inline-block">
                    <div className="absolute -inset-2 bg-emerald-500/10 rounded-xl blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                    <div className="relative p-4 rounded-xl bg-zinc-950/50 border border-zinc-800/50 group-hover/card:border-emerald-500/20 group-hover/card:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all duration-500 overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent translate-x-[-100%] group-hover/card:animate-shimmer" />
                      <div className="text-xs md:text-sm font-black text-white uppercase tracking-tight leading-relaxed">
                        {plan.price}
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-full font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 transition-all duration-300 ${plan.featured
                    ? 'bg-emerald-500 text-zinc-950 hover:bg-emerald-400'
                    : 'bg-zinc-800 text-white hover:bg-zinc-700'
                    }`}
                >
                  Solicitar Diagnóstico
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
