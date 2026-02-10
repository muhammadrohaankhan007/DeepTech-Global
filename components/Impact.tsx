'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const MDiv = motion.div as any;

const metrics = [
  { value: 20, suffix: "+", title: "STRATEGIC PARTNERS", subtitle: "Global tech alliances and nodes" },
  { value: 50, suffix: "+", title: "DEEPTECH STARTUPS", subtitle: "Scaling complex innovation" },
  { value: 100, suffix: "+", title: "INDUSTRY MENTORS", subtitle: "Specialized expert guidance" },
  { prefix: "PKR ", value: 5, suffix: "B+", title: "MARKET POTENTIAL", subtitle: "Projected ecosystem value", highlight: true },
];

const CountUp = ({ value, duration = 2.5 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: duration,
        ease: "linear",
        onUpdate(latest) {
          setCount(Math.floor(latest));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

export const Impact: React.FC = () => {
  return (
    <section id="impact" className="relative py-[100px] bg-black border-y border-white/[0.05] z-20 overflow-hidden">
      {/* Background Continuity Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,27,105,0.15)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-[24px] relative z-10">
        {/* Minimalist Heading */}
        <MDiv 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-2xl md:text-3xl font-sans font-[300] text-brand-offwhite tracking-[0.2rem] uppercase">
            ECOSYSTEM IMPACT
          </h2>
        </MDiv>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 relative">
          {metrics.map((metric, idx) => (
            <MDiv 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className={`relative py-12 px-8 flex flex-col items-center text-center group
                ${idx !== metrics.length - 1 ? 'md:border-r border-white/[0.1]' : ''}
              `}
            >
              {/* Subtle metric glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-blue/5 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <div className="relative flex items-baseline justify-center text-brand-offwhite font-sans font-[500] text-[4rem] leading-none mb-4">
                {metric.prefix && (
                  <span className="text-[1.5rem] font-[400] text-[#888888] mr-2 align-top absolute -left-12 top-2">
                    {metric.prefix}
                  </span>
                )}
                <CountUp value={metric.value} />
                <span className="text-brand-slate ml-1">{metric.suffix}</span>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-[12px] font-sans font-[600] tracking-[0.15rem] text-brand-slate uppercase">
                  {metric.title}
                </h4>
                <p className="text-[11px] font-sans font-[300] text-[#888888] tracking-wide max-w-[180px] mx-auto leading-relaxed">
                  {metric.subtitle}
                </p>
              </div>
            </MDiv>
          ))}
        </div>
      </div>
    </section>
  );
};