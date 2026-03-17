"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import { usePathname, useRouter } from "next/navigation";
import { TargetLogo } from "@/components/ui/target-logo";

export const Navbar = ({ onTriggerSecretOffer, customLinks }: { onTriggerSecretOffer?: () => void; customLinks?: { id: string; label: string }[] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const clickTimeout = useRef<number | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname !== "/") {
      router.push("/");
      return;
    }

    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (clickTimeout.current) window.clearTimeout(clickTimeout.current);
    clickTimeout.current = window.setTimeout(() => {
      if (newCount === 2 && onTriggerSecretOffer) onTriggerSecretOffer();
      else window.scrollTo({ top: 0, behavior: "smooth" });
      setClickCount(0);
    }, 400);
  };

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (id === "blog") {
      router.push("/blog");
      return;
    }
    if (id === "cidades") {
      router.push("/cidades");
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
      return;
    }

    if (pathname !== "/") router.push(`/#${id}`);
  };

  const defaultNavLinks = [
    { id: "inicio", label: "Home" },
    { id: "servicos", label: "Serviços" },
    { id: "blog", label: "Blog" },
    { id: "cidades", label: "Cidades" },
  ];

  const navLinks = customLinks || defaultNavLinks;

  return (
    <>
      <nav
        className={`navbar-fixed w-full fixed top-0 left-0 z-[500] transition-all duration-[0.35s] ease-in-out py-4 md:py-6 ${
          isScrolled 
            ? "bg-[#efe5d5]/80 backdrop-blur-md shadow-[0_4px_20px_rgba(45,45,45,0.08)] border-b border-[#2d2d2d]/5" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-10 flex items-center justify-between relative h-10">
          {/* Logo - Shows after scroll with delay */}
          <div 
            className={`transition-all duration-[0.35s] ease-in-out transform ${
              isScrolled 
                ? "opacity-100 scale-100 delay-[0.3s]" 
                : "md:opacity-0 md:scale-[0.6] md:pointer-events-none opacity-100 scale-100"
            }`}
          >
            <button onClick={handleLogoClick} className="active:scale-95 transition-transform flex items-center">
              <TargetLogo size={42} />
            </button>
          </div>

          {/* Nav Links - Center to Right animation */}
          <div 
            className={`hidden md:flex items-center gap-10 text-[10px] font-sketch font-black uppercase tracking-[0.25em] text-[#2d2d2d]/65 absolute left-1/2 -translate-x-1/2 transition-all duration-[0.35s] ease-in-out ${
              isScrolled ? "md:left-auto md:right-10 md:translate-x-0" : ""
            }`}
          >
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} onClick={(e) => scrollToSection(e, link.id)} className="hover:text-[#1a1a1a] transition-colors relative group">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#2d2d2d] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-[#2d2d2d] p-2 transition-transform active:scale-90 relative z-[1000] ml-auto" 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label={isMenuOpen ? "Fechar Menu" : "Abrir Menu"}
          >
            {isMenuOpen ? <X size={28} className="text-[#2d2d2d]" /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[600] transition-all duration-500 ease-in-out ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className={`absolute inset-0 bg-[#efe5d5]/98 backdrop-blur-2xl transition-transform duration-700 ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`} />

        <div className="relative h-full flex flex-col items-center justify-center p-8">
          <div className="flex flex-col gap-6 text-center w-full max-w-xs">
            {navLinks.map((link, index) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`text-3xl font-marker text-[#1a1a1a] uppercase tracking-tighter transition-all duration-500 transform ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="hover:text-[#2d2d2d]/70 transition-colors inline-block">{link.label}</span>
              </a>
            ))}

            <div className={`mt-12 transition-all duration-500 transform ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} style={{ transitionDelay: "400ms" }}>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-[#2d2d2d] text-white font-sketch font-black uppercase text-[10px] tracking-[0.2em] py-5 rounded-sm sketch-border btn-retro">
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
