import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cidades Atendidas | Upper",
};
import Link from "next/link";
import { ArrowRight, MapPin, Zap, BookOpen } from "lucide-react";
import { cityData, serviceData } from "@/lib/city-service-data";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WHATSAPP_URL } from "@/lib/constants";
import { posts } from "@/lib/blog-data";

export default function CidadesPage() {
  const cities = Object.keys(cityData);
  const services = Object.keys(serviceData);
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
        "name": "Cidades",
        "item": "https://www.upperagency.com.br/cidades"
      }
    ]
  };

  return (
    <div className="bg-zinc-950 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <Navbar />

      <main data-hero className="pt-32 pb-24 px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase tracking-widest">
              <MapPin size={14} />
              Expansão Regional
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-tight">
              Cidades <span className="text-emerald-500">Atendidas</span>
            </h1>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto font-medium">
              Selecione sua cidade e o serviço desejado para ver como podemos transformar sua presença digital local.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cities.map((cityKey) => {
              const city = cityData[cityKey];
              const cityName = cityKey.charAt(0).toUpperCase() + cityKey.slice(1).replace("-", " ");
              const truncatedContext = city.context.length > 100
                ? city.context.substring(0, 100) + "..."
                : city.context;

              return (
                <div key={cityKey} className="bg-zinc-900/50 border border-zinc-900 rounded-[2.5rem] p-8 space-y-8 hover:border-emerald-500/20 transition-all group flex flex-col">
                  <div className="space-y-4 flex-grow">
                    <h2 className="text-2xl font-black text-white uppercase tracking-tighter group-hover:text-emerald-500 transition-colors">
                      {cityName}
                    </h2>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {truncatedContext}
                    </p>
                  </div>

                  <Link
                    href={`/cidade/${cityKey}`}
                    className="w-full py-4 bg-zinc-950 border border-zinc-900 rounded-2xl text-center text-[10px] font-black uppercase tracking-widest text-emerald-500 hover:bg-emerald-500 hover:text-zinc-950 transition-all flex items-center justify-center gap-2"
                  >
                    Ver soluções para {cityName}
                    <ArrowRight size={14} />
                  </Link>
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
