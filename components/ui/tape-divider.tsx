"use client";

import React from "react";
import { motion } from "framer-motion";

export const TapeDivider = ({ className = "" }: { className?: string }) => {
    const rotation = Math.random() * 4 - 2; // Random rotation between -2 and 2

    return (
        <div className={`relative w-full h-8 flex justify-center items-center pointer-events-none z-10 ${className}`}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="tape-divider"
                style={{ rotate: rotation }}
            />
        </div>
    );
};
