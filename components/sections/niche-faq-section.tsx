
"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQItem as FAQItemType } from "@/lib/niche-faq-data";

const FAQItem = ({ question, answer }: FAQItemType) => {
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

export const NicheFAQSection = ({ 
  faqs, 
  cityName 
}: { 
  faqs: FAQItemType[], 
  cityName: string 
}) => {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-20 md:py-32 px-8 bg-[#efe5d5] border-t-2 border-[#2d2d2d]/10 relative overflow-hidden">
      {/* Subtle paper pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2d2d2d 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 relative z-10">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-marker text-[#1a1a1a] uppercase tracking-tighter leading-tight relative">
              <span className="pen-text">Dúvidas Frequentes</span> <br /> 
              <span className="bg-[#f6eec7] px-2 sketch-border rotate-[1deg] inline-block mt-2 pen-text text-[#854d0e]">Em {cityName}</span>
            </h2>
            <p className="text-[#2d2d2d]/60 text-sm md:text-lg leading-relaxed font-hand italic">
              Entenda como nossa infraestrutura vai transformar o seu posicionamento no mercado local.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-[10px] font-sketch font-bold uppercase tracking-[0.5em] text-[#2d2d2d]/40">FAQ do Serviço</h3>
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
