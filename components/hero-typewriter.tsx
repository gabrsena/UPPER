"use client"

import React from "react"
import { Typewriter } from "@/components/ui/typewriter"
import { ShimmerWord } from "@/components/ui/shimmer-word"

export default function HeroTypewriter({ words, isLCP = false }: { words: string[], isLCP?: boolean }) {
    return (
        <ShimmerWord isLCP={isLCP}>
            <Typewriter
                words={words}
                speed={80}
                delayBetweenWords={2500}
                cursor={true}
                cursorChar="|"
            />
        </ShimmerWord>
    )
}
