'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

const skills = [
  { text: 'React', position: [-1.5, 1.5, 0] as [number, number, number] },
  { text: 'Next.js', position: [1.2, 1.8, -1] as [number, number, number] },
  { text: 'Three.js', position: [0, 0, 1] as [number, number, number] },
  { text: 'WebGL', position: [-1.8, -1, -0.5] as [number, number, number] },
  { text: 'TypeScript', position: [1.5, -1.2, 0] as [number, number, number] },
  { text: 'Tailwind', position: [0, -2, -1.5] as [number, number, number] },
  { text: 'Motion', position: [-0.5, 2.5, -2] as [number, number, number] },
];

function SkillCard({ text, position }: { text: string; position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Smoothly interpolate rotation based on hover state
      const targetRotationX = hovered ? -0.2 : 0;
      const targetRotationY = hovered ? 0.2 : 0;
      const targetScale = hovered ? 1.1 : 1;

      meshRef.current.rotation.x += (targetRotationX - meshRef.current.rotation.x) * delta * 5;
      meshRef.current.rotation.y += (targetRotationY - meshRef.current.rotation.y) * delta * 5;
      
      const currentScale = meshRef.current.scale.x;
      const newScale = currentScale + (targetScale - currentScale) * delta * 5;
      meshRef.current.scale.set(newScale, newScale, newScale);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <planeGeometry args={[2.5, 0.8]} />
        <meshPhysicalMaterial
          color={hovered ? "#ffffff" : "#111111"}
          transmission={0.9}
          opacity={1}
          metalness={0.1}
          roughness={0.1}
          ior={1.5}
          thickness={0.5}
          transparent
        />
        <Text
          position={[0, 0, 0.1]}
          fontSize={0.3}
          color={hovered ? "#000000" : "#FAFAFA"}
          font="/fonts/Inter-Bold.ttf" // Fallback to default if not provided, but drei handles it
          anchorX="center"
          anchorY="middle"
        >
          {text}
        </Text>
      </mesh>
    </Float>
  );
}

export function Skills3D() {
  return (
    <div className="w-full h-[500px] md:h-full min-h-[500px] rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/5 relative">
      <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_100px_rgba(5,5,5,0.8)]" />
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Environment preset="city" />
        {skills.map((skill, index) => (
          <SkillCard key={index} text={skill.text} position={skill.position} />
        ))}
      </Canvas>
    </div>
  );
}
