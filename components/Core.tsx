'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MDiv = motion.div as any;
const MRect = motion.rect as any;
const MCircle = motion.circle as any;
const MPath = motion.path as any;

const BinaryRain = ({ speed = 1 }) => {
  return (
    <div className="absolute inset-0 opacity-[0.05] font-mono text-[8px] leading-tight text-brand-cyan select-none pointer-events-none whitespace-pre overflow-hidden flex justify-around">
      {Array.from({ length: 10 }).map((_, i) => (
        <MDiv
          key={i}
          initial={{ y: '-100%' }}
          animate={{ y: '100%' }}
          transition={{
            duration: 10 / speed,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "linear",
          }}
          className="flex flex-col"
        >
          {Array.from({ length: 40 }).map((_, j) => (
            <span key={j}>{Math.random() > 0.5 ? '1' : '0'}</span>
          ))}
        </MDiv>
      ))}
    </div>
  );
};

const FlowingBorder = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
    <MRect
      x="0.5"
      y="0.5"
      width="99"
      height="99"
      rx="2"
      fill="none"
      stroke="#7DA0CA"
      strokeWidth="0.5"
      strokeOpacity="0.2"
      strokeDasharray="10 90"
      animate={{ strokeDashoffset: [100, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    />
  </svg>
);

const GeometricOrb = ({ type }: { type: 'lattice' | 'liquid' | 'neural' }) => {
  if (type === 'lattice') {
    return (
      <div className="w-48 h-48 relative flex items-center justify-center">
        <MDiv
          animate={{ rotateY: 360, rotateX: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <svg viewBox="0 0 100 100" className="w-32 h-32 text-brand-blue opacity-80">
            <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M50 10 L10 50 L90 50 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M50 90 L10 50 L90 50 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <MCircle cx="50" cy="10" r="2" fill="currentColor" />
            <MCircle cx="90" cy="50" r="2" fill="currentColor" />
            <MCircle cx="50" cy="90" r="2" fill="currentColor" />
            <MCircle cx="10" cy="50" r="2" fill="currentColor" />
          </svg>
        </MDiv>
        <div className="absolute inset-0 bg-brand-blue/10 blur-[40px] rounded-full" />
      </div>
    );
  }

  if (type === 'liquid') {
    return (
      <div className="w-48 h-48 relative flex items-center justify-center">
        <MDiv
          animate={{
            scale: [1, 1.1, 1],
            borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 70%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 70%"]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-24 h-24 bg-gradient-to-br from-yellow-300 via-orange-500 to-yellow-600 shadow-[0_0_50px_rgba(245,158,11,0.5)]"
        />
        <div className="absolute inset-0 bg-orange-500/10 blur-[50px] rounded-full" />
      </div>
    );
  }

  return (
    <div className="w-48 h-48 relative flex items-center justify-center">
      <div className="w-32 h-32 relative">
        {[...Array(6)].map((_, i) => (
          <MDiv
            key={i}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
            className="absolute bg-brand-cyan rounded-full"
            style={{
              width: '8px',
              height: '8px',
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 80}%`,
              boxShadow: '0 0 10px #00F2FF'
            }}
          />
        ))}
        <svg viewBox="0 0 100 100" className="w-full h-full text-brand-cyan/20">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M20 50 Q50 20 80 50 T20 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M50 20 Q80 50 50 80 T50 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-brand-cyan/10 blur-[40px] rounded-full" />
    </div>
  );
};

const DataBlade = ({ title, topic, description, orbType, index }: { title: string, topic: string, description: string, orbType: 'lattice' | 'liquid' | 'neural', index: number }) => {
  return (
    <MDiv
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      whileHover={{ translateZ: 50, scale: 1.02 }}
      className="group relative flex flex-col items-center p-10 bg-[#020202] backdrop-blur-3xl border border-white/5 rounded-sm h-[600px] overflow-hidden"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <BinaryRain speed={1} />
      <FlowingBorder />
      <div className="relative z-10 flex flex-col items-center h-full w-full">
        <div className="mb-12 h-48 flex items-center justify-center w-full">
          <GeometricOrb type={orbType} />
        </div>
        <div className="flex-1 flex flex-col items-center text-center space-y-6 w-full">
          <span className="text-[11px] font-mono font-[700] text-brand-slate tracking-[0.2em] uppercase">
            {topic}
          </span>
          <h3 className="text-[1.4rem] font-sans font-[600] text-white uppercase tracking-tight leading-tight transition-all duration-500 group-hover:text-brand-blue">
            {title}
          </h3>
          <div className="w-12 h-px bg-brand-cyan/40" />
          <p className="text-[#D1D1D1] text-[18px] font-sans font-[300] leading-[1.6] max-w-[400px] mx-auto tracking-wide">
            {description}
          </p>
        </div>
        <div className="mt-auto pt-8 flex items-center gap-4 opacity-20 group-hover:opacity-100 transition-opacity duration-700">
          <div className="w-2 h-2 bg-brand-cyan rounded-full animate-pulse" />
          <span className="text-[8px] font-mono text-brand-cyan tracking-widest uppercase">system_status: nominal</span>
        </div>
      </div>
    </MDiv>
  );
};

export const Core: React.FC = () => {
  return (
    <section id="core" className="relative py-40 bg-black px-6 md:px-24 overflow-visible scroll-mt-[100px]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] bg-[radial-gradient(circle,rgba(0,85,255,0.08)_0%,transparent_70%)] pointer-events-none" />
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" preserveAspectRatio="none">
        <MPath
          d="M 50% 150 L 50% 300 M 50% 300 L 20% 500 M 50% 300 L 50% 500 M 50% 300 L 80% 500"
          stroke="#7DA0CA"
          strokeWidth="0.5"
          strokeOpacity="0.2"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>
      <div className="relative z-10 max-w-7xl mx-auto overflow-visible">
        <MDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-[120px] space-y-6 overflow-visible"
        >
          <span className="text-[11px] font-mono font-[700] text-brand-slate tracking-[0.6em] uppercase block mb-4">
            Neural Grid Interface
          </span>
          <div className="laser-reveal">
            <h2 className="text-[2.5rem] md:text-[4.5rem] font-sans font-[300] text-white tracking-[0.35rem] uppercase leading-tight pb-4">
              DEEPTECH CORE
            </h2>
            <MDiv
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="laser-line"
            />
          </div>
          <p className="text-gray-400 text-lg md:text-xl font-mono max-w-2xl mx-auto leading-relaxed opacity-60 uppercase tracking-[0.2em]">
            [Architecting the Sovereign Scientific Engine]
          </p>
        </MDiv>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full perspective-[2000px]">
          <DataBlade index={0} topic="NODE_SYNC // STRATEGY" title="EXECUTION" description="Transforming high-frontier research into scalable market logic." orbType="lattice" />
          <DataBlade index={1} topic="LIQUIDITY // FLOW" title="CAPITAL" description="Synergizing visionary architects with strategic venture nodes." orbType="liquid" />
          <DataBlade index={2} topic="SOVEREIGNTY // SCALE" title="GROWTH" description="Scaling indigenous systems into national strategic assets." orbType="neural" />
        </div>
      </div>
    </section>
  );
};