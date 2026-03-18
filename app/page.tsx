
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";
import { Manifesto } from "@/components/sections/manifesto";
import { HomeClient } from "@/components/home-client";
import { AdhesiveTape } from "@/components/ui/adhesive-tape";

// Dynamic imports for below-the-fold sections
const Services = dynamic(() => import("@/components/sections/services").then(mod => mod.Services));
const BeforeAfter = dynamic(() => import("@/components/sections/before-after").then(mod => mod.BeforeAfter));
const GeoDomination = dynamic(() => import("@/components/sections/geo-domination").then(mod => mod.GeoDomination));
const WhoIsItFor = dynamic(() => import("@/components/sections/who-is-it-for").then(mod => mod.WhoIsItFor));
const About = dynamic(() => import("@/components/sections/about").then(mod => mod.About));
const BlogSection = dynamic(() => import("@/components/sections/blog-section").then(mod => mod.BlogSection));
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

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quanto tempo leva para ver os primeiros resultados?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A otimização da infraestrutura digital (SEO Local) começa a dar sinais em 30 a 60 dias. No entanto, a automação de WhatsApp e as melhorias de conversão no site geram impacto imediato no atendimento e na retenção de leads assim que ativadas."
        }
      },
      {
        "@type": "Question",
        "name": "A Upper é uma agência de marketing digital comum?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não. Somos especialistas em infraestrutura de conversão: colocamos sua empresa onde o cliente já está procurando (Google e IA) e garantimos que o atendimento via WhatsApp seja impecável e imediato através de automação inteligente."
        }
      },
      {
        "@type": "Question",
        "name": "O que exatamente vocês fazem no Google?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nós 'engenheiramos' a sua presença. Isso inclui otimização profunda do Perfil da Empresa no Google (SEO Local), organização de dados para que as IAs (GEO) te recomendem e criação de páginas ultra-rápidas que convertem visitantes em leads no WhatsApp."
        }
      },
      {
        "@type": "Question",
        "name": "Como funciona a secretária digital no WhatsApp?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Instalamos uma camada de inteligência no seu WhatsApp Business que responde instantaneamente 24h por dia com linguagem natural, entende o contexto, tira dúvidas e pode até realizar agendamentos."
        }
      },
      {
        "@type": "Question",
        "name": "Preciso investir em anúncios (Google Ads)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nossa infraestrutura foca em tráfego orgânico e autoridade, o que reduz sua dependência de anúncios. No entanto, se você já investe em Ads, nossa estrutura vai fazer com que cada real investido renda muito mais, pois a conversão das páginas será drasticamente superior."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocal) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />

      <HomeClient>
        <main>
          <div className="bg-[#efe5d5]">
            <Hero />
          </div>
          <div className="bg-paper-grid py-2 relative">
            <div className="absolute top-10 right-10 opacity-10 pointer-events-none rotate-12">
              <svg width="120" height="120" viewBox="0 0 100 100"><path d="M10,10 Q50,0 90,10 T90,90 Q50,100 10,90 T10,10" stroke="#2d2d2d" strokeWidth="2" fill="none" /></svg>
            </div>
            <AdhesiveTape className="-top-4" />
            <Manifesto />
          </div>
          <div className="bg-[#efe5d5] py-2 relative">
            <AdhesiveTape className="-top-4" color="white" rotation={2} />
            <Services />
          </div>
          <div className="bg-paper-legal py-12 relative">
            <div className="absolute top-20 right-20 opacity-10 pointer-events-none -rotate-6 scale-150">
              <svg width="100" height="100" viewBox="0 0 100 100"><path d="M20,20 L80,20 M20,50 L80,50 M20,80 L80,80" stroke="#2d2d2d" strokeWidth="4" strokeLinecap="round" /></svg>
            </div>
            <AdhesiveTape className="-top-4" color="blue" rotation={-1} />
            <GeoDomination />
          </div>
          <div className="bg-paper-stain py-2 relative">
            <div className="absolute bottom-20 left-10 opacity-5 pointer-events-none">
              <div className="w-32 h-32 rounded-full border-4 border-[#2d2d2d] rotate-45" />
            </div>
            <AdhesiveTape className="-top-4" color="yellow" rotation={3} />
            <BeforeAfter />
          </div>
          <div className="bg-paper-grid py-2 relative">
            <AdhesiveTape className="-top-4" color="white" rotation={-2} />
            <WhoIsItFor />
          </div>
          <div className="bg-[#efe5d5] py-2">
            <About />
          </div>
          <div className="bg-[#efe5d5] py-2">
            <BlogSection />
          </div>
          <div className="bg-[#efe5d5] py-2">
            <FAQSection />
          </div>
        </main>
        <Footer />
      </HomeClient>
    </>
  );
}
