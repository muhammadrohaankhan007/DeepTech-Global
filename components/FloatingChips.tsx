'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MDiv = motion.div as any;

const chips = [
  { label: '01010', top: '15%', left: '10%', delay: 0 },
  { label: 'AI / ML', top: '40%', left: '5%', delay: 2 },
  { label: '2026', top: '75%', left: '15%', delay: 4 },
  { label: 'NEURAL', top: '25%', right: '10%', delay: 1 },
  { label: 'SYSTEMS', top: '60%', right: '5%', delay: 3 },
  { label: 'CORE', top: '85%', right: '12%', delay: 5 },
];

export const FloatingChips: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {chips.map((chip, i) => (
        /* Use pre-casted MDiv to bypass IntrinsicAttributes error and fix syntax */
        <MDiv
          key={i}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.4, 0.4, 0],
            y: [-20, 20, -20],
            x: [-10, 10, -10]
          }}
          transition={{ 
            duration: 15 + Math.random() * 5, 
            repeat: Infinity,
            delay: chip.delay
          }}
          style={{ 
            top: chip.top, 
            left: chip.left, 
            right: chip.right,
            filter: 'blur(2px)'
          }}
          className="absolute flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full"
        >
          <span className="w-1 h-1 rounded-full bg-brand-primary animate-pulse"></span>
          <span className="text-[9px] font-mono tracking-widest text-white/50">{chip.label}</span>
        </MDiv>
      ))}
    </div>
  );
};