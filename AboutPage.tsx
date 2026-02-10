'use client';

import React from 'react';
import { AboutSection } from './components/AboutSection';

export const AboutPage: React.FC = () => {
  return (
    <div id="about" className="bg-black min-h-screen pt-20">
      <AboutSection />
      
      {/* Footer repeated for page consistency */}
      <footer className="py-24 bg-black px-10 md:px-20 border-t border-white/5 relative z-10">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-4 text-center md:text-left">
            <div className="text-xl font-impact text-white uppercase italic tracking-tighter">DEEPTECH 2026</div>
            <p className="text-[10px] text-white/20 uppercase tracking-[0.4em]">Bridging scientific research and global market scale.</p>
          </div>
          <div className="flex items-center gap-12">
             <a href="#" className="text-[10px] font-black text-white/30 hover:text-white transition-colors tracking-widest uppercase">Privacy_Kernel</a>
             <a href="#" className="text-[10px] font-black text-white/30 hover:text-white transition-colors tracking-widest uppercase">System_Terms</a>
          </div>
          <div className="text-[10px] font-black tracking-[0.8em] text-white/10 uppercase">
            © 2026 DEEPTECH CORE // LAB TO MARKET
          </div>
        </div>
      </footer>
    </div>
  );
};