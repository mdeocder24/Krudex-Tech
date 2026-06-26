"use client";

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PulsingCore = () => {
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!coreRef.current || !ring1Ref.current || !ring2Ref.current || !ring3Ref.current) return;
    const t = clock.getElapsedTime();
    
    // Core pulsing
    const scale = 1 + Math.sin(t * 2) * 0.1;
    coreRef.current.scale.set(scale, scale, scale);
    
    // Ring expansion and fading
    const updateRing = (ring: THREE.Mesh, offset: number) => {
      let ringT = (t * 0.5 + offset) % 1.0; // 0 to 1
      ring.scale.set(1 + ringT * 5, 1 + ringT * 5, 1 + ringT * 5);
      
      const material = ring.material as THREE.MeshBasicMaterial;
      // Fade in and out
      material.opacity = Math.max(0, (1 - ringT) * 0.5);
    };

    updateRing(ring1Ref.current, 0);
    updateRing(ring2Ref.current, 0.33);
    updateRing(ring3Ref.current, 0.66);
    
    coreRef.current.rotation.y = t * 0.2;
    coreRef.current.rotation.x = t * 0.1;
  });

  return (
    <group position={[0, -2, -12]}>
      {/* Central Core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[2, 2]} />
        <meshBasicMaterial color="#3b82f6" wireframe={true} transparent opacity={0.8} blending={THREE.AdditiveBlending} />
      </mesh>
      
      {/* Inner solid core */}
      <mesh>
        <icosahedronGeometry args={[1.9, 1]} />
        <meshBasicMaterial color="#050505" />
      </mesh>

      {/* Signal Rings */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2, 2.05, 64]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0} side={THREE.DoubleSide} blending={THREE.AdditiveBlending} />
      </mesh>
      <mesh ref={ring2Ref} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2, 2.05, 64]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0} side={THREE.DoubleSide} blending={THREE.AdditiveBlending} />
      </mesh>
      <mesh ref={ring3Ref} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2, 2.05, 64]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0} side={THREE.DoubleSide} blending={THREE.AdditiveBlending} />
      </mesh>
    </group>
  );
};

export default function ContactScene() {
  useFrame(({ camera }) => {
    const scrollY = window.scrollY;
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 8 - (scrollY * 0.002), 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 1 - (scrollY * 0.002), 0.05);
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, 0, 0.05);
  });

  return (
    <>
      <fog attach="fog" args={['#050505', 5, 25]} />
      <PulsingCore />
    </>
  );
}
