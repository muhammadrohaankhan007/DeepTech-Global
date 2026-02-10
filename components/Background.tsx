'use client';

import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#000000] pointer-events-none">
      {/* Primary depth gradient: Slate/Navy */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh] bg-[radial-gradient(circle,rgba(0,10,40,0.18)_0%,rgba(0,0,0,1)_85%)]" />
      
      {/* Secondary atmospheric glow: Deep Indigo/Violet */}
      <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-[#2D1B69] rounded-full blur-[160px] opacity-[0.08]" />
      
      {/* Accent glow: Slate Blue */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[60vw] h-[60vw] bg-brand-slate/10 rounded-full blur-[180px] opacity-20" />
    </div>
  );
};