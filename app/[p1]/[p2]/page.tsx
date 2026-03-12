
import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, MessageSquare, Zap, MapPin, Target } from "lucide-react";
import Link from "next/link";
import { posts } from "@/lib/blog-data";
import { WHATSAPP_URL } from "@/lib/constants";
import { cityData, serviceData } from "@/lib/city-service-data";
import { nicheData } from "@/lib/niche-service-data";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { NicheTarget } from "@/components/ui/niche-target";

// --- LOGICA NEXT.JS ---

export async function generateStaticParams() {
  const cities = Object.keys(cityData);
  const services = Object.keys(serviceData);
  const niches = Object.keys(nicheData);

  const params: { p1: string; p2: string }[] = [];
  
  // Padrão 1: /[service]/[city] (ex: /seo-local/sorocaba)
  for (const service of services) {
    for (const city of cities) {
      params.push({ p1: service, p2: city });
    }
  }

  // Padrão 2: /[city]/[niche] (ex: /sorocaba/dentistas)
  for (const city of cities) {
    for (const niche of niches) {
      params.push({ p1: city, p2: niche });
    }
  }

  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ p1: string; p2: string }> }): Promise<Metadata> {
  const { p1, p2 } = await params;
  
  // Caso A: [service]/[city]
  const s = serviceData[p1];
  const cAsCity2 = cityData[p2];
  if (s && cAsCity2) {
    const cityName = p2.charAt(0).toUpperCase() + p2.slice(1).replace("-", " ");
    return {
      title: `${s.label} em ${cityName} | Upper`,
      description: `${s.headline} em ${cityName}. ${s.description}`
    };
  }

  // Caso B: [city]/[niche]
  const cAsCity1 = cityData[p1];
  const n = nicheData[p2];
  if (cAsCity1 && n) {
    const cityName = p1.charAt(0).toUpperCase() + p1.slice(1).replace("-", " ");
    return {
      title: `${n.title} em ${cityName} | Upper`,
      description: n.description
    };
  }

  return { title: "Página não encontrada" };
}

export default async function DynamicTwoSegmentPage({ params }: { params: Promise<{ p1: string; p2: string }> }) {
  const { p1, p2 } = await params;
  
  // Caso A: [service]/[city]
  const s = serviceData[p1];
  const cAsCity2 = cityData[p2];
  if (s && cAsCity2) {
    return <ServiceCityLayout serviceKey={p1} cityKey={p2} />;
  }

  // Caso B: [city]/[niche]
  const cAsCity1 = cityData[p1];
  const n = nicheData[p2];
  if (cAsCity1 && n) {
    return <CityNicheLayout cityKey={p1} nicheKey={p2} />;
  }

  notFound();
}

// --- SUB-LAYOUTS ---

async function ServiceCityLayout({ serviceKey, cityKey }: { serviceKey: string; cityKey: string }) {
  const s = serviceData[serviceKey];
  const c = cityData[cityKey];
  if (!s || !c) notFound();

  const cityName = cityKey.charAt(0).toUpperCase() + cityKey.slice(1).replace("-", " ");

  return (
    <div className="bg-[#fdfaf3] min-h-screen">
      <Navbar />
      <section data-hero className="relative pt-32 pb-24 px-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08)_0%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c8f4da] border border-emerald-500/20 text-[#00b86b] text-[10px] font-black uppercase tracking-widest">
              <MapPin size={14} /> {s.label} em {cityName}
            </div>
            <h1 className="text-4xl md:text-8xl font-black text-[#1a1a1a] uppercase tracking-tighter leading-[0.9] max-w-5xl">
              {s.label} em <br />
              <span className="text-[#00b86b]">{cityName}</span>
            </h1>
            <p className="text-[#2d2d2d]/70 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
              Sua empresa aparece primeiro quando alguém busca {s.label} em {cityName}. <br className="hidden md:block" />
              Construímos essa infraestrutura.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="px-10 py-6 bg-[#d4f1f4] text-[#2d2d2d] sketch-border font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-[4px_4px_0px_#2d2d2d]">
                Dominar Mercado em {cityName} <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO Contexto */}
      <section className="py-24 px-8 border-t border-[#2d2d2d]/10 bg-[#fdfaf3]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#00b86b] block">Mercado Local</span>
              <h2 className="text-3xl md:text-5xl font-black text-[#1a1a1a] uppercase tracking-tighter leading-tight">
                Oportunidade Digital <br /> em <span className="text-[#00b86b]">{cityName}.</span>
              </h2>
            </div>
            <p className="text-[#2d2d2d]/70 text-base md:text-lg leading-relaxed font-medium">{c.context}</p>
            <div className="grid gap-4">
              {c.highlights.map((highlight, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#2d2d2d]/15">
                  <div className="w-8 h-8 rounded-lg bg-[#c8f4da] flex items-center justify-center text-[#00b86b] shrink-0"><Zap size={16} /></div>
                  <span className="text-[#1a1a1a] text-[11px] font-black uppercase tracking-widest">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative bg-white border border-[#2d2d2d]/15 rounded-[3rem] p-12 space-y-8 overflow-hidden shadow-[12px_12px_0px_#2d2d2d]/5">
              <div className="absolute top-0 right-0 p-8 opacity-10"><MapPin size={120} className="text-[#00b86b]" /></div>
              <h3 className="text-2xl font-black text-[#1a1a1a] uppercase tracking-tighter">Presença Regional</h3>
              <p className="text-[#2d2d2d]/60 text-sm leading-relaxed">
                Nossa estratégia é desenhada especificamente para o comportamento de busca do consumidor de {cityName}.
              </p>
              <div className="space-y-4">
                <div className="text-[9px] font-black text-[#2d2d2d]/45 uppercase tracking-[0.3em]">Bairros em Destaque:</div>
                <div className="flex flex-wrap gap-2">
                  {c.neighborhoods.map((n) => (
                    <span key={n} className="px-4 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-[#00b86b] text-[10px] font-black uppercase tracking-tighter">{n}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

async function CityNicheLayout({ cityKey, nicheKey }: { cityKey: string; nicheKey: string }) {
  const c = cityData[cityKey];
  const n = nicheData[nicheKey];
  if (!c || !n) notFound();

  const cityName = cityKey.charAt(0).toUpperCase() + cityKey.slice(1).replace("-", " ");

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.upperagency.com.br" },
      { "@type": "ListItem", "position": 2, "name": cityName, "item": `https://www.upperagency.com.br/cidade/${cityKey}` },
      { "@type": "ListItem", "position": 3, "name": n.label, "item": `https://www.upperagency.com.br/${cityKey}/${nicheKey}` }
    ]
  };

  return (
    <div className="bg-[#fdfaf3] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <Navbar />
      
      {/* SEÇÃO 1 - Hero de Nicho */}
      <section data-hero className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center pt-32 pb-24 px-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,184,107,0.06)_0%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto relative z-10 w-full">
            <div className="flex flex-col lg:grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-32 items-center">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f6eec7] border border-yellow-500/20 text-[#854d0e] text-[10px] font-black uppercase tracking-widest">
                  <Target size={14} className="mr-1" /> Exclusivo para {n.label} em {cityName}
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-8xl font-marker text-[#1a1a1a] uppercase tracking-tighter leading-[0.9] max-w-5xl">
                  {n.name} em <br />
                  <span className="text-[#00b86b] pen-text">{cityName}</span>
                </h1>
  
                <p className="text-[#2d2d2d]/70 text-lg sm:text-xl md:text-2xl font-hand italic max-w-xl leading-relaxed">
                  {n.description}
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

      {/* SEÇÃO 2 - Dores do Nicho */}
      <section className="py-24 px-8 border-t border-[#2d2d2d]/10 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#00b86b] block">Desafios Comuns</span>
              <h2 className="text-3xl md:text-5xl font-marker text-[#1a1a1a] uppercase tracking-tighter leading-tight pen-text">
                O {n.label} moderno em <span className="text-[#00b86b]">{cityName}</span> enfrenta novos desafios.
              </h2>
            </div>
            <p className="text-[#2d2d2d]/70 text-base md:text-lg leading-relaxed font-hand italic">{n.context}</p>
            <div className="grid gap-4 max-w-lg mx-auto lg:mx-0">
              {n.painPoints.map((pain, i) => (
                <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-[#fdfaf3] sketch-border-subtle">
                  <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-500 shrink-0"><Zap size={18} /></div>
                  <span className="text-[#2d2d2d] text-xs font-black uppercase tracking-widest text-left">{pain}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative p-12 bg-[#fdfaf3] sketch-border shadow-[12px_12px_0] rotate-[-1deg] text-center lg:text-left">
            <div className="absolute top-0 right-0 p-8 opacity-5"><Target size={120} /></div>
            <h3 className="text-2xl font-black text-[#1a1a1a] uppercase tracking-tighter mb-6 underline decoration-[#00b86b]/30">A Solução Upper</h3>
            <p className="text-[#2d2d2d]/65 text-xl font-hand italic leading-relaxed mb-8">
               "{n.howWeHelp}"
            </p>
            <div className="space-y-4">
              <div className="text-[10px] font-black text-[#2d2d2d]/45 uppercase tracking-[0.3em]">Oportunidade Geográfica:</div>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {c.neighborhoods.map((nb) => (
                  <span key={nb} className="px-3 py-1 bg-white border border-[#2d2d2d]/10 text-[#2d2d2d] text-[9px] font-black uppercase tracking-tighter rotate-[1deg]">{nb}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
