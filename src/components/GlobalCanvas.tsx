"use client";

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import HomeScene from './scenes/HomeScene';

export default function GlobalCanvas() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#050505]">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <HomeScene />
        </Suspense>
      </Canvas>
      
      {/* CSS overlay to ensure text is legible over the 3D */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/40 to-[#050505] pointer-events-none" />
    </div>
  );
}
