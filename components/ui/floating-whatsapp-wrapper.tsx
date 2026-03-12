"use client";

import dynamic from "next/dynamic";

const WhatsApp = dynamic(() => import("@/components/ui/floating-whatsapp").then(mod => mod.FloatingWhatsApp), { ssr: false });

export function FloatingWhatsAppWrapper() {
  return <WhatsApp />;
}
