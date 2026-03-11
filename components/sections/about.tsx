
import React from "react";
import { ShimmerWord } from "@/components/ui/shimmer-word";
import { Star } from "lucide-react";
import Image from "next/image";
import { ScribbleAvatar } from "@/components/ui/scribble-avatar";

const ScribbleCircle = ({ children }: { children: React.ReactNode }) => (
  <span className="relative inline-block px-4 py-1">
    <span className="relative z-10">{children}</span>
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full text-[#ef4444] opacity-80 pointer-events-none scale-125"
    >
      <path d="M5,50 Q10,10 50,5 T95,50 T50,95 T5,50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="opacity-60" />
      <path d="M8,45 Q15,15 55,8 T92,45 T55,92 T8,45" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="rotate-[5deg] origin-center opacity-40" />
      <path d="M12,55 Q20,20 60,12 T88,55 T60,88 T12,55" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="rotate-[-3deg] origin-center opacity-50" />
    </svg>
  </span>
);

const ScribbleUnderline = ({ children }: { children: React.ReactNode }) => (
  <span className="relative inline-block">
    <span className="relative z-10">{children}</span>
    <svg
      viewBox="0 0 100 20"
      preserveAspectRatio="none"
      className="absolute left-0 -bottom-2 w-full h-4 text-[#1a1a1a] pointer-events-none"
    >
      <path d="M5,10 Q25,3 50,12 T95,8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M2,14 Q30,6 60,15 T98,12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-50" />
    </svg>
  </span>
);

const ScribbleCross = ({ children }: { children: React.ReactNode }) => (
  <span className="relative inline-block">
    <span className="relative z-10">{children}</span>
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full text-[#ef4444] pointer-events-none scale-125"
    >
      <path d="M10,20 Q50,50 90,80" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M12,18 Q50,48 88,82" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-60" />
      <path d="M90,20 Q50,50 10,80" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M88,18 Q50,48 12,82" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-60" />
    </svg>
  </span>
);

const SketchStar = ({ size = 15, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={`overflow-visible ${className}`}>
    <path 
      d="M50 5 L62 38 L95 38 L68 58 L78 95 L50 72 L22 95 L32 58 L5 38 L38 38 Z" 
      fill="#F5C518" 
      stroke="#1a1a1a" 
      strokeWidth="4" 
      strokeLinejoin="round" 
      className="opacity-90"
    />
    <path 
      d="M50 8 L60 36 L92 36 L66 56 L76 92 L50 70 L24 92 L34 56 L8 36 L40 36 Z" 
      fill="none" 
      stroke="#2d2d2d" 
      strokeWidth="2" 
      strokeLinejoin="round" 
      className="opacity-70 rotate-[3deg] origin-center pointer-events-none" 
    />
  </svg>
);

export const About = ({ cityName }: { cityName?: string }) => (
  <section id="sobre" className="py-24 md:py-32 px-8 bg-[#fdfaf3] border-y border-[#2d2d2d]/10 relative overflow-hidden scroll-mt-20">
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2d2d2d 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
      <div className="flex flex-col gap-6 w-full max-w-sm mx-auto lg:max-w-none lg:mx-0">
        {/* Imagem da Equipe (Estilo Stack Abstrato) */}
        <div className="relative group w-full max-w-[420px] mx-auto py-8">
          {/* Decorative background paper layers for abstract effect */}
          <div className="absolute inset-0 bg-white sketch-border rotate-[-2deg] opacity-50 translate-x-1 translate-y-2" />
          <div className="absolute inset-0 bg-[#f6eec7] sketch-border rotate-[3deg] opacity-30 -translate-x-2 -translate-y-1" />

          <div className="relative overflow-hidden sketch-border bg-white p-2 shadow-[20px_20px_40px_rgba(0,0,0,0.08)] group-hover:rotate-0 transition-all duration-700">
            <div className="relative w-full aspect-[16/10] overflow-hidden">
              <Image
                src="/upper-team.jpg"
                alt="Equipe Upper Agency"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                priority
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-[#2d2d2d]/5 mix-blend-multiply pointer-events-none" />
            </div>
            {/* Paper tape element */}
            <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-32 h-8 bg-white/60 backdrop-blur-sm border border-black/5 rotate-[-1deg] shadow-sm flex items-center justify-center">
              <div className="text-[7px] font-sketch uppercase opacity-40">Verified Draft // founders</div>
            </div>
          </div>

          <div className="absolute bottom-4 right-[-10px] bg-[#d4f1f4] px-4 py-2 sketch-border rotate-[2deg] shadow-sm">
            <div className="text-[#2d2d2d] font-marker uppercase text-[10px] tracking-tighter">Fundadores da Upper</div>
          </div>
        </div>
      </div>

      <div className="space-y-10">
        <div className="space-y-6">
          <span className="text-[10px] font-sketch font-bold uppercase tracking-[0.5em] text-[#2d2d2d]/60 block">Nossa Missão</span>
          <h2 className="text-3xl md:text-5xl font-marker text-[#1a1a1a] uppercase tracking-tighter leading-[1.1] relative">
            <span className="pen-text"><ScribbleCircle><span className="text-[#ef4444]">Não</span></ScribbleCircle> somos uma</span> <br />
            <span className="inline-block mt-4 pen-text">
              <ScribbleUnderline>agência <ScribbleCross>comum.</ScribbleCross></ScribbleUnderline>
            </span>
          </h2>
          <p className="text-[#2d2d2d]/70 text-sm md:text-base font-hand leading-relaxed max-w-xl italic">
            {cityName ? `Somos o que acontece quando marketing estratégico, tecnologia de ponta e inteligência artificial param de trabalhar separados e começam a trabalhar por resultado em ${cityName}.` : `Somos o que acontece quando marketing estratégico, tecnologia de ponta e inteligência artificial param de trabalhar separados e começam a trabalhar por resultado.`}
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
            <div key={i} className="space-y-1 my-2">
              <h3 className="text-[#1a1a1a] font-marker uppercase text-sm tracking-tight flex items-center gap-3">
                <span className="w-2 h-2 rounded-full border border-[#2d2d2d] bg-[#d4f1f4]"></span>
                {item.title}
              </h3>
              <p className="text-[#2d2d2d]/60 text-[13px] font-hand leading-relaxed pl-5">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Sessão de Avaliações / Testemunhos SEO Expandida */}
    <div className="max-w-6xl mx-auto mt-24 md:mt-32 relative">
      <div className="absolute -top-10 -left-10 w-20 h-20 opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" stroke="#2d2d2d" strokeWidth="2">
          <path d="M10,10 Q50,0 90,10 Q100,50 90,90 Q50,100 10,90 Q0,50 10,10" />
        </svg>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-start border-b-2 border-dashed border-[#2d2d2d]/20 pb-6 mb-10 gap-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 sketch-border bg-white flex items-center justify-center rotate-[-3deg]">
            <Image
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              alt="Google"
              width={55}
              height={18}
              className="opacity-90 transition-all"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-[#2d2d2d]">
              <span className="font-marker text-2xl mr-1 tracking-tight">5.0</span>
              {[...Array(5)].map((_, i) => (
                <SketchStar key={i} size={15} />
              ))}
            </div>
            <div className="text-[9px] font-sketch font-black text-[#2d2d2d]/60 uppercase tracking-[0.2em] mt-0.5">Excelência comprovada</div>
          </div>
        </div>
        <a
          href="https://share.google/53lEpuFBGfWtQbes5"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] font-sketch font-black text-[#2d2d2d] hover:text-[#1a1a1a] uppercase tracking-widest px-8 py-3 sketch-border bg-white hover:bg-[#f6eec7] transition-all shadow-[3px_3px_0px_#2d2d2d] hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
        >
          Ver Perfil
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            text: <>A Upper transformou nossa captação. <strong className="font-bold text-[#1a1a1a]">Estávamos invisíveis no Google Maps em Sorocaba, e hoje recebemos dezenas de orçamentos pelo WhatsApp.</strong> O trabalho de SEO Local deles é impecável e trouxe resultados reais.</>,
            author: "João S.",
            role: "Proprietário de Clínica"
          },
          {
            text: <>Investimos em outras agências antes, mas só a Upper focou em infraestrutura de conversão. <strong className="font-bold text-[#1a1a1a]">Passamos a dominar as buscas locais e a automação de atendimento otimizou 100% nosso tempo.</strong></>,
            author: "Mariana T.",
            role: "Proprietária de Consult. Médico"
          },
          {
            text: <>Transparência total e tecnologia de ponta. <strong className="font-bold text-[#1a1a1a]">Combinar o ranqueamento orgânico no Google com a automação no WhatsApp botou nossa empresa na frente da concorrência</strong> na região de Votorantim.</>,
            author: "Rodrigo M.",
            role: "Proprietário de Oficina Mecânica"
          }
        ].map((review, i) => (
          <div key={i} className={`bg-white sketch-border p-8 hover:translate-y-[-4px] transition-all duration-300 flex flex-col justify-between h-full group shadow-[6px_6px_0px_#2d2d2d] ${i === 1 ? 'rotate-[1deg] bg-[#fdfaf3]' : 'rotate-[-1deg]'}`}>
            <div className="flex-1 flex flex-col">
              <div className="flex text-[#2d2d2d] mb-6 opacity-100 gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <SketchStar key={j} size={15} />
                ))}
              </div>
              <p className="text-[#2d2d2d]/80 text-[15px] font-hand leading-relaxed italic mb-8 flex-1">"{review.text}"</p>
            </div>
            <div className="flex items-center gap-3 mt-auto pt-6 border-t border-[#2d2d2d]/10">
              <ScribbleAvatar
                className="w-10 h-10"
                bgColor={i % 3 === 0 ? "bg-[#d4f1f4]" : i % 3 === 1 ? "bg-[#f6eec7]" : "bg-[#f9d5e5]"}
              />
              <div>
                <div className="text-xs font-marker text-[#1a1a1a] uppercase tracking-wider">{review.author}</div>
                <div className="text-[10px] font-sketch text-[#2d2d2d]/50 uppercase tracking-widest">{review.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
