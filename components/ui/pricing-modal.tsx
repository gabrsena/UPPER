
"use client";

import React from "react";
import { X } from "lucide-react";
import { OfferData } from "@/lib/types";
import { WHATSAPP_URL } from "@/lib/blog-data";

export const PricingModal = ({ offer, onClose }: { offer: OfferData | null, onClose: () => void }) => {
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
          <a 
            href={WHATSAPP_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group btn-shimmer inline-flex items-center justify-center gap-3 bg-emerald-500 text-zinc-950 px-8 py-4 rounded-full text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ease-in-out hover:bg-emerald-400 hover:scale-105 active:scale-95 w-full"
          >
            Solicitar via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};
