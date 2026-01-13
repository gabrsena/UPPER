
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
  TrendingUp 
} from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/5511973759325?text=Olá%20UPPER,%20vi%20o%20seu%20site%20e%20gostaria%20de%20um%20diagnóstico%20estratégico%20gratuito%20da%20minha%20empresa.";
const PRIMARY_BTN_CLASSES = "group btn-shimmer animate-glow inline-flex items-center gap-3 border border-emerald-500 bg-transparent text-emerald-500 px-6 py-3 md:px-10 md:py-5 rounded-full text-[9px] md:text-[11px] font-bold uppercase tracking-widest transition-all hover:bg-emerald-500 hover:text-white hover:scale-105 active:scale-95 hover:shadow-[0_0_40px_rgba(16,185,129,0.6)]";

interface NavbarProps {
  onShowAbout: () => void;
}

const Navbar = ({ onShowAbout }: NavbarProps) => {
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

          {/* Desktop Links */}
          <div className="hidden md:flex flex-1 justify-end items-center gap-14 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
            <a href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')} className="hover:text-white transition-colors">Início</a>
            <a href="#problema" onClick={(e) => scrollToSection(e, 'problema')} className="hover:text-white transition-colors">Serviços</a>
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

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-zinc-950 z-[200] flex flex-col items-center justify-center gap-12 transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4 pointer-events-none'
        }`}
      >
        <a href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')} className="text-4xl font-black text-white uppercase tracking-tighter hover:text-emerald-500 transition-colors">Início</a>
        <a href="#problema" onClick={(e) => scrollToSection(e, 'problema')} className="text-4xl font-black text-white uppercase tracking-tighter hover:text-emerald-500 transition-colors">Serviços</a>
        <a href="#contato" onClick={(e) => scrollToSection(e, 'contato')} className="text-4xl font-black text-white uppercase tracking-tighter hover:text-emerald-500 transition-colors">Contato</a>
        <button onClick={(e) => scrollToSection(e, 'sobre')} className="text-4xl font-black text-white uppercase tracking-tighter hover:text-emerald-500 transition-colors">Sobre</button>
        
        <div className="absolute inset-0 z-[-1] opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/20 blur-[120px] rounded-full"></div>
        </div>
      </div>
    </>
  );
};

const ScrollToTop = () => {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-10 z-[110] w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 flex items-center justify-center transition-all duration-500 hover:text-emerald-500 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] active:scale-90 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <ChevronUp size={24} />
    </button>
  );
};

const GraphBackground = () => (
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
);

const Hero = () => (
  <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 md:py-32 bg-grid-subtle hero-gradient overflow-hidden scroll-mt-20">
    <GraphBackground />
    <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
      <div className="space-y-6 md:space-y-10">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-[0.95] text-white animate-fade-in-up [animation-delay:200ms] text-balance">
          Seja a primeira escolha de quem busca pelo seu serviço<span className="text-emerald-500">.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-zinc-500 font-medium text-lg md:text-xl animate-fade-in-up [animation-delay:400ms] leading-relaxed px-4">
          Dominamos o Google para que sua empresa seja encontrada primeiro.
        </p>
      </div>

      <div className="flex flex-col items-center animate-fade-in-up [animation-delay:600ms]">
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

    <a href="#problema" onClick={(e) => {
      e.preventDefault();
      document.getElementById('problema')?.scrollIntoView({ behavior: 'smooth' });
    }} className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center animate-fade-in-up [animation-delay:1000ms] md:hidden">
      <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center animate-bounce">
        <ChevronDown className="text-emerald-500" size={14} />
      </div>
    </a>
  </section>
);

const InvisibilityCost = () => (
  <section id="problema" className="py-24 md:py-40 px-8 bg-zinc-950 border-t border-zinc-900 overflow-hidden scroll-mt-20">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 mb-6 block">O Problema</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-[1.1]">
            O custo real de estar <br/><span className="text-zinc-700">fora do radar.</span>
          </h2>
          <p className="text-zinc-500 text-lg md:text-xl leading-relaxed font-medium">
            Neste exato momento, alguém está procurando pelo que você vende. Se você não aparece nas 3 primeiras posições do Maps ou do Search, você está, literally, entregando esse cliente de presente para o seu concorrente.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 transition-all hover:border-red-500/30">
              <TrendingDown className="text-red-500 mb-4" size={24} />
              <div className="text-2xl font-bold text-white tracking-tighter">75%</div>
              <div className="text-[9px] uppercase tracking-widest text-zinc-600 font-bold">Nunca passam da 1ª página</div>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 transition-all hover:border-emerald-500/30">
              <MousePointer2 className="text-emerald-500 mb-4" size={24} />
              <div className="text-2xl font-bold text-white tracking-tighter">33%</div>
              <div className="text-[9px] uppercase tracking-widest text-zinc-600 font-bold">Cliques vão para o 1º lugar</div>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-10 bg-emerald-500/5 blur-[120px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative rounded-[2.5rem] bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl">
            <div className="bg-zinc-950 border-b border-zinc-800 p-4 flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center">
                <Search size={12} className="text-zinc-500" />
              </div>
              <div className="h-2 bg-zinc-800 rounded-full w-32"></div>
            </div>

            <div className="p-6 space-y-4">
              <div className="relative p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.05)] transform group-hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute -top-3 -right-3 bg-emerald-500 text-white text-[8px] font-black uppercase px-3 py-1 rounded-full tracking-widest shadow-lg">#1 Sorocaba</div>
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <div className="h-3 bg-white rounded-full w-28"></div>
                      <CheckCircle2 size={14} className="text-emerald-500" />
                    </div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} size={10} className="fill-emerald-500 text-emerald-500" />)}
                      <span className="text-[9px] text-zinc-500 font-bold ml-1">(4.9)</span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded-full w-20"></div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-500">
                      <Phone size={14} />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-500">
                      <Navigation size={14} />
                    </div>
                  </div>
                </div>
              </div>

              {[2, 3].map(i => (
                <div key={i} className="p-5 rounded-2xl bg-zinc-950/30 border border-zinc-800 opacity-40 blur-[0.5px]">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 rounded-xl bg-zinc-900 border border-zinc-800 shrink-0"></div>
                    <div className="space-y-2 flex-1">
                      <div className="h-3 bg-zinc-800 rounded-full w-24"></div>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4].map(i => <Star key={i} size={10} className="text-zinc-800 fill-zinc-800" />)}
                      </div>
                      <div className="h-2 bg-zinc-900 rounded-full w-16"></div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="text-center pt-2">
                <div className="inline-block text-[9px] font-black uppercase tracking-[0.2em] text-zinc-600 border-b border-zinc-800 pb-1">Ver mais 127 empresas...</div>
              </div>
            </div>

            <div className="bg-zinc-950 px-6 py-4 flex items-center justify-between">
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                 <span className="text-[10px] font-bold text-zinc-400">TRÁFEGO EM TEMPO REAL</span>
               </div>
               <div className="text-[10px] font-bold text-emerald-500">+12% HOJE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Comparison = () => (
  <section className="py-24 md:py-40 px-8 bg-zinc-900/10 border-t border-zinc-900 overflow-hidden">
    <div className="max-w-4xl mx-auto text-center space-y-10">
      <div className="space-y-6">
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 mb-6 block">A Lógica da Compra</span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-[1.1]">
          Por que o Instagram <br/> não basta?
        </h2>
        <p className="text-zinc-500 text-lg md:text-xl leading-relaxed font-medium max-w-2xl mx-auto">
          A diferença crucial entre quem está apenas "passeando" e quem está pronto para fechar negócio agora.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 text-left pt-12">
        <div className="p-10 rounded-3xl border border-zinc-800 bg-zinc-950/50 space-y-6">
          <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center border border-zinc-800">
            <Instagram size={24} className="text-zinc-600" />
          </div>
          <h3 className="text-xl font-bold text-zinc-400 tracking-tight">Redes Sociais</h3>
          <p className="text-zinc-600 text-sm leading-relaxed">As pessoas estão lá para entretenimento. Você precisa interrompê-las e torcer para que precisem do seu serviço naquele exato momento.</p>
          <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-700">Foco: Atenção</div>
        </div>
        
        <div className="p-10 rounded-3xl border border-emerald-500/30 bg-emerald-500/5 space-y-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
            <Zap size={80} className="text-emerald-500" />
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)]">
            <Search size={24} className="text-white" />
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">Google Search / Maps</h3>
          <p className="text-emerald-100/60 text-sm leading-relaxed">As pessoas já decidiram comprar. Elas só estão escolhendo DE QUEM. Se você aparece no topo, a confiança e a venda são suas.</p>
          <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Foco: Intenção de Compra</div>
        </div>
      </div>
    </div>
  </section>
);

const ImpactNumbers = () => (
  <div className="mt-24 md:mt-40 space-y-16 md:space-y-24">
    <div className="space-y-8">
      <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 mb-6 block">Métricas de Sucesso</span>
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-[1.1]">
        Resultados que <br/> <span className="text-emerald-500">pagam</span> o investimento.
      </h2>
      <p className="text-zinc-500 text-lg md:text-xl leading-relaxed font-medium max-w-3xl">
        Transformamos a presença digital em um ativo financeiro. Nossa metodologia entrega números que justificam cada centavo investido.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
      <div className="md:col-span-8 p-8 md:p-16 rounded-[2.5rem] md:rounded-[3rem] bg-zinc-900/30 border border-zinc-800 flex flex-col justify-between space-y-12 md:space-y-20 transition-all duration-1000 hover:border-emerald-500/60 hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.4)] group relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 md:p-16 opacity-5 group-hover:opacity-20 transition-all duration-1000 group-hover:scale-110 pointer-events-none">
          <TrendingUp size={200} className="md:w-[300px] md:h-[300px] text-emerald-500" />
        </div>
        <div className="flex items-center justify-between relative z-10">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
            <BarChart3 size={24} className="md:w-8 md:h-8" />
          </div>
          <div className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 bg-zinc-950/50 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-zinc-800">Média em 90 dias</div>
        </div>
        <div className="space-y-6 md:space-y-8 relative z-10">
          <div className="flex items-baseline gap-4">
            <div className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none group-hover:text-emerald-500 transition-colors duration-700">+300%</div>
          </div>
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Dominância Local Absoluta</h3>
            <p className="text-zinc-500 text-base md:text-lg font-medium leading-relaxed max-w-lg">
              Empilhamos sua empresa no topo do Google Maps e buscas orgânicas, forçando seu negócio a ser a primeira opção visível para o cliente.
            </p>
          </div>
        </div>
      </div>

      <div className="md:col-span-4 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] bg-zinc-900/40 border border-zinc-800 flex flex-col justify-between space-y-10 md:space-y-12 transition-all duration-1000 hover:border-emerald-500/60 hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.4)] group relative overflow-hidden">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
          <Activity size={24} className="md:w-7 md:h-7" />
        </div>
        <div className="space-y-6 md:space-y-8 relative z-10">
          <div className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none group-hover:text-emerald-500 transition-colors duration-700">99.8%</div>
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Uptime de Atendimento</h3>
            <p className="text-zinc-500 text-sm md:text-base font-medium leading-relaxed">
              Automação inteligente que captura leads e responde orçamentos em segundos, eliminando a perda de oportunidades por demora.
            </p>
          </div>
          <div className="h-1 bg-zinc-800 rounded-full w-full overflow-hidden">
            <div className="h-full bg-emerald-500 w-[99.8%] animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="md:col-span-12 p-8 md:p-16 rounded-[2.5rem] md:rounded-[3rem] bg-zinc-900/20 border border-zinc-800 flex flex-col justify-between transition-all duration-1000 hover:border-emerald-500/60 hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.4)] group relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 relative z-10">
          <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 flex-shrink-0 shadow-lg border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
            <ShieldCheck size={32} className="md:w-10 md:h-10" />
          </div>
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Autoridade Inquestionável</h3>
            <p className="text-zinc-500 text-base md:text-xl font-medium leading-relaxed max-w-3xl">
              Nossa engenharia de reputação eleva a percepção de valor do seu serviço, permitindo que você pare de competir por preço e comece a ser escolhido pela qualidade.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      id: 'maps',
      title: "Posicionamento Maps 3.0",
      desc: "IA configurada para dominar o Google Maps. Seja a primeira opção na sua região.",
      icon: <MapPin className="text-emerald-500" size={24} />
    },
    {
      id: 'sites',
      title: "Landing Pages Ultra-Rápidas",
      desc: "Desenvolvemos sites focados em conversão que carregam em menos de 1 segundo, garantindo que nenhum lead escape.",
      icon: <Globe className="text-emerald-500" size={24} />
    },
    {
      id: 'bot',
      title: "Atendimento Automatizado",
      desc: "Sistemas inteligentes que respondem orçamentos 24/7. Não deixe o cliente esfriar enquanto você dorme.",
      icon: <Bot className="text-emerald-500 transition-all duration-700 group-hover:drop-shadow-[0_0_15px_rgba(16,185,129,0.7)] group-hover:scale-110" size={24} />
    }
  ];

  return (
    <section id="servicos-section" className="py-24 md:py-40 px-8 border-y border-zinc-900/50 bg-zinc-950/40 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 space-y-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 mb-6 block">Nossa Solução</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-[1.1]">
            Engenharia de <br/> <span className="text-emerald-500 drop-shadow-[0_0_12px_rgba(16,185,129,0.4)]">Visibilidade Local.</span>
          </h2>
          <p className="text-zinc-500 text-lg md:text-xl leading-relaxed font-medium max-w-3xl">
            Combinamos tecnologia de ponta with as melhores estratégias de conversão para garantir o topo do mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <div key={i} className={`service-card group p-12 rounded-3xl flex flex-col space-y-10 relative overflow-hidden transition-all duration-500 ${
              s.id === 'bot' 
              ? 'bg-zinc-900/40 border-emerald-500/30 shadow-[inset_0_0_40px_rgba(16,185,129,0.03)]' 
              : 'bg-zinc-900/20 border-zinc-800'
            }`}>
              {s.id === 'bot' && (
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(16,185,129,0.06)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              )}
              
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-500 relative z-10 ${
                s.id === 'bot' 
                ? 'bg-zinc-900 border-emerald-500/40 group-hover:border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:shadow-[0_0_35px_rgba(16,185,129,0.4)]' 
                : 'bg-zinc-900 border-zinc-800 group-hover:border-emerald-500/50'
              }`}>
                {s.icon}
              </div>
              
              <div className="space-y-6 relative z-10">
                <h3 className="text-xl font-bold text-white tracking-tight">{s.title}</h3>
                <p className="text-zinc-500 leading-relaxed text-sm font-medium">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <ImpactNumbers />
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contato" className="py-24 md:py-40 px-8 scroll-mt-20">
    <div className="max-w-7xl mx-auto">
      <div className="bg-zinc-900/30 border border-zinc-800 rounded-[3rem] p-12 md:p-24 overflow-hidden relative shadow-2xl">
        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 mb-6 block">Diagnóstico Gratuito</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-[1.1]">
              Pronto para o <br /> <span className="text-emerald-500">próximo nível?</span>
            </h2>
            <p className="text-zinc-500 text-lg md:text-xl leading-relaxed font-medium max-w-lg">
              Analise sua presença digital e entenda como superar seus concorrentes em Sorocaba. Nosso diagnóstico detalha pontos críticos de conversão e rankeamento local.
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
          <div className="lg:block">
            <div className="p-12 bg-zinc-950/50 border border-zinc-800 rounded-[3rem] space-y-8">
              <div className="flex items-center gap-4 text-emerald-500">
                <CheckCircle2 size={20} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Análise de Rankeamento</span>
              </div>
              <div className="flex items-center gap-4 text-emerald-500">
                <CheckCircle2 size={20} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Métricas de Velocidade de Site</span>
              </div>
              <div className="flex items-center gap-4 text-emerald-500">
                <CheckCircle2 size={20} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Estratégia Anti-Concorrência</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

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
          <div className="space-y-10">
            <p className="text-zinc-500 text-lg md:text-xl leading-relaxed font-medium">
              A UPPER nasceu em 2024 com a missão clara: tornar-se a agência líder em posicionamento digital e automação.
            </p>
            <p className="text-zinc-500 text-lg md:text-xl leading-relaxed font-medium">
              Não somos apenas mais uma agência de marketing tradicional. Utilizamos tecnologias de ponta, as mesmas ferramentas que movimentam o Vale do Silício, para entregar resultados reais para o comércio local.
            </p>
            
            <div className="pt-10 border-t border-zinc-900">
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-emerald-500">
                  <Cpu size={32} />
                  <div className="text-white text-xl font-bold tracking-tight">Ecosistema Tech-First</div>
                </div>
                <p className="text-sm md:text-base text-zinc-500 font-medium max-w-lg leading-relaxed">
                  Engenharia de software aplicada ao marketing local para criar vantagens competitivas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
));

const Footer = () => (
  <footer className="py-20 px-8 border-t border-zinc-900 bg-zinc-950">
    <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-10">
      {/* Branding Centralizado */}
      <div className="space-y-4">
        <span className="text-3xl font-bold uppercase tracking-tighter text-white">Upper<span className="text-emerald-500">.</span></span>
        <p className="text-zinc-600 text-[9px] font-black uppercase tracking-[0.5em]">Engenharia de Visibilidade Local</p>
      </div>

      {/* Copyright e Assinatura Minimalista */}
      <div className="pt-10 border-t border-zinc-900/50 w-full flex flex-col items-center gap-4">
        <p className="text-zinc-700 text-[10px] font-bold uppercase tracking-[0.2em] max-w-lg leading-relaxed">
          Sorocaba • Votorantim • Itu • Região Metropolitana
        </p>
        <p className="text-zinc-800 text-[9px] font-bold uppercase tracking-[0.1em]">
          © 2024 UPPER AGENCY. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

const App = () => {
  const [showAbout, setShowAbout] = useState(false);
  const aboutRef = useRef<HTMLElement>(null);

  const handleShowAbout = () => {
    setShowAbout(true);
    setTimeout(() => {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="bg-zinc-950 selection:bg-emerald-500/20 selection:text-emerald-500">
      <Navbar onShowAbout={handleShowAbout} />
      <main>
        <Hero />
        <InvisibilityCost />
        <Comparison />
        <Services />
        <Contact />
        {showAbout && <About ref={aboutRef} />}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
