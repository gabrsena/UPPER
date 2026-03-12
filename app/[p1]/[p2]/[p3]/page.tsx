
import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/constants";
import { cityData, serviceData } from "@/lib/city-service-data";
import { nicheData } from "@/lib/niche-service-data";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { NicheTarget } from "@/components/ui/niche-target";
import { FloatingWhatsAppWrapper } from "@/components/ui/floating-whatsapp-wrapper";
import { NicheFAQSection } from "@/components/sections/niche-faq-section";

interface Props {
  params: Promise<{ p1: string; p2: string; p3: string }>;
}

export async function generateStaticParams() {
  const cities = Object.keys(cityData);
  const niches = Object.keys(nicheData);
  const services = Object.keys(serviceData);

  const params: { p1: string; p2: string; p3: string }[] = [];

  for (const city of cities) {
    for (const niche of niches) {
      for (const service of services) {
        params.push({ p1: city, p2: niche, p3: service });
      }
    }
  }

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { p1, p2, p3 } = await params;
  
  const c = cityData[p1];
  const n = nicheData[p2];
  const s = serviceData[p3];

  if (!c || !n || !s) return { title: "Página não encontrada" };

  const cityName = p1.charAt(0).toUpperCase() + p1.slice(1).replace("-", " ");
  const nicheService = n.services[p3];

  const title = nicheService 
    ? `${nicheService.title} em ${cityName} | Upper`
    : `${s.label} para ${n.label} em ${cityName} | Upper`;

  return {
    title,
    description: `${s.headline} especificado para ${n.label} em ${cityName}.`
  };
}

export default async function NicheServicePage({ params }: Props) {
  const { p1, p2, p3 } = await params;
  
  const c = cityData[p1];
  const n = nicheData[p2];
  const s = serviceData[p3];

  if (!c || !n || !s) notFound();

  const cityName = p1.charAt(0).toUpperCase() + p1.slice(1).replace("-", " ");
  const nicheService = n.services[p3];

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.upperagency.com.br" },
      { "@type": "ListItem", "position": 2, "name": cityName, "item": `https://www.upperagency.com.br/cidade/${p1}` },
      { "@type": "ListItem", "position": 3, "name": n.label, "item": `https://www.upperagency.com.br/${p1}/${p2}` },
      { "@type": "ListItem", "position": 4, "name": s.label, "item": `https://www.upperagency.com.br/${p1}/${p2}/${p3}` }
    ]
  };

  const benefits = nicheService?.benefits || s.benefits;
  const painPoints = nicheService?.painPoints || n.painPoints;

  return (
    <div className="bg-[#fdfaf3] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <Navbar />

      {/* Hero */}
      <section data-hero className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center pt-32 pb-24 px-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,184,107,0.06)_0%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto relative z-10 w-full">
            <div className="flex flex-col lg:grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-32 items-center">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#c8f4da] text-[#00b86b] text-[10px] font-black uppercase tracking-widest">{s.label}</span>
                  <span className="w-1 h-1 rounded-full bg-[#2d2d2d]/20"></span>
                  <span className="px-3 py-1 rounded-full bg-[#f6eec7] text-[#854d0e] text-[10px] font-black uppercase tracking-widest">{n.label}</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-7xl font-marker text-[#1a1a1a] uppercase tracking-tighter leading-[1.1] max-w-4xl">
                  {nicheService?.title || `${s.label} para ${n.label}`} <br />
                  em <span className="text-[#00b86b] pen-text">{cityName}</span>
                </h1>
  
                <p className="text-[#2d2d2d]/70 text-lg sm:text-xl font-hand italic max-w-xl leading-relaxed">
                  {nicheService?.description || s.description}
                </p>
  
                <div className="pt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="px-6 py-3 md:px-8 md:py-4 bg-[#2d2d2d] text-white sketch-border font-black uppercase text-[11px] md:text-[12px] tracking-[0.2em] flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-[4px_4px_0px_#00b86b]">
                    Dominar Mercado em {cityName}
                    <ArrowRight size={18} />
                  </a>
                  <Link href="/" className="px-6 py-3 md:px-8 md:py-4 bg-white text-[#2d2d2d] sketch-border font-black uppercase text-[11px] md:text-[12px] tracking-[0.2em] flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-[4px_4px_0px_#2d2d2d]/10">
                    Entender a Upper
                  </Link>
                </div>
              </div>
  
              <div className="hidden lg:flex relative items-center justify-center w-full aspect-square">
                <div className="absolute inset-0 bg-[#00b86b]/5 rounded-full blur-3xl scale-75 animate-pulse" />
                <div className="scale-75 sm:scale-100 lg:scale-110">
                  <NicheTarget niche={n.slug} size={500} className="relative z-10" />
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* SEÇÃO Como Funciona / Estratégia - Refatorada para Estilo Paper & Pencil */}
      <section className="py-24 md:py-32 px-8 border-t-2 border-[#2d2d2d]/10 bg-[#fdfaf3] relative overflow-hidden">
        {/* Paper texture/dots pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2d2d2d 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
            <div className="space-y-12 md:sticky md:top-32 transition-all">
              <div className="space-y-6">
                <span className="text-[10px] font-sketch font-bold uppercase tracking-[0.5em] text-[#2d2d2d]/40 block">O Método Upper</span>
                <h2 className="text-3xl md:text-6xl font-marker text-[#1a1a1a] uppercase tracking-tighter leading-tight relative">
                  <span className="pen-text">Infraestrutura de</span> <br /> 
                  <span className="bg-[#c8f4da] px-2 sketch-border rotate-[1deg] inline-block mt-2 pen-text text-[#00b86b]">Conversão 24h</span>
                </h2>
                <p className="text-[#2d2d2d]/60 text-lg leading-relaxed font-hand italic">
                  {nicheService?.solution || s.description}
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-[10px] font-sketch font-bold uppercase tracking-[0.5em] text-[#2d2d2d]/40">Benefícios Exclusivos</h3>
                <div className="grid gap-4">
                  {benefits.map((benefit, i) => {
                    const colors = ["bg-[#f6eec7]", "bg-[#d4f1f4]", "bg-[#f9d5e5]", "bg-white"];
                    const bgColor = colors[i % colors.length];
                    return (
                      <div key={i} className={`flex items-center gap-4 p-5 sketch-border shadow-[4px_4px_0px_#2d2d2d] group transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#2d2d2d] ${bgColor}`}>
                        <CheckCircle2 size={22} className="text-[#2d2d2d] shrink-0" />
                        <span className="text-[#2d2d2d]/90 text-sm font-marker uppercase tracking-tight">{benefit}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div className="p-8 md:p-12 bg-white sketch-border shadow-[12px_12px_0px_#2d2d2d] rotate-[0.5deg]">
                <h3 className="text-[10px] font-sketch font-bold uppercase tracking-[0.5em] text-[#2d2d2d]/40 mb-8">Dores que resolvemos</h3>
                <div className="space-y-6">
                   {painPoints.map((pain, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 border-b-2 border-dashed border-[#2d2d2d]/10 last:border-0 group">
                      <Zap size={18} className="text-[#ff4d4d] mt-1 shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="text-[#2d2d2d]/80 text-lg md:text-xl font-hand italic leading-snug">{pain}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-10 bg-[#fefce8] sketch-border shadow-[10px_10px_0px_#fef9c3] rotate-[-1deg] relative overflow-hidden">
                <div className="absolute top-2 right-4 opacity-10 font-marker text-4xl rotate-12">?</div>
                <h3 className="text-xl font-marker text-[#1a1a1a] uppercase tracking-tighter mb-4">Por que a Upper?</h3>
                <p className="text-[#2d2d2d]/70 font-hand italic text-lg leading-relaxed">
                  Diferente de agências genéricas, nós construímos uma infraestrutura que respira {cityName}. Unimos o comportamento local do seu paciente/cliente com alta tecnologia de conversão.
                </p>
              </div>

              <div className="pt-4">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-[#2d2d2d] text-white sketch-border font-marker uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[6px_6px_0px_#00b86b]">
                   Falar com Especialista em {cityName}
                   <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <NicheFAQSection faqs={nicheService?.faq || []} cityName={cityName} />

      <Footer />
      <FloatingWhatsAppWrapper />
    </div>
  );
}
