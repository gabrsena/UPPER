"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, Clock, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { ShimmerWord } from "@/components/ui/shimmer-word";
import { WHATSAPP_URL } from "@/lib/constants";

export const WhatsAppAutomation = ({ cityName }: { cityName?: string }) => {
  const [messages, setMessages] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const script = [
    { sender: 'user', text: "Olá! Vi sua empresa no Google. Vocês atendem por convênio?" },
    { sender: 'bot', text: "Olá! Sim, atendemos Unimed e Bradesco. Gostaria de ver os horários disponíveis para esta semana?" },
    { sender: 'user', text: "Sim, por favor!" },
    { sender: 'bot', text: "Perfeito! Tenho vaga amanhã às 14h ou quarta às 10h. Qual prefere?" }
  ];

  useEffect(() => {
    let active = true;
    let currentStep = 0;

    const runScript = async () => {
      while (active) {
        const step = script[currentStep];
        if (!step) break;

        if (step.sender === 'bot') {
          setIsTyping(true);
          await new Promise(r => setTimeout(r, 1500));
          if (!active) break;
          setIsTyping(false);
        } else {
          await new Promise(r => setTimeout(r, 1000));
          if (!active) break;
        }

        const stepToCapture = currentStep;
        setMessages(prev => [...prev, stepToCapture]);

        currentStep++;

        if (currentStep === script.length) {
          await new Promise(r => setTimeout(r, 5000));
          if (!active) break;
          setMessages([]);
          currentStep = 0;
        }
      }
    };

    runScript();
    return () => { active = false; };
  }, []);

  return (
    <section id="whatsapp-automation" className="py-24 md:py-32 px-8 bg-zinc-900/10 border-y border-zinc-900 relative overflow-hidden scroll-mt-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="relative bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-8 md:p-12 shadow-2xl space-y-8">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Live Chat: Active</span>
              </div>
              <div className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">24/7 Response</div>
            </div>

            <div className="space-y-6 min-h-[320px] flex flex-col justify-end">
              {messages.map((idx) => {
                const msg = script[idx];
                if (!msg) return null;

                return (
                  <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-start' : 'justify-end'} animate-in fade-in slide-in-from-bottom-2 duration-500`}>
                    <div className={`max-w-[85%] p-4 rounded-2xl text-xs leading-relaxed ${msg.sender === 'user'
                        ? 'bg-zinc-950 border border-zinc-900 text-zinc-400'
                        : 'bg-emerald-500 text-zinc-950 font-bold'
                      }`}>
                      {msg.text}
                    </div>
                  </div>
                );
              })}
              {isTyping && (
                <div className="flex justify-end animate-pulse">
                  <div className="bg-emerald-500/20 text-emerald-500 px-4 py-2 rounded-2xl text-[10px] font-bold">
                    Digitando...
                  </div>
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <Sparkles size={16} />
                </div>
                <span className="text-[10px] font-black text-white uppercase tracking-widest">AI Agent: Active</span>
              </div>
              <div className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Response Time: 2s</div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase tracking-widest">
              <MessageSquare size={12} />
              Conversão Inteligente
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[1.1]">
              WhatsApp que <br />
              <ShimmerWord>vende sozinho.</ShimmerWord>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-medium leading-relaxed max-w-xl">
              Pare de perder leads {cityName ? `em ${cityName}` : `por demora no atendimento`}. Sua secretária digital atende, qualifica e agenda 24h por dia.
            </p>
          </div>

          <div className="grid gap-6">
            {[
              {
                title: "Atendimento 24/7",
                desc: "Respostas imediatas em qualquer horário, garantindo que o lead não esfrie.",
                icon: <Clock size={20} />
              },
              {
                title: "Qualificação Automática",
                desc: "A IA filtra curiosos e identifica clientes prontos para comprar.",
                icon: <Sparkles size={20} />
              },
              {
                title: "Agendamento Integrado",
                desc: "Conecte sua agenda e permita que o cliente marque o horário sozinho.",
                icon: <CheckCircle2 size={20} />
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

          <div className="pt-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-emerald-500 text-zinc-950 px-8 py-5 rounded-full text-[12px] font-black uppercase tracking-widest hover:scale-105 transition-transform"
            >
              Ativar minha IA agora
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
