
"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Manifesto } from "@/components/sections/manifesto";
import { Services } from "@/components/sections/services";
import { BeforeAfter } from "@/components/sections/before-after";
import { GeoDomination } from "@/components/sections/geo-domination";
import { WhatsAppAutomation } from "@/components/sections/whatsapp-automation";
import { WhoIsItFor } from "@/components/sections/who-is-it-for";
import { About } from "@/components/sections/about";
import { PlanDiscovery } from "@/components/sections/plan-discovery";
import { BlogSection } from "@/components/sections/blog-section";
import { Contact } from "@/components/sections/contact";
import { FAQSection } from "@/components/sections/faq-section";
import { PricingModal } from "@/components/ui/pricing-modal";
import { OfferData } from "@/lib/types";
import { serviceData } from "@/lib/city-service-data";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/blog-data";

export default function CityPageClient({ cityName, citySlug }: { cityName: string, citySlug: string }) {
  const [activeOffer, setActiveOffer] = useState<OfferData | null>(null);

  const handleTriggerSecretOffer = () => {
    setActiveOffer({
      originalPrice: "1.490,00",
      offerPrice: "987",
      bonuses: ["Consultoria de Atendimento"]
    });
  };

  const cityLinks = [
    { id: 'inicio', label: 'Home' },
    { id: 'seo-local', label: 'SEO Local' },
    { id: 'geo-ia', label: 'GEO & IA' },
    { id: 'automacao-whatsapp', label: 'WhatsApp' },
    { id: 'landing-page', label: 'Landing Page' },
    { id: 'site-institucional', label: 'Sites' },
    { id: 'automacao-ia', label: 'IA' },
    { id: 'blog', label: 'Blog' },
    { id: 'planos', label: 'Planos' }
  ];

  return (
    <div className="bg-zinc-950">
      <Navbar onTriggerSecretOffer={handleTriggerSecretOffer} customLinks={cityLinks} />

      <main>
        <Hero cityName={cityName} />

        {/* SERVIÇOS INJETADOS */}
        {Object.entries(serviceData).map(([key, s]) => (
          <section key={key} id={key} className="py-24 px-8 border-b border-zinc-900 bg-zinc-950 hover:bg-zinc-900/10 transition-colors group cursor-pointer relative" onClick={() => window.open(WHATSAPP_URL, '_blank')}>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
              <div className="space-y-8 lg:sticky lg:top-32">
                <div className="space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 block">
                    {s.label}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight group-hover:text-emerald-500 transition-colors duration-500">
                    {s.headline} em <span className="text-emerald-500 group-hover:text-white transition-colors duration-500">{cityName}</span>
                  </h2>
                </div>
                <p className="text-zinc-400 text-lg leading-relaxed font-medium">
                  {s.description} Com nossa infraestrutura digital adaptada para {cityName}, sua empresa se destaca da concorrência local.
                </p>
                <div className="pt-8 relative z-10">
                  <span
                    className="inline-flex items-center gap-3 px-8 py-5 bg-emerald-500 text-zinc-950 rounded-full font-black uppercase text-[10px] tracking-[0.2em] group-hover:scale-105 group-hover:bg-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.0)] group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all duration-300"
                  >
                    Quero {s.label} em {cityName}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>

              <div className="space-y-12">
                <div className="space-y-6">
                  <h3 className="text-sm font-black text-white uppercase tracking-widest border-b border-zinc-900 pb-4">Benefícios Diretos</h3>
                  <div className="grid gap-4">
                    {s.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-zinc-900/30 border border-zinc-900/50">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                          <CheckCircle2 size={20} />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-white font-black uppercase text-xs tracking-tight">{benefit.split(':')[0]}</h4>
                          {benefit.split(':').slice(1).join(':') && (
                            <p className="text-zinc-500 text-xs leading-relaxed">
                              {benefit.split(':').slice(1).join(':')}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-sm font-black text-white uppercase tracking-widest border-b border-zinc-900 pb-4">Dúvidas Frequentes sobre {s.label} em {cityName}</h3>
                  <div className="space-y-4">
                    {s.faqQuestions.map((faq, i) => (
                      <div key={i} className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-900/50 space-y-3">
                        <h4 className="text-xs font-black text-white uppercase tracking-tight flex gap-3 leading-relaxed">
                          <span className="text-emerald-500">Q.</span>
                          {faq.q.includes('?') ? faq.q.replace('?', ` em ${cityName}?`) : `${faq.q} em ${cityName}?`}
                        </h4>
                        <p className="text-zinc-500 text-xs leading-relaxed pl-6">
                          {faq.a.replace(/\.$/, ` em ${cityName}.`)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
        <Manifesto cityName={cityName} />
        <Services cityName={cityName} />
        <BeforeAfter cityName={cityName} />
        <GeoDomination cityName={cityName} />
        <WhatsAppAutomation cityName={cityName} />
        <WhoIsItFor cityName={cityName} />
        <About cityName={cityName} />
        <PlanDiscovery cityName={cityName} />
        <BlogSection filterSlug="por-que-ter-site-lento-destroi-vendas" cityName={cityName} citySlug={citySlug} />
        <Contact cityName={cityName} />
        <FAQSection cityName={cityName} />
      </main>

      <Footer />
      <PricingModal offer={activeOffer} onClose={() => setActiveOffer(null)} />
    </div>
  );
}
