"use client";

import React, { useState, useEffect } from "react";
import { Phone, Smartphone, Radio } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const RETRO_ICONS = [
  { Icon: Smartphone, label: "Celular retrô" },
  { Icon: Phone, label: "Telefone retrô" },
  { Icon: Radio, label: "Bip retrô" },
];

export const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [iconIndex, setIconIndex] = useState(0);
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(!entry.isIntersecting);
        },
        { threshold: 0.1 }
      );

      const heroElement = document.querySelector("[data-hero]");
      if (heroElement) {
        observer.observe(heroElement);
      } else {
        setIsVisible(true);
      }
    }, 3000);

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let shakeTimeout: any = null;

    const interval = window.setInterval(() => {
      setIconIndex((prev) => (prev + 1) % RETRO_ICONS.length);
      setIsShaking(true);

      if (shakeTimeout) window.clearTimeout(shakeTimeout);
      shakeTimeout = window.setTimeout(() => setIsShaking(false), 260);
    }, 2400);

    return () => {
      window.clearInterval(interval);
      if (shakeTimeout) window.clearTimeout(shakeTimeout);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const { Icon, label } = RETRO_ICONS[iconIndex];

  return (
    <>
      <style jsx>{`
        @keyframes retroShake {
          0% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(-12deg) scale(1.1); }
          50% { transform: rotate(10deg) scale(1.1); }
          75% { transform: rotate(-8deg) scale(1.1); }
          100% { transform: rotate(0deg) scale(1); }
        }
        @keyframes sonarPing {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes floatBob {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .retro-shake {
          animation: retroShake 260ms ease-in-out;
        }
        .sonar-layer {
          position: absolute;
          inset: -4px;
          background: #1DBA8A;
          border-radius: 9999px;
          z-index: -1;
          pointer-events: none;
          animation: sonarPing 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .sonar-layer-2 {
          animation-delay: 1s;
        }
        .floating-container {
          animation: floatBob 3s ease-in-out infinite;
        }
      `}</style>

      <div className={`fixed bottom-8 right-8 z-[400] floating-container ${isShaking ? "retro-shake" : ""}`}>
        {/* Sonar Pings */}
        <div className="sonar-layer" />
        <div className="sonar-layer sonar-layer-2" />
        
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-16 h-16 bg-[#d4f1f4] hover:bg-[#1DBA8A] text-[#1a1a1a] hover:text-white rounded-full border-2 border-[#2d2d2d] flex items-center justify-center shadow-[6px_6px_0px_#2d2d2d66] hover:shadow-[8px_8px_20px_rgba(29,186,138,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 group sketch-border overflow-hidden"
          aria-label="Falar no WhatsApp"
        >
          {/* Subtle glossy overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
          
          <Icon size={29} className="relative z-10" />

          <span className="absolute right-full mr-4 px-4 py-2 bg-white text-[#2d2d2d] text-[10px] font-sketch font-black uppercase tracking-[0.2em] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border-2 border-[#2d2d2d] sketch-border shadow-xl">
            Diagnóstico Gratuito · {label}
          </span>
        </a>
      </div>
    </>
  );
};
