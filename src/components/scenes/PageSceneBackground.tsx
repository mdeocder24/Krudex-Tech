"use client";

import React from 'react';
import { CanvasProps } from '@react-three/fiber';
import SceneCanvas from '@/components/three/SceneCanvas';
import ParticleField from '@/components/three/ParticleField';

interface PageSceneBackgroundProps {
  children: React.ReactNode;
  camera?: CanvasProps['camera'];
}

/**
 * Fixed, full-bleed 3D backdrop mounted behind a page's content. Pages
 * layer semi-transparent, backdrop-blurred sections on top so this scene
 * reads through — see the `bg-krudex-black/40 backdrop-blur-md` sections
 * on About/Services/Work/Contact.
 */
export default function PageSceneBackground({ children, camera }: PageSceneBackgroundProps) {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <SceneCanvas camera={camera}>
        <ParticleField count={150} radius={18} />
        {children}
      </SceneCanvas>
    </div>
  );
}
