
"use client";

import React from "react";

export const ShimmerWord = ({ children, color = "emerald" }: { children?: React.ReactNode, color?: string }) => {
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
