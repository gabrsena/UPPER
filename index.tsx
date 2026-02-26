
import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import Markdown from 'react-markdown';
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
  Layers,
  Clock,
  BookOpen,
  Star,
  Users
} from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/5511910163467?text=Olá%20UPPER,%20vi%20o%20seu%20site%20e%20gostaria%20de%20um%20diagnóstico%20estratégico%20gratuito%20da%20minha%20empresa.";
const PRIMARY_BTN_CLASSES = "group btn-shimmer animate-glow inline-flex items-center justify-center gap-3 border border-emerald-500 bg-transparent text-emerald-500 px-6 py-4 md:px-10 md:py-5 rounded-full text-[11px] md:text-[12px] font-black uppercase tracking-[0.2em] transition-all duration-300 ease-in-out hover:bg-emerald-500 hover:text-white hover:scale-105 active:scale-95 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] w-full sm:w-auto";

interface OfferData {
  originalPrice: string;
  offerPrice: string;
  bonuses: string[];
}

interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  status: 'published' | 'under_construction';
  content?: string;
  readTime?: string;
}

// --- Componente de Revelação no Scroll ---
const ScrollReveal = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number, key?: any }) => {
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

// --- Componente Typewriter ---
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
    <div className="inline-flex min-h-[1.2em] items-center whitespace-nowrap">
      <span>
        {displayText || "\u00A0"}
        {cursor && (
          <span className="ml-0.5 transition-opacity duration-75 text-emerald-500" style={{ opacity: showCursor ? 1 : 0 }}>
            {cursorChar}
          </span>
        )}
      </span>
    </div>
  )
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
    <span className="relative inline-flex items-center">
      <span className={`absolute inset-0 ${color === 'red' ? 'bg-red-500/10' : 'bg-emerald-500/10'} blur-xl opacity-70`}></span>
      <span className={`bg-gradient-to-r ${colorClasses} bg-[length:200%_auto] animate-shimmer-text bg-clip-text text-transparent font-black leading-tight py-1`}>
        {children}
      </span>
    </span>
  );
};

const Navbar = ({ onTriggerSecretOffer, onOpenBlog, onGoHome }: { onTriggerSecretOffer: () => void, onOpenBlog: () => void, onGoHome: () => void }) => {
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
    onGoHome();
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (clickTimeout.current) window.clearTimeout(clickTimeout.current);
    clickTimeout.current = window.setTimeout(() => {
      if (newCount === 2) onTriggerSecretOffer();
      else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      setClickCount(0);
    }, 400);
  };

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (id === 'blog') {
      onOpenBlog();
      setIsMenuOpen(false);
      return;
    }
    
    onGoHome();
    setIsMenuOpen(false);
    
    setTimeout(() => {
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
    }, 100);
  };

  const navLinks = [
    { id: 'servicos', label: 'Serviços' },
    { id: 'blog', label: 'Blog' },
    { id: 'planos', label: 'Planos' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[350] transition-all duration-500 ${
        isScrolled ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-900/50 py-3' : 'bg-transparent py-6 md:py-10'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          <button onClick={handleLogoClick} className="text-xl font-black tracking-tighter text-white uppercase active:scale-95 transition-transform">
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
            className="md:hidden text-zinc-400 p-2 transition-transform active:scale-90" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar Menu" : "Abrir Menu"}
          >
            {isMenuOpen ? <X size={28} className="text-white" /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[300] transition-all duration-500 ease-in-out ${
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
      <Phone size={24} fill="currentColor" aria-label="Contato via WhatsApp" />
    </a>
  );
};

const Hero = () => {
  const typewriterWords = [
    "faturamento previsível.",
    "autoridade regional.",
    "lucro no caixa.",
    "novos clientes."
  ];

  return (
    <section id="inicio" className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 md:pt-40 md:pb-32 bg-grid-subtle hero-gradient overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
          <path d="M-50 750C200 700 350 780 500 650C650 520 800 600 950 400C1100 200 1300 150 1500 50" stroke="#10b981" strokeWidth="1" />
        </svg>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24 lg:gap-32 items-center">
          <div className="space-y-8 md:space-y-10 text-left">
            <div className="space-y-6">
              <h1 
                className="text-[26px] sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.2] text-white flex flex-col items-start justify-start gap-2 md:gap-4"
                itemProp="headline"
              >
                <span className="block">Transformamos buscas pelo seu negócio em</span>
                <span className="flex items-center justify-start gap-x-3 whitespace-nowrap">
                  <ShimmerWord><Typewriter words={typewriterWords} speed={80} delayBetweenWords={2500} cursor={true} cursorChar="|" /></ShimmerWord>
                </span>
              </h1>
              
              <p className="max-w-xl text-zinc-400 font-medium text-base sm:text-lg md:text-xl leading-relaxed">
               A infraestrutura definitiva que une Visibilidade no Google e Conversão via IA para gerar lucro real, 24h por dia
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start justify-start gap-4 w-full">
              <a 
                href="#manifesto" 
                className="group btn-shimmer animate-glow inline-flex items-center justify-center gap-3 border border-emerald-500 bg-transparent text-emerald-500 px-6 py-4 md:px-8 md:py-4 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ease-in-out hover:bg-emerald-500 hover:text-white hover:scale-105 active:scale-95 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] w-full sm:w-auto"
                aria-label="Entender se a Upper é para minha empresa"
              >
                Entender se a Upper é para mim
              </a>
              <a 
                href={WHATSAPP_URL} 
                target="_blank"
                rel="noopener noreferrer"
                className="group btn-shimmer inline-flex items-center justify-center gap-3 bg-emerald-500 text-zinc-950 px-6 py-4 md:px-8 md:py-4 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ease-in-out hover:bg-emerald-400 hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                Ativar meu Sistema de Conversão
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Social Proof - Trusted By */}
            <div className="pt-8 border-t border-zinc-900/50 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-zinc-950 bg-zinc-800 flex items-center justify-center overflow-hidden">
                      <img src={`https://picsum.photos/seed/user${i}/100/100`} alt={`Cliente satisfeito da UPPER ${i}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" />
                    </div>
                  ))}
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                  +147 empresas locais dominando o Maps
                </div>
              </div>
              <div className="flex items-center gap-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-600 whitespace-nowrap">Especialistas em:</span>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  <span className="text-[10px] font-bold text-zinc-500">Google search</span>
                  <span className="text-[10px] font-bold text-zinc-500">Google Maps SEO</span>
                  <span className="text-[10px] font-bold text-zinc-500">GEO / IA</span>
                  <span className="text-[10px] font-bold text-zinc-500">Automação WhatsApp Business</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative group lg:translate-x-12 xl:translate-x-20">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-emerald-500/0 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-zinc-950/50 backdrop-blur-xl border border-zinc-800 p-8 rounded-[2rem] shadow-2xl overflow-hidden aspect-square lg:aspect-auto lg:h-[600px] flex flex-col gap-6">
              {/* Header do Monitor */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Infrastructure Monitor: Active</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                    <Star size={10} className="text-emerald-500 fill-emerald-500" />
                    <span className="text-[9px] font-black text-emerald-500">5.0 RATING</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-1 h-4 bg-zinc-800 rounded-full"></div>
                    <div className="w-1 h-6 bg-emerald-500 rounded-full"></div>
                    <div className="w-1 h-3 bg-zinc-800 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Grid de Performance */}
              <div className="grid grid-cols-2 gap-4">
                {/* SEO Local Card */}
                <div className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex flex-col justify-between group/card hover:border-emerald-500/30 transition-colors">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                      <Search size={20} />
                    </div>
                    <div className="text-xs font-black text-white uppercase tracking-tight">SEO Local</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 w-[85%] animate-pulse"></div>
                    </div>
                    <div className="flex justify-between text-[8px] font-bold text-zinc-500 uppercase tracking-widest">
                      <span>Visibility</span>
                      <span className="text-emerald-500">85%</span>
                    </div>
                  </div>
                </div>

                {/* GEO / IA Card */}
                <div className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex flex-col justify-between group/card hover:border-emerald-500/30 transition-colors">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                      <Cpu size={20} />
                    </div>
                    <div className="text-xs font-black text-white uppercase tracking-tight">GEO & IA</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 w-[92%] animate-pulse" style={{ animationDelay: '500ms' }}></div>
                    </div>
                    <div className="flex justify-between text-[8px] font-bold text-zinc-500 uppercase tracking-widest">
                      <span>AI Training</span>
                      <span className="text-purple-500">92%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Activity Feed */}
              <div className="flex-1 bg-zinc-950/50 border border-zinc-900 rounded-2xl p-4 overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-zinc-950 to-transparent z-10"></div>
                <div className="space-y-3 animate-marquee-vertical">
                  {[
                    { type: 'SEO', msg: 'Keyword "SEO Local Sorocaba" ranked #1', time: '2m ago' },
                    { type: 'IA', msg: 'Google Gemini recommended business in GEO', time: '5m ago' },
                    { type: 'WA', msg: 'WhatsApp lead converted automatically', time: '12m ago' },
                    { type: 'SEO', msg: 'GMB Profile optimized for 12 new categories', time: '18m ago' },
                    { type: 'WA', msg: 'New customer scheduled via secretária digital', time: '25m ago' },
                    { type: 'SEO', msg: 'Keyword "SEO Local Sorocaba" ranked #1', time: '2m ago' },
                    { type: 'IA', msg: 'Google Gemini recommended business in GEO', time: '5m ago' },
                    { type: 'WA', msg: 'WhatsApp lead converted automatically', time: '12m ago' },
                    { type: 'SEO', msg: 'GMB Profile optimized for 12 new categories', time: '18m ago' },
                    { type: 'WA', msg: 'New customer scheduled via secretária digital', time: '25m ago' },
                  ].map((log, i) => (
                    <div key={i} className="flex items-center justify-between gap-4 border-b border-zinc-900/50 pb-2">
                      <div className="flex items-center gap-3">
                        <span className={`text-[8px] font-black px-1.5 py-0.5 rounded ${
                          log.type === 'SEO' ? 'bg-emerald-500/10 text-emerald-500' : 
                          log.type === 'IA' ? 'bg-purple-500/10 text-purple-500' : 'bg-blue-500/10 text-blue-500'
                        }`}>
                          {log.type}
                        </span>
                        <span className="text-[10px] font-medium text-zinc-400 truncate max-w-[180px]">{log.msg}</span>
                      </div>
                      <span className="text-[8px] font-bold text-zinc-600 uppercase whitespace-nowrap">{log.time}</span>
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-zinc-950 to-transparent z-10"></div>
              </div>

              {/* Footer do Monitor */}
              <div className="bg-emerald-500/5 border border-emerald-500/10 p-4 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-zinc-950">
                    <TrendingUp size={16} />
                  </div>
                  <div>
                    <div className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">Conversion Rate</div>
                    <div className="text-white font-bold text-sm">+124% Growth</div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-1">
                    <Users size={10} className="text-zinc-500" />
                    <span className="text-[9px] font-black text-white">147 CLIENTS</span>
                  </div>
                  <div className="text-[8px] font-black text-zinc-600 uppercase tracking-[0.2em]">Live</div>
                </div>
              </div>
            </div>
          </div>
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
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-tight uppercase">
            Qual dessas situações <br/><ShimmerWord color="emerald">parece com o seu negócio hoje?</ShimmerWord>
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Bloco 1 */}
        <div className="p-8 md:p-12 rounded-3xl bg-zinc-900/30 border border-zinc-800 space-y-8 hover:border-red-500/30 transition-all duration-500 relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
             <Search size={24} />
            </div>
            <div className="text-right">
              <div className="text-[10px] font-black text-red-500 uppercase tracking-widest">Perda de Oportunidade</div>
              <div className="text-3xl font-black text-white">~10</div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-black text-white uppercase tracking-tight">Seu negócio aparece no Google, mas não vira cliente</h3>
            <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
              Visitas chegam, mas o telefone não toca. Alguém te achou e foi embora para o concorrente sem agir. Isso não é azar. É falta de infraestrutura de conversão. Você está pagando para o seu concorrente vender.
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t border-zinc-800">
            <div className="text-[10px] font-black uppercase text-red-500 tracking-widest mb-1">Cálculo de Perda Mensal</div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-1">
                <div className="text-[8px] text-zinc-500 uppercase">Buscas/Dia</div>
                <div className="text-xs font-bold text-white">10+</div>
              </div>
              <div className="space-y-1">
                <div className="text-[8px] text-zinc-500 uppercase">Ticket Médio</div>
                <div className="text-xs font-bold text-white">R$ 300</div>
              </div>
              <div className="space-y-1">
                <div className="text-[8px] text-zinc-500 uppercase">Perda Est.</div>
                <div className="text-xs font-bold text-red-500">R$ 2.7k</div>
              </div>
            </div>
            <div className="relative h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
               <div className="absolute top-0 left-0 h-full bg-red-500 w-[30%] group-hover:w-[45%] transition-all duration-1000"></div>
            </div>
          </div>
        </div>

        {/* Bloco 2 */}
        <div className="p-8 md:p-12 rounded-3xl bg-zinc-900/30 border border-zinc-800 space-y-8 hover:border-red-500/30 transition-all duration-500 relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
              <TrendingUp size={24} />
            </div>
            <div className="text-right">
              <div className="text-[10px] font-black text-red-500 uppercase tracking-widest">Custo Invisível</div>
              <div className="text-3xl font-black text-white">R$ 32k</div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-black text-white uppercase tracking-tight">Concorrentes piores aparecem mais que você</h3>
            <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
              Um negócio com serviço inferior está na sua frente. Não porque é melhor. Porque tem a infraestrutura digital certa. E você não.
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t border-zinc-800">
            <div className="text-[10px] font-black uppercase text-red-500 tracking-widest mb-1">Impacto Anual Acumulado</div>
            <div className="flex items-end gap-2 h-12">
               <div className="flex-1 bg-zinc-800 h-[20%] rounded-t-sm"></div>
               <div className="flex-1 bg-zinc-800 h-[40%] rounded-t-sm"></div>
               <div className="flex-1 bg-zinc-800 h-[60%] rounded-t-sm"></div>
               <div className="flex-1 bg-red-500/50 h-[80%] rounded-t-sm group-hover:bg-red-500 transition-colors"></div>
               <div className="flex-1 bg-red-500 h-full rounded-t-sm animate-pulse"></div>
            </div>
            <div className="flex justify-between text-[10px] text-zinc-400 uppercase font-black">
              <span>Perda de Mercado</span> 
              <span className="text-red-500">R$ 32.400/ano</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center space-y-6">
        <p className="text-zinc-300 text-sm md:text-lg font-bold uppercase tracking-widest">
          O problema não é não vender. É não saber quanto você está perdendo.
        </p>
        <p className="text-zinc-600 text-[10px] uppercase tracking-widest font-bold">
          * Os valores e cálculos acima variam de acordo com o nicho de mercado e ticket médio de cada negócio.
        </p>
      </div>

      <div className="flex justify-center pt-8">
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={PRIMARY_BTN_CLASSES}>
          Quero parar de perder dinheiro
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </section>
);

const WhatUpperDoes = () => (
  <section id="servicos" className="py-20 md:py-32 px-8 bg-zinc-900/20 border-y border-zinc-900 relative overflow-hidden scroll-mt-20">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
        <div className="space-y-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 block">O Método Upper</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-tight uppercase">
            Como a Upper transforma <br/>
            <ShimmerWord>buscas em clientes</ShimmerWord>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg font-medium leading-relaxed">
            Não fazemos marketing. Construímos a infraestrutura por onde o faturamento da sua empresa vai passar.
          </p>
          <ul className="space-y-4 pt-4">
            {[
              "Autoridade Local no Google",
              "Estrutura Digital que Converte",
              "Conversão e Atendimento Inteligente",
              "Posicionamento nas Buscas por IA",
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
                <div className="text-white font-bold">Google + IA recomendam você</div>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center gap-6 -translate-x-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-black">2</div>
              <div>
                <div className="text-[10px] text-emerald-500 font-black uppercase tracking-widest">Infraestrutura</div>
                <div className="text-white font-bold">Site rápido que conduz à ação</div>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center gap-6 translate-x-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-black">3</div>
              <div>
                <div className="text-[10px] text-emerald-500 font-black uppercase tracking-widest">Conversão</div>
                <div className="text-white font-bold">WhatsApp que fecha, não enrola</div>
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
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-tight uppercase">
                Sobre a <span className="text-emerald-500">Upper</span>
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-medium">
                Sediada em Sorocaba, a Upper nasceu para enterrar o marketing de 'postzinhos' e curtidas. Não somos uma agência comum; somos arquitetos de infraestrutura de conversão. Unimos a estratégia de especialistas em Marketing, o olhar de UX Designers e o poder de fogo de desenvolvedores Full Stack para construir sistemas que vendem enquanto você foca no seu negócio. Em plena era da Inteligência Artificial, nós não apenas seguimos a tendência nós instalamos a tecnologia que coloca sua empresa à frente da concorrência
              </p>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <div className="text-white font-black text-xl">5.0 / 5.0</div>
                </div>
                <div className="h-10 w-[1px] bg-zinc-900"></div>
                <div className="text-zinc-500 text-[9px] font-bold uppercase tracking-widest flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-1">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Logo do Google" className="w-3 h-3" loading="lazy" />
                    <span>Google Maps</span>
                  </div>
                  <span>Nota máxima na região</span>
                </div>
              </div>
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
          </div>
        </div>
      </div>
    </section>
  );
};



const NEW_BLOG_POST_CONTENT = `
A maioria das empresas tem um perfil no Google Meu Negócio. Poucas sabem usar.

Se você já cadastrou o seu negócio no Google, parabéns — você fez o mínimo. O problema é que o mínimo não gera cliente. O que gera cliente é infraestrutura. E é exatamente sobre isso que vamos falar neste artigo.

---

## O que está em jogo quando alguém busca pelo seu serviço

Quando um potencial cliente digita "clínica de estética em Sorocaba" ou "mecânico próximo a mim" no Google, ele não está navegando. Ele está decidindo.

Em menos de 10 segundos, ele vai comparar três empresas que aparecem no topo do mapa, olhar as fotos, ler as avaliações, checar o horário de funcionamento e escolher uma. Essa escolha vale dinheiro real — e raramente volta atrás.

A pergunta é: a sua empresa está infraestruturada para ser essa escolha?

---

## Por que o seu perfil provavelmente não está convertendo

Existe uma diferença enorme entre **aparecer no Google** e **ser escolhido no Google**.

A maioria dos perfis tem problemas básicos que afastam clientes sem que o dono perceba:

- Foto de perfil pixelada ou desatualizada
- Horário de funcionamento errado ou em branco
- Categoria principal genérica demais ("empresa" em vez de "clínica de fisioterapia")
- Nenhuma resposta às avaliações — nem às positivas, nem às negativas
- Descrição do negócio vazia ou copiada do site sem nenhum contexto local
- Nenhuma postagem nos últimos 6 meses

Cada um desses erros envia um sinal para o algoritmo do Google: *esse negócio não está ativo, não merece destaque.*

E o Google obedece.

---

## O que o algoritmo do Google Maps realmente avalia

Para ranquear sua empresa no Maps, o Google usa três pilares principais:

**1. Relevância** — O seu perfil deixa claro o que você faz, para quem e onde?

Se a sua categoria, descrição e palavras-chave não baterem com o que o cliente está buscando, você simplesmente não aparece. Não é questão de sorte. É matemática.

**2. Proximidade** — Você está configurado para atender a região certa?

Parece óbvio, mas muitos negócios não definem corretamente sua área de atendimento. Isso faz com que você apareça para buscas irrelevantes e suma das buscas que importam.

**3. Autoridade** — O Google confia em você?

Aqui entram as avaliações, a frequência de atualização do perfil, as fotos, os links para o site e o tempo de atividade da conta. Quanto mais sinais de confiança, mais alto você aparece.

---

## As 7 alavancas que realmente movem o ponteiro

Agora vem a parte prática. Esses são os elementos que fazem a diferença entre um perfil abandonado e um perfil que gera contato todos os dias.

### 1. Categoria principal — a mais ignorada de todas

A categoria principal do seu perfil é o sinal mais forte que você envia ao Google sobre o que você faz. Escolher errado ou escolher genérico é o erro número um.

Em vez de "Empresa de Serviços", use "Clínica de Fisioterapia", "Advocacia Trabalhista", "Oficina Mecânica Especializada em Importados". Quanto mais específico, mais qualificada é a busca que te encontra.

Além da categoria principal, você pode adicionar categorias secundárias. Use todas as que fazem sentido para o seu negócio.

### 2. Descrição do negócio — não é sobre você, é sobre o cliente

A descrição do seu perfil não é um espaço para contar a história da empresa. É um espaço para responder à pergunta que o cliente tem na cabeça: *"esse negócio resolve o meu problema?"*

Escreva em linguagem direta. Mencione a cidade ou bairro onde você atende. Inclua os problemas que você resolve, não só os serviços que oferece. Exemplo:

> "Atendemos pacientes com dores crônicas, lesões esportivas e pós-operatório em Sorocaba. Agendamento no mesmo dia."

Isso converte. "Somos uma clínica de fisioterapia fundada em 2010 com missão de cuidar da saúde..." não converte.

### 3. Fotos — mais do que estética

O Google prioriza perfis com fotos atualizadas e com alto engajamento. Mas mais importante que isso: o cliente usa as fotos para decidir se vai te contatar.

Fotos do ambiente, da equipe, dos bastidores, dos resultados (quando possível) — tudo isso cria confiança antes do primeiro contato. Perfis com mais de 100 fotos recebem, em média, 520% mais ligações do que perfis com menos de 10.

Não precisa de fotógrafo. Precisa de consistência.

### 4. Avaliações — o ativo mais valioso do seu perfil

Avaliações são moeda. Empresas com mais avaliações e notas mais altas aparecem mais e convertem mais. Isso não é opinião — é o que os dados mostram.

O problema é que a maioria dos negócios espera a avaliação aparecer por acaso. Não funciona assim. Você precisa de um sistema ativo de solicitação de avaliações: no momento certo, pelo canal certo, com a mensagem certa.

E quando a avaliação chega — boa ou ruim — ela precisa de resposta. O cliente que lê sua resposta a uma avaliação negativa aprende mais sobre seu caráter profissional do que lendo dez avaliações positivas.

### 5. Postagens no perfil — o sinal de atividade que poucos usam

Poucos sabem, mas o Google Meu Negócio permite que você publique atualizações diretamente no perfil — promoções, novidades, conteúdo, eventos. Essas postagens aparecem no painel de conhecimento quando alguém pesquisa sua empresa.

Mais importante: elas são um sinal direto de atividade para o algoritmo. Perfis que postam regularmente têm mais visibilidade do que perfis inativos, mesmo com métricas similares em outros aspectos.

Uma postagem por semana já faz diferença.

### 6. Perguntas e Respostas — conteúdo gratuito que você não está usando

Na aba de Perguntas e Respostas do seu perfil, qualquer pessoa pode fazer perguntas — e qualquer pessoa pode responder. Isso inclui você.

Crie as perguntas mais comuns que seus clientes fazem e responda-as você mesmo. "Vocês atendem por convênio?", "Qual o prazo de entrega?", "Fica perto de qual parada de ônibus?" Esse conteúdo aparece no perfil e responde dúvidas antes mesmo do contato — o que aumenta a qualidade dos leads que chegam até você.

### 7. Consistência de dados — o detalhe que ninguém vê, mas o Google vê

Seu nome, endereço e telefone precisam estar idênticos em todos os lugares onde sua empresa aparece online: site, redes sociais, diretórios, outros perfis de busca.

Qualquer inconsistência gera dúvida para o algoritmo. E dúvida no algoritmo significa posição menor no ranking.

---

## A camada que a maioria ainda não viu: GEO

Até aqui, falamos de SEO Local — a prática de otimizar sua presença para aparecer nas buscas do Google. Mas existe uma segunda camada que está crescendo rapidamente e que a maioria dos negócios ainda ignora: o **GEO**, ou Generative Engine Optimization.

Quando alguém abre o ChatGPT ou o Google Gemini e pergunta *"qual o melhor escritório de contabilidade em Sorocaba?"*, uma IA generativa responde. E ela não busca em sites aleatórios — ela recomenda com base em dados estruturados, autoridade digital e consistência de informações.

O seu perfil do Google Meu Negócio bem otimizado é um dos sinais que essas IAs leem para fazer recomendações. Isso significa que a mesma estrutura que te faz aparecer no Maps também te posiciona para ser recomendado pelas IAs.

Não são dois trabalhos diferentes. É o mesmo trabalho, feito com mais profundidade.

---

## O que separa um perfil comum de um perfil que gera cliente todos os dias

Vamos ser diretos: qualquer empresário pode seguir esse checklist e melhorar seu perfil. Mas existe uma diferença entre melhorar e dominar.

Dominar significa:

- Aparecer no top 3 para as buscas mais relevantes do seu setor na sua cidade
- Ter um fluxo previsível de contatos vindos do Google todos os meses
- Estar preparado para as buscas do presente (Maps) e as buscas do futuro (IA)

Isso não acontece com uma tarde de otimização. Acontece com infraestrutura contínua, monitoramento de dados e ajustes estratégicos mês a mês.

É exatamente isso que a Upper faz.

---

## Checklist rápido: seu perfil está pronto para converter?

Antes de fechar esse artigo, responda honestamente:

- [ ] Sua categoria principal é específica o suficiente?
- [ ] Sua descrição menciona a cidade e o problema que você resolve?
- [ ] Você tem mais de 20 avaliações com nota acima de 4.5?
- [ ] Você responde todas as avaliações?
- [ ] Você postou no perfil nos últimos 30 dias?
- [ ] Suas fotos têm menos de 1 ano?
- [ ] Seu nome, endereço e telefone estão idênticos em todos os canais?

Se você marcou menos de 5, você está deixando dinheiro na mesa todos os meses.

---

## Quer saber exatamente quanto você está perdendo?

A Upper faz um diagnóstico gratuito do seu perfil e te mostra, com dados reais, onde estão os buracos da sua presença digital.

Sem compromisso. Sem pitch de vendas. Só os números — e o que fazer com eles.

[Quero meu diagnóstico gratuito →](${WHATSAPP_URL})

---

*Publicado por Upper Agency — infraestrutura Digital para Empresas Locais.*  
*SEO Local · GEO · WhatsApp Inteligente*
`;

// --- BLOG SECTION ---
const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      id: 0,
      title: "Como transformar o Google Meu Negócio numa máquina de clientes",
      category: "SEO Local",
      date: "25 Fev, 2026",
      excerpt: "A maioria das empresas tem um perfil no Google Meu Negócio. Poucas sabem usar. Veja como transformar o seu perfil numa máquina de atração de clientes.",
      status: 'published',
      content: NEW_BLOG_POST_CONTENT,
      readTime: "8 min"
    },
    {
      id: 1,
      title: "GEO: Por que sua empresa precisa aparecer nas respostas do ChatGPT e Gemini",
      category: "GEO & IA",
      date: "24 Fev, 2026",
      excerpt: "As IAs generativas estão substituindo o Google para milhões de buscas. Se sua empresa não está sendo recomendada por elas, você está invisível para um mercado inteiro.",
      status: 'under_construction'
    },
    {
      id: 2,
      title: "Como transformar o Google Meu Negócio numa máquina de gerar clientes locais",
      category: "SEO Local",
      date: "20 Fev, 2026",
      excerpt: "A maioria das empresas tem o perfil do Google abandonado. Veja como a infraestrutura certa transforma visitas em ligações, mensagens e agendamentos reais.",
      status: 'under_construction'
    },
    {
      id: 3,
      title: "WhatsApp que vende: como parar de perder lead por falta de resposta",
      category: "Conversão",
      date: "15 Fev, 2026",
      excerpt: "Um lead não respondido em 5 minutos esfria 80%. Veja como uma IA conversacional resolve isso sem parecer robô e sem custar uma fortuna.",
      status: 'under_construction'
    }
  ];

  return (
    <section id="blog" className="py-20 md:py-32 px-8 bg-zinc-900/10 border-t border-zinc-900 scroll-mt-20">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <ScrollReveal>
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 block">blog</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-tight uppercase">
              O que todo empresário local <ShimmerWord>precisa saber</ShimmerWord>
            </h2>
            <p className="text-zinc-500 text-sm md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
              Conteúdo direto sobre o que está mudando nas buscas e como isso afeta o seu faturamento.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <ScrollReveal key={post.id} delay={i * 150}>
              <div 
                onClick={() => setSelectedPost(post)}
                className="group relative h-full flex flex-col bg-zinc-950 border border-zinc-900 rounded-3xl p-8 hover:border-emerald-500/30 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 text-[8px] font-black uppercase text-zinc-500 tracking-widest">
                    <Clock size={10} />
                    {post.date}
                  </div>
                </div>

                <div className="space-y-6 flex-1 pt-4">
                  <div className="text-[10px] font-black uppercase text-emerald-500 tracking-widest">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-emerald-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-10 flex items-center justify-between border-t border-zinc-900 pt-6">
                  <span className="text-[9px] font-black uppercase tracking-widest text-emerald-500 group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                    {post.status === 'under_construction' ? 'Em Construção' : 'Ler Artigo'}
                    <ArrowRight size={12} />
                  </span>
                  <BookOpen size={16} className="text-zinc-800 group-hover:text-emerald-500/20 transition-colors" />
                </div>

                <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Modal de Artigo */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-[500] flex items-center justify-center p-6 bg-zinc-950/98 backdrop-blur-xl animate-in fade-in duration-300">
            <div className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12 overflow-y-auto max-h-[90vh] shadow-[0_0_50px_rgba(16,185,129,0.1)]">
              <button 
                onClick={() => setSelectedPost(null)} 
                className="absolute top-8 right-8 text-zinc-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="space-y-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">{selectedPost.category}</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-800"></span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{selectedPost.date}</span>
                    {selectedPost.readTime && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-zinc-800"></span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{selectedPost.readTime}</span>
                      </>
                    )}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-tight">
                    {selectedPost.title}
                  </h2>
                </div>

                {selectedPost.status === 'published' && selectedPost.content ? (
                  <div className="markdown-body text-zinc-400 leading-relaxed space-y-6">
                    <Markdown>{selectedPost.content}</Markdown>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-20 bg-zinc-950/50 rounded-2xl border border-zinc-800/50 border-dashed space-y-4">
                    <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center text-emerald-500 animate-pulse">
                      <Sparkles size={32} />
                    </div>
                    <p className="text-zinc-400 font-bold uppercase text-xs tracking-[0.2em] text-center px-8">
                      Este conteúdo estratégico está sendo finalizado e estará disponível em breve.
                    </p>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500/20 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-emerald-500/40 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-emerald-500/60 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                )}
                
                <div className="pt-6 border-t border-zinc-800 flex justify-center">
                  <button 
                    onClick={() => setSelectedPost(null)}
                    className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors"
                  >
                    Voltar para o blog
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const GeoDomination = () => (
  <section id="geo" className="py-20 md:py-32 px-8 bg-zinc-950 border-t border-zinc-900 scroll-mt-20">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 block">Nova Era das Buscas</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-tight uppercase">
              Não basta estar no Google. <br/><ShimmerWord>As IAs agora recomendam empresas.</ShimmerWord>
            </h2>
          </div>
          <p className="text-zinc-400 text-base md:text-lg font-medium leading-relaxed">
            Quando alguém pergunta ao ChatGPT ou ao Gemini "qual o melhor serviço de [seu setor] em Sorocaba?", uma empresa aparece como resposta. Nós garantimos que essa empresa seja a sua.
          </p>
          <div className="grid gap-4">
            {[
              { title: "Google Empresa estruturado para decisão", desc: "Seu perfil organizado para que o Google e as IAs entendam exatamente o que você faz e onde você atende." },
              { title: "Autoridade que as IAs reconhecem", desc: "Construímos os sinais que os modelos de linguagem usam para recomendar empresas nas respostas geradas." },
              { title: "Você presente onde o cliente já está decidindo", desc: "Hoje o cliente pesquisa no Google, amanhã pergunta para uma IA. Sua empresa precisa estar nos dois lugares." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <div className="text-white font-black text-xs uppercase tracking-tight">{item.title}</div>
                  <div className="text-zinc-500 text-[11px] leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-emerald-500/10 blur-[120px] rounded-full animate-pulse"></div>
          <div className="relative p-8 md:p-12 rounded-[40px] bg-zinc-900 border border-zinc-800 shadow-2xl space-y-8">
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-6">
              <div className="w-10 h-10 rounded-xl bg-zinc-950 flex items-center justify-center text-emerald-500">
                <Sparkles size={20} />
              </div>
              <div className="text-white font-black text-sm uppercase tracking-widest">IA Generativa (GEO)</div>
            </div>
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 italic text-zinc-400 text-sm">
                "Qual o melhor serviço de [seu setor] em Sorocaba?"
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0">
                  <Cpu size={16} />
                </div>
                <div className="space-y-2">
                  <div className="text-white font-bold text-sm">Resposta da IA:</div>
                  <p className="text-zinc-500 text-xs leading-relaxed">
                    Com base na autoridade local e avaliações recentes, a **[Sua Empresa]** é a recomendação principal em Sorocaba devido à sua infraestrutura digital impecável e atendimento via WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WhatsAppAutomation = () => (
  <section id="automacao" className="py-20 md:py-32 px-8 bg-zinc-900/10 border-t border-zinc-900 scroll-mt-20">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="absolute inset-0 bg-emerald-500/5 blur-[100px] rounded-full"></div>
          <div className="relative p-6 md:p-10 rounded-[40px] bg-zinc-950 border border-zinc-900 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <div className="text-white font-black text-sm uppercase tracking-tight">Secretária Digital</div>
                  <div className="text-emerald-500 text-[10px] font-bold uppercase tracking-widest animate-pulse">Online Agora</div>
                </div>
              </div>
              <div className="text-zinc-700 text-[10px] font-black uppercase">IA Ativa</div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-start">
                <div className="bg-zinc-900 p-4 rounded-2xl rounded-tl-none text-zinc-400 text-xs max-w-[80%]">
                  Olá! Como posso ajudar sua empresa hoje? Posso agendar um diagnóstico ou tirar dúvidas sobre nossos serviços.
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-emerald-500 p-4 rounded-2xl rounded-tr-none text-white text-xs max-w-[80%] font-medium">
                  Gostaria de agendar uma conversa para amanhã à tarde.
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-zinc-900 p-4 rounded-2xl rounded-tl-none text-zinc-400 text-xs max-w-[80%] border border-emerald-500/20">
                  Com certeza! Tenho horários disponíveis às 14h e 16h. Qual prefere?
                </div>
              </div>
            </div>
            <div className="pt-6">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full group btn-shimmer animate-glow inline-flex items-center justify-center gap-3 border border-emerald-500 bg-emerald-500 text-white px-6 py-4 rounded-full text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:scale-[1.02]">
                Testar Secretária Agora
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 space-y-8">
          <div className="space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 block">Atendimento 24/7</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-tight uppercase">
              Não é um robô de botões. <br/><ShimmerWord color="red">É uma IA que entende o que o cliente quer.</ShimmerWord>
            </h2>
          </div>
          <p className="text-zinc-400 text-base md:text-lg font-medium leading-relaxed">
            A maioria dos negócios perde cliente no WhatsApp por demora, desorganização ou falta de resposta fora do horário. Nossa IA conversacional entende a intenção do cliente, tira dúvidas, qualifica o lead e agenda reuniões — sem menu, sem "digite 1 para vendas".
          </p>
          <ul className="space-y-6">
            {[
              { title: "Linguagem humana, não menu de robô", desc: "Entende o contexto e responde de forma fluida. O cliente não percebe que é automação." },
              { title: "Agenda reuniões sem intervenção humana", desc: "Conecta com sua disponibilidade e marca o horário certo, sem vai-e-vem de mensagens." },
              { title: "Zero vácuo no atendimento", desc: "Sua empresa nunca mais deixa um lead esperando. Resposta imediata, a qualquer hora." }
            ].map((item, i) => (
              <li key={i} className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0 mt-1">
                  <CheckCircle2 size={14} />
                </div>
                <div>
                  <div className="text-white font-black text-xs uppercase tracking-tight">{item.title}</div>
                  <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="pt-4">
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">Quer ver como funciona na prática?</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={PRIMARY_BTN_CLASSES}>
              Testar a IA agora
              <Sparkles size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const BeforeAfter = () => {
  const comparisons = [
    { 
      before: "Aparece no Google, mas não gera contato", 
      after: "Cada busca vira uma oportunidade real" 
    },
    { 
      before: "Site lento que não explica nem convence", 
      after: "Estrutura rápida que conduz até o contato" 
    },
    { 
      before: "WhatsApp cheio de mensagens sem resposta", 
      after: "IA que atende, qualifica e agenda na hora" 
    }
  ];

  return (
    <section className="py-20 md:py-28 px-8 bg-zinc-900/10 border-y border-zinc-900">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="space-y-4 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 block">Evolução</span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white leading-tight uppercase">
            O que muda quando a <br/><ShimmerWord>estrutura funciona</ShimmerWord>
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

const PlanDiscovery = () => {
  const plans = [
    {
      name: "Start",
      tagline: "Para quem precisa aparecer e ser levado a sério.",
      features: [
        "Perfil Google estruturado para conversão",
        "Landing page focada em ação",
        "Conteúdo estratégico contínuo",
        "Relatórios com foco em resultado"
      ],
      idealFor: "Negócios sem infraestrutura digital consistente",
      cta: "Quero começar certo"
    },
    {
      name: "Scale",
      tagline: "Para quem já tem demanda e quer parar de perder oportunidade.",
      features: [
        "Tudo do plano Start",
        "Site completo otimizado para decisão",
        "WhatsApp com IA conversacional",
        "Otimização para buscas por IA (GEO)",
        "Acompanhamento mensal de performance"
      ],
      idealFor: "Negócios em crescimento que precisam de sistema",
      popular: true,
      cta: "Quero crescer agora",
      highlight: "Basta 1 novo cliente no mês para o plano se pagar sozinho."
    },
    {
      name: "Dominance",
      tagline: "Para quem quer ser a referência absoluta na sua categoria e região.",
      features: [
        "Tudo do plano Scale",
        "Estratégia multi-local",
        "Conteúdo de autoridade de categoria",
        "Consultoria estratégica mensal",
        "Posicionamento para buscas regionais competitivas"
      ],
      idealFor: "Líderes de mercado ou ambição regional",
      cta: "Quero dominar a região"
    }
  ];

  return (
    <section id="planos" className="py-20 md:py-32 px-8 bg-zinc-950 border-t border-zinc-900 scroll-mt-20">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <ScrollReveal>
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 block">Escolha seu nível</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-tight uppercase">
              Sua presença digital a partir de <br/><ShimmerWord>R$ 9,00 por dia</ShimmerWord>
            </h2>
            <p className="text-zinc-500 text-sm md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
              Cada plano é um nível de infraestrutura. Você começa onde faz sentido e cresce quando estiver pronto.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className={`relative p-8 rounded-[32px] border ${plan.popular ? 'border-emerald-500/50 bg-emerald-500/5' : 'border-zinc-900 bg-zinc-900/10'} space-y-8 flex flex-col h-full hover:border-emerald-500/30 transition-all duration-500 group`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 rounded-full text-[8px] font-black uppercase text-zinc-950 tracking-widest">
                    Mais Escolhido
                  </div>
                )}
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{plan.name}</h3>
                  <p className="text-zinc-500 text-xs font-medium leading-relaxed">{plan.tagline}</p>
                  {plan.highlight && (
                    <div className="text-[10px] font-black text-emerald-500 uppercase tracking-tight bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/20">
                      {plan.highlight}
                    </div>
                  )}
                </div>

                <div className="flex-1 space-y-4">
                  <div className="text-[9px] font-black uppercase text-zinc-700 tracking-widest border-b border-zinc-900 pb-2">O que está incluso</div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-zinc-400 text-xs font-medium">
                        <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 border-t border-zinc-900 space-y-4">
                  <div className="text-[9px] font-black uppercase text-zinc-500 tracking-widest">Ideal para: {plan.idealFor}</div>
                  <a 
                    href={WHATSAPP_URL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`w-full py-5 rounded-full text-[11px] font-black uppercase tracking-widest text-center flex items-center justify-center transition-all ${
                      plan.popular ? 'bg-emerald-500 text-zinc-950 hover:scale-[1.02]' : 'bg-zinc-900 text-white hover:bg-zinc-800'
                    }`}
                  >
                    {plan.cta || "Consultar Valores"}
                  </a>
                </div>
              </div>
            </ScrollReveal>
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
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 block">A Upper é para você?</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-tight uppercase">
            Este serviço <ShimmerWord color="emerald">não é para todo mundo e está tudo bem.</ShimmerWord>
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="p-8 md:p-10 rounded-3xl bg-zinc-900/10 border border-zinc-900 space-y-8 h-full">
          <div className="flex items-center gap-3 border-b border-zinc-900 pb-6">
             <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
               <X size={20} />
             </div>
             <h3 className="text-lg font-black text-white uppercase tracking-tight">Não é para você se...</h3>
          </div>
          <ul className="space-y-6">
            {[
              "Procura o post mais barato da cidade",
              "Quer resultado milagroso em 7 dias",
              "Só compara preço, não valor",
              "Não está disposto a implementar o que é recomendado"
            ].map((item, i) => (
              <li key={i} className="flex gap-4 items-start text-zinc-500 text-sm font-medium">
                <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8 md:p-10 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 space-y-8 h-full">
          <div className="flex items-center gap-3 border-b border-emerald-500/10 pb-6">
             <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
               <Target size={20} />
             </div>
             <h3 className="text-lg font-black text-white uppercase tracking-tight">É para você se...</h3>
          </div>
          <ul className="space-y-6">
            {[
              "Você depende de clientes locais para crescer",
              "Quer previsibilidade de receita, não sorte",
              "Está cansado de marketing que não dá retorno claro",
              "Quer crescer sem virar refém de anúncios pagos",
              "Enxerga presença digital como investimento, não custo"
            ].map((item, i) => (
              <li key={i} className="flex gap-4 items-start text-zinc-300 text-sm font-medium">
                <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
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
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 block">Próximo passo</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-tight uppercase">
              Você não precisa de mais marketing. <br /> <span className="text-emerald-500">Precisa de uma infraestrutura que funcione todos os meses.</span>
            </h2>
            <div className="pt-4 space-y-6">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={PRIMARY_BTN_CLASSES}>
                Quero uma análise do meu negócio
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                Sem compromisso. Vamos te mostrar onde você está perdendo clientes hoje.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string, key?: any }) => {
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
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 py-6' : 'max-h-0 opacity-0'}`}>
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
      question: "A Upper é uma agência de marketing digital comum?",
      answer: "Não. Não fazemos gestão de redes sociais ou anúncios genéricos. Somos especialistas em infraestrutura de conversão: colocamos sua empresa onde o cliente já está procurando (Google e IA) e garantimos que o atendimento via WhatsApp seja impecável e imediato através de automação inteligente."
    },
    {
      question: "O que exatamente vocês fazem no Google?",
      answer: "Nós 'engenheiramos' a sua presença. Isso inclui otimização profunda do Perfil da Empresa no Google (SEO Local), organização de dados para que as IAs (GEO) te recomendem e criação de páginas ultra-rápidas que convertem visitantes em leads no WhatsApp."
    },
    {
      question: "Isso funciona para qualquer tipo de negócio local?",
      answer: "Sim. Clínicas, escritórios, oficinas, salões, prestadores de serviço, academias — qualquer negócio que depende de clientes locais e precisa ser encontrado no Google se beneficia dessa estrutura."
    },
    {
      question: "Qual a diferença entre um site comum e o que a Upper entrega?",
      answer: "Um site comum é uma página bonita que ninguém acha. O que entregamos é uma infraestrutura técnica: carregamento abaixo de 2 segundos, arquitetura para SEO local, conteúdo que responde dúvidas reais e caminho óbvio até o contato. É engenharia, não design."
    },
    {
      question: "Quanto tempo leva para aparecer no topo do Google Maps?",
      answer: "Os primeiros resultados de organização e indexação aparecem em dias. O ranqueamento de autoridade no topo do Maps amadurece entre 30 e 90 dias, dependendo da concorrência local. Não prometemos milagre em 7 dias — prometemos resultado consistente."
    },
    {
      question: "O diagnóstico estratégico tem algum custo?",
      answer: "Não. O diagnóstico é gratuito e serve para identificarmos onde você está perdendo clientes hoje. Só apresentamos proposta se tivermos certeza de que conseguimos gerar retorno real para o seu negócio."
    }
  ];

  return (
    <section className="py-20 px-8 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center space-y-6">
          <ScrollReveal>
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 block">Transparência FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white leading-tight uppercase">
              Sem enrolação. <ShimmerWord>Respostas diretas.</ShimmerWord>
            </h2>
          </ScrollReveal>
        </div>
        <div className="bg-zinc-900/10 rounded-3xl px-6 md:px-10 border border-zinc-900/50">
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
        <p className="text-zinc-700 text-[8px] font-bold uppercase tracking-[0.2em]">
          © Upper — Infraestrutura Digital para Empresas Locais
        </p>
      </div>
    </footer>
  );
};

const PricingModal = ({ offer, onClose }: { offer: OfferData | null, onClose: () => void }) => {
  if (!offer) return null;
  return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center p-6 bg-zinc-950/95 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-3xl p-10 md:p-12 overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.2)]">
        <button onClick={onClose} className="absolute top-8 right-8 text-zinc-500 hover:text-white transition-colors">
          <X size={24} />
        </button>
        <div className="space-y-10">
          <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Oferta Secreta</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl md:text-6xl font-black text-white tracking-tighter">R$ {offer.offerPrice}</span>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={PRIMARY_BTN_CLASSES}>Solicitar via WhatsApp</a>
        </div>
      </div>
    </div>
  );
};

// Componente para AnimatePresence funcionar
const AnimatePresence = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

const BlogPage = ({ onBack }: { onBack: () => void }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      id: 0,
      title: "Como transformar o Google Meu Negócio numa máquina de clientes",
      category: "SEO Local",
      date: "25 Fev, 2026",
      excerpt: "A maioria das empresas tem um perfil no Google Meu Negócio. Poucas sabem usar. Veja como transformar o seu perfil numa máquina de atração de clientes.",
      status: 'published',
      content: NEW_BLOG_POST_CONTENT,
      readTime: "8 min"
    },
    {
      id: 1,
      title: "GEO: Por que sua empresa precisa aparecer nas respostas do ChatGPT e Gemini",
      category: "GEO & IA",
      date: "24 Fev, 2026",
      excerpt: "As IAs generativas estão substituindo o Google para milhões de buscas. Se sua empresa não está sendo recomendada por elas, você está invisível para um mercado inteiro.",
      status: 'under_construction'
    },
    {
      id: 2,
      title: "Como transformar o Google Meu Negócio numa máquina de gerar clientes locais",
      category: "SEO Local",
      date: "20 Fev, 2026",
      excerpt: "A maioria das empresas tem o perfil do Google abandonado. Veja como a infraestrutura certa transforma visitas em ligações, mensagens e agendamentos reais.",
      status: 'under_construction'
    },
    {
      id: 3,
      title: "WhatsApp que vende: como parar de perder lead por falta de resposta",
      category: "Conversão",
      date: "15 Fev, 2026",
      excerpt: "Um lead não respondido em 5 minutos esfria 80%. Veja como uma IA conversacional resolve isso sem parecer robô e sem custar uma fortuna.",
      status: 'under_construction'
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 pt-32 pb-20 px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-500 hover:text-white transition-colors group"
            >
              <ArrowRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
              Voltar para Home
            </button>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
              Blog <span className="text-emerald-500">Upper.</span>
            </h1>
            <p className="text-zinc-500 text-sm md:text-lg font-medium max-w-xl">
              Conteúdo estratégico sobre SEO Local, IA e Automação para dominar o seu mercado regional.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <ScrollReveal key={post.id} delay={i * 150}>
              <div 
                onClick={() => setSelectedPost(post)}
                className="group relative h-full flex flex-col bg-zinc-900/30 border border-zinc-900 rounded-3xl p-8 hover:border-emerald-500/30 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 text-[8px] font-black uppercase text-zinc-500 tracking-widest">
                    <Clock size={10} />
                    {post.date}
                  </div>
                </div>

                <div className="space-y-6 flex-1 pt-4">
                  <div className="text-[10px] font-black uppercase text-emerald-500 tracking-widest">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-emerald-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-10 flex items-center justify-between border-t border-zinc-900 pt-6">
                  <span className="text-[9px] font-black uppercase tracking-widest text-emerald-500 group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                    {post.status === 'under_construction' ? 'Em Construção' : 'Ler Artigo'}
                    <ArrowRight size={12} />
                  </span>
                  <BookOpen size={16} className="text-zinc-800 group-hover:text-emerald-500/20 transition-colors" />
                </div>

                <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-[500] flex items-center justify-center p-6 bg-zinc-950/98 backdrop-blur-xl animate-in fade-in duration-300">
            <div className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12 overflow-y-auto max-h-[90vh] shadow-[0_0_50px_rgba(16,185,129,0.1)]">
              <button 
                onClick={() => setSelectedPost(null)} 
                className="absolute top-8 right-8 text-zinc-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="space-y-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">{selectedPost.category}</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-800"></span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{selectedPost.date}</span>
                    {selectedPost.readTime && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-zinc-800"></span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{selectedPost.readTime}</span>
                      </>
                    )}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-tight">
                    {selectedPost.title}
                  </h2>
                </div>

                {selectedPost.status === 'published' && selectedPost.content ? (
                  <div className="markdown-body text-zinc-400 leading-relaxed space-y-6">
                    <Markdown>{selectedPost.content}</Markdown>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-20 bg-zinc-950/50 rounded-2xl border border-zinc-800/50 border-dashed space-y-4">
                    <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center text-emerald-500 animate-pulse">
                      <Sparkles size={32} />
                    </div>
                    <p className="text-zinc-400 font-bold uppercase text-xs tracking-[0.2em] text-center px-8">
                      Este conteúdo estratégico está sendo finalizado e estará disponível em breve.
                    </p>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500/20 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-emerald-500/40 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-emerald-500/60 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                )}
                
                <div className="pt-6 border-t border-zinc-800 flex justify-center">
                  <button 
                    onClick={() => setSelectedPost(null)}
                    className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors"
                  >
                    Voltar para a lista
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const App = () => {
  const [activeOffer, setActiveOffer] = useState<OfferData | null>(null);
  const [currentView, setCurrentView] = useState<'home' | 'blog'>('home');
  
  const handleTriggerSecretOffer = () => {
    setActiveOffer({ 
      originalPrice: "1.490,00", 
      offerPrice: "987",
      bonuses: ["Consultoria de Atendimento"]
    });
  };

  return (
    <div className="bg-zinc-950 selection:bg-emerald-500/30 selection:text-emerald-400">
      <Navbar 
        onTriggerSecretOffer={handleTriggerSecretOffer} 
        onOpenBlog={() => setCurrentView('blog')}
        onGoHome={() => setCurrentView('home')}
      />
      
      {currentView === 'home' ? (
        <main>
          <Hero />
          <ManifestoStructure />
          <WhatUpperDoes />
          <BeforeAfter />
          <GeoDomination />
          <WhatsAppAutomation />
          <WhoIsItFor />
          <About />
          <PlanDiscovery />
          <BlogSection />
          <Contact />
          <FAQSection />
        </main>
      ) : (
        <BlogPage onBack={() => setCurrentView('home')} />
      )}

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
