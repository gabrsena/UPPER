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
  TrendingUp,
  Phone,
  ChevronDown,
  FileText,
  Video,
  Layers
} from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/5511910163467?text=Olá%20UPPER,%20vi%20o%20seu%20site%20e%20gostaria%20de%20um%20diagnóstico%20estratégico%20gratuito%20da%20minha%20empresa.";
const PRIMARY_BTN_CLASSES = "group btn-shimmer animate-glow inline-flex items-center justify-center gap-3 border border-emerald-500 bg-transparent text-emerald-500 px-6 py-4 md:px-8 md:py-4 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ease-in-out hover:bg-emerald-500 hover:text-white hover:scale-105 active:scale-95 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] w-full sm:w-auto";

interface OfferData {
  originalPrice: string;
  offerPrice: string;
  bonuses: string[];
}

// --- Componente de Revelação no Scroll ---
const ScrollReveal = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number, key?: React.Key }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1200ms] cubic-bezier(0.2, 0, 0, 1) transform ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-20 scale-90'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- Componente Typewriter integrado ---
interface TypewriterProps {
  words: string[]
  speed?: number
  delayBetweenWords?: number
  cursor?: boolean
  cursorChar?: string
}

const Typewriter = ({
  words,
  speed = 100,
  delayBetweenWords = 2000,
  cursor = true,
  cursorChar = "|",
}: TypewriterProps) => {
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  const currentWord = words[wordIndex]

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentWord.length) {
            setDisplayText(currentWord.substring(0, charIndex + 1))
            setCharIndex(charIndex + 1)
          } else {
            setTimeout(() => {
              setIsDeleting(true)
            }, delayBetweenWords)
          }
        } else {
          if (charIndex > 0) {
            setDisplayText(currentWord.substring(0, charIndex - 1))
            setCharIndex(charIndex - 1)
          } else {
            setIsDeleting(false)
            setWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? speed / 2 : speed,
    )

    return () => clearTimeout(timeout)
  }, [charIndex, currentWord, isDeleting, speed, delayBetweenWords, wordIndex, words])

  useEffect(() => {
    if (!cursor) return
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [cursor])

  return (
    <div className="inline-block">
      <span>
        {displayText}
        {cursor && (
          <span className="ml-1 transition-opacity duration-75" style={{ opacity: showCursor ? 1 : 0 }}>
            {cursorChar}
          </span>
        )}
      </span>
    </div>
  )
}

const JsonLd = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "name": "UPPER - Estrutura Digital para Empresas Locais",
    "alternateName": "UPPER Agency",
    "url": "https://upper-agency-sorocaba.vercel.app/",
    "logo": "https://i.imgur.com/s6fkqNo.png",
    "image": "https://upper-agency-sorocaba.vercel.app/og-image.jpg",
    "description": "Especialistas em engenharia de visibilidade e estrutura digital. Conectamos o Google ao WhatsApp para empresas locais em Sorocaba, Votorantim e Itu através de SEO Local, GEO e Automação.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sorocaba",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-23.5015",
      "longitude": "-47.4526"
    },
    "areaServed": [
      { "@type": "City", "name": "Sorocaba" },
      { "@type": "City", "name": "Votorantim" },
      { "@type": "City", "name": "Itu" }
    ],
    "service": [
      {
        "@type": "Service",
        "name": "SEO Local e Google Maps",
        "description": "Otimização do Perfil de Negócio no Google para dominância em pesquisas geolocalizadas."
      },
      {
        "@type": "Service",
        "name": "GEO - Generative Experience Optimization",
        "description": "Otimização para busca generativa (IA), garantindo que sua empresa seja a resposta de IAs como Gemini e ChatGPT."
      },
      {
        "@type": "Service",
        "name": "Automação de WhatsApp Business",
        "description": "Infraestrutura de atendimento inteligente 24h para converter buscas em vendas reais imediatamente."
      }
    ],
    "potentialAction": {
      "@type": "CommunicateAction",
      "name": "Solicitar Diagnóstico Estratégico Gratuito",
      "target": WHATSAPP_URL
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "url": WHATSAPP_URL,
      "availableLanguage": "Portuguese"
    }
  };

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

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

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isMenuOpen]);

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
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { id: 'inicio', label: 'Início' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'contato', label: 'Contato' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-900/50 py-3' : 'bg-transparent py-5 md:py-10'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          <button onClick={handleLogoClick} className="text-xl font-black tracking-tighter text-white uppercase active:scale-95 transition-transform z-[210]">
            Upper<span className="text-emerald-500">.</span>
          </button>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500">
            {navLinks.map(link => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={(e) => scrollToSection(e, link.id)} 
                className="hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <button 
            className="md:hidden text-zinc-400 p-2 z-[210] transition-transform active:scale-90" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar Menu" : "Abrir Menu"}
          >
            {isMenuOpen ? <X size={28} className="text-white" /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[200] transition-all duration-500 ease-in-out ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className={`absolute inset-0 bg-zinc-950/95 backdrop-blur-2xl transition-transform duration-700 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}></div>

        <div className="relative h-full flex flex-col items-center justify-center p-8">
          <div className="flex flex-col gap-6 text-center w-full max-w-xs">
            {navLinks.map((link, index) => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={(e) => scrollToSection(e, link.id)} 
                className={`text-3xl font-black text-white uppercase tracking-tighter transition-all duration-500 transform ${
                  isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="hover:text-emerald-500 transition-colors inline-block">{link.label}</span>
              </a>
            ))}
            
            <div className={`mt-12 transition-all duration-500 transform ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '400ms' }}>
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-500 text-zinc-950 font-black uppercase text-[10px] tracking-widest py-5 rounded-full"
              >
                Diagnóstico Gratuito
                <ArrowRight size={14} />
              </a>
            </div>

            <p className={`mt-10 text-[9px] font-bold uppercase text-zinc-600 tracking-[0.3em] transition-all duration-500 transform ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '500ms' }}>
              Sorocaba & Região
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const FloatingWhatsApp = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <a 
      href={WHATSAPP_URL} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[150] w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 animate-in zoom-in slide-in-from-bottom-10"
      aria-label="Falar no WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-20"></div>
      <Phone size={24} fill="currentColor" />
    </a>
  );
};

const Hero = () => {
  const typewriterWords = [
    "faturamento real.",
    "novos clientes.",
    "lucro líquido.",
    "autoridade local."
  ];

  return (
    <section id="inicio" className="relative min-h-screen md:min-h-[90vh] flex flex-col items-center justify-center px-6 pt-24 pb-16 bg-grid-subtle hero-gradient overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
          <path d="M-50 750C200 700 350 780 500 650C650 520 800 600 950 400C1100 200 1300 150 1500 50" stroke="#10b981" strokeWidth="1" />
        </svg>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 md:space-y-10">
        <div className="space-y-6">
          <h1 className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.2] md:leading-[1.1] text-white">
            Transforme buscas no <GoogleWord uppercase /> <br className="hidden sm:block" /> em <ShimmerWord><Typewriter words={typewriterWords} speed={80} delayBetweenWords={2500} cursor={true} cursorChar="|" /></ShimmerWord>
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-400 font-medium text-sm sm:text-base md:text-lg leading-relaxed px-4">
            Organizamos sua presença no Maps e preparamos seu WhatsApp para responder clientes 24h por dia, sem depender de anúncios caros.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 pt-2 w-full max-w-md mx-auto sm:max-w-none">
          <a href="#contato" className={PRIMARY_BTN_CLASSES}>
            Entender se a Upper é para minha empresa
          </a>
        </div>
      </div>
    </section>
  );
};

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
            When the contact happens and response takes too long, the client simply goes to the competitor. Without prepared service, opportunities are lost in minutes.
          </p>
        </div>
      </div>

      <div className="pt-12 text-center max-w-3xl mx-auto border-t border-zinc-900/50">
        <p className="text-zinc-400 text-lg md:text-2xl font-black uppercase tracking-tight leading-tight">
          O problema não é falta de interesse.<br/>
          <span className="text-emerald-500">É falta de estrutura entre a busca e o fechamento.</span>
        </p>
      </div>
    </div>
  </section>
);

const WhatUpperDoes = () => (
  <section id="servicos" className="py-20 md:py-32 px-8 bg-zinc-900/20 border-y border-zinc-900 relative overflow-hidden scroll-mt-20">
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
  <section id="publico" className="py-20 md:py-32 px-8 bg-zinc-950 border-t border-zinc-900 scroll-mt-20">
    <div className="max-w-6xl mx-auto space-y-16">
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        <div className="space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 block">Qualificação</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-tight uppercase">
            Este serviço <ShimmerWord color="emerald">não é para todo mundo</ShimmerWord>
          </h2>
        </div>
        
        <p className="text-zinc-400 text-base md:text-xl font-medium leading-relaxed">
          <br className="hidden md:block"/>
          <span className="text-zinc-500 italic"></span>
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Não Indicado */}
        <div className="p-8 md:p-10 rounded-3xl bg-zinc-900/10 border border-zinc-900 space-y-8 h-full">
          <div className="flex items-center gap-3 border-b border-zinc-900 pb-6">
             <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
               <X size={20} />
             </div>
             <h3 className="text-lg font-black text-white uppercase tracking-tight">Não é indicado para</h3>
          </div>
          <ul className="space-y-6">
            {[
              "Empresas que buscam apenas anúncios ou campanhas pontuais",
              "Negócios que não se importam em responder rápido seus clientes seja qual for o horário",
              "Empresas que não se preocupam com presença no Google ou no Maps",
              "Quem espera resultado sem organização ou processo de atendimento"
            ].map((item, i) => (
              <li key={i} className="flex gap-4 items-start text-zinc-500 text-sm font-medium">
                <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Indicado */}
        <div className="p-8 md:p-10 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 space-y-8 h-full">
          <div className="flex items-center gap-3 border-b border-emerald-500/10 pb-6">
             <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
               <Target size={20} />
             </div>
             <h3 className="text-lg font-black text-white uppercase tracking-tight">É indicado para</h3>
          </div>
          <ul className="space-y-6">
            {[
              "Empresas que querem relevância real no Google, não só cliques",
              "Negócios que desejam ser encontrados no Maps quando o cliente procura",
              "Quem quer ganhar novos leads de forma contínua, sem depender de anúncios, indicações ou rede social",
              "Empresas que entendem que IA já influencia decisões de compra",
              "Quem quer tranquilidade no WhatsApp, sabendo que o cliente será respondido independentemente do horário ou do dia"
            ].map((item, i) => (
              <li key={i} className="flex gap-4 items-start text-zinc-300 text-sm font-medium">
                <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-12 text-center space-y-10 border-t border-zinc-900/50">
        <p className="text-zinc-400 text-lg md:text-2xl font-black uppercase tracking-tight leading-tight max-w-3xl mx-auto">
          Se sua empresa precisa ser encontrada, recomendada e atendida sem fricção, <span className="text-emerald-500 underline decoration-emerald-500/30">então este serviço foi feito para você.</span>
        </p>
        
        <div className="flex justify-center">
          <a href="#contato" className={PRIMARY_BTN_CLASSES}>
            Quero estruturar meu negócio
          </a>
        </div>
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

// Added key property to the type to avoid TS errors when mapped in JSX
const FAQItem = ({ question, answer }: { question: string, answer: string, key?: React.Key }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-zinc-900 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group transition-all"
      >
        <span className="text-xs md:text-sm font-black uppercase tracking-tight text-zinc-400 group-hover:text-white transition-colors pr-8">{question}</span>
        <ChevronDown size={18} className={`text-zinc-600 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-emerald-500' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-zinc-500 text-sm font-medium leading-relaxed whitespace-pre-wrap">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "A Upper é uma agência de marketing digital?",
      answer: "Não.\nA Upper não cria campanhas nem anúncios. Nós estruturamos a presença digital da empresa no Google, organizando perfil, site e atendimento para que as buscas se transformem em contatos reais."
    },
    {
      question: "O que exatamente vocês fazem no Google?",
      answer: "Organizamos e otimizamos o Perfil da Empresa no Google e no Google Maps, ajustando informações, estrutura, conteúdo e sinais que fazem o Google priorizar sua empresa nas buscas e nas respostas das IAs."
    },
    {
      question: "Preciso trocar meu site atual?",
      answer: "Não necessariamente.\nQuando o site atual não ajuda na conversão ou é lento, criamos uma landing page leve e focada em levar o visitante direto para o atendimento. Quando o site já funciona, nós integramos a estrutura existente."
    },
    {
      question: "O atendimento no WhatsApp é um robô?",
      answer: "Não é um bot genérico.\nÉ uma secretária digital com linguagem natural, preparada para responder dúvidas, organizar mensagens e encaminhar contatos — sem respostas mecânicas."
    },
    {
      question: "Em quanto tempo dá para ver resultado?",
      answer: "A estrutura começa a funcionar assim que é publicada.\nResultados de visibilidade no Google variam conforme o mercado, mas a melhora no atendimento é imediata."
    },
    {
      question: "Como minha empresa pode aparecer nas respostas da IA do Google?",
      answer: "Aparecer nas respostas da IA depende de organização e clareza. O Google prioriza empresas que têm informações consistentes, bem estruturadas e fáceis de interpretar.\nA Upper organiza o perfil no Google, o site e os dados da empresa para que a IA entenda quem você é, o que faz, onde atende e como o cliente entra em contato."
    }
  ];

  return (
    <section className="py-16 px-8 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-600 block">Dúvidas Frequentes</span>
          <h3 className="text-xl font-black text-white uppercase tracking-tighter">Perguntas comuns</h3>
        </div>
        <div className="bg-zinc-900/10 rounded-2xl px-6 md:px-8">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-8 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center space-y-6">
        <h2 className="text-lg font-black uppercase tracking-tighter text-white">
          Upper<span className="text-emerald-500">.</span>
        </h2>
        <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]">
          Atendemos empresas em todo Brasil e presencialmente em Sorocaba, Votorantim, Itu e região.
        </p>
        <div className="pt-8 w-full border-t border-zinc-900/30">
          <p className="text-zinc-700 text-[8px] font-bold uppercase tracking-[0.2em]">
            © Upper — Estrutura Digital para Empresas Locais
          </p>
        </div>
      </div>
    </footer>
  );
};

const PricingModal = ({ offer, onClose }: { offer: OfferData | null, onClose: () => void }) => {
  if (!offer) return null;
  const whatsappMessage = `Olá UPPER, gostaria de aproveitar a oferta secreta de R$ ${offer.offerPrice}.`;
  const whatsappUrl = `https://wa.me/5511910163467?text=${encodeURIComponent(whatsappMessage)}`;

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
              <span className="text-4xl md:text-6xl font-black text-white tracking-tighter none">R$ {offer.offerPrice}</span>
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
      <JsonLd />
      <Navbar onTriggerSecretOffer={handleTriggerSecretOffer} />
      <main>
        <Hero />
        <ManifestoStructure />
        <WhatUpperDoes />
        <BeforeAfter />
        <WhoIsItFor />
        <About />
        <Contact />
        <FAQSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <PricingModal offer={activeOffer} onClose={() => setActiveOffer(null)} />
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
