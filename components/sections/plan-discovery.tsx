
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
    <section id="planos" className="py-24 md:py-32 px-8 bg-[#efe5d5] border-t border-[#2d2d2d]/10 relative overflow-hidden scroll-mt-20">
      {/* Subtle paper pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, #2d2d2d 0px, #2d2d2d 1px, transparent 1px, transparent 30px)' }} />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        <div className="text-center space-y-6">
          <span className="text-[10px] font-sketch font-bold uppercase tracking-[0.5em] text-[#2d2d2d]/60 block">Blog Upper.</span>
          <h2 className="text-4xl md:text-6xl font-marker text-[#1a1a1a] uppercase tracking-tighter leading-tight relative">
            <span className="pen-text">Escolha seu nível de</span> <br />
            <span className="bg-[#f6eec7] px-4 sketch-border rotate-[-1deg] inline-block mt-2 pen-text">Dominação.</span>
          </h2>
          <p className="text-[#2d2d2d]/70 text-base md:text-lg font-hand max-w-2xl mx-auto leading-relaxed italic">
            Planos desenhados para cada estágio de maturidade digital do seu negócio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative p-8 sketch-border transition-all duration-300 flex flex-col hover:translate-x-[2px] hover:translate-y-[2px] ${plan.featured
                ? 'bg-white shadow-[12px_12px_0px_#2d2d2d] hover:shadow-[8px_8px_0px_#2d2d2d] z-10 rotate-[1deg]'
                : 'bg-white/60 shadow-[8px_8px_0px_#2d2d2d]/10 hover:shadow-[4px_4px_0px_#2d2d2d]/20 rotate-[-1deg]'
                }`}
            >
              {plan.featured && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 sketch-border bg-[#d4f1f4] text-[#2d2d2d] text-[10px] font-marker uppercase tracking-widest rotate-[-2deg]">
                  Mais Procurado!
                </div>
              )}

              <div className="space-y-6 flex-1">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 sketch-border flex items-center justify-center ${plan.featured ? 'bg-[#f6eec7]' : 'bg-[#efe5d5]'
                    }`}>
                    <plan.icon size={24} className="text-[#2d2d2d]" />
                  </div>
                  <span className="text-[11px] font-marker uppercase tracking-widest text-[#2d2d2d]/40 underline decoration-wavy decoration-[#f9d5e5]">{plan.tag}</span>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="text-2xl font-marker text-[#1a1a1a] uppercase tracking-tighter">{plan.name}</h3>
                  <div className="text-[10px] font-marker text-[#2d2d2d] bg-[#d4f1f4]/30 px-3 py-1 sketch-border inline-block rotate-1">
                    OBJETIVO: {plan.goal}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="text-[9px] font-sketch font-bold uppercase tracking-[0.2em] text-[#2d2d2d]/40">Conteúdo do Caderno:</div>
                    <ul className="space-y-4">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3 text-[#2d2d2d] text-sm font-hand leading-snug">
                          <CheckCircle2 size={16} className="text-[#2d2d2d] shrink-0 mt-0.5" />
                          {feature.includes(':') ? (
                            <span className="italic">
                              <span className="font-bold underline decoration-[#f9d5e5]">{feature.split(':')[0]}:</span>
                              <span className="ml-1 opacity-80">
                                {feature.split(':').slice(1).join(':')}
                              </span>
                            </span>
                          ) : (
                            <span className="italic opacity-80">{feature}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>

              <div className="mt-10 pt-8 border-t-2 border-dashed border-[#2d2d2d]/10 space-y-6">
                <div className="text-center group">
                  <div className="text-[10px] font-sketch font-bold text-[#2d2d2d]/40 uppercase tracking-widest mb-4">Investimento Previsto</div>
                  <div className="relative inline-block rotate-[-1deg]">
                    <div className="p-4 sketch-border bg-white shadow-[4px_4px_0px_#2d2d2d] group-hover:bg-[#efe5d5] transition-all">
                      <div className="text-sm md:text-base font-marker text-[#1a1a1a] uppercase tracking-tight">
                        {plan.price}
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-5 sketch-border font-marker uppercase text-[11px] tracking-widest flex items-center justify-center gap-3 transition-all hover-jitter shadow-[6px_6px_0px_#2d2d2d] active:shadow-none active:translate-x-[6px] active:translate-y-[6px] ${plan.featured
                    ? 'bg-[#d4f1f4] text-[#2d2d2d]'
                    : 'bg-white text-[#2d2d2d]'
                    }`}
                >
                  Ativar meu sistema
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
