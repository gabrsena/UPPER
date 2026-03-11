"use client";

import React, { useEffect, useState } from "react";
import { MessageSquare, Search, MapPin, Star, TrendingUp, Sparkles } from "lucide-react";
import { GoogleWord } from "@/components/ui/google-word";

export const GeoDomination = ({ cityName }: { cityName?: string }) => {
  const [messages, setMessages] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const script = [
    { sender: "user", text: "Olá! Vi sua empresa no Google. Vocês atendem por convênio?" },
    { sender: "bot", text: "Olá! Sim, atendemos Unimed e Bradesco. Gostaria de ver os horários disponíveis para esta semana?" },
    { sender: "user", text: "Sim, por favor!" },
    { sender: "bot", text: "Perfeito! Tenho vaga amanhã às 14h ou quarta às 10h. Qual prefere?" },
  ] as const;

  useEffect(() => {
    let active = true;
    let currentStep = 0;

    const runScript = async () => {
      while (active) {
        const step = script[currentStep];
        if (!step) break;

        if (step.sender === "bot") {
          setIsTyping(true);
          await new Promise((r) => setTimeout(r, 1500));
          if (!active) break;
          setIsTyping(false);
        } else {
          await new Promise((r) => setTimeout(r, 1000));
          if (!active) break;
        }

        const stepToCapture = currentStep;
        setMessages((prev) => [...prev, stepToCapture]);
        currentStep++;

        if (currentStep === script.length) {
          await new Promise((r) => setTimeout(r, 5000));
          if (!active) break;
          setMessages([]);
          currentStep = 0;
        }
      }
    };

    runScript();
    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="geo-domination" className="py-24 md:py-32 px-8 bg-[#fdfaf3] border-t border-[#2d2d2d]/10 relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#2d2d2d 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 items-center relative z-10">
        <div className="space-y-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 sketch-border bg-[#d4f1f4] text-[#2d2d2d] text-[10px] font-marker uppercase tracking-widest rotate-[-1deg]">
              <Search size={12} />
              Engenharia de Visibilidade
            </div>
            <h2 className="text-3xl md:text-5xl font-marker text-[#1a1a1a] uppercase tracking-tighter leading-[1.1] relative">
              <span className="pen-text">Domine o</span> <GoogleWord uppercase /> <br />
              <span className="bg-[#f6eec7] px-3 sketch-border rotate-[-1deg] inline-block mt-2 pen-text">Maps & IA.</span>
            </h2>
            <p className="text-[#2d2d2d]/70 text-sm md:text-base font-hand leading-relaxed max-w-xl italic">
              Não basta estar no Google. Você precisa ser a primeira escolha do algoritmo e do cliente.
            </p>
          </div>

          <div className="grid gap-6">
            {[
              {
                title: "SEO Local Avançado",
                desc: "Otimização técnica do Perfil da Empresa para rankear no Top 3 do Maps.",
                icon: <MapPin size={20} />,
              },
              {
                title: "GEO (AI Optimization)",
                desc: "Estruturação de dados para que ChatGPT e Gemini recomendem sua empresa.",
                icon: <Star size={20} />,
              },
              {
                title: "Monitoramento de Ranking",
                desc: "Acompanhamento em tempo real da sua posição frente aos concorrentes.",
                icon: <TrendingUp size={20} />,
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-6 bg-white sketch-border shadow-[4px_4px_0px_#2d2d2d] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#2d2d2d] transition-all group">
                <div className="w-12 h-12 sketch-border bg-[#fdfaf3] flex items-center justify-center text-[#2d2d2d] shrink-0 group-hover:bg-[#d4f1f4] transition-colors">{item.icon}</div>
                <div className="space-y-1">
                  <h3 className="text-[#1a1a1a] font-marker uppercase text-sm tracking-tight">{item.title}</h3>
                  <p className="text-[#2d2d2d]/60 text-sm font-hand italic leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 sketch-border bg-[#fae8ff] text-[#2d2d2d] text-[10px] font-marker uppercase tracking-widest rotate-[1deg]">
              <MessageSquare size={12} />
              Conversão Inteligente
            </div>
            <h3 className="text-3xl md:text-5xl font-marker text-[#1a1a1a] uppercase tracking-tighter leading-[1.1]">
              <span className="pen-text">
                <span className="text-[#00b86b]">WhatsApp</span> que
              </span>{" "}
              <br />
              <span className="bg-[#c8f4da] px-3 sketch-border rotate-[-1deg] inline-block mt-2 pen-text text-[#00b86b]">vende sozinho.</span>
            </h3>
            <p className="text-[#2d2d2d]/70 text-sm md:text-base font-hand leading-relaxed italic">
              Pare de perder leads por demora no atendimento. Sua secretária digital atende, qualifica e agenda 24h por dia.
            </p>
          </div>

          <div className="relative bg-[#efeae2] sketch-border shadow-[12px_12px_0px_#2d2d2d] flex flex-col rotate-[1deg] overflow-hidden min-h-[500px]">
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "radial-gradient(#075E54 1.5px, transparent 1.5px)", backgroundSize: "20px 20px" }} />
            
            <div className="bg-[#075E54] text-white p-4 md:p-6 flex items-center gap-3 relative z-10 border-b-2 border-dashed border-[#2d2d2d]/20 sketch-border border-x-0 border-t-0">
              <div className="w-10 h-10 bg-[#fdfaf3]/10 rounded-full flex items-center justify-center sketch-border border-white/20 shrink-0">
                <Sparkles size={18} className="text-[#f6eec7]" />
              </div>
              <div>
                <div className="font-marker tracking-widest text-sm md:text-base">Atendimento Upper</div>
                <div className="text-[10px] md:text-xs font-sketch font-bold uppercase text-white/80 animate-pulse tracking-widest">{isTyping ? "digitando..." : "online"}</div>
              </div>
            </div>

            <div className="p-4 md:p-6 space-y-4 flex-1 flex flex-col justify-end relative z-10">
              {messages.map((idx) => {
                const msg = script[idx];
                if (!msg) return null;
                
                const isBot = msg.sender === "bot";

                return (
                  <div key={idx} className={`flex ${isBot ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-500`}>
                    <div className="relative max-w-[85%]">
                      <div
                        className={`p-3 md:p-4 sketch-border text-xs md:text-sm leading-relaxed relative z-10 ${
                          isBot ? "bg-[#DCF8C6] text-[#1a1a1a] font-marker rounded-2xl rounded-tr-sm" : "bg-white text-[#2d2d2d] italic font-hand rounded-2xl rounded-tl-sm"
                        }`}
                      >
                        {msg.text}
                        <div className="text-right mt-1 opacity-40 text-[9px] font-sans font-bold tracking-tight">
                          14:{32 + idx}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              {isTyping && (
                <div className="flex justify-end animate-in fade-in">
                  <div className="bg-[#DCF8C6] text-[#2d2d2d] px-4 py-2 sketch-border text-[10px] font-marker rounded-2xl rounded-tr-sm animate-pulse">Digitando...</div>
                </div>
              )}
            </div>

            <div className="bg-[#f0f2f5] p-3 flex items-center justify-between border-t-2 border-dashed border-[#2d2d2d]/10 relative z-10 shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 sketch-border bg-white flex items-center justify-center text-[#075E54]">
                  <Sparkles size={14} />
                </div>
                <span className="text-[10px] font-marker text-[#2d2d2d] uppercase tracking-widest">IA Agent: Active</span>
              </div>
              <div className="text-[10px] font-sketch font-black text-[#2d2d2d]/40 uppercase tracking-widest">Response Time: 2s</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
