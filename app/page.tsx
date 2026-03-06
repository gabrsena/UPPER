
import React from "react";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";
import { Manifesto } from "@/components/sections/manifesto";
import { HomeClient } from "@/components/home-client";

// Dynamic imports for below-the-fold sections
const Services = dynamic(() => import("@/components/sections/services").then(mod => mod.Services));
const BeforeAfter = dynamic(() => import("@/components/sections/before-after").then(mod => mod.BeforeAfter));
const GeoDomination = dynamic(() => import("@/components/sections/geo-domination").then(mod => mod.GeoDomination));
const WhatsAppAutomation = dynamic(() => import("@/components/sections/whatsapp-automation").then(mod => mod.WhatsAppAutomation));
const WhoIsItFor = dynamic(() => import("@/components/sections/who-is-it-for").then(mod => mod.WhoIsItFor));
const About = dynamic(() => import("@/components/sections/about").then(mod => mod.About));
const PlanDiscovery = dynamic(() => import("@/components/sections/plan-discovery").then(mod => mod.PlanDiscovery));
const BlogSection = dynamic(() => import("@/components/sections/blog-section").then(mod => mod.BlogSection));
const Contact = dynamic(() => import("@/components/sections/contact").then(mod => mod.Contact));
const FAQSection = dynamic(() => import("@/components/sections/faq-section").then(mod => mod.FAQSection));
const Footer = dynamic(() => import("@/components/layout/footer").then(mod => mod.Footer));

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
    "description": "Infraestrutura Digital, SEO & IA para Empresas — SEO Local, GEO, WhatsApp IA e Automação",
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
