"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function ClientAvatars() {
    const [seeds, setSeeds] = useState<number[]>([1, 2, 3, 4]);

    useEffect(() => {
        // Generate random seeds on mount (client-side) to refresh on every load
        setSeeds(Array.from({ length: 4 }, () => Math.floor(Math.random() * 500)));
    }, []);

    return (
        <div className="flex -space-x-3">
            {seeds.map((seed, i) => (
                <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-zinc-950 bg-zinc-800 flex items-center justify-center overflow-hidden relative shadow-lg transition-all duration-500"
                >
                    <Image
                        src={`https://i.pravatar.cc/100?u=upper${seed}`}
                        alt={`Cliente Upper ${i}`}
                        width={40}
                        height={40}
                        className="object-cover"
                    />
                </div>
            ))}
        </div>
    );
}
