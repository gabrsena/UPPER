"use client"

import React from "react"
import { Typewriter } from "@/components/ui/typewriter"
import { ShimmerWord } from "@/components/ui/shimmer-word"

export default function HeroTypewriter({ words, isLCP = false }: { words: string[], isLCP?: boolean }) {
    return (
        <span className="text-emerald-500 font-marker italic text-[0.75em] md:text-[0.8em] whitespace-nowrap">
            <Typewriter
                words={words}
                speed={80}
                delayBetweenWords={2500}
                cursor={true}
                cursorChar="|"
            />
        </span>
    )
}
