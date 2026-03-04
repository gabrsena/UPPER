"use client"

import React from "react"
import { Typewriter } from "@/components/ui/typewriter"
import { ShimmerWord } from "@/components/ui/shimmer-word"

export default function HeroTypewriter({ words }: { words: string[] }) {
    return (
        <ShimmerWord>
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
