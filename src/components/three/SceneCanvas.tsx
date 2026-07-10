"use client";

import React, { Suspense } from 'react';
import { Canvas, CanvasProps } from '@react-three/fiber';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';

interface SceneCanvasProps {
  children: React.ReactNode;
  camera?: CanvasProps['camera'];
  className?: string;
  bloomIntensity?: number;
}

/**
 * Shared Canvas wrapper for every 3D scene in the site — consistent perf
 * settings, fog-friendly transparent background, and a bloom/vignette
 * post-processing stack so emissive/glass materials read as intended.
 */
const SceneCanvas = ({ children, camera, className, bloomIntensity = 1.1 }: SceneCanvasProps) => {
  return (
    <div className={className ?? 'w-full h-full'}>
      <Canvas
        camera={camera ?? { position: [0, 0, 10], fov: 45, near: 0.1, far: 100 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          {children}
          <EffectComposer multisampling={0}>
            <Bloom
              luminanceThreshold={0.15}
              luminanceSmoothing={0.9}
              intensity={bloomIntensity}
              mipmapBlur
            />
            <Vignette eskil={false} offset={0.15} darkness={0.9} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SceneCanvas;
