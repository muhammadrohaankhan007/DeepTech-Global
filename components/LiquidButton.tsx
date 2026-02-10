'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MButton = motion.button as any;
const MDiv = motion.div as any;

export const LiquidButton: React.FC<{ label: string }> = ({ label }) => {
  return (
    /* Use pre-casted MButton to bypass IntrinsicAttributes error */
    <MButton
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={() => document.getElementById('cursor')?.classList.add('custom-cursor-expand')}
      onMouseLeave={() => document.getElementById('cursor')?.classList.remove('custom-cursor-expand')}
      className="group relative h-20 w-56 flex items-center justify-center liquid-shape overflow-visible"
    >
      {/* Liquid Background */}
      <MDiv
        animate={{
          borderRadius: [
            "40% 60% 70% 30% / 40% 50% 60% 70%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "40% 60% 70% 30% / 40% 50% 60% 70%"
          ]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-brand-primary/90 group-hover:bg-brand-secondary transition-colors duration-500"
      />
      
      {/* Secondary Layer for Goo */}
      <MDiv
        animate={{
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "40% 60% 70% 30% / 40% 50% 60% 70%",
            "60% 40% 30% 70% / 60% 30% 70% 40%"
          ],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-2 bg-white/10"
      />

      <span className="relative z-10 text-[11px] font-black tracking-[0.4em] text-white uppercase">{label}</span>
    </MButton>
  );
};