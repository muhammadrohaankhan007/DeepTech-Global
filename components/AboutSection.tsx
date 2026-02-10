'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Zap, Users, Globe, Rocket } from 'lucide-react';

const MDiv = motion.div as any;

const protocols = [
  {
    id: '01',
    label: 'MISSION PROTOCOL 01',
    title: 'ENGINEERING THE FUTURE',
    description: 'Pakistan is full of brilliant scientists and researchers whose work never leaves the library. We are here to ensure that groundbreaking science moves beyond the lab and into the multi-million dollar market.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600'
  },
  {
    id: '02',
    label: 'MISSION PROTOCOL 02',
    title: 'COLLECTIVE COMMUNITY',
    description: 'A sanctuary for technical collaboration. Building the first DeepTech Hub for sovereign scientific growth in the region.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600'
  },
  {
    id: '03',
    label: 'MISSION PROTOCOL 03',
    title: 'GLOBAL MARKET IMPACT',
    description: 'Connecting local talent with international high-tier venture nodes. Bridging Pakistan\'s intellectual capital with global market liquidity.',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1600'
  },
  {
    id: '04',
    label: 'MISSION PROTOCOL 04',
    title: 'SOVEREIGN SCALE',
    description: 'Transforming prototypes into multi-national entities with sovereign asset value and national strategic dominance.',
    icon: Rocket,
    image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1600'
  }
];

export const AboutSection: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = protocols.length - 1;
      if (nextIndex >= protocols.length) nextIndex = 0;
      return nextIndex;
    });
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      filter: 'brightness(0.5)',
    }),
    center: {
      zIndex: 1,
      opacity: 1,
      filter: 'brightness(1)',
      transition: {
        opacity: { duration: 0.6, ease: "linear" },
        filter: { duration: 0.6, ease: "linear" }
      }
    },
    exit: (direction: number) => ({
      zIndex: 0,
      opacity: 0,
      filter: 'brightness(0.5)',
      transition: {
        opacity: { duration: 0.6, ease: "linear" }
      }
    })
  };

  const textBlurVariants = (delay: number = 0) => ({
    initial: { opacity: 0, y: 10, filter: 'blur(10px)' },
    animate: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { 
        duration: 0.8, 
        delay, 
        ease: [0.19, 1, 0.22, 1] 
      } 
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      filter: 'blur(10px)',
      transition: { duration: 0.4 } 
    }
  });

  const currentProtocol = protocols[index];

  return (
    <section 
      id="about" 
      className="relative w-full h-screen bg-black overflow-hidden flex flex-col items-center justify-center scroll-mt-0"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-white/5 z-50">
        <MDiv 
          className="h-full bg-brand-slate shadow-[0_0_15px_rgba(125,160,202,0.5)]"
          initial={false}
          animate={{ width: `${((index + 1) / protocols.length) * 100}%` }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        />
      </div>

      <AnimatePresence initial={false} custom={direction} mode="wait">
        <MDiv
          key={index}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 flex items-center justify-center overflow-visible"
        >
          <div className="absolute inset-0 z-0">
            <img 
              src={currentProtocol.image} 
              alt="" 
              className="w-full h-full object-cover brightness-[0.2] grayscale contrast-[1.1]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
          </div>

          <div className="relative z-10 w-full max-w-7xl px-8 md:px-24 flex flex-col items-center text-center overflow-visible">
            <div className="space-y-10 w-full flex flex-col items-center overflow-visible">
              
              {/* Protocol Label */}
              <MDiv
                key={`label-${index}`}
                variants={textBlurVariants(0)}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-col items-center"
              >
                <div className="w-12 h-[2px] bg-brand-slate mb-4" />
                <span className="text-[14px] font-sans font-[700] text-brand-slate tracking-[0.6em] uppercase block">
                  {currentProtocol.label}
                </span>
              </MDiv>

              {/* Main Heading */}
              <MDiv
                key={`title-${index}`}
                variants={textBlurVariants(0.1)}
                initial="initial"
                animate="animate"
                exit="exit"
                className="overflow-visible"
              >
                <h2 className="text-[3rem] md:text-[4.5rem] font-sans font-[300] text-white tracking-[0.3rem] uppercase leading-tight pb-4">
                  {currentProtocol.title}
                </h2>
              </MDiv>

              {/* Description Paragraph */}
              <MDiv
                key={`desc-${index}`}
                variants={textBlurVariants(0.3)}
                initial="initial"
                animate="animate"
                exit="exit"
                className="max-w-[700px] mx-auto"
              >
                <p className="text-[22px] font-sans font-[300] text-[#D1D1D1] leading-[1.6] tracking-wide">
                  {currentProtocol.description}
                </p>
              </MDiv>

              {/* Icon / Indicator */}
              <MDiv 
                key={`icon-${index}`}
                variants={textBlurVariants(0.5)}
                initial="initial"
                animate="animate"
                exit="exit"
                className="pt-12"
              >
                <MDiv 
                  animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-20 h-20 rounded-full border border-brand-slate/20 flex items-center justify-center text-brand-slate/50"
                >
                  <currentProtocol.icon size={32} strokeWidth={1} />
                </MDiv>
              </MDiv>
            </div>
          </div>
        </MDiv>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-50 flex justify-between px-6 md:px-12 pointer-events-none">
        <button 
          onClick={() => paginate(-1)}
          className="w-16 h-16 rounded-full border border-white/10 bg-black/20 backdrop-blur-md flex items-center justify-center text-white/40 hover:text-brand-slate hover:border-brand-slate/40 hover:shadow-[0_0_20px_rgba(125,160,202,0.2)] transition-all pointer-events-auto group"
        >
          <ChevronLeft size={32} strokeWidth={1} className="group-hover:-translate-x-1 transition-transform" />
        </button>
        <button 
          onClick={() => paginate(1)}
          className="w-16 h-16 rounded-full border border-white/10 bg-black/20 backdrop-blur-md flex items-center justify-center text-white/40 hover:text-brand-slate hover:border-brand-slate/40 hover:shadow-[0_0_20px_rgba(125,160,202,0.2)] transition-all pointer-events-auto group"
        >
          <ChevronRight size={32} strokeWidth={1} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Node Labels (Bottom Left) */}
      <div className="absolute bottom-12 left-12 z-50 hidden md:flex flex-col gap-4">
        {protocols.map((p, i) => (
          <button
            key={p.id}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className="flex items-center gap-4 group"
          >
            <div className={`h-[1px] transition-all duration-500 ${index === i ? 'w-10 bg-brand-slate' : 'w-4 bg-white/10 group-hover:w-8 group-hover:bg-white/30'}`} />
            <span className={`text-[10px] font-mono tracking-[0.5em] uppercase transition-colors ${index === i ? 'text-brand-slate' : 'text-white/20 group-hover:text-white/50'}`}>
              NODE_0{p.id}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};