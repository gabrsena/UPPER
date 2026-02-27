
"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ServiceDetails } from "@/components/sections/service-details";
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

interface ServicePageClientProps {
  serviceKey: string;
  data: {
    label: string;
    headline: string;
    description: string;
    benefits: string[];
    faqQuestions: Array<{ q: string; a: string }>;
  };
}

export default function ServicePageClient({ serviceKey, data }: ServicePageClientProps) {
  const [activeOffer, setActiveOffer] = useState<OfferData | null>(null);

  const handleTriggerSecretOffer = () => {
    setActiveOffer({ 
      originalPrice: "1.490,00", 
      offerPrice: "987",
      bonuses: ["Consultoria de Atendimento"]
    });
  };

  return (
    <div className="bg-zinc-950">
      <Navbar onTriggerSecretOffer={handleTriggerSecretOffer} />
      
      <main>
        <Hero 
          serviceLabel={data.label}
          serviceDescription={data.description}
          serviceBadge={data.label}
        />
        
        <ServiceDetails 
          headline={data.headline}
          description={data.description}
          benefits={data.benefits}
          faqQuestions={data.faqQuestions}
        />

        <Manifesto />
        <Services />
        <BeforeAfter />
        <GeoDomination />
        <WhatsAppAutomation />
        <WhoIsItFor />
        <About />
        <PlanDiscovery />
        <BlogSection filterSlug="automacao-com-ia-para-pequenas-empresas" />
        <Contact />
        <FAQSection />
      </main>

      <Footer />
      <PricingModal offer={activeOffer} onClose={() => setActiveOffer(null)} />
    </div>
  );
}
