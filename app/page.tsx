'use client';

import { Hero } from '@/components/hero';
import { Navbar } from '@/components/navbar';
import { CustomCursor } from '@/components/custom-cursor';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#FAFAFA]">
      <CustomCursor />
      <Navbar />
      <Hero />
      
      {/* Portfolio Section Placeholder */}
      <section className="py-32 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-zinc-800 pb-8">
          <motion.h2 layoutId="page-title" className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">Selected Work</motion.h2>
          <span className="font-mono text-sm text-zinc-500 uppercase tracking-widest">2024 - Present</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* We will implement the portfolio grid here in the next step */}
          <div className="aspect-[4/3] bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 font-mono text-sm uppercase">
            Project 01
          </div>
          <div className="aspect-[4/3] bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 font-mono text-sm uppercase">
            Project 02
          </div>
        </div>
      </section>
    </main>
  );
}
