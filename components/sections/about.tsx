
import React from "react";
import { ShimmerWord } from "@/components/ui/shimmer-word";
import { Star } from "lucide-react";
import Image from "next/image";

export const About = () => (
  <section id="sobre" className="py-24 md:py-32 px-8 bg-zinc-900/10 border-y border-zinc-900 relative overflow-hidden scroll-mt-20">
    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
      <div className="relative group h-full min-h-[400px] md:min-h-[500px] lg:min-h-full rounded-[2.5rem] overflow-hidden border border-zinc-800 shadow-2xl">
        <div className="absolute -inset-4 bg-emerald-500/20 blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700 z-0"></div>
        <Image
          src="/sobupper.jpg"
          alt="Equipe Upper Agency"
          fill
          className="object-cover object-center transition-all duration-700 scale-105 group-hover:scale-100 z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950/60 via-transparent to-transparent pointer-events-none z-20"></div>
        <div className="absolute inset-x-0 bottom-0 p-8 z-30 bg-gradient-to-t from-zinc-950/90 to-transparent">
          <div className="text-white font-black uppercase text-xs tracking-tight">Fundadores da Upper Agency</div>
          <div className="text-emerald-500 text-[10px] font-black uppercase tracking-widest mt-1">Sorocaba/SP</div>
        </div>
      </div>

      <div className="space-y-10">
        <div className="space-y-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 block">Nossa Missão</span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[1.1]">
            Não somos uma <br />
            <ShimmerWord>agência comum.</ShimmerWord>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-medium leading-relaxed max-w-xl">
            Não somos uma agência comum; somos arquitetos de infraestrutura de conversão. Unimos a estratégia de especialistas em Marketing, o olhar de UX Designers e o poder de fogo de desenvolvedores Full Stack para construir sistemas que vendem enquanto você foca no seu negócio. Em plena era da Inteligência Artificial, nós não apenas seguimos a tendência nós instalamos a tecnologia que coloca sua empresa à frente da concorrência.
          </p>
        </div>

        <div className="grid gap-6">
          {[
            {
              title: "Foco em Resultado Real",
              desc: "Medimos o sucesso por ligações, mensagens e agendamentos, não por métricas de vaidade."
            },
            {
              title: "Tecnologia de Ponta",
              desc: "Unimos o poder do SEO Local com as mais recentes inovações em IA e Automação."
            },
            {
              title: "Transparência Total",
              desc: "Relatórios diretos e sem enrolação. Você sabe exatamente onde cada centavo está sendo investido."
            }
          ].map((item, i) => (
            <div key={i} className="space-y-1.5">
              <h3 className="text-white font-black uppercase text-xs tracking-tight flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                {item.title}
              </h3>
              <p className="text-zinc-500 text-[13px] leading-relaxed pl-4.5">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
