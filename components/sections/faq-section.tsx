
"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { ShimmerWord } from "@/components/ui/shimmer-word";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2 border-dashed border-[#2d2d2d]/10 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-[13px] md:text-sm font-marker uppercase tracking-tight transition-colors ${isOpen ? 'text-[#1a1a1a] underline decoration-wavy decoration-[#f9d5e5]' : 'text-[#2d2d2d]/60 group-hover:text-[#1a1a1a]'}`}>
          {question}
        </span>
        <div className={`w-6 h-6 sketch-border flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#f6eec7] text-[#2d2d2d] rotate-180' : 'bg-white text-[#2d2d2d]/40 group-hover:border-[#2d2d2d] group-hover:text-[#2d2d2d]'}`}>
          {isOpen ? <Minus size={12} /> : <Plus size={12} />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
        <p className="text-[#2d2d2d]/70 text-[13px] md:text-sm font-hand italic leading-relaxed">
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

  // Define headline and description for the FAQ section based on the new structure
  const headline = "Sem enrolação. Respostas diretas.";
  const description = "Aqui você encontra as respostas para as perguntas mais frequentes sobre como podemos impulsionar seu negócio local.";

  return (
    <section className="py-20 md:py-32 px-8 bg-[#efe5d5] border-t-2 border-[#2d2d2d]/10 relative overflow-hidden">
      {/* Subtle paper pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2d2d2d 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 relative z-10">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-inter font-bold text-[#1a1a1a] tracking-tightest leading-tight relative flex flex-wrap gap-x-3">
              {headline.split(" ").map((word, i) => i === headline.split(" ").length - 1 ? <span key={i} className="bg-[#f6eec7] px-2 sketch-border rotate-[1deg] inline-block">{word}</span> : <span key={i} className="">{word}</span>)}
            </h2>
            <p className="text-[#2d2d2d]/60 text-sm md:text-lg leading-relaxed font-hand italic">
              {description}
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-[10px] font-sketch font-bold uppercase tracking-[0.5em] text-[#2d2d2d]/40">Dúvidas Frequentes</h3>
          <div className="bg-white sketch-border shadow-[8px_8px_0px_#2d2d2d] px-6 md:px-8 rotate-[0.5deg]">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
