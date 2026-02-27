
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/blog-data';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export const Navbar = ({ onTriggerSecretOffer }: { onTriggerSecretOffer?: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const clickTimeout = useRef<number | null>(null);
  const pathname = usePathname();
  const router = useRouter();

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
    if (pathname !== '/') {
      router.push('/');
      return;
    }

    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (clickTimeout.current) window.clearTimeout(clickTimeout.current);
    clickTimeout.current = window.setTimeout(() => {
      if (newCount === 2 && onTriggerSecretOffer) onTriggerSecretOffer();
      else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      setClickCount(0);
    }, 400);
  };

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (id === 'blog') {
      router.push('/blog');
      return;
    }

    if (pathname !== '/') {
      router.push(`/#${id}`);
      return;
    }

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
    { id: 'inicio', label: 'Home' },
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
