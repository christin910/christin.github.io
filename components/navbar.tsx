'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      
      switch (e.key.toLowerCase()) {
        case 'h':
        case 'w':
          router.push('/');
          break;
        case 'b':
          router.push('/blog');
          break;
        case 'r':
          router.push('/resume');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [router]);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-40 flex justify-between items-center p-6 md:p-10 backdrop-blur-md bg-[#050505]/50 border-b border-white/5 text-[#FAFAFA] print:hidden"
    >
      <Link href="/" className="text-xl font-bold tracking-tighter uppercase">
        DS.
      </Link>
      <div className="flex gap-8 font-mono text-sm uppercase tracking-widest">
        <Link 
          href="/" 
          className={`hover:opacity-100 transition-opacity ${pathname === '/' ? 'opacity-100' : 'opacity-50'}`}
        >
          Work <span className="hidden md:inline-block ml-1 text-[10px] opacity-50 border border-white/20 rounded px-1">W</span>
        </Link>
        <Link 
          href="/resume" 
          className={`hover:opacity-100 transition-opacity ${pathname === '/resume' ? 'opacity-100' : 'opacity-50'}`}
        >
          Resume <span className="hidden md:inline-block ml-1 text-[10px] opacity-50 border border-white/20 rounded px-1">R</span>
        </Link>
        <Link 
          href="/blog" 
          className={`hover:opacity-100 transition-opacity ${pathname === '/blog' ? 'opacity-100' : 'opacity-50'}`}
        >
          Blog <span className="hidden md:inline-block ml-1 text-[10px] opacity-50 border border-white/20 rounded px-1">B</span>
        </Link>
      </div>
    </motion.nav>
  );
}
