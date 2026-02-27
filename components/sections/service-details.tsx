
"use client";

import React from "react";
import { CheckCircle2, Plus, Minus } from "lucide-react";
import { ShimmerWord } from "@/components/ui/shimmer-word";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-zinc-900/50 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-[13px] md:text-sm font-black uppercase tracking-tight transition-colors ${isOpen ? 'text-emerald-500' : 'text-white group-hover:text-emerald-500'}`}>
          {question}
        </span>
        <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-emerald-500 border-emerald-500 text-zinc-950 rotate-180' : 'border-zinc-800 text-zinc-500 group-hover:border-emerald-500 group-hover:text-emerald-500'}`}>
          {isOpen ? <Minus size={12} /> : <Plus size={12} />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
        <p className="text-zinc-500 text-[13px] md:text-sm leading-relaxed">
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
    <section className="py-20 md:py-32 px-8 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-24">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight">
              {headline.split(" ").map((word, i) => i === headline.split(" ").length - 1 ? <ShimmerWord key={i}>{word}</ShimmerWord> : word + " ")}
            </h2>
            <p className="text-zinc-400 text-sm md:text-lg leading-relaxed font-medium">
              {description}
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500">Benefícios Exclusivos</h3>
            <ul className="grid gap-4">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 group hover:border-emerald-500/30 transition-colors">
                  <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                  <span className="text-zinc-300 text-[13px] md:text-sm font-bold uppercase tracking-tight group-hover:text-white transition-colors">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-10">
          <div className="space-y-4">
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500">Dúvidas Frequentes</h3>
            <div className="bg-zinc-900/20 rounded-3xl px-6 md:px-8 border border-zinc-900/50">
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
