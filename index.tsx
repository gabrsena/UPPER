import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Search, 
  MapPin, 
  ArrowRight, 
  Bot, 
  Globe, 
  MessageSquare, 
  Menu, 
  X, 
  ChevronUp, 
  ChevronDown, 
  Instagram, 
  Zap, 
  TrendingDown, 
  MousePointer2, 
  Cpu, 
  CheckCircle2, 
  BarChart3, 
  Timer, 
  Target, 
  Star, 
  Phone, 
  Navigation, 
  Activity, 
  ShieldCheck, 
  TrendingUp,
  LineChart,
  Wallet,
  Rocket,
  Users,
  Gift,
  Camera,
  Video,
  Sparkles,
  BrainCircuit,
  TrendingUp as TrendUp,
  Construction
} from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/5511973759325?text=Olá%20UPPER,%20vi%20o%20seu%20site%20e%20gostaria%20de%20um%20diagnóstico%20estratégico%20gratuito%20da%20minha%20empresa.";
const PRIMARY_BTN_CLASSES = "group btn-shimmer animate-glow inline-flex items-center gap-3 border border-emerald-500 bg-transparent text-emerald-500 px-6 py-3 md:px-10 md:py-5 rounded-full text-[9px] md:text-[11px] font-bold uppercase tracking-widest transition-all duration-200 ease-in-out hover:bg-emerald-500 hover:text-white hover:scale-105 active:scale-95 hover:shadow-[0_0_40px_rgba(16,185,129,0.6)]";

interface OfferData {
  originalPrice: string;
  offerPrice: string;
  bonuses: string[];
}

const GoogleWord = () => (
  <span className="inline-flex">
    <span className="text-[#4285F4]">G</span>
    <span className="text-[#EA4335]">o</span>
    <span className="text-[#FBBC05]">o</span>
    <span className="text-[#4285F4]">g</span>
    <span className="text-[#34A853]">l</span>
    <span className="text-[#EA4335]">e</span>
  </span>
);

const Navbar = ({ onShowAbout }: { onShowAbout: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (id === 'sobre') {
      onShowAbout();
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-900/50 py-4' : 'bg-transparent py-10'
      }`}>
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')} className="text-xl font-bold tracking-tighter text-white uppercase">
              Upper<span className="text-emerald-500">.</span>
            </a>
          </div>

          <div className="hidden md:flex flex-1 justify-end items-center gap-14 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
            <a href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')} className="hover:text-white transition-colors">Início</a>
            <a href="#mercado-stats" onClick={(e) => scrollToSection(e, 'mercado-stats')} className="hover:text-white transition-colors">Serviços</a>
            <a href="#contato" onClick={(e) => scrollToSection(e, 'contato')} className="hover:text-white transition-colors">Contato</a>
            <button onClick={(e) => scrollToSection(e, 'sobre')} className="hover:text-white transition-colors uppercase tracking-[0.2em]">Sobre</button>
          </div>

          <div className="flex items-center gap-4 ml-8 md:hidden">
            <button 
              className="text-zinc-400 p-2 hover:text-white transition-colors relative z-[210]" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Alternar menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 bg-zinc-950 z-[200] flex flex-col items-center justify-center gap-12 transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4 pointer-events-none'
        }`}
      >
        <a href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')} className="text-4xl font-black text-white uppercase tracking-tighter hover:text-emerald-500 transition-colors">Início</a>
        <a href="#mercado-stats" onClick={(e) => scrollToSection(e, 'mercado-stats')} className="text-4xl font-black text-white uppercase tracking-tighter hover:text-emerald-500 transition-colors">Serviços</a>
        <a href="#contato" onClick={(e) => scrollToSection(e, 'contato')} className="text-4xl font-black text-white uppercase tracking-tighter hover:text-emerald-500 transition-colors">Contato</a>
        <button onClick={(e) => scrollToSection(e, 'sobre')} className="text-4xl font-black text-white uppercase tracking-tighter hover:text-emerald-500 transition-colors">Sobre</button>
      </div>
    </>
  );
};

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-10 right-10 z-[110] w-14 h-14 md:w-16 md:h-16 rounded-full bg-emerald-500/10 backdrop-blur-xl border border-emerald-500/30 text-emerald-500 flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-95 shadow-[0_0_40px_rgba(16,185,129,0.1)] animate-glow btn-shimmer ${
        isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Contato via WhatsApp"
    >
      <MessageSquare size={28} className="md:w-8 md:h-8" />
    </a>
  );
};

const PricingModal = ({ offer, onClose }: { offer: OfferData | null, onClose: () => void }) => {
  if (!offer) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center px-4 md:px-0">
      <div className="absolute inset-0 bg-zinc-950/90 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative w-full max-w-lg p-10 md:p-16 rounded-[3rem] bg-zinc-900 border border-emerald-500/30 shadow-[0_0_100px_rgba(16,185,129,0.15)] animate-fade-in-up">
        <button onClick={onClose} className="absolute top-8 right-8 text-zinc-500 hover:text-white transition-colors">
          <X size={24} />
        </button>
        
        <div className="space-y-10 text-center">
          <div className="inline-flex w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 items-center justify-center text-emerald-500 mb-2">
            <Gift size={32} />
          </div>
          
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase leading-tight">
              Oportunidade <br/><span className="text-emerald-500">Exclusiva</span>
            </h2>
            <p className="text-zinc-500 font-medium">Condição especial liberada apenas por este gatilho secreto.</p>
          </div>

          <div className="p-8 rounded-3xl bg-zinc-950/50 border border-zinc-800 space-y-4">
            <div className="text-zinc-600 line-through text-lg font-bold">R$ {offer.originalPrice}</div>
            <div className="text-5xl font-black text-white tracking-tighter animate-glow-text">
              R$ {offer.offerPrice}<span className="text-emerald-500 text-2xl">,00</span>
            </div>
            <div className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.3em]">
              Em até 3x sem juros
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-6 text-left">
            <div className="flex items-center gap-3">
              <Sparkles size={18} className="text-emerald-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Oferta Ativada</span>
            </div>
            <div className="space-y-4">
              {offer.bonuses.map((bonus, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <CheckCircle2 size={12} className="text-emerald-500" />
                  </div>
                  <p className="text-white text-sm font-black uppercase tracking-widest">
                    {bonus}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <a 
            href={WHATSAPP_URL + ` Gostaria da condição especial de R$ ${offer.offerPrice} com os brindes exclusivos!`}
            target="_blank"
            rel="noopener noreferrer"
            className={PRIMARY_BTN_CLASSES + " w-full justify-center"}
          >
            Garantir Vaga + Brindes
          </a>
        </div>
      </div>
    </div>
  );
};

const ROIGraph = () => {
  return (
    <div className="mt-24 md:mt-40 space-y-16">
      <div className="space-y-6">
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 block">Evolução do Investimento</span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-[1.1] uppercase">
          Fluxo de <br/> 
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-emerald-500/20 blur-xl"></span>
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-[length:200%_auto] animate-shimmer-text bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">
              Crescimento.
            </span>
          </span>
        </h2>
      </div>

      <div className="relative pt-12">
        {/* Linha do Gráfico SVG */}
        <div className="absolute inset-0 pointer-events-none z-0 hidden md:block">
          <svg className="w-full h-full" viewBox="0 0 1000 400" fill="none">
            <path 
              d="M50 350 Q 250 350, 500 200 T 950 50" 
              stroke="url(#graph-gradient)" 
              strokeWidth="4" 
              strokeDasharray="10 10"
              className="animate-draw"
            />
            <defs>
              <linearGradient id="graph-gradient" x1="0" y1="400" x2="1000" y2="0">
                <stop stopColor="#10b981" stopOpacity="0.2" />
                <stop offset="0.5" stopColor="#10b981" />
                <stop offset="1" stopColor="#10b981" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end relative z-10">
          {/* Fase 1: Base */}
          <div className="group space-y-6">
            <div className="h-32 md:h-40 w-full rounded-[2rem] bg-zinc-900/40 border border-zinc-800 transition-all duration-500 group-hover:border-emerald-500/30 flex flex-col justify-end p-8 relative overflow-hidden">
               <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity">
                 <Rocket size={20} className="text-zinc-500 group-hover:text-emerald-500" />
               </div>
               <div className="space-y-1">
                 <div className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">Início</div>
                 <div className="text-xl font-black text-white uppercase tracking-tighter leading-none">Engenharia & Setup GEO</div>
               </div>
            </div>
            <div className="px-2">
              <p className="text-zinc-500 text-xs leading-relaxed font-medium">Sincronização de dados e indexação prioritária na Inteligência Artificial do Google (0-7 Dias).</p>
            </div>
          </div>

          {/* Fase 2: Escala */}
          <div className="group space-y-6">
            <div className="h-48 md:h-64 w-full rounded-[2.5rem] bg-zinc-900/60 border border-emerald-500/20 shadow-[0_0_40px_rgba(16,185,129,0.05)] transition-all duration-500 group-hover:bg-emerald-500/5 flex flex-col justify-end p-10 relative overflow-hidden">
               <div className="absolute top-6 right-6 text-emerald-500 animate-bounce">
                 <Wallet size={24} />
               </div>
               <div className="space-y-1">
                 <div className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">Tração</div>
                 <div className="text-2xl font-black text-white uppercase tracking-tighter leading-none">Autoridade Local</div>
               </div>
            </div>
            <div className="px-2">
              <p className="text-zinc-500 text-xs leading-relaxed font-medium">Ganho de relevância do Maps e início das recomendações via SGE (IA do Google) (15-30 Dias).</p>
            </div>
          </div>

          {/* Fase 3: Topo */}
          <div className="group space-y-6">
            <div className="h-64 md:h-80 w-full rounded-[3rem] bg-emerald-500/10 border border-emerald-500/40 shadow-[0_0_80px_rgba(16,185,129,0.1)] transition-all duration-500 group-hover:scale-[1.02] flex flex-col justify-end p-12 relative overflow-hidden">
               <div className="absolute inset-0 bg-emerald-500/[0.02] animate-pulse"></div>
               <div className="absolute top-8 right-8 text-emerald-500 animate-pulse">
                 <TrendUp size={32} />
               </div>
               <div className="space-y-1 relative z-10">
                 <div className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Dominação</div>
                 <div className="text-3xl font-black text-white uppercase tracking-tighter leading-none">Dominação Regional</div>
               </div>
            </div>
            <div className="px-2">
              <p className="text-zinc-400 text-xs leading-relaxed font-medium">Consolidação como autoridade regional. Cada clique se torna faturamento sustentável (30 Dias+).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => (
  <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 md:py-32 bg-grid-subtle hero-gradient overflow-hidden scroll-mt-20">
    <div className="absolute inset-0 z-0 pointer-events-none opacity-20 overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
        <path d="M-50 750C200 700 350 780 500 650C650 520 800 600 950 400C1100 200 1300 150 1500 50" stroke="url(#emerald-gradient)" strokeWidth="2" className="animate-draw" />
        <defs>
          <linearGradient id="emerald-gradient" x1="0" y1="800" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#10b981" stopOpacity="0" />
            <stop offset="0.5" stopColor="#10b981" />
            <stop offset="1" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12 md:space-y-16">
      <div className="space-y-6 md:space-y-10">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-[0.95] text-white animate-fade-in-up [animation-delay:200ms] text-balance">
          O <GoogleWord /> mudou! Domine a intenção de busca com sua <span className="relative inline-block"><span className="absolute inset-0 bg-emerald-500/20 blur-xl"></span><span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-[length:200%_auto] animate-shimmer-text bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(16,185,129,0.4)]">IA</span></span><span className="text-emerald-500">.</span>
        </h1>
        <h2 className="max-w-2xl mx-auto text-zinc-500 font-medium text-lg md:text-xl animate-fade-in-up [animation-delay:400ms] leading-relaxed px-4">
          Não apenas apareça. Seja a resposta prioritária da Inteligência Artificial e do Maps para os melhores clientes de Sorocaba e região.
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 animate-fade-in-up [animation-delay:600ms]">
        <a 
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={PRIMARY_BTN_CLASSES}
        >
          SOLICITAR DIAGNÓSTICO IA
          <BrainCircuit size={18} className="group-hover:rotate-12 transition-transform" />
        </a>

        <button 
          onClick={() => document.getElementById('mercado-stats')?.scrollIntoView({ behavior: 'smooth' })}
          className="group flex flex-col items-center gap-3 transition-all duration-500 cursor-pointer"
        >
          <span className="text-[9px] font-black uppercase tracking-[0.4em] animate-color-shift group-hover:!text-emerald-500 transition-colors">Ver Mais</span>
          <div className="flex flex-col items-center -space-y-2">
            <ChevronDown className="animate-color-shift group-hover:!text-emerald-500 transition-colors animate-bounce" size={16} />
            <ChevronDown className="animate-color-shift group-hover:!text-emerald-500/50 transition-colors animate-bounce [animation-delay:200ms]" size={16} />
          </div>
        </button>
      </div>
    </div>
  </section>
);

const MarketStats = () => (
  <section id="mercado-stats" className="py-24 md:py-40 px-8 bg-zinc-950 border-t border-zinc-900 overflow-hidden scroll-mt-20">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16 space-y-6">
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 mb-6 block">O Cenário Local</span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-[1.1]">
          O MERCADO <br/><span className="animate-red-glow">NÃO ESPERA.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
        <div className="p-10 rounded-[2.5rem] bg-zinc-900/30 border border-zinc-800 transition-all duration-500 hover:border-zinc-700 group">
          <div className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6 group-hover:text-emerald-500 transition-colors">92%</div>
          <p className="text-zinc-500 text-base md:text-lg leading-relaxed font-medium">
            das decisões de consumo começam com uma busca. Se você não é visto, não é cogitado.
          </p>
        </div>

        <div className="p-10 rounded-[2.5rem] bg-zinc-900/30 border border-zinc-800 transition-all duration-500 hover:border-zinc-700 group">
          <div className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6 group-hover:text-emerald-500 transition-colors">75%</div>
          <p className="text-zinc-500 text-base md:text-lg leading-relaxed font-medium">
            dos cliques e chamadas agora se concentram no Top 3 do Google Maps e nas novas Respostas de IA.
          </p>
        </div>

        <div className="p-10 rounded-[2.5rem] bg-zinc-900/30 border border-zinc-800 transition-all duration-500 hover:border-zinc-700 group">
          <div className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6 group-hover:text-emerald-500 transition-colors">88%</div>
          <p className="text-zinc-500 text-base md:text-lg leading-relaxed font-medium">
            das buscas locais no celular resultam em uma ação (ligação ou visita) em menos de 24 horas.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const GEOEvolution = () => (
  <section id="geo-evolucao" className="py-24 md:py-40 px-8 bg-zinc-950 border-t border-zinc-900 overflow-hidden scroll-mt-20">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 mb-6 block">A Revolução da IA</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-[1.1]">
            O Google Mudou. <br/>
            <span className="relative inline-block py-2 group">
              <span className="absolute inset-0 bg-emerald-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-[length:200%_auto] animate-shimmer-text bg-clip-text text-transparent font-black drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                Sua empresa está pronta para o GEO?
              </span>
            </span>
          </h2>
          <p className="text-zinc-500 text-lg md:text-xl leading-relaxed font-medium">
            A busca tradicional evoluiu. O Google agora utiliza IA para entregar respostas diretas ao consumidor. Com a metodologia de GEO (Generative Experience Optimization), não apenas te posicionamos; garantimos que a Inteligência Artificial recomende o seu negócio como a melhor solução em Sorocaba.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 transition-all hover:border-emerald-500/30 group/card">
              <BrainCircuit className="text-emerald-500 mb-4 animate-pulse" size={24} />
              <div className="text-2xl font-bold text-white tracking-tighter">10x</div>
              <div className="text-[9px] uppercase tracking-widest text-zinc-600 font-bold">Mais relevância via IA</div>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 transition-all hover:border-emerald-500/30 group/card">
              <Zap className="text-emerald-500 mb-4" size={24} />
              <div className="text-2xl font-bold text-white tracking-tighter">GEO</div>
              <div className="text-[9px] uppercase tracking-widest text-zinc-600 font-bold">O Novo Padrão de Busca</div>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-10 bg-emerald-500/5 blur-[120px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative rounded-[2.5rem] bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl">
            {/* Mockup SGE / IA Header */}
            <div className="bg-zinc-950 border-b border-zinc-800 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <Sparkles size={12} className="text-emerald-500" />
                </div>
                <div className="h-2 bg-zinc-800 rounded-full w-40"></div>
              </div>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
                <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
                <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
              </div>
            </div>

            <div className="p-6 space-y-4">
              {/* AI Answer Card */}
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.05)] transform group-hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute top-4 right-4 flex gap-1 items-center">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></div>
                  <span className="text-[8px] font-black uppercase text-emerald-500 tracking-widest">IA Recomendou</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} className="text-emerald-500" />
                    <div className="h-3 bg-white/10 rounded-full w-48"></div>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-zinc-950/50 border border-zinc-800">
                    <div className="flex gap-4">
                      <div className="w-14 h-14 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                        <Star size={20} className="text-emerald-500 fill-emerald-500" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <div className="h-3 bg-white rounded-full w-24"></div>
                        <div className="h-2 bg-zinc-800 rounded-full w-full"></div>
                        <div className="h-2 bg-zinc-800 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-zinc-800 flex justify-between items-center">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={8} className="fill-emerald-500 text-emerald-500" />)}
                      </div>
                      <div className="h-6 w-20 rounded-full bg-emerald-500/20 border border-emerald-500/30"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ordinary Results */}
              {[1, 2].map(i => (
                <div key={i} className="p-4 rounded-xl bg-zinc-950/30 border border-zinc-800 opacity-30">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800"></div>
                    <div className="space-y-2 flex-1">
                      <div className="h-2 bg-zinc-800 rounded-full w-32"></div>
                      <div className="h-1.5 bg-zinc-900 rounded-full w-20"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Comparison = () => (
  <section className="py-24 md:py-40 px-8 bg-zinc-900/10 border-t border-zinc-900 overflow-hidden">
    <div className="max-w-7xl mx-auto text-center space-y-10">
      <div className="space-y-6">
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 mb-6 block">A Lógica da Compra</span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-[1.1]">
          Como você quer ser <br/> <span className="text-emerald-500">encontrado?</span>
        </h2>
        <p className="text-zinc-500 text-lg md:text-xl leading-relaxed font-medium max-w-2xl mx-auto">
          A diferença crucial entre ser interrompido, esperar a sorte ou dominar a intenção de quem já quer comprar.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left pt-12">
        <div className="p-10 rounded-3xl border border-zinc-800 bg-zinc-950/50 space-y-6 transition-all duration-500 hover:border-zinc-700 hover:bg-zinc-900/40 group hover:scale-[1.02]">
          <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-zinc-700 transition-colors">
            <Instagram size={24} className="text-zinc-600 group-hover:text-zinc-400" />
          </div>
          <h3 className="text-xl font-bold text-zinc-400 tracking-tight group-hover:text-zinc-200 uppercase">Redes Sociais</h3>
          <p className="text-zinc-600 text-sm leading-relaxed group-hover:text-zinc-500">
            Você precisa interromper o entretenimento das pessoas e torcer para que precisem do seu serviço naquele exato momento.
          </p>
        </div>

        <div className="p-10 rounded-3xl border border-zinc-800 bg-zinc-950/50 space-y-6 transition-all duration-500 hover:border-zinc-700 hover:bg-zinc-900/40 group hover:scale-[1.02]">
          <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-zinc-700 transition-colors">
            <Users size={24} className="text-zinc-600 group-hover:text-zinc-400" />
          </div>
          <h3 className="text-xl font-bold text-zinc-400 tracking-tight group-hover:text-zinc-200 uppercase leading-tight">Boca a Boca <br/><span className="text-xs text-zinc-600 font-bold tracking-widest">Excelente, mas lento</span></h3>
          <p className="text-zinc-600 text-sm leading-relaxed group-hover:text-zinc-500">
            É EXCELENTE, MAS É LENTO. Você fica refém do tempo do cliente e da vontade de terceiros para o seu caixa crescer.
          </p>
        </div>
        
        <div className="p-10 rounded-3xl border border-emerald-500/30 bg-emerald-500/5 space-y-6 relative overflow-hidden group transition-all duration-500 hover:border-emerald-500/60 hover:bg-emerald-500/[0.08] hover:scale-[1.02]">
          <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-transform group-hover:scale-110">
            <Search size={24} className="text-white" />
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight uppercase">Google Search / Maps</h3>
          <p className="text-emerald-100/60 text-sm leading-relaxed group-hover:text-emerald-100/80 transition-colors">
            As pessoas já decidiram comprar. Elas só estão escolhendo DE QUEM. Se você aparece no topo, a confiança e a venda são suas imediatamente.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      id: 'maps',
      title: "Dominação GEO & Maps",
      desc: "Otimização de dados estruturados para ser a resposta principal da IA e liderar o ranking do Google Maps.",
      icon: <MapPin className="text-emerald-500" size={24} />,
      isSoon: false
    },
    {
      id: 'sites',
      title: "Aura Landing Pages",
      desc: "Sites de ultra performance que carregam em menos de 1 segundo, projetados para converter a intenção de busca em faturamento.",
      icon: <Zap className="text-emerald-500" size={24} />,
      isSoon: false
    },
    {
      id: 'bot',
      title: "IA de Atendimento 24/7",
      desc: "Sistemas inteligentes que aprendem com o seu negócio para responder dúvidas, qualificar leads e agendar consultas via WhatsApp e site.",
      icon: <Bot className="text-emerald-500" size={24} />,
      isSoon: true
    }
  ];

  return (
    <section id="servicos-section" className="py-24 md:py-40 px-8 border-y border-zinc-900/50 bg-zinc-950/40 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 space-y-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 mb-6 block">Nossa Solução</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-[1.1]">
            Engenharia de <br/> 
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-emerald-500/20 blur-xl"></span>
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-[length:200%_auto] animate-shimmer-text bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">
                Visibilidade.
              </span>
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <div key={i} className={`service-card group p-12 rounded-3xl flex flex-col space-y-10 relative overflow-hidden transition-all duration-500 bg-zinc-900/20 border-zinc-800 ${s.isSoon ? 'opacity-40 grayscale pointer-events-none' : ''}`}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-500 bg-zinc-900 border-zinc-800 group-hover:border-emerald-500/50">
                {s.icon}
              </div>
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-white tracking-tight">{s.title}</h3>
                    {s.isSoon && (
                        <span className="text-[8px] font-black uppercase tracking-widest text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20">Em breve</span>
                    )}
                </div>
                <p className="text-zinc-500 leading-relaxed text-sm font-medium">{s.desc}</p>
              </div>
              {s.isSoon && (
                  <div className="absolute inset-0 bg-zinc-950/20 backdrop-blur-[1px] flex items-center justify-center">
                      <div className="flex items-center gap-2 text-zinc-600 font-bold uppercase tracking-[0.2em] text-[10px]">
                          <Construction size={14} />
                          Em Construção
                      </div>
                  </div>
              )}
            </div>
          ))}
        </div>

        <ROIGraph />
      </div>
    </section>
  );
};

const Contact = () => {
  const checklistItems = [
    "Raio-X completo do seu posicionamento atual",
    "Análise de brechas da sua concorrência",
    "Plano prático de Dominação Google"
  ];

  return (
    <section id="contato" className="py-24 md:py-40 px-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="bg-zinc-900/30 border border-zinc-800 rounded-[3rem] p-10 md:p-20 lg:p-24 overflow-hidden relative shadow-2xl">
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 mb-6 block">Próximo Passo</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-[1.1]">
                Diagnóstico <br /> <span className="text-emerald-500">Estratégico.</span>
              </h2>
              <p className="text-zinc-500 text-lg font-medium leading-relaxed max-w-md">
                Vamos abrir o jogo: analisamos seus números e mostramos exatamente onde você está perdendo dinheiro.
              </p>
              <div className="pt-4">
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={PRIMARY_BTN_CLASSES}
                >
                  Solicitar Diagnóstico Gratuito
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="p-8 md:p-12 rounded-[2.5rem] bg-zinc-950/50 border border-zinc-800/50 backdrop-blur-sm space-y-8 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl rounded-full"></div>
               <h3 className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.3em] relative z-10">O que você recebe no diagnóstico:</h3>
               <div className="space-y-6 relative z-10">
                 {checklistItems.map((item, i) => (
                   <div key={i} className="flex gap-4 items-start group/item">
                     <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/20 group-hover/item:border-emerald-500/50 transition-colors">
                        <CheckCircle2 size={12} className="text-emerald-500" />
                     </div>
                     <span className="text-zinc-500 text-sm md:text-base font-medium leading-tight group-hover/item:text-zinc-300 transition-colors">{item}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = React.forwardRef<HTMLElement>((_, ref) => (
  <section id="sobre" ref={ref} className="py-24 md:py-40 px-8 border-t border-zinc-900 bg-zinc-950 animate-fade-in-up scroll-mt-20">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-24 lg:gap-40 items-start">
        <div className="space-y-10 lg:sticky lg:top-32">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 mb-6 block">Nossa História</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-[1.1]">
            Fundada em Sorocaba. <br/><span className="text-white">Pensada globalmente.</span>
          </h2>
        </div>
        <div className="space-y-12 md:space-y-20">
          <p className="text-zinc-500 text-lg md:text-xl leading-relaxed font-medium">
            A UPPER nasceu em 2024 com a missão clara: tornar-se a agência líder em posicionamento digital e automação.
          </p>
        </div>
      </div>
    </div>
  </section>
));

const Footer = ({ onTriggerOffer }: { onTriggerOffer: (count: number) => void }) => {
  const [clickCount, setClickCount] = useState(0);
  const clickTimeout = useRef<number | null>(null);

  const handleLogoClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (clickTimeout.current) window.clearTimeout(clickTimeout.current);

    clickTimeout.current = window.setTimeout(() => {
      if (newCount >= 2) {
        onTriggerOffer(newCount);
      }
      setClickCount(0);
    }, 400);
  };

  return (
    <footer className="py-20 px-8 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-10">
        <div className="space-y-4">
          <button 
            onClick={handleLogoClick}
            className="text-3xl font-bold uppercase tracking-tighter text-white hover:text-emerald-500 transition-colors cursor-default select-none active:scale-95 duration-200"
            title="UPPER."
          >
            Upper<span className="text-emerald-500">.</span>
          </button>
          <p className="text-zinc-600 text-[9px] font-black uppercase tracking-[0.5em]">Engenharia de Visibilidade Local</p>
        </div>
        <div className="pt-10 border-t border-zinc-900/50 w-full flex flex-col items-center gap-4">
          <p className="text-zinc-800 text-[9px] font-bold uppercase tracking-[0.1em]">
            © 2024 UPPER AGENCY. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [activeOffer, setActiveOffer] = useState<OfferData | null>(null);
  const aboutRef = useRef<HTMLElement>(null);

  const handleShowAbout = () => {
    setShowAbout(true);
    setTimeout(() => {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleTriggerOffer = (count: number) => {
    const bonuses = [
      "Brindes Exclusivos."
    ];
    
    if (count === 2) {
      setActiveOffer({ 
        originalPrice: "1.250,00", 
        offerPrice: "797",
        bonuses: bonuses
      });
    } else if (count >= 3) {
      setActiveOffer({ 
        originalPrice: "1.100,00", 
        offerPrice: "796",
        bonuses: bonuses
      });
    }
  };

  return (
    <div className="bg-zinc-950 selection:bg-emerald-500/20 selection:text-emerald-500">
      <Navbar onShowAbout={handleShowAbout} />
      <main>
        <Hero />
        <MarketStats />
        <GEOEvolution />
        <Comparison />
        <Services />
        <Contact />
        {showAbout && <About ref={aboutRef} />}
      </main>
      <Footer onTriggerOffer={handleTriggerOffer} />
      <FloatingWhatsApp />
      <PricingModal offer={activeOffer} onClose={() => setActiveOffer(null)} />
    </div>
  );
};

// Fix Error #299 by ensuring single root creation
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
