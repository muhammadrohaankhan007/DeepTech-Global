'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MDiv = motion.div as any;

const slides = [
  {
    pillar: "Quantum sovereignty",
    headline: "Architecting sovereignty",
    text: "Beyond 2026, we aren't just building companies; we are engineering a self-sustaining scientific engine. Our vision is to bridge the gap between pure research and global market dominance.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
  },
  {
    pillar: "Frontier discovery",
    headline: "Unlocking the unseen",
    text: "From the microscopic to the cosmic. We provide the infrastructure for quantum sensing, biotech breakthroughs, and AI-driven materials science that will define the next century.",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1000",
  },
  {
    pillar: "Ultimate mobility",
    headline: "Kinetic innovation",
    text: "Redefining the transit of atoms and bits. We are focusing on indigenous robotics, autonomous logistics, and the sustainable energy grids required to power a hyper-connected nation.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
  }
];

export const AboutSlider: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = slides.length - 1;
      if (nextIndex >= slides.length) nextIndex = 0;
      return nextIndex;
    });
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.05,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        // Cast easing array to tuple [number, number, number, number] to match CubicBezier type
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.8,
        // Cast easing array to tuple [number, number, number, number] to match CubicBezier type
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <div className="w-full bg-black relative overflow-hidden min-h-[700px]">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <MDiv
          key={index}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="w-full grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[700px]"
        >
          {/* Massive Cinematic Image Side */}
          <div className="relative h-[400px] lg:h-auto overflow-hidden">
            <img
              src={slides[index].image}
              alt={slides[index].pillar}
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black lg:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:hidden block" />
            
            {/* Minimal Pillar Label */}
            <div className="absolute top-10 left-10 lg:left-20 z-20">
              <span className="text-[10px] font-bold text-brand-blue tracking-[0.6em] uppercase">
                {slides[index].pillar}
              </span>
            </div>
          </div>

          {/* Centered Visionary Text Side */}
          <div className="flex flex-col justify-center px-10 lg:px-24 py-20 relative bg-black">
            <div className="space-y-8 max-w-2xl">
              <div className="space-y-4">
                <h3 className="text-5xl md:text-8xl font-light text-white tracking-tighter leading-[0.9] italic">
                  {slides[index].headline}
                </h3>
                <div className="w-12 h-px bg-brand-blue" />
              </div>
              
              <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed tracking-wide">
                {slides[index].text}
              </p>

              <div className="pt-6">
                <a 
                  href="#explore" 
                  className="group inline-flex items-center gap-4 text-white text-xs font-black uppercase tracking-[0.4em] transition-all"
                >
                  <span>Learn More</span>
                  <span className="group-hover:translate-x-3 transition-transform duration-500 ease-out">→</span>
                </a>
              </div>
            </div>

            {/* Navigation Arrows - Bottom Right of Text Block */}
            <div className="absolute bottom-10 right-10 lg:right-24 flex gap-4">
              <button
                onClick={() => paginate(-1)}
                className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all duration-300"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => paginate(1)}
                className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all duration-300"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </MDiv>
      </AnimatePresence>

      {/* Subtle Index Indicator */}
      <div className="absolute bottom-10 left-10 lg:left-20 z-30 flex items-center gap-4">
        <span className="text-[10px] font-mono text-white/20">
          0{index + 1}
        </span>
        <div className="w-12 h-px bg-white/10 relative">
          <MDiv 
            className="absolute inset-0 bg-brand-blue"
            initial={false}
            animate={{ scaleX: (index + 1) / slides.length }}
            style={{ transformOrigin: 'left' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          />
        </div>
        <span className="text-[10px] font-mono text-white/20">
          0{slides.length}
        </span>
      </div>
    </div>
  );
};