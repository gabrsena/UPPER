"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from "@vercel/analytics/react";

export function AnalyticsWrapper() {
    const [loadAnalytics, setLoadAnalytics] = useState(false);

    useEffect(() => {
        const handleInteraction = () => {
            setLoadAnalytics(true);
            // Remove listeners after first interaction
            window.removeEventListener('scroll', handleInteraction);
            window.removeEventListener('mousemove', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
        };

        window.addEventListener('scroll', handleInteraction, { passive: true });
        window.addEventListener('mousemove', handleInteraction, { passive: true });
        window.addEventListener('touchstart', handleInteraction, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleInteraction);
            window.removeEventListener('mousemove', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
        };
    }, []);

    return (
        <>
            {loadAnalytics && <GoogleAnalytics gaId="G-RY23JDPS0Z" />}
            <Analytics />
        </>
    );
}
