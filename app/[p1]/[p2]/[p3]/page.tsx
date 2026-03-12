
import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, MessageSquare, Zap, MapPin, Target, ArrowRight } from "lucide-react";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/constants";
import { cityData, serviceData } from "@/lib/city-service-data";
import { nicheData } from "@/lib/niche-service-data";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { NicheTarget } from "@/components/ui/niche-target";

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

  return (
    <div className="bg-[#fdfaf3] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <Navbar />

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

      {/* SEÇÃO Estratégia Específica */}
      <section className="py-24 px-8 border-t border-[#2d2d2d]/10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-8 sticky top-32">
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#00b86b] block">Como Funciona</span>
                <h2 className="text-3xl md:text-6xl font-black text-[#1a1a1a] uppercase tracking-tighter leading-tight">
                  Infraestrutura de <br /> <span className="text-[#00b86b]">Conversão 24h.</span>
                </h2>
              </div>
              <p className="text-[#2d2d2d]/60 text-lg leading-relaxed">
                {nicheService?.solution || s.description}
              </p>
              <div className="pt-8 grid gap-4">
                {(nicheService?.benefits || s.benefits).map((benefit, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-[#fdfaf3] border border-[#2d2d2d]/5">
                    <CheckCircle2 size={20} className="text-[#00b86b] shrink-0" />
                    <span className="text-[#1a1a1a] text-xs font-black uppercase tracking-widest">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-10 bg-[#fdfaf3] sketch-border shadow-[12px_12px_0] rotate-[1deg]">
                <h3 className="text-xl font-black text-[#1a1a1a] uppercase tracking-tighter mb-6">Dores que resolvemos:</h3>
                <div className="space-y-4">
                   {(nicheService?.painPoints || n.painPoints).map((pain, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-white/50 border-b border-[#2d2d2d]/10 last:border-0 font-hand italic">
                      <Zap size={16} className="text-red-500 mt-1 shrink-0" />
                      <span className="text-[#2d2d2d]/80 text-lg">{pain}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-10 bg-[#c8f4da]/30 sketch-border shadow-[12px_12px_0_#00b86b/10] rotate-[-1deg]">
                <h3 className="text-xl font-black text-[#1a1a1a] uppercase tracking-tighter mb-4">Por que a Upper?</h3>
                <p className="text-[#2d2d2d]/70 font-hand italic text-lg leading-relaxed">
                  Diferente de agências genéricas, nós construímos uma infraestrutura que respira {cityName}. Unimos o comportamento local do seu paciente/cliente com alta tecnologia de conversão.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
