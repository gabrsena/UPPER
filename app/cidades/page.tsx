import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cidades Atendidas | Upper",
};
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { cityData } from "@/lib/city-service-data";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function CidadesPage() {
  const cities = Object.keys(cityData);

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
        "name": "Cidades",
        "item": "https://www.upperagency.com.br/cidades"
      }
    ]
  };

  return (
    <div className="bg-[#efe5d5] min-h-screen relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <Navbar />

      <main data-hero className="pt-44 pb-24 px-8 relative z-10">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#2d2d2d 1px, transparent 1px)", backgroundSize: "30px 30px" }}
        />

        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          <div className="flex justify-start">
            <Link
              href="/"
              className="group flex items-center gap-2 text-[#2d2d2d]/40 hover:text-[#1a1a1a] transition-colors"
            >
              <div className="w-8 h-8 rounded-full border border-dashed border-[#2d2d2d]/20 flex items-center justify-center group-hover:border-[#2d2d2d] group-hover:rotate-[-12deg] transition-all">
                <ArrowRight size={14} className="rotate-180" />
              </div>
              <span className="text-[10px] font-sketch font-bold uppercase tracking-widest">Voltar para página principal</span>
            </Link>
          </div>

          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4f1f4]/80 border border-[#2d2d2d]/15 text-[#2d2d2d] text-[10px] font-sketch font-black uppercase tracking-[0.3em]">
              <MapPin size={14} />
              Expansão Regional
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-7xl text-[#1a1a1a] uppercase tracking-tighter leading-tight">
              Cidades <span className="pen-text">Atendidas</span>
            </h1>
            <p className="text-[#2d2d2d]/65 text-lg max-w-2xl mx-auto font-hand italic">
              Selecione sua cidade e o serviço desejado para ver como podemos transformar sua presença digital local.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-8">
            {cities.map((cityKey, idx) => {
              const city = cityData[cityKey];
              const cityName = cityKey.charAt(0).toUpperCase() + cityKey.slice(1).replace("-", " ");
              const truncatedContext = city.context.length > 100
                ? city.context.substring(0, 100) + "..."
                : city.context;

              // Randomized rotation for a hand-drawn feel
              const rotation = (idx % 2 === 0 ? 0.5 : -0.5) + (Math.random() * 0.4 - 0.2);

              return (
                <div
                  key={cityKey}
                  className="group relative"
                  style={{ transform: `rotate(${rotation}deg)` }}
                >
                  {/* Sketchy Shadow Layer */}
                  <div className="absolute inset-0 bg-[#2d2d2d]/5 sketch-border translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />

                  <div className="bg-white sketch-border p-8 space-y-8 flex flex-col h-full hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 group-hover:rotate-[0deg]">
                    <div className="space-y-4 flex-grow">
                      <div className="flex items-center gap-2 opacity-30 group-hover:opacity-100 transition-opacity">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#ef4444]" />
                        <span className="text-[8px] font-sketch font-bold uppercase tracking-widest">Local Node Identified</span>
                      </div>
                      <h2 className="text-2xl font-marker text-[#1a1a1a] uppercase tracking-tighter group-hover:text-[#ef4444] transition-colors flex items-center justify-between">
                        {cityName}
                        <MapPin size={16} className="text-[#2d2d2d]/10 group-hover:text-[#ef4444]/20 transition-colors" />
                      </h2>
                      <p className="text-[#2d2d2d]/65 text-sm leading-relaxed font-hand italic">
                        {truncatedContext}
                      </p>
                    </div>

                    <Link
                      href={`/cidade/${cityKey}`}
                      className="w-full py-4 bg-[#2d2d2d] text-center text-[10px] font-sketch font-black uppercase tracking-[0.2em] text-white transition-all flex items-center justify-center gap-2 group-hover:bg-[#ef4444] shadow-[4px_4px_0px_rgba(0,0,0,0.1)] group-hover:shadow-[6px_6px_0px_rgba(239,68,68,0.2)]"
                    >
                      Ver soluções em {cityName}
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
