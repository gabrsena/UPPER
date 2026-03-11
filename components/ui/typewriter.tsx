
"use client";

import React, { useState, useEffect } from "react";

interface TypewriterProps {
  words: string[]
  speed?: number
  delayBetweenWords?: number
  cursor?: boolean
  cursorChar?: string
}

export const Typewriter = ({
  words,
  speed = 100,
  delayBetweenWords = 2000,
  cursor = true,
  cursorChar = "|",
}: TypewriterProps) => {
  const [displayText, setDisplayText] = useState(words[0] || "")
  const [isDeleting, setIsDeleting] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(words[0]?.length || 0)
  const [showCursor, setShowCursor] = useState(true)

  const currentWord = words[wordIndex]

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, speed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenWords);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, speed / 2);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, currentWord, isDeleting, speed, delayBetweenWords, words]);

  useEffect(() => {
    if (!cursor) return
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [cursor])

  return (
    <div className="inline-flex min-h-[1.2em] items-center">
      {/* Texto completo para SEO / Leitores de Tela */}
      <span className="sr-only">{words.join(", ")}</span>

      {/* Efeito visual de digitação */}
      <span aria-hidden="true">
        {displayText || "\u00A0"}
        {cursor && (
          <span className="ml-0.5 transition-opacity duration-75 text-emerald-500" style={{ opacity: showCursor ? 1 : 0 }}>
            {cursorChar}
          </span>
        )}
      </span>
    </div>
  )
}
