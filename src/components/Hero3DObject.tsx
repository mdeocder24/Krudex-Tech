"use client";

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';

/* ─────────────────────────────────────────────
   Platform — Flat diamond with neon edge and solid base
   ───────────────────────────────────────────── */
interface PlatformProps {
  position: [number, number, number];
  size: [number, number]; // width, depth (square)
}

const Platform = ({ position, size }: PlatformProps) => {
  const [w, d] = size;
  const t = 0.04; // Neon tube thickness
  const depth = 25; // Depth of the pillar body for fading into fog

  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Very subtle floating motion for the whole platform
      groupRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() + position[0]) * 0.05;
    }
  });

  return (
    // Rotated 45 degrees to create the isometric diamond shape from the camera's perspective
    <group ref={groupRef} position={position} rotation={[0, Math.PI / 4, 0]}>
      
      {/* 1. Neon Glowing Edge Frame */}
      <group>
        {/* Core solid bright white frame */}
        <mesh position={[0, 0, d/2]}><boxGeometry args={[w+t, t, t]} /><meshBasicMaterial color="#ffffff" /></mesh>
        <mesh position={[0, 0, -d/2]}><boxGeometry args={[w+t, t, t]} /><meshBasicMaterial color="#ffffff" /></mesh>
        <mesh position={[-w/2, 0, 0]}><boxGeometry args={[t, t, d-t]} /><meshBasicMaterial color="#ffffff" /></mesh>
        <mesh position={[w/2, 0, 0]}><boxGeometry args={[t, t, d-t]} /><meshBasicMaterial color="#ffffff" /></mesh>

        {/* Soft Bloom layer (larger, transparent, additive blending) */}
        <mesh position={[0, 0, d/2]}><boxGeometry args={[w+t*4, t*4, t*4]} /><meshBasicMaterial color="#ffffff" transparent opacity={0.15} blending={THREE.AdditiveBlending} depthWrite={false} /></mesh>
        <mesh position={[0, 0, -d/2]}><boxGeometry args={[w+t*4, t*4, t*4]} /><meshBasicMaterial color="#ffffff" transparent opacity={0.15} blending={THREE.AdditiveBlending} depthWrite={false} /></mesh>
        <mesh position={[-w/2, 0, 0]}><boxGeometry args={[t*4, t*4, d-t]} /><meshBasicMaterial color="#ffffff" transparent opacity={0.15} blending={THREE.AdditiveBlending} depthWrite={false} /></mesh>
        <mesh position={[w/2, 0, 0]}><boxGeometry args={[t*4, t*4, d-t]} /><meshBasicMaterial color="#ffffff" transparent opacity={0.15} blending={THREE.AdditiveBlending} depthWrite={false} /></mesh>
      </group>

      {/* 2. Top Dark Surface (inside the neon frame) */}
      <mesh position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[w, d]} />
        <meshBasicMaterial color="#020202" />
      </mesh>

      {/* 3. Pillar Body extending downwards into the fog */}
      <mesh position={[0, -depth / 2 - 0.02, 0]}>
        <boxGeometry args={[w, depth, d]} />
        {/* Standard material to catch directional light on the sides */}
        <meshStandardMaterial color="#030303" metalness={0.1} roughness={0.9} />
      </mesh>
    </group>
  );
};

/* ─────────────────────────────────────────────
   Floating Figure (The Astronaut)
   ───────────────────────────────────────────── */
const FloatingFigure = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      const t = clock.getElapsedTime();
      // Gentle floating bob
      groupRef.current.position.y = 1.0 + Math.sin(t * 1.5) * 0.15;
      // Slight rotation bobbing
      groupRef.current.rotation.x = Math.sin(t * 0.5) * 0.1;
      groupRef.current.rotation.z = Math.sin(t * 0.8) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[2, 1.0, -1.8]} scale={0.3} rotation={[0, -0.5, 0]}>
      {/* Head/Visor - metallic bronze */}
      <mesh position={[0, 1.0, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#b87333" roughness={0.2} metalness={0.9} />
      </mesh>
      
      {/* Torso */}
      <mesh position={[0, 0, 0]}>
        <capsuleGeometry args={[0.3, 0.8, 4, 8]} />
        <meshStandardMaterial color="#333333" roughness={0.7} metalness={0.3} />
      </mesh>
      
      {/* Left Arm */}
      <mesh position={[-0.4, 0.1, 0]} rotation={[0, 0, 0.6]}>
        <capsuleGeometry args={[0.1, 0.6, 4, 8]} />
        <meshStandardMaterial color="#222222" />
      </mesh>
      
      {/* Right Arm (raised) */}
      <mesh position={[0.4, 0.3, 0]} rotation={[0, 0, -2.5]}>
        <capsuleGeometry args={[0.1, 0.6, 4, 8]} />
        <meshStandardMaterial color="#222222" />
      </mesh>
      
      {/* Left Leg */}
      <mesh position={[-0.15, -0.8, 0]} rotation={[0, 0, 0.1]}>
        <capsuleGeometry args={[0.12, 0.6, 4, 8]} />
        <meshStandardMaterial color="#222222" />
      </mesh>
      
      {/* Right Leg */}
      <mesh position={[0.15, -0.7, -0.2]} rotation={[0.4, 0, -0.1]}>
        <capsuleGeometry args={[0.12, 0.6, 4, 8]} />
        <meshStandardMaterial color="#222222" />
      </mesh>
    </group>
  );
};

/* ─────────────────────────────────────────────
   Main Scene
   ───────────────────────────────────────────── */
const DataArchitectureScene = () => {
  return (
    <group position={[0.5, -0.5, 0]}>
      <ambientLight intensity={0.1} />
      
      {/* Main light from left to illuminate the left-facing walls of the pillars */}
      <directionalLight position={[-15, 10, 5]} intensity={1.5} color="#ffffff" />
      
      {/* Subtle fill light from right */}
      <directionalLight position={[15, 5, -5]} intensity={0.2} color="#ffffff" />

      {/* Deep fog to blend the pillars seamlessly into the pitch-black background */}
      {/* 050505 matches the bg-krudex-black Tailwind class perfectly */}
      <fog attach="fog" args={['#050505', 15, 35]} />

      {/* ── Platforms Stepping Up ── */}
      {/* 1. Lowest, largest, front-left */}
      <Platform position={[-3, -3.5, 3]} size={[4.2, 4.2]} />
      
      {/* 2. Middle, medium, center */}
      <Platform position={[0.5, -0.5, -0.5]} size={[3.0, 3.0]} />
      
      {/* 3. Highest, smallest, back-right */}
      <Platform position={[3.5, 2.5, -3.5]} size={[1.8, 1.8]} />

      {/* Tiny astronaut floating between middle and top platform */}
      <FloatingFigure />
    </group>
  );
};

/* ─────────────────────────────────────────────
   Exported Canvas Component
   ───────────────────────────────────────────── */
const Hero3DObject = () => {
  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none">
      <Canvas
        // Positioned perfectly to view the 45-deg rotated platforms as isometric diamonds
        camera={{
          position: [0, 8, 18],
          fov: 30,
          near: 0.1,
          far: 100,
        }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        <DataArchitectureScene />
      </Canvas>
    </div>
  );
};

export default Hero3DObject;
