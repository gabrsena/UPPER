

import React from "react";

export const ShimmerWord = ({ children, color = "emerald", isLCP = false }: { children?: React.ReactNode, color?: string, isLCP?: boolean }) => {
  const colorClasses = color === "emerald"
    ? "from-emerald-400 via-emerald-500 to-emerald-600"
    : color === "red"
      ? "from-red-400 via-red-500 to-red-600"
      : "from-zinc-400 via-zinc-200 to-zinc-400";

  return (
    <span className="relative inline-flex items-center">
      <span className={`bg-gradient-to-r ${colorClasses} bg-[length:200%_auto] bg-clip-text text-transparent font-black leading-tight py-1`}>
        {children}
      </span>
    </span>
  );
};
