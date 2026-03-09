'use client';

import { motion } from 'motion/react';

const experiences = [
  {
    id: 1,
    role: 'Senior Creative Technologist',
    company: 'Studio Digital',
    period: '2022 - Present',
    description: 'Leading the development of immersive web experiences using WebGL, Three.js, and modern React frameworks. Bridging the gap between design and engineering.',
  },
  {
    id: 2,
    role: 'Frontend Developer',
    company: 'Tech Innovations Inc.',
    period: '2019 - 2022',
    description: 'Built scalable, accessible, and performant user interfaces. Championed the migration to Next.js and established the internal component library.',
  },
  {
    id: 3,
    role: 'Interactive Designer',
    company: 'Creative Agency X',
    period: '2017 - 2019',
    description: 'Designed and prototyped interactive campaigns for global brands. Focused on micro-interactions and motion design.',
  },
];

export function ExperienceTimeline() {
  return (
    <div className="relative border-l border-white/10 ml-4 md:ml-0 pl-8 md:pl-12 py-8 print:border-none print:ml-0 print:pl-0 print:py-0">
      {/* Animated Timeline Line */}
      <motion.div
        className="absolute top-0 bottom-0 left-[-1px] w-[2px] bg-[#FAFAFA] origin-top print:hidden"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      <div className="space-y-16 print:space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative print:opacity-100 print:x-0 print:transform-none"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-3 h-3 rounded-full bg-[#050505] border-2 border-[#FAFAFA] print:hidden" />
            
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
              <h3 className="text-xl font-bold tracking-tight print:text-black">{exp.role}</h3>
              <span className="font-mono text-sm text-zinc-500 uppercase tracking-widest mt-1 md:mt-0 print:text-gray-600">
                {exp.period}
              </span>
            </div>
            <h4 className="text-lg text-zinc-400 mb-4 print:text-gray-800">{exp.company}</h4>
            <p className="text-zinc-300 leading-relaxed max-w-2xl print:text-black">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
