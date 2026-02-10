'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MDiv = motion.div as any;

export const OrbitButton: React.FC<{ label: string }> = ({ label }) => {
  return (
    <button
      onMouseEnter={() => document.getElementById('cursor')?.classList.add('custom-cursor-expand')}
      onMouseLeave={() => document.getElementById('cursor')?.classList.remove('custom-cursor-expand')}
      className="group relative flex items-center justify-center w-48 h-48 rounded-full transition-all duration-500"
    >
      {/* Central Core */}
      <div className="absolute inset-4 rounded-full border border-white/10 group-hover:border-brand-primary transition-colors duration-500" />
      <div className="absolute inset-8 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center text-[10px] font-black tracking-[0.4em] uppercase text-white group-hover:blue-neon-glow transition-all duration-500">
        {label}
      </div>

      {/* Orbit Track */}
      <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none" />

      {/* Satellite */}
      <MDiv
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute inset-0 pointer-events-none"
      >
        <MDiv 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-4 h-4 rounded-full bg-brand-primary shadow-[0_0_15px_rgba(59,130,246,1)]" />
        </MDiv>
      </MDiv>

      {/* Speed-up effect on hover */}
      <MDiv
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      >
         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-2 h-2 rounded-full bg-brand-secondary shadow-[0_0_10px_rgba(6,182,212,1)]" />
        </div>
      </MDiv>
    </button>
  );
};