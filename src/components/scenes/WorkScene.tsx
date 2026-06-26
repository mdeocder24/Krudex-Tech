"use client";

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Vortex = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 2000;

  const [positions, params] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const par = new Float32Array(particleCount * 2); // speed, radius
    
    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 15;
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 10 * (1 - radius/15); // thicker in middle
      
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = Math.sin(angle) * radius;
      
      par[i * 2] = 0.01 + Math.random() * 0.02; // angular speed
      par[i * 2 + 1] = radius;
    }
    return [pos, par];
  }, [particleCount]);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const time = clock.getElapsedTime();
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < particleCount; i++) {
      const radius = params[i * 2 + 1];
      const speed = params[i * 2];
      
      // Calculate current angle based on starting position and time
      const initialAngle = Math.atan2(pos[i * 3 + 2], pos[i * 3]);
      const newAngle = initialAngle + speed;
      
      pos[i * 3] = Math.cos(newAngle) * radius;
      pos[i * 3 + 2] = Math.sin(newAngle) * radius;
      
      // Slight vertical wobble
      pos[i * 3 + 1] += Math.sin(time * 2 + i) * 0.01;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    pointsRef.current.rotation.x = 0.2;
    pointsRef.current.rotation.z = -0.2;
  });

  return (
    <points ref={pointsRef} position={[0, -2, -10]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#22c55e" transparent opacity={0.6} blending={THREE.AdditiveBlending} sizeAttenuation />
    </points>
  );
};

export default function WorkScene() {
  useFrame(({ camera }) => {
    const scrollY = window.scrollY;
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 8 - (scrollY * 0.003), 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 2 - (scrollY * 0.002), 0.05);
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, 0, 0.05);
  });

  return (
    <>
      <fog attach="fog" args={['#050505', 2, 25]} />
      <Vortex />
    </>
  );
}
