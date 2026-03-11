"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/navbar";
import { OfferData } from "@/lib/types";

const FloatingWhatsApp = dynamic(() => import("@/components/ui/floating-whatsapp").then(mod => mod.FloatingWhatsApp), { ssr: false });
const AnalyticsWrapper = dynamic(() => import("@/components/analytics-wrapper").then(mod => mod.AnalyticsWrapper), { ssr: false });
const PricingModal = dynamic(() => import("@/components/ui/pricing-modal").then(mod => mod.PricingModal), { ssr: false });

export function HomeClient({ children }: { children: React.ReactNode }) {
    const [activeOffer, setActiveOffer] = useState<OfferData | null>(null);

    const handleTriggerSecretOffer = () => {
        setActiveOffer({
            originalPrice: "1.490,00",
            offerPrice: "987",
            bonuses: ["Consultoria de Atendimento"]
        });
    };

    return (
        <div className="bg-[#fdfaf3]">
            <Navbar onTriggerSecretOffer={handleTriggerSecretOffer} />
            {children}
            <PricingModal offer={activeOffer} onClose={() => setActiveOffer(null)} />
            <FloatingWhatsApp />
            <AnalyticsWrapper />
        </div>
    );
}
