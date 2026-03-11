
import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, MessageSquare, Zap, MapPin } from "lucide-react";
import Link from "next/link";
import { posts } from "@/lib/blog-data";
import { WHATSAPP_URL } from "@/lib/constants";
import { ShimmerWord } from "@/components/ui/shimmer-word";
import { cityData, serviceData } from "@/lib/city-service-data";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

// --- LOGICA NEXT.JS ---

export async function generateStaticParams() {
  const cities = Object.keys(cityData);
  const services = Object.keys(serviceData);

  const params = [];
  for (const service of services) {
    for (const city of cities) {
      params.push({ service, city });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ service: string; city: string }> }): Promise<Metadata> {
  const { service, city } = await params;
  const s = serviceData[service];
  const c = cityData[city];

  if (!s || !c) return { title: "Página não encontrada" };

  const cityName = city.charAt(0).toUpperCase() + city.slice(1).replace("-", " ");

  return {
    title: `${s.label} em ${cityName} | Upper`,
    description: `${s.headline} em ${cityName}. ${s.description} Estratégias exclusivas para empresas de ${cityName} que buscam o topo do Google.`
  };
}

export default async function ServiceCityPage({ params }: { params: Promise<{ service: string; city: string }> }) {
  const { service, city } = await params;
  const s = serviceData[service];
  const c = cityData[city];

  if (!s || !c) notFound();

  const cityName = city.charAt(0).toUpperCase() + city.slice(1).replace("-", " ");
  const latestPosts = posts.slice(0, 3);

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.upperagency.com.br"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": s.label,
        "item": `https://www.upperagency.com.br/servicos/${service}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": cityName,
        "item": `https://www.upperagency.com.br/${service}/${city}`
      }
    ]
  };

  return (
    <div className="bg-[#fdfaf3] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <Navbar />
      {/* SEÇÃO 1 - Hero localizado */}
      <section data-hero className="relative pt-32 pb-24 px-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08)_0%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c8f4da] border border-emerald-500/20 text-[#00b86b] text-[10px] font-black uppercase tracking-widest">
              <MapPin size={14} />
              {s.label} em {cityName}
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
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-6 bg-[#d4f1f4] text-[#2d2d2d] sketch-border font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-[4px_4px_0px_#2d2d2d]"
              >
                Dominar Mercado em {cityName}
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 - Contexto da cidade */}
      <section className="py-24 px-8 border-t border-[#2d2d2d]/10 bg-[#fdfaf3]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#00b86b] block">Mercado Local</span>
              <h2 className="text-3xl md:text-5xl font-black text-[#1a1a1a] uppercase tracking-tighter leading-tight">
                Oportunidade Digital <br /> em <span className="text-[#00b86b]">{cityName}.</span>
              </h2>
            </div>
            <p className="text-[#2d2d2d]/70 text-base md:text-lg leading-relaxed font-medium">
              {c.context}
            </p>
            <div className="grid gap-4">
              {c.highlights.map((highlight, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#2d2d2d]/15">
                  <div className="w-8 h-8 rounded-lg bg-[#c8f4da] flex items-center justify-center text-[#00b86b] shrink-0">
                    <Zap size={16} />
                  </div>
                  <span className="text-[#1a1a1a] text-[11px] font-black uppercase tracking-widest">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-emerald-500/5 blur-3xl rounded-full" />
            <div className="relative bg-white border border-[#2d2d2d]/15 rounded-[3rem] p-12 space-y-8 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <MapPin size={120} className="text-[#00b86b]" />
              </div>
              <h3 className="text-2xl font-black text-[#1a1a1a] uppercase tracking-tighter">Presença Regional</h3>
              <p className="text-[#2d2d2d]/60 text-sm leading-relaxed">
                Nossa estratégia é desenhada especificamente para o comportamento de busca do consumidor de {cityName}. Não usamos fórmulas genéricas; usamos dados locais.
              </p>

              {/* SEÇÃO 4 - Bairros atendidos */}
              <div className="space-y-4">
                <div className="text-[9px] font-black text-[#2d2d2d]/45 uppercase tracking-[0.3em]">Bairros em Destaque:</div>
                <div className="flex flex-wrap gap-2">
                  {c.neighborhoods.map((n) => (
                    <span key={n} className="px-4 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-[#00b86b] text-[10px] font-black uppercase tracking-tighter">
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 - O serviço na prática */}
      <section className="py-32 px-8 border-t border-[#2d2d2d]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-8 sticky top-32">
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#00b86b] block">Estratégia</span>
                <h2 className="text-3xl md:text-6xl font-black text-[#1a1a1a] uppercase tracking-tighter leading-tight">
                  {s.headline}
                </h2>
              </div>
              <p className="text-[#2d2d2d]/60 text-lg md:text-xl leading-relaxed">
                {s.description}
              </p>
              <div className="pt-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#00b86b] text-[10px] font-black uppercase tracking-widest hover:gap-4 transition-all"
                >
                  Ver Cases de Sucesso <ArrowRight size={14} />
                </a>
              </div>
            </div>
            <div className="grid gap-6">
              {s.benefits.map((benefit, i) => (
                <div key={i} className="group p-8 rounded-[2.5rem] bg-white border border-[#2d2d2d]/10 hover:border-emerald-500/20 transition-all">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#c8f4da] flex items-center justify-center text-[#00b86b] shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle2 size={24} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-[#1a1a1a] font-black uppercase text-sm tracking-tight">{benefit.split(':')[0]}</h3>
                      <p className="text-[#2d2d2d]/60 text-xs leading-relaxed">
                        {benefit.split(':').slice(1).join(':') || "Implementação estratégica focada em resultados reais para seu negócio."}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 - FAQ localizado */}
      <section className="py-32 px-8 bg-[#fdfaf3] border-t border-[#2d2d2d]/10">
        <div className="max-w-4xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#00b86b] block">FAQ</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#1a1a1a] uppercase tracking-tighter">Dúvidas Frequentes em {cityName}</h2>
          </div>
          <div className="space-y-4">
            {s.faqQuestions.map((item, i) => (
              <div key={i} className="group p-8 rounded-[2rem] bg-white border border-[#2d2d2d]/15 hover:border-[#2d2d2d]/30 transition-all space-y-4">
                <h3 className="text-lg font-black text-[#1a1a1a] uppercase tracking-tight flex items-center gap-4">
                  <span className="text-[#00b86b] text-xs">0{i + 1}</span>
                  {item.q.includes('?') ? item.q : `${item.q}?`}
                </h3>
                <p className="text-[#2d2d2d]/60 text-sm leading-relaxed pl-10 font-medium">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 7 - CTA final */}
      <section className="py-32 px-8 border-t border-[#2d2d2d]/10">
        <div className="max-w-6xl mx-auto relative">
          <div className="absolute -inset-20 bg-[#c8f4da] blur-[120px] rounded-full opacity-30" />
          <div className="relative bg-white border border-[#2d2d2d]/15 rounded-[4rem] p-12 md:p-24 text-center space-y-12 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
            <div className="w-24 h-24 rounded-[2rem] bg-[#c8f4da] flex items-center justify-center text-[#00b86b] mx-auto">
              <MessageSquare size={48} />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-7xl font-black text-[#1a1a1a] uppercase tracking-tighter leading-tight">
                Vamos dominar <br /> <span className="text-[#00b86b]">{cityName} juntos?</span>
              </h2>
              <p className="text-[#2d2d2d]/60 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                O primeiro passo para a liderança do seu mercado local em {cityName} começa com uma conversa estratégica.
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-16 py-8 bg-[#d4f1f4] text-[#2d2d2d] sketch-border font-black uppercase text-sm tracking-[0.2em] items-center gap-4 hover:scale-105 transition-transform shadow-[6px_6px_0px_#2d2d2d]"
            >
              Falar com Especialista
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
