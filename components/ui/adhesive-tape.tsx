"use client";

import React from "react";

interface AdhesiveTapeProps {
  className?: string;
  color?: "yellow" | "white" | "blue";
  rotation?: number;
}

export const AdhesiveTape = ({ className = "", color = "yellow", rotation = -2 }: AdhesiveTapeProps) => {
  const bgColor = {
    yellow: "rgba(246, 238, 199, 0.6)",
    white: "rgba(255, 255, 255, 0.4)",
    blue: "rgba(168, 216, 234, 0.5)",
  }[color];

  return (
    <div 
      className={`absolute left-1/2 -translate-x-1/2 z-20 pointer-events-none ${className}`}
      style={{
        width: "120px",
        height: "35px",
        backgroundColor: bgColor,
        backdropFilter: "blur(1px)",
        transform: `translateX(-50%) rotate(${rotation}deg)`,
        maskImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="25" viewBox="0 0 100 25"><path d="M0 2 L5 0 L25 1 L50 0 L75 1 L95 0 L100 4 L98 22 L93 25 L75 24 L50 25 L25 24 L5 25 L0 22 Z" fill="black"/></svg>')`,
        maskSize: "100% 100%",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
      }}
    />
  );
};
