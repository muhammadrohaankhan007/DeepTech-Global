'use client';

import React from 'react';
import { Hero } from './components/Hero';
import { Impact } from './components/Impact';
import { AboutSection } from './components/AboutSection';
import { Core } from './components/Core';
import { Summit2026 } from './components/Summit2026';
import { WhyAttend } from './components/WhyAttend';
import { WhyJoin } from './components/WhyJoin';
import { Contact } from './components/Contact';
import { motion } from 'framer-motion';

const MDiv = motion.div as any;

export default function Home() {
  return (
    <div className="bg-black relative selection:bg-brand-blue selection:text-white font-sans overflow-visible">
      <div id="hero">
        <Hero />
      </div>
      
      <div id="impact">
        <Impact />
      </div>
      
      <div id="about">
        <AboutSection />
      </div>

      <div id="summit-2026">
        <Summit2026 />
      </div>

      <div id="why-attend">
        <WhyAttend />
      </div>

      <div id="core">
        <Core />
      </div>
      
      <div id="architects-of-change">
        <WhyJoin />
      </div>

      <section id="community" className="py-40 px-10 md:px-24 bg-black text-center border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-30" />
        <MDiv
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <h2 className="text-5xl md:text-7xl font-impact text-white tracking-tighter uppercase italic silver-gradient-text">JOIN THE COMMUNITY</h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto font-sans font-light">
            Connect with the brightest minds in science and tech. Our exclusive network is the hub for national collaboration.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-auto min-w-fit px-12 py-4 bg-brand-blue text-white rounded-full font-black text-[11px] tracking-widest uppercase hover:scale-105 transition-all shadow-[0_0_20px_#0055FF] whitespace-nowrap"
          >
            ACCESS TERMINAL
          </button>
        </MDiv>
      </section>

      <Contact />

      <footer className="py-24 bg-black px-10 md:px-20 border-t border-white/5 relative z-10">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
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
}