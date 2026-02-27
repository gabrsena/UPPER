
import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Zap, BookOpen } from "lucide-react";
import { cityData, serviceData } from "@/lib/city-service-data";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { posts } from "@/lib/blog-data";

export default function CidadesPage() {
  const cities = Object.keys(cityData);
  const services = Object.keys(serviceData);
  const latestPosts = posts.slice(0, 3);

  return (
    <div className="bg-zinc-950 min-h-screen">
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
              
              return (
                <div key={cityKey} className="bg-zinc-900/50 border border-zinc-900 rounded-[2.5rem] p-8 space-y-8 hover:border-emerald-500/20 transition-all group flex flex-col">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-black text-white uppercase tracking-tighter group-hover:text-emerald-500 transition-colors">
                      {cityName}
                    </h2>
                    <p className="text-zinc-500 text-xs leading-relaxed line-clamp-2">
                      {city.context}
                    </p>
                  </div>

                  <div className="space-y-3 flex-grow">
                    <div className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Serviços Disponíveis:</div>
                    <div className="grid grid-cols-1 gap-2">
                      {services.map((serviceKey) => {
                        const service = serviceData[serviceKey];
                        return (
                          <Link 
                            key={serviceKey}
                            href={`/${serviceKey}/${cityKey}`}
                            className="flex items-center justify-between p-4 rounded-2xl bg-zinc-950 border border-zinc-900 hover:border-emerald-500/30 hover:bg-zinc-900 transition-all group/item"
                          >
                            <span className="text-zinc-400 text-[11px] font-bold uppercase tracking-tight group-hover/item:text-white transition-colors">
                              {service.label}
                            </span>
                            <ArrowRight size={14} className="text-zinc-700 group-hover/item:text-emerald-500 group-hover/item:translate-x-1 transition-all" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Blog Section for City */}
                  <div className="pt-6 border-t border-zinc-900 space-y-4">
                    <div className="flex items-center gap-2">
                      <BookOpen size={14} className="text-emerald-500" />
                      <span className="text-[9px] font-black text-white uppercase tracking-widest">Conteúdo para {cityName}</span>
                    </div>
                    <div className="space-y-3">
                      {latestPosts.map((post) => (
                        <Link 
                          key={post.id} 
                          href={`/blog/${post.id}`}
                          className="block group/blog"
                        >
                          <div className="text-[8px] font-black text-emerald-500/50 uppercase tracking-widest mb-1 group-hover/blog:text-emerald-500 transition-colors">{post.category}</div>
                          <div className="text-[10px] font-bold text-zinc-400 group-hover/blog:text-white transition-colors leading-tight">
                            {post.title}
                          </div>
                        </Link>
                      ))}
                      <p className="text-[8px] text-zinc-600 font-medium italic pt-1">
                        Conteúdo estratégico relevante para empresas de {cityName}.
                      </p>
                    </div>
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
