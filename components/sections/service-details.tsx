"use client";

import React from "react";
import { CheckCircle2, Plus, Minus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

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

interface ServiceDetailsProps {
  headline: string;
  description: string;
  benefits: string[];
  faqQuestions: Array<{ q: string; a: string }>;
}

export const ServiceDetails = ({ headline, description, benefits, faqQuestions }: ServiceDetailsProps) => {
  return (
    <section className="py-24 md:py-32 px-8 bg-[#fdfaf3] border-t-2 border-[#2d2d2d]/10 relative overflow-hidden">
      {/* Subtle paper pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2d2d2d 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 relative z-10">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-marker text-[#1a1a1a] uppercase tracking-tighter leading-tight relative">
              {headline.split(" ").map((word, i) => (
                <React.Fragment key={i}>
                  {i === headline.split(" ").length - 1 ? (
                    <span className="bg-[#f6eec7] px-2 sketch-border rotate-[1deg] inline-block pen-text">{word}</span>
                  ) : (
                    <span className="pen-text">{word}</span>
                  )}
                  {i < headline.split(" ").length - 1 && " "}
                </React.Fragment>
              ))}
            </h2>
            <p className="text-[#2d2d2d]/60 text-sm md:text-lg leading-relaxed font-hand italic">
              {description}
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-[10px] font-sketch font-bold uppercase tracking-[0.5em] text-[#2d2d2d]/40">Benefícios Exclusivos</h3>
            <ul className="grid gap-4">
              {benefits.map((benefit, i) => {
                const colors = ["bg-[#f6eec7]", "bg-[#d4f1f4]", "bg-[#f9d5e5]", "bg-white"];
                const bgColor = colors[i % colors.length];

                return (
                  <li key={i} className={`flex items-center gap-4 p-4 sketch-border ${bgColor} shadow-[4px_4px_0px_#2d2d2d] group transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#2d2d2d]`}>
                    <CheckCircle2 size={20} className="text-[#2d2d2d] shrink-0" />
                    <span className="text-[#2d2d2d]/80 text-[13px] md:text-sm font-hand italic tracking-tight group-hover:text-[#1a1a1a] transition-colors">
                      {benefit}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="space-y-10">
          <div className="space-y-4">
            <h3 className="text-[10px] font-sketch font-bold uppercase tracking-[0.5em] text-[#2d2d2d]/40">Dúvidas Frequentes</h3>
            <div className="bg-white sketch-border shadow-[8px_8px_0px_#2d2d2d] px-6 md:px-8 rotate-[0.5deg]">
              {faqQuestions.map((faq, i) => (
                <FAQItem key={i} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
