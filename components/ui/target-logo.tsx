"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";

interface Dart {
  id: number;
  offsetX: number;
  offsetY: number;
  rotation: number;
  startX: number;
  startY: number;
}

export const TargetLogo = ({ size = 100, className = "", interactive = false }: { size?: number; className?: string; interactive?: boolean }) => {
  const prefersReducedMotion = useReducedMotion();
  const [darts, setDarts] = useState<Dart[]>([]);
  const [isBlinking, setIsBlinking] = useState(false);
  const [showText, setShowText] = useState(false);
  const hideTextTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (hideTextTimeoutRef.current) clearTimeout(hideTextTimeoutRef.current);
    };
  }, []);

  const addDart = useCallback(() => {
    if (!interactive) return;
    
    const newDart: Dart = {
      id: Date.now(),
      offsetX: (Math.random() - 0.5) * 30, // ±15px
      offsetY: (Math.random() - 0.5) * 30, // ±15px
      rotation: (Math.random() - 0.5) * 10, // ±5deg wobble
      startX: 150 + Math.random() * 50,
      startY: -150 - Math.random() * 50,
    };

    setDarts((prev) => [...prev, newDart]);

    if (darts.length >= 2) { // 3rd dart
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 600);
    }
    
    setShowText(true);
    if (hideTextTimeoutRef.current) clearTimeout(hideTextTimeoutRef.current);
    hideTextTimeoutRef.current = setTimeout(() => {
      setShowText(false);
    }, 2000);

  }, [interactive, darts.length]);

  return (
    <div 
      className={`relative flex items-center justify-center ${interactive ? 'cursor-crosshair' : 'pointer-events-none'} ${className}`} 
      style={{ width: size, height: size }}
      onClick={addDart}
    >
      <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible drop-shadow-md">
        <defs>
          <filter id="sketch-blur-logo" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>

        <g filter="url(#sketch-blur-logo)">
          {/* Ring 1 (Outer - R=80) */}
          <motion.path 
            d="M 100,20 C 145,15 185,55 180,100 C 175,145 135,185 100,180 C 60,175 15,140 20,100 C 25,55 55,25 100,20 Z"
            stroke="#2d2d2d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            initial={prefersReducedMotion ? { pathLength: 1, opacity: 1, fill: "#fdfaf3" } : { pathLength: 0, opacity: 0, fill: "transparent" }}
            animate={prefersReducedMotion ? {} : { pathLength: 1, opacity: 1, fill: "#fdfaf3" }}
            transition={{ 
              pathLength: { delay: 0, duration: 1.5, ease: "easeOut" }, 
              opacity: { delay: 0, duration: 0.1 },
              fill: { delay: 0.8, duration: 0.5 }
            }}
          />

          {/* Ring 2 (R=60) */}
          <motion.path 
            d="M 100,40 C 135,35 165,65 160,100 C 155,135 125,165 100,160 C 70,155 35,125 40,100 C 45,65 65,45 100,40 Z"
            stroke="#2d2d2d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            initial={prefersReducedMotion ? { pathLength: 1, opacity: 1, fill: "transparent" } : { pathLength: 0, opacity: 0, fill: "transparent" }}
            animate={prefersReducedMotion ? {} : { pathLength: 1, opacity: 1 }}
            transition={{ 
              pathLength: { delay: 0.2, duration: 1.5, ease: "easeOut" }, 
              opacity: { delay: 0.2, duration: 0.1 }
            }}
          />

          {/* Ring 3 (R=40) */}
          <motion.path 
            d="M 100,60 C 125,55 145,75 140,100 C 135,125 115,145 100,140 C 80,135 55,115 60,100 C 65,75 80,65 100,60 Z"
            stroke="#2d2d2d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            initial={prefersReducedMotion ? { pathLength: 1, opacity: 1, fill: "transparent" } : { pathLength: 0, opacity: 0, fill: "transparent" }}
            animate={prefersReducedMotion ? {} : { pathLength: 1, opacity: 1 }}
            transition={{ 
              pathLength: { delay: 0.4, duration: 1.5, ease: "easeOut" }, 
              opacity: { delay: 0.4, duration: 0.1 }
            }}
          />

          {/* Bullseye (R=20) */}
          <motion.path 
            d="M 100,80 C 115,75 125,85 120,100 C 115,115 105,125 100,120 C 85,115 75,105 80,100 C 85,85 90,85 100,80 Z"
            stroke="#2d2d2d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            style={{ transformOrigin: "100px 100px" }}
            initial={prefersReducedMotion ? { pathLength: 1, opacity: 1, fill: "#00C48C", scale: 1 } : { pathLength: 0, opacity: 0, fill: "transparent", scale: 1 }}
            animate={{ 
              pathLength: 1, 
              opacity: 1, 
              fill: isBlinking ? ["#00C48C", "#ff4d4d", "#00C48C"] : "#00C48C", 
              scale: isBlinking ? [1, 1.3, 1] : 1 
            }}
            transition={{ 
              pathLength: { delay: 0.6, duration: 1.0, ease: "easeOut" }, 
              opacity: { delay: 0.6, duration: 0.1 },
              fill: isBlinking ? { duration: 0.4, repeat: 1 } : { delay: 1.4, duration: 0.3 },
              scale: isBlinking ? { duration: 0.4, repeat: 1 } : { delay: 1.4, duration: 0.4 }
            }}
          />
        </g>

        {/* Action lines for impact (burst) */}
        <motion.g
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.5 }}
          animate={prefersReducedMotion ? {} : { opacity: [0, 1, 0], scale: [0.5, 1.2, 1.4] }}
          transition={{ delay: 1.4, duration: 0.4 }}
          style={{ transformOrigin: "100px 100px" }}
        >
          <line x1="100" y1="65" x2="100" y2="55" stroke="#2d2d2d" strokeWidth="2" strokeLinecap="round" filter="url(#sketch-blur-logo)" />
          <line x1="100" y1="135" x2="100" y2="145" stroke="#2d2d2d" strokeWidth="2" strokeLinecap="round" filter="url(#sketch-blur-logo)" />
          <line x1="65" y1="100" x2="55" y2="100" stroke="#2d2d2d" strokeWidth="2" strokeLinecap="round" filter="url(#sketch-blur-logo)" />
        </motion.g>

        {/* Text feedback when many darts: "Chega! 🎯" */}
        <AnimatePresence>
          {showText && darts.length >= 6 && (
            <motion.text
              x="100"
              y="180"
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={
                darts.length >= 15 
                  ? { opacity: 1, scale: 4, rotate: [-15, -5, 0] }
                  : { opacity: 1, scale: 1, rotate: [-10, 5, -2, 0] }
              }
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
              className={`font-hand uppercase fill-[#ef4444] pen-text select-none ${darts.length >= 15 ? 'text-[40px] font-black tracking-widest' : 'text-[24px]'}`}
              style={{ textAnchor: "middle", filter: "url(#pen-filter)" }}
            >
              {darts.length >= 15 ? "CHEGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" : (darts.length >= 10 ? "TÁ BOM JÁ!" : "CHEGA! 🎯")}
            </motion.text>
          )}
        </AnimatePresence>

        {/* INITIAL DART (from Hero animation) */}
        <motion.g
          initial={prefersReducedMotion ? { opacity: 1 } : { x: 150, y: -150, opacity: 0 }}
          animate={prefersReducedMotion ? {} : { 
            x: 0, 
            y: 0, 
            opacity: 1, 
            rotate: [0, 0, -6, 4, -2, 0] 
          }}
          transition={{ 
            x: { delay: 1.2, type: "spring", stiffness: 450, damping: 25 },
            y: { delay: 1.2, type: "spring", stiffness: 450, damping: 25 },
            opacity: { delay: 1.2, duration: 0.1 },
            rotate: { delay: 1.4, duration: 0.5 } // wobble after hit
          }}
          style={{ transformOrigin: "102px 98px", filter: "url(#sketch-blur-logo)" }}
        >
          <path d="M 140,60 L 135,50 L 150,35 L 155,45 Z" fill="#fdfaf3" stroke="#2d2d2d" strokeWidth="2" strokeLinejoin="round" />
          <path d="M 140,60 L 150,65 L 165,50 L 155,45 Z" fill="#fdfaf3" stroke="#2d2d2d" strokeWidth="2" strokeLinejoin="round" />
          <path d="M 102,98 Q 130,72 160,40" fill="none" stroke="#2d2d2d" strokeWidth="2.5" strokeLinecap="round" />
          <g opacity="0.4" stroke="#2d2d2d" strokeWidth="1.5" strokeLinecap="round">
            <line x1="124" y1="74" x2="128" y2="78" />
            <line x1="128" y1="70" x2="132" y2="74" />
            <line x1="132" y1="66" x2="136" y2="70" />
          </g>
        </motion.g>

        {/* ACCUMULATED DARTS */}
        <AnimatePresence>
          {darts.map((dart) => (
            <motion.g
              key={dart.id}
              initial={{ x: dart.startX, y: dart.startY, opacity: 0 }}
              animate={{ 
                x: dart.offsetX, 
                y: dart.offsetY, 
                opacity: 1, 
                rotate: [dart.rotation, dart.rotation - 6, dart.rotation + 4, dart.rotation] 
              }}
              transition={{ 
                x: { type: "spring", stiffness: 500, damping: 30 },
                y: { type: "spring", stiffness: 500, damping: 30 },
                opacity: { duration: 0.05 },
                rotate: { delay: 0.2, duration: 0.4 } 
              }}
              style={{ transformOrigin: "102px 98px", filter: "url(#sketch-blur-logo)" }}
            >
              <path d="M 140,60 L 135,50 L 150,35 L 155,45 Z" fill="#fdfaf3" stroke="#2d2d2d" strokeWidth="2" strokeLinejoin="round" />
              <path d="M 140,60 L 150,65 L 165,50 L 155,45 Z" fill="#fdfaf3" stroke="#2d2d2d" strokeWidth="2" strokeLinejoin="round" />
              <path d="M 102,98 Q 130,72 160,40" fill="none" stroke="#2d2d2d" strokeWidth="2.5" strokeLinecap="round" />
              <g opacity="0.3" stroke="#2d2d2d" strokeWidth="1.5" strokeLinecap="round">
                <line x1="124" y1="74" x2="128" y2="78" />
                <line x1="128" y1="70" x2="132" y2="74" />
                <line x1="132" y1="66" x2="136" y2="70" />
              </g>
            </motion.g>
          ))}
        </AnimatePresence>
      </svg>
    </div>
  );
};
