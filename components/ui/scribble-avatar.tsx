import React from "react";
import Image from "next/image";

export const ScribbleAvatar = ({ className = "w-10 h-10", bgColor = "bg-[#d4f1f4]", imageUrl, alt = "Avatar" }: { className?: string; bgColor?: string; imageUrl?: string; alt?: string }) => (
    <div className={`${className} rounded-full ${bgColor} flex items-center justify-center relative overflow-hidden sketch-border`}>
        {imageUrl ? (
            <Image
                src={imageUrl}
                alt={alt}
                fill
                sizes="64px"
                className="object-cover"
            />
        ) : (
            <svg
            viewBox="0 0 100 100"
            className="w-[80%] h-[80%] text-[#2d2d2d] opacity-80"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {/* Head shape */}
            <path d="M50,85 C30,85 15,70 15,45 C15,20 30,10 50,10 C70,10 85,20 85,45 C85,70 70,85 50,85" />

            {/* Hair scribble */}
            <path d="M25,25 Q35,5 50,10 Q65,5 75,25" className="opacity-60" />

            {/* Eyes */}
            <circle cx="35" cy="40" r="3" fill="currentColor" />
            <circle cx="65" cy="40" r="3" fill="currentColor" />

            {/* Nose */}
            <path d="M50,45 L52,55 L48,55 Z" fill="none" />
            <path d="M50,48 Q55,55 50,58" />

            {/* Smile */}
            <path d="M30,65 Q50,75 70,65" strokeWidth="3" />

            {/* Blush/sketch marks */}
            <path d="M22,55 L28,52" className="opacity-20" />
            <path d="M72,52 L78,55" className="opacity-20" />
        </svg>
        )}
    </div>
);
