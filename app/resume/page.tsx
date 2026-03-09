'use client';

import { Navbar } from '@/components/navbar';
import { CustomCursor } from '@/components/custom-cursor';
import { ExperienceTimeline } from '@/components/experience-timeline';
import { Skills3D } from '@/components/skills-3d';
import { Download } from 'lucide-react';
import { motion } from 'motion/react';

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#FAFAFA] print:bg-white print:text-black">
      <CustomCursor />
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 md:px-10 max-w-7xl mx-auto print:pt-10 print:px-0">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-white/10 pb-8 gap-6 print:border-black/10 print:mb-8">
          <div>
            <motion.h1 layoutId="page-title" className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-4 print:text-black">Resume</motion.h1>
            <p className="font-mono text-sm text-zinc-500 uppercase tracking-widest max-w-md print:text-gray-600">
              A detailed overview of my professional experience and technical capabilities.
            </p>
          </div>
          
          <button className="group relative flex items-center gap-3 bg-[#FAFAFA] text-[#050505] px-6 py-3 rounded-full font-mono text-sm uppercase tracking-widest overflow-hidden transition-transform hover:scale-105 print:hidden">
            <span className="relative z-10">Download PDF</span>
            <Download size={16} className="relative z-10 group-hover:translate-y-1 transition-transform" />
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-shimmer" />
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 print:block">
          {/* Timeline Column */}
          <div className="lg:col-span-7 print:w-full">
            <h2 className="text-2xl font-bold tracking-tight mb-8 uppercase print:text-black">Experience</h2>
            <ExperienceTimeline />
          </div>

          {/* Skills 3D Column */}
          <div className="lg:col-span-5 h-[500px] lg:h-[800px] sticky top-32 print:hidden">
            <h2 className="text-2xl font-bold tracking-tight mb-8 uppercase">Technical Arsenal</h2>
            <Skills3D />
          </div>
        </div>
      </div>
    </main>
  );
}
