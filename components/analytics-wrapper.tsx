"use client";

import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from "@vercel/analytics/react";

export function AnalyticsWrapper() {
    return (
        <>
            <GoogleAnalytics gaId="G-RY23JDPS0Z" />
            <Analytics />
        </>
    );
}
