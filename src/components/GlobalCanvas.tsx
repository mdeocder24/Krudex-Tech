"use client";

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

// Import the unified Dark Aurora background
import HomeScene from './scenes/HomeScene';

export default function GlobalCanvas() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#020617]">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <HomeScene />
        </Suspense>
      </Canvas>
      
      {/* CSS overlay to ensure dark glassmorphism works well over the 3D */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617] pointer-events-none" />
    </div>
  );
}
