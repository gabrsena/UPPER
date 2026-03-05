"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { PricingModal } from "@/components/ui/pricing-modal";
import { OfferData } from "@/lib/types";

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
        <div className="bg-zinc-950">
            <Navbar onTriggerSecretOffer={handleTriggerSecretOffer} />
            {children}
            <PricingModal offer={activeOffer} onClose={() => setActiveOffer(null)} />
        </div>
    );
}
