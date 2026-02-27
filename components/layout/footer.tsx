
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-24 px-8 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
              Upper<span className="text-emerald-500">.</span>
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Construindo a infraestrutura digital que coloca empresas locais no topo do mercado.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[10px] font-black text-white uppercase tracking-widest">Systems Online</span>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em]">Serviços</h3>
            <ul className="space-y-3">
              {[
                { name: "SEO Local", href: "/seo-local/sorocaba" },
                { name: "GEO & IA", href: "/geo-ia/sorocaba" },
                { name: "Automação WhatsApp", href: "/automacao-whatsapp/sorocaba" },
                { name: "Landing Page", href: "/landing-page/sorocaba" },
                { name: "Site Institucional", href: "/site-institucional/sorocaba" },
                { name: "Automação com IA", href: "/automacao-ia/sorocaba" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-zinc-500 hover:text-emerald-500 text-sm transition-colors font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em]">Cidades Atendidas</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/cidades" className="text-zinc-500 hover:text-emerald-500 text-sm transition-colors font-medium flex items-center gap-2 group">
                  Ver todas as cidades atendidas 
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em]">Contato</h3>
            <div className="space-y-4">
              <div className="text-white font-bold text-sm uppercase tracking-tight">Sorocaba / SP</div>
              <p className="text-zinc-500 text-xs leading-relaxed">
                Atendemos empresas que buscam excelência e dominância regional em todo o Brasil.
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-zinc-600 text-[9px] font-black uppercase tracking-[0.2em]">
            © Upper — Infraestrutura Digital para Empresas Locais
          </p>
          <div className="flex gap-8">
            <Link href="/blog" className="text-zinc-600 hover:text-white text-[9px] font-black uppercase tracking-widest transition-colors">Blog</Link>
            <Link href="/#contato" className="text-zinc-600 hover:text-white text-[9px] font-black uppercase tracking-widest transition-colors">Contato</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
