"use client";

import React from 'react';

// Simplified home scene — the main 3D visualization is now inline in the Hero component.
// This scene stays minimal to avoid visual interference with the hero's own Canvas.
export default function HomeScene() {
  return (
    <>
      <ambientLight intensity={0.02} />
      <fog attach="fog" args={['#050505', 0, 5]} />
    </>
  );
}
