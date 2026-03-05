
import React from "react";
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
import { Footer } from "@/components/layout/footer";
import { HomeClient } from "@/components/home-client";

export default function Home() {
  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Upper Agency",
    "url": "https://www.upperagency.com.br",
    "telephone": "+5511910163467",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sorocaba",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "areaServed": ["Sorocaba", "Votorantim", "Itu", "Salto", "Itapetininga", "Boituva", "Porto Feliz"]
  };

  const jsonLdLocal = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Upper Agency",
    "description": "Infraestrutura digital para empresas locais — SEO Local, GEO, WhatsApp IA e Automação",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -23.5015,
      "longitude": -47.4526
    }
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.upperagency.com.br"
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocal) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      <HomeClient>
        <main>
          <Hero />
          <Manifesto />
          <Services />
          <BeforeAfter />
          <GeoDomination />
          <WhatsAppAutomation />
          <WhoIsItFor />
          <About />
          <PlanDiscovery />
          <BlogSection />
          <Contact />
          <FAQSection />
        </main>
        <Footer />
      </HomeClient>
    </>
  );
}
