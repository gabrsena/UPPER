
import React from "react";
import { ShimmerWord } from "@/components/ui/shimmer-word";
import { Star } from "lucide-react";
import Image from "next/image";

export const About = ({ cityName }: { cityName?: string }) => (
  <section id="sobre" className="py-24 md:py-32 px-8 bg-zinc-900/10 border-y border-zinc-900 relative overflow-hidden scroll-mt-20">
    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
      <div className="flex flex-col gap-6 w-full max-w-sm mx-auto lg:max-w-none lg:mx-0">
        {/* Imagem da Equipe (Tamanho Ajustado) */}
        <div className="relative group w-full min-h-[300px] md:min-h-[450px] rounded-[2.5rem] overflow-hidden border border-zinc-800 shadow-2xl">
          <div className="absolute -inset-4 bg-emerald-500/20 blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700 z-0"></div>
          <Image
            src="/upper-team.jpg"
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
            Não somos uma agência comum; somos arquitetos de infraestrutura de conversão. {cityName ? `Ajudamos negócios em ${cityName} a liderarem o mercado unindo a estratégia de especialistas em Marketing` : `Unimos a estratégia de especialistas em Marketing`}, o olhar de UX Designers e o poder de fogo de desenvolvedores Full Stack para construir sistemas que vendem enquanto você foca no seu negócio. Em plena era da Inteligência Artificial, nós não apenas seguimos a tendência nós instalamos a tecnologia que coloca sua empresa à frente da concorrência.
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

    {/* Sessão de Avaliações / Testemunhos SEO Expandida */}
    <div className="max-w-6xl mx-auto mt-24 md:mt-32">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-zinc-800 pb-6 mb-10 gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shadow-inner">
            <Image
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              alt="Google"
              width={55}
              height={18}
              className="opacity-90"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-yellow-500">
              <span className="text-white font-black text-lg mr-1 tracking-tight">5.0</span>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="currentColor" />
              ))}
            </div>
            <div className="text-[9px] font-black text-emerald-500 uppercase tracking-[0.2em] mt-0.5">Excelência comprovada</div>
          </div>
        </div>
        <a
          href="https://share.google/53lEpuFBGfWtQbes5"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] font-black text-zinc-300 hover:text-white uppercase tracking-widest px-6 py-3 rounded-full bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 hover:border-emerald-500/50 transition-all duration-300 shadow-lg"
        >
          Ver Perfil
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            text: "A Upper transformou nossa captação. Estávamos invisíveis no Google Maps em Sorocaba, e hoje recebemos dezenas de orçamentos pelo WhatsApp. O trabalho de SEO Local deles é impecável e trouxe resultados reais.",
            author: "João S.",
            role: "Proprietário de Clínica"
          },
          {
            text: "Investimos em outras agências antes, mas só a Upper focou em infraestrutura de conversão. Passamos a dominar as buscas locais e a automação de atendimento otimizou 100% nosso tempo.",
            author: "Mariana T.",
            role: "Proprietária de Consult. Médico"
          },
          {
            text: "Transparência total e tecnologia de ponta. Combinar o ranqueamento orgânico no Google com a automação no WhatsApp botou nossa empresa na frente da concorrência na região de Votorantim.",
            author: "Rodrigo M.",
            role: "Proprietário de Oficina Mecânica"
          }
        ].map((review, i) => (
          <div key={i} className="bg-zinc-900/40 border border-zinc-800/60 rounded-[2rem] p-8 hover:border-emerald-500/30 transition-all duration-500 flex flex-col justify-between h-full group">
            <div>
              <div className="flex text-yellow-500 mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={13} fill="currentColor" />
                ))}
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed italic mb-8 group-hover:text-zinc-300 transition-colors">"{review.text}"</p>
            </div>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-9 h-9 rounded-full bg-zinc-950 flex items-center justify-center text-[11px] font-bold text-emerald-500 border border-zinc-800 shadow-inner group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-colors">
                {review.author.charAt(0)}
              </div>
              <div>
                <div className="text-[11px] font-bold text-white uppercase tracking-wider">{review.author}</div>
                <div className="text-[9px] text-zinc-500 uppercase tracking-widest">{review.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
