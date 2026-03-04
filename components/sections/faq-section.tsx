
"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { ShimmerWord } from "@/components/ui/shimmer-word";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-900/50 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className={`text-[13px] md:text-sm font-black uppercase tracking-tight transition-colors ${isOpen ? 'text-emerald-500' : 'text-white group-hover:text-emerald-500'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-emerald-500 border-emerald-500 text-zinc-950 rotate-180' : 'border-zinc-800 text-zinc-500 group-hover:border-emerald-500 group-hover:text-emerald-500'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}>
        <p className="text-zinc-500 text-[13px] md:text-sm leading-relaxed max-w-3xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const FAQSection = ({ cityName }: { cityName?: string }) => {
  const generalFaqs = [
    {
      question: "Quanto tempo leva para ver os primeiros resultados?",
      answer: "A otimização da infraestrutura digital (SEO Local) começa a dar sinais em 30 a 60 dias. No entanto, a automação de WhatsApp e as melhorias de conversão no site geram impacto imediato no atendimento e na retenção de leads assim que ativadas."
    },
    {
      question: "A Upper é uma agência de marketing digital comum?",
      answer: "Não. Somos especialistas em infraestrutura de conversão: colocamos sua empresa onde o cliente já está procurando (Google e IA) e garantimos que o atendimento via WhatsApp seja impecável e imediato através de automação inteligente."
    },
    {
      question: "O que exatamente vocês fazem no Google?",
      answer: "Nós 'engenheiramos' a sua presença. Isso inclui otimização profunda do Perfil da Empresa no Google (SEO Local), organização de dados para que as IAs (GEO) te recomendem e criação de páginas ultra-rápidas que convertem visitantes em leads no WhatsApp."
    },
    {
      question: "Como funciona a secretária digital no WhatsApp?",
      answer: "Instalamos uma camada de inteligência no seu WhatsApp Business que responde instantaneamente 24h por dia com linguagem natural, entende o contexto, tira dúvidas e pode até realizar agendamentos."
    },
    {
      question: "Preciso investir em anúncios (Google Ads)?",
      answer: "Nossa infraestrutura foca em tráfego orgânico e autoridade, o que reduz sua dependência de anúncios. No entanto, se você já investe em Ads, nossa estrutura vai fazer com que cada real investido renda muito mais, pois a conversão das páginas será drasticamente superior."
    }
  ];

  const cityFaqs = [
    {
      question: `Quanto tempo demora para eu passar a concorrência em ${cityName}?`,
      answer: `O mercado digital de ${cityName} reage rápido. Na parte de Google Meu Negócio, vemos subidas nas pesquisas geolocalizadas entre 3 e 5 semanas de otimização profunda. Já na parte de Automacão do WhatsApp, o impacto é instantâneo: você para de perder clientes para a concorrência no minuto 1 de implementação.`
    },
    {
      question: `Vocês trabalham com negócios físicos de qualquer nicho em ${cityName}?`,
      answer: `Sim! Se a sua empresa depende de clientes locais pesquisando no Google e conversando no WhatsApp (clínicas, escritórios automotivos, restaurantes, consórcios, petshops, assistências técnicas em ${cityName}), nossa infraestrutura é o acelerador ideal para seu faturamento explodir.`
    },
    {
      question: `A inteligência artificial funciona para o meu perfil de cliente em ${cityName}?`,
      answer: `Absolutamente. Nossa automação de IA é treinada para entender linguagem coloquial, áudio e gírias regionais. Ela não soa como "robô genérico" — ela soa como um atendente super treinado e empático, focado em converter as dúvidas dos clientes de ${cityName} em agendamentos reais.`
    },
    {
      question: `O que preciso fornecer para dominarmos o tráfego de ${cityName}?`,
      answer: `Apenas o acesso ao seu Google Meu Negócio atual e o treinamento da automação de WhatsApp. Nós mapeamos as tendências e o padrão de buscas de ${cityName} com ferramentas profissionais, otimizamos todas as tags invisíveis e montamos o funil sem que você precise se preocupar com a parte técnica.`
    },
    {
      question: `Existe risco do meu WhatsApp ser banido?`,
      answer: `Nenhum. Empregamos arquitetura homologada e segura através de APIs oficiais conectadas à infraestrutura da sua empresa. Assim você aumenta o volume de clientes atendidos simultaneamente em ${cityName} sem qualquer estresse.`
    }
  ];

  const faqs = cityName ? cityFaqs : generalFaqs;

  return (
    <section id="faq" className="py-24 md:py-32 px-8 bg-zinc-950 border-t border-zinc-900 scroll-mt-20">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <ScrollReveal>
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 block">Transparência FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white leading-tight uppercase">
              Sem enrolação. <ShimmerWord>Respostas diretas.</ShimmerWord>
            </h2>
          </ScrollReveal>
        </div>
        <div className="bg-zinc-900/10 rounded-3xl px-6 md:px-10 border border-zinc-900/50">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};
