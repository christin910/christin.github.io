'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const { mouse, viewport } = useThree();

  // Generate random particles
  const particlesCount = 2000;
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [particlesCount]);

  useFrame((state, delta) => {
    if (ref.current) {
      // Slow rotation
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;

      // React to mouse
      const targetX = (mouse.x * viewport.width) / 10;
      const targetY = (mouse.y * viewport.height) / 10;

      ref.current.rotation.x += 0.05 * (targetY - ref.current.rotation.x);
      ref.current.rotation.y += 0.05 * (targetX - ref.current.rotation.y);
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

export function Hero() {
  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <color attach="background" args={['#050505']} />
          <ParticleField />
        </Canvas>
      </div>
      
      <div className="z-10 text-center pointer-events-none mix-blend-difference">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-white uppercase">
          Digital<br />Sanctuary
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 font-mono tracking-widest uppercase">
          Creative Technologist
        </p>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 pointer-events-none mix-blend-difference">
        <div className="w-[1px] h-16 bg-white/30 overflow-hidden">
          <div className="w-full h-full bg-white animate-[scroll_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
