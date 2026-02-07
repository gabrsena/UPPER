import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  Layout,
  MessageCircle,
  ArrowRightLeft,
  Target,
  Menu,
  X,
  MapPin,
  Gift,
  Search,
  Sparkles,
  ShieldCheck,
  Cpu,
  MousePointerClick,
  TrendingUp
} from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/5511973759325?text=Olá%20UPPER,%20vi%20o%20seu%20site%20e%20gostaria%20de%20um%20diagnóstico%20estratégico%20gratuito%20da%20minha%20empresa.";
const PRIMARY_BTN_CLASSES = "group btn-shimmer animate-glow inline-flex items-center gap-3 border border-emerald-500 bg-transparent text-emerald-500 px-6 py-3.5 md:px-8 md:py-4 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ease-in-out hover:bg-emerald-500 hover:text-white hover:scale-105 active:scale-95 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]";
const SECONDARY_BTN_CLASSES = "group inline-flex items-center gap-3 bg-zinc-900 text-zinc-300 border border-zinc-800 px-6 py-3.5 md:px-8 md:py-4 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-zinc-800 hover:text-white hover:border-zinc-700 active:scale-95";

interface OfferData {
  originalPrice: string;
  offerPrice: string;
  bonuses: string[];
}

const GoogleWord = ({ uppercase = false }: { uppercase?: boolean }) => {
  const text = uppercase ? "GOOGLE" : "Google";
  const colors = ["#4285F4", "#EA4335", "#FBBC05", "#4285F4", "#34A853", "#EA4335"];
  return (
    <span className="inline-flex font-bold">
      {text.split('').map((char, i) => (
        <span key={i} style={{ color: colors[i] }}>{char}</span>
      ))}
    </span>
  );
};

const ShimmerWord = ({ children, color = "emerald" }: { children?: React.ReactNode, color?: string }) => {
  const colorClasses = color === "emerald" 
    ? "from-emerald-400 via-emerald-500 to-emerald-600 drop-shadow-[0_0_8px_rgba(16,185,129,0.2)]"
    : color === "red"
    ? "from-red-400 via-red-500 to-red-600 drop-shadow-[0_0_8px_rgba(239,68,68,0.2)]"
    : "from-zinc-400 via-zinc-200 to-zinc-400";

  return (
    <span className="relative inline-block">
      <span className={`absolute inset-0 ${color === 'red' ? 'bg-red-500/20' : 'bg-emerald-500/20'} blur-xl opacity-70`}></span>
      <span className={`bg-gradient-to-r ${colorClasses} bg-[length:200%_auto] animate-shimmer-text bg-clip-text text-transparent font-black`}>
        {children}
      </span>
    </span>
  );
};

const Navbar = ({ onTriggerSecretOffer }: { onTriggerSecretOffer: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const clickTimeout = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (clickTimeout.current) window.clearTimeout(clickTimeout.current);
    clickTimeout.current = window.setTimeout(() => {
      if (newCount === 2) onTriggerSecretOffer();
      else {
        const element = document.getElementById('inicio');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
      setClickCount(0);
    }, 400);
  };

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled ? 'bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-900/50 py-3' : 'bg-transparent py-6 md:py-10'
      }`}>
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <button onClick={handleLogoClick} className="text-xl font-black tracking-tighter text-white uppercase active:scale-95 transition-transform">
            Upper<span className="text-emerald-500">.</span>
          </button>
          <div className="hidden md:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500">
            <a href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')} className="hover:text-white transition-colors">Início</a>
            <a href="#servicos" onClick={(e) => scrollToSection(e, 'servicos')} className="hover:text-white transition-colors">Serviços</a>
            <a href="#sobre" onClick={(e) => scrollToSection(e, 'sobre')} className="hover:text-white transition-colors">Sobre</a>
            <a href="#contato" onClick={(e) => scrollToSection(e, 'contato')} className="hover:text-white transition-colors">Contato</a>
          </div>
          <button className="md:hidden text-zinc-400 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-zinc-950 z-[200] flex flex-col items-center justify-center gap-8 p-8 text-center animate-in fade-in duration-300">
          <a href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')} className="text-2xl font-black text-white uppercase tracking-tighter">Início</a>
          <a href="#servicos" onClick={(e) => scrollToSection(e, 'servicos')} className="text-2xl font-black text-white uppercase tracking-tighter">Serviços</a>
          <a href="#sobre" onClick={(e) => scrollToSection(e, 'sobre')} className="text-2xl font-black text-white uppercase tracking-tighter">Sobre</a>
          <a href="#contato" onClick={(e) => scrollToSection(e, 'contato')} className="text-2xl font-black text-white uppercase tracking-tighter">Contato</a>
          <button onClick={() => setIsMenuOpen(false)} className="mt-8 text-zinc-600 font-bold uppercase tracking-widest text-[10px]">Fechar</button>
        </div>
      )}
    </>
  );
};

const Hero = () => (
  <section id="inicio" className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-24 pb-16 bg-grid-subtle hero-gradient overflow-hidden">
    <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
      <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
        <path d="M-50 750C200 700 350 780 500 650C650 520 800 600 950 400C1100 200 1300 150 1500 50" stroke="#10b981" strokeWidth="1" />
      </svg>
    </div>
    <div className="relative z-10 max-w-5xl mx-auto text-center space-y-10">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[9px] font-black uppercase tracking-[0.3em] mx-auto animate-fade-in">
          Estrutura Digital em Sorocaba
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] text-white uppercase">
          Transforme buscas no <GoogleWord uppercase /> <br/> em <ShimmerWord>FATURAMENTO REAL.</ShimmerWord>
        </h1>
        <p className="max-w-2xl mx-auto text-zinc-400 font-medium text-base md:text-lg leading-relaxed px-4">
          Organizamos sua presença no Maps e preparamos seu WhatsApp para responder clientes 24h por dia, sem depender de anúncios caros.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 pt-2">
        <a href="#contato" className={PRIMARY_BTN_CLASSES}>
          Organizar minha empresa
        </a>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={SECONDARY_BTN_CLASSES}>
          Falar com especialista
        </a>
      </div>
    </div>
  </section>
);

const ManifestoStructure = () => (
  <section id="manifesto" className="py-20 md:py-32 px-8 bg-zinc-950 border-t border-zinc-900 scroll-mt-20">
    <div className="max-w-6xl mx-auto space-y-16">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-red-500 block">O Vazamento de Clientes</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-tight uppercase">
            O problema começa <br/><ShimmerWord color="red">no Google</ShimmerWord>
          </h2>
        </div>
        
        <p className="text-zinc-300 text-base md:text-xl font-medium leading-relaxed max-w-3xl mx-auto italic border-l-2 border-red-500/30 pl-6 md:pl-8 text-left">
          "Quem pesquisa no <GoogleWord /> já está pronto para agir. Ele compara opções, localização, avaliações e escolhe quem parece mais confiável."
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 md:p-12 rounded-3xl bg-zinc-900/30 border border-zinc-800 space-y-6 hover:border-red-500/30 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
            <Search size={24} />
          </div>
          <h3 className="text-xl font-black text-white uppercase">Busca sem Encontro</h3>
          <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
            Sua empresa pode até estar no <GoogleWord /> Maps, mas um perfil incompleto não é priorizado pelo <GoogleWord />. Sem otimização, ela deixa de aparecer nas buscas e nas respostas dentro das IA.
          </p>
        </div>

        <div className="p-8 md:p-12 rounded-3xl bg-zinc-900/30 border border-zinc-800 space-y-6 hover:border-red-500/30 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
            <TrendingUp size={24} />
          </div>
          <h3 className="text-xl font-black text-white uppercase">Ação sem Resposta</h3>
          <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
            Quando o contato acontece e a resposta demora, o cliente simplesmente segue para o concorrente. Sem atendimento preparado, oportunidades se perdem em minutos.
          </p>
        </div>
      </div>

      <div className="pt-12 text-center max-w-3xl mx-auto border-t border-zinc-900/50">
        <p className="text-zinc-400 text-lg md:text-2xl font-black uppercase tracking-tight leading-tight">
          O problema não é falta de interesse.<br/>
          <span className="text-emerald-500">É falta de estrutura entre a busca e o atendimento.</span>
        </p>
      </div>
    </div>
  </section>
);

const WhatUpperDoes = () => (
  <section className="py-20 md:py-32 px-8 bg-zinc-900/20 border-y border-zinc-900 relative overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
        <div className="space-y-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 block">Conexão Estratégica</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-tight uppercase">
            A Upper organiza o caminho entre <br/>
            <ShimmerWord>a busca e o atendimento</ShimmerWord>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg font-medium leading-relaxed">
            Não fazemos "marketing" genérico. Construímos os trilhos por onde o faturamento da sua empresa vai passar.
          </p>
          <ul className="space-y-4 pt-4">
            {[
              "Dominação do Perfil de Negócio no Google",
              "Otimização para Busca Generativa (IA)",
              "Landing Pages de Alta Velocidade (Foco UX)",
              "Automação de Atendimento via WhatsApp",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-white text-sm font-bold uppercase tracking-tight">
                <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-full"></div>
          <div className="relative grid gap-4">
            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center gap-6 translate-x-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-black">1</div>
              <div>
                <div className="text-[10px] text-emerald-500 font-black uppercase tracking-widest">Atração</div>
                <div className="text-white font-bold">Destaque no Maps & Google</div>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center gap-6 -translate-x-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-black">2</div>
              <div>
                <div className="text-[10px] text-emerald-500 font-black uppercase tracking-widest">Retenção</div>
                <div className="text-white font-bold">Site Rápido & Conversivo</div>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center gap-6 translate-x-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-black">3</div>
              <div>
                <div className="text-[10px] text-emerald-500 font-black uppercase tracking-widest">Conversão</div>
                <div className="text-white font-bold">WhatsApp Inteligente 24h</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const About = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 px-8 border-t border-zinc-900 bg-zinc-950 scroll-mt-20">
      <div className="max-w-6xl mx-auto space-y-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 block">Autoridade Técnica</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-tight uppercase">
              Por que a <span className="text-emerald-500">UPPER?</span>
            </h2>
            <div className="space-y-6">
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-medium">
                Sediada em Sorocaba, a Upper não é uma agência de publicidade comum. Somos especialistas em infraestrutura de conversão local.
              </p>
              <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
                Combinamos tecnologia de ponta com as diretrizes mais recentes do Google para garantir que sua empresa não seja apenas "mais uma", mas a escolha óbvia para quem pesquisa. Nosso foco é o resultado orgânico e a automação que libera seu tempo.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-6">
              <h3 className="text-[11px] font-black uppercase text-zinc-500 tracking-[0.3em] border-b border-zinc-800 pb-4">Nossas Credenciais</h3>
              <div className="grid gap-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                    <Cpu size={20} />
                  </div>
                  <div>
                    <div className="text-white font-black text-xs uppercase tracking-tight">Google AI Essentials</div>
                    <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Certificado em Inteligência Artificial</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#4285F4] group-hover:scale-110 transition-transform">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-white font-black text-xs uppercase tracking-tight">Google Business Profile</div>
                    <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Especialista em Google Empresas</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform">
                    <MousePointerClick size={20} />
                  </div>
                  <div>
                    <div className="text-white font-black text-xs uppercase tracking-tight">UX Design Specialist</div>
                    <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Foco em Experiência & Conversão</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-[9px] font-black uppercase text-zinc-600 tracking-[0.4em] justify-center md:justify-start">
              <ShieldCheck size={14} className="text-emerald-500" />
              Parceiro Oficial de Implementação
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: <MapPin size={28} />,
      title: "Google e Maps",
      subtitle: "Visibilidade GEO",
      desc: "Organizamos seu perfil para ganhar destaque máximo onde o cliente já está procurando por você."
    },
    {
      icon: <Layout size={28} />,
      title: "Landing Page",
      subtitle: "Foco em Conversão",
      desc: "Um site leve e focado: guiar o visitante direto para o seu atendimento, eliminando distrações."
    },
    {
      icon: <MessageCircle size={28} />,
      title: "WhatsApp",
      subtitle: "Automação Local",
      desc: "Uma secretária digital preparada para responder dúvidas e organizar o fluxo de mensagens 24h."
    }
  ];

  return (
    <section id="servicos" className="py-20 md:py-28 px-8 bg-zinc-950 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-zinc-900/20 border border-zinc-800 transition-all duration-500 hover:border-emerald-500/30">
              <div className="w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center border border-zinc-800 mb-8 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                {step.icon}
              </div>
              <div className="space-y-3">
                <span className="text-[9px] font-black uppercase text-emerald-500 tracking-[0.3em]">{step.title}</span>
                <h3 className="text-xl font-black text-white tracking-tight leading-tight uppercase">{step.subtitle}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-medium">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BeforeAfter = () => {
  const comparisons = [
    { 
      before: "Invisível no Google ou confusa.", 
      after: "Destaque e clareza total." 
    },
    { 
      before: "Site lento sem orientação clara.", 
      after: "Site rápido focado em conversas." 
    },
    { 
      before: "Vácuo nas mensagens do WhatsApp.", 
      after: "Atendimento imediato e pronto." 
    }
  ];

  return (
    <section className="py-20 md:py-28 px-8 bg-zinc-900/10 border-y border-zinc-900">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="space-y-4 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 block">Evolução</span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white leading-tight uppercase">
            Sua empresa pronta <br/><ShimmerWord>para o novo Google.</ShimmerWord>
          </h2>
        </div>
        <div className="grid gap-4">
          {comparisons.map((item, i) => (
            <div key={i} className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-6 p-6 md:p-8 rounded-2xl bg-zinc-950 border border-zinc-900 group">
              <div className="text-center md:text-right order-2 md:order-1">
                <span className="text-[8px] font-black uppercase text-zinc-700 block mb-2 tracking-widest">Situação Atual</span>
                <p className="text-zinc-500 text-base md:text-lg font-medium leading-snug">{item.before}</p>
              </div>
              <div className="flex justify-center order-1 md:order-2">
                <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-emerald-500">
                  <ArrowRightLeft size={16} />
                </div>
              </div>
              <div className="text-center md:text-left order-3">
                <span className="text-[8px] font-black uppercase text-emerald-500 block mb-2 tracking-widest">Com a Upper</span>
                <p className="text-white text-base md:text-lg font-black uppercase leading-snug">{item.after}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhoIsItFor = () => (
  <section className="py-20 md:py-28 px-8 bg-zinc-950">
    <div className="max-w-4xl mx-auto text-center space-y-10">
      <div className="inline-flex w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 items-center justify-center text-emerald-500 mb-2">
        <Target size={32} />
      </div>
      <div className="space-y-6">
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 block">Público Ideal</span>
        <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white leading-tight uppercase">
          Empresas que atendem <br/><ShimmerWord>em Sorocaba e Região.</ShimmerWord>
        </h2>
        <p className="text-zinc-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto px-4">
          Indicado para negócios que dependem do <GoogleWord /> para novos contatos e precisam de organização imediata.
        </p>
      </div>
      <div className="pt-4">
        <a href="#contato" className={PRIMARY_BTN_CLASSES}>
          Quero estruturar meu negócio
        </a>
      </div>
    </div>
  </section>
);

const Contact = () => {
  return (
    <section id="contato" className="py-20 md:py-28 px-8 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-10 md:p-20 text-center space-y-10 relative overflow-hidden">
          <div className="relative z-10 space-y-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 block">Próximo Passo</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-tight uppercase">
              Diagnóstico <br /> <span className="text-emerald-500">Estratégico Gratuito.</span>
            </h2>
            <p className="text-zinc-500 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto px-4">
              Vamos analisar como sua empresa aparece no Google e onde você está perdendo dinheiro por falta de estrutura.
            </p>
            <div className="pt-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={PRIMARY_BTN_CLASSES}>
                Solicitar via WhatsApp
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 px-8 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-xl font-black uppercase tracking-tighter text-white">
            Upper<span className="text-emerald-500">.</span>
          </h2>
          <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em]">Estrutura Digital • Sorocaba • Votorantim</p>
        </div>
        <div className="pt-8 border-t border-zinc-900/50 w-full">
          <p className="text-zinc-800 text-[9px] font-bold uppercase tracking-[0.2em]">© 2024 UPPER AGENCY. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const PricingModal = ({ offer, onClose }: { offer: OfferData | null, onClose: () => void }) => {
  if (!offer) return null;
  const whatsappMessage = `Olá UPPER, gostaria de aproveitar a oferta secreta de R$ ${offer.offerPrice}.`;
  const whatsappUrl = `https://wa.me/5511973759325?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-6 bg-zinc-950/95 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-3xl p-10 md:p-12 overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.2)]">
        <button onClick={onClose} className="absolute top-8 right-8 text-zinc-500 hover:text-white transition-colors">
          <X size={24} />
        </button>
        <div className="space-y-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[9px] font-black uppercase tracking-widest">
              <Gift size={12} /> Oferta Especial
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter leading-none">
              <ShimmerWord>Plano de Estrutura</ShimmerWord>
            </h3>
          </div>
          <div className="space-y-4">
            <div className="text-zinc-500 text-sm font-medium line-through">De R$ {offer.originalPrice}</div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">R$ {offer.offerPrice}</span>
              <span className="text-zinc-400 text-sm font-bold uppercase">/pagamento único</span>
            </div>
          </div>
          <div className="pt-2">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`${PRIMARY_BTN_CLASSES} w-full justify-center text-center`}>
              Garantir Agora
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [activeOffer, setActiveOffer] = useState<OfferData | null>(null);
  
  const handleTriggerSecretOffer = () => {
    setActiveOffer({ 
      originalPrice: "1.490,00", 
      offerPrice: "987",
      bonuses: ["Consultoria de Atendimento"]
    });
  };

  return (
    <div className="bg-zinc-950 selection:bg-emerald-500/30 selection:text-emerald-400">
      <Navbar onTriggerSecretOffer={handleTriggerSecretOffer} />
      <main>
        <Hero />
        <ManifestoStructure />
        <WhatUpperDoes />
        <HowItWorks />
        <BeforeAfter />
        <WhoIsItFor />
        <About />
        <Contact />
      </main>
      <Footer />
      <PricingModal offer={activeOffer} onClose={() => setActiveOffer(null)} />
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
