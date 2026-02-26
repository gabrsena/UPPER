
import React from "react";

export const Footer = () => {
  return (
    <footer className="py-16 px-8 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h2 className="text-xl font-black uppercase tracking-tighter text-white">
            Upper<span className="text-emerald-500">.</span>
          </h2>
          <p className="text-zinc-600 text-[9px] font-black uppercase tracking-[0.2em] text-center md:text-left">
            © Upper — Infraestrutura Digital para Empresas Locais
          </p>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="text-right">
            <div className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-1">Status</div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[10px] font-black text-white uppercase tracking-widest">Systems Online</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
