"use client";

import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface VideoEmbedProps {
    videoId: string;
    title?: string;
    thumbnailUrl?: string;
}

export const VideoEmbed = ({ videoId, title = "YouTube Video", thumbnailUrl }: VideoEmbedProps) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // Use high-quality default thumbnail from YouTube if custom one not provided
    const fallbackThumb = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
    const bgImage = thumbnailUrl || fallbackThumb;

    if (!isLoaded) {
        return (
            <div
                className="relative w-full aspect-video rounded-3xl overflow-hidden cursor-pointer group bg-zinc-900 border border-zinc-800 my-8"
                onClick={() => setIsLoaded(true)}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${bgImage})` }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/90 flex items-center justify-center text-zinc-950 shadow-[0_0_30px_rgba(16,185,129,0.3)] group-hover:scale-110 group-hover:bg-emerald-400 transition-all duration-300">
                        <Play size={24} className="ml-1" fill="currentColor" />
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-bold text-sm md:text-base line-clamp-1">{title}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 my-8 shadow-2xl">
            <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
};
