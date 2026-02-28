
import React from "react";
import { CheckCircle2, UserCheck } from "lucide-react";
import { ShimmerWord } from "@/components/ui/shimmer-word";

export const WhoIsItFor = ({ cityName }: { cityName?: string }) => (
  <section id="quem-somos" className="py-24 md:py-32 px-8 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden scroll-mt-20">
    <div className="max-w-6xl mx-auto space-y-20">
      <div className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase tracking-widest">
          <UserCheck size={12} />
          Foco Estratégico
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight">
          Para quem é a <br /><ShimmerWord>Upper?</ShimmerWord>
        </h2>
        <p className="text-zinc-500 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
          Nossa infraestrutura é desenhada para negócios que dependem de clientes locais e buscam escala com previsibilidade.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Saúde & Bem-Estar",
            items: ["Clínicas Médicas", "Dentistas", "Fisioterapeutas", "Estética Avançada"],
            icon: "🏥"
          },
          {
            title: "Serviços Profissionais",
            items: ["Escritórios de Advocacia", "Contabilidades", "Arquitetura", "Engenharia"],
            icon: "⚖️"
          },
          {
            title: "Serviços Locais",
            items: ["Oficinas Mecânicas", "Pet Shops", "Escolas & Cursos", "Gastronomia"],
            icon: "🛠️"
          }
        ].map((group, i) => (
          <div key={i} className="p-8 rounded-[2rem] bg-zinc-900/30 border border-zinc-900 hover:border-emerald-500/30 transition-all duration-500 group">
            <div className="text-3xl mb-6 group-hover:scale-110 transition-transform inline-block">{group.icon}</div>
            <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-6">{group.title}</h3>
            <ul className="space-y-3">
              {group.items.map((item, j) => (
                <li key={j} className="flex items-center gap-3 text-zinc-400 text-[11px] font-bold uppercase tracking-widest">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="p-10 rounded-[2.5rem] bg-emerald-500/5 border border-emerald-500/10 text-center space-y-6">
        <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter">
          Seu negócio depende de <span className="text-emerald-500">clientes locais?</span>
        </h3>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto">
          {cityName ? `Se você atua em ${cityName}, precisa de uma infraestrutura` : `Se a resposta é sim, você precisa de uma infraestrutura`} que te coloque no topo e converta o interesse em faturamento.
        </p>
      </div>
    </div>
  </section>
);
