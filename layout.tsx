'use client';

import React from 'react';
import { Background } from './components/Background';
import { Navbar } from './components/Navbar';
import { AIConcierge } from './components/AIConcierge';
import { SocialDock } from './components/SocialDock';

export default function RootLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen font-sans bg-black text-white selection:bg-brand-primary selection:text-white">
      <Background />
      <Navbar />
      <SocialDock />
      <div className="relative z-10">
        {children}
      </div>
      <AIConcierge />
    </div>
  );
}