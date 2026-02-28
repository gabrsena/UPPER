
import React from "react";
import { ShimmerWord } from "@/components/ui/shimmer-word";
import { Star } from "lucide-react";
import Image from "next/image";

export const About = () => (
  <section id="sobre" className="py-24 md:py-32 px-8 bg-zinc-900/10 border-y border-zinc-900 relative overflow-hidden scroll-mt-20">
    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
      <div className="flex flex-col gap-6 w-full max-w-sm mx-auto lg:max-w-none lg:mx-0 h-full">
        {/* Imagem da Equipe (Aumentada) */}
        <div className="relative group w-full h-full min-h-[400px] md:min-h-[600px] rounded-[2.5rem] overflow-hidden border border-zinc-800 shadow-2xl">
          <div className="absolute -inset-4 bg-emerald-500/20 blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700 z-0"></div>
          <Image
            src="/sobupper.jpg"
            alt="Equipe Upper Agency"
            fill
            className="object-cover object-top transition-all duration-700 scale-105 group-hover:scale-100 z-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none z-20"></div>
          <div className="absolute bottom-6 left-6 z-30">
            <div className="text-white font-black uppercase text-xs tracking-tight">Fundadores da Upper Agency</div>
            <div className="text-emerald-500 text-[10px] font-black uppercase tracking-widest mt-1">Sorocaba/SP</div>
          </div>
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

        {/* Google Rating Box Movida para baixo dos textos */}
        <a
          href="https://share.google/53lEpuFBGfWtQbes5"
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col sm:flex-row items-center sm:justify-between gap-6 group hover:border-emerald-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] mt-8"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
              <Image
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                alt="Google"
                width={55}
                height={18}
                className="opacity-90"
              />
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1 text-yellow-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <div className="text-[10px] font-black text-white uppercase tracking-widest">Nota 5.0 no Google Business</div>
            </div>
          </div>
          <div className="text-[9px] font-black text-emerald-500 uppercase tracking-widest px-4 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/10 group-hover:bg-emerald-500/10 transition-colors">
            Ver Perfil
          </div>
        </a>
      </div>
    </div>
  </section>
);
