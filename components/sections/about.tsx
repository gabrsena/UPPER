
import React from "react";
import { ShimmerWord } from "@/components/ui/shimmer-word";
import { Star } from "lucide-react";
import Image from "next/image";

export const About = () => (
  <section id="sobre" className="py-24 md:py-32 px-8 bg-zinc-900/10 border-y border-zinc-900 relative overflow-hidden scroll-mt-20">
    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
      <div className="relative group">
        <div className="absolute -inset-4 bg-emerald-500/10 blur-3xl rounded-full opacity-50"></div>
        <div className="relative bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-8 md:p-12 shadow-2xl space-y-8 overflow-hidden">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center">
                <Image 
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                  alt="Google" 
                  width={46} 
                  height={15} 
                  className="opacity-80"
                />
              </div>
              <div>
                <div className="flex items-center gap-0.5 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" />
                  ))}
                </div>
                <div className="text-[9px] font-black text-white uppercase tracking-widest mt-0.5">Nota 5.0 no Google Business</div>
              </div>
            </div>
            <div className="text-[9px] font-black text-emerald-500 uppercase tracking-widest px-3 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/10">
              Especialistas Certificados
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-zinc-400 text-sm md:text-base font-medium leading-relaxed italic">
              "A Upper nasceu para resolver um problema que vimos em centenas de empresas locais: elas são ótimas no que fazem, mas invisíveis para quem as procura."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-zinc-800 border-2 border-emerald-500 overflow-hidden relative">
                <Image 
                  src="https://picsum.photos/seed/ceo/200/200" 
                  alt="Fundador da Upper Agency" 
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-white font-black uppercase text-xs tracking-tight">Fundador da Upper Agency</div>
                <div className="text-emerald-500 text-[9px] font-black uppercase tracking-widest">Fundador — Upper Agency</div>
              </div>
            </div>
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
            A Upper nasceu para enterrar o marketing de 'postzinhos' e curtidas. Não somos uma agência comum; somos arquitetos de infraestrutura de conversão. Unimos a estratégia de especialistas em Marketing, o olhar de UX Designers e o poder de fogo de desenvolvedores Full Stack para construir sistemas que vendem enquanto você foca no seu negócio. Em plena era da Inteligência Artificial, nós não apenas seguimos a tendência nós instalamos a tecnologia que coloca sua empresa à frente da concorrência.
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
