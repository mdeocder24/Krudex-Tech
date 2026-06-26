"use client";

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const TerrainWave = () => {
  const geometryRef = useRef<THREE.PlaneGeometry>(null);
  
  useFrame(({ clock }) => {
    if (!geometryRef.current) return;
    
    const time = clock.getElapsedTime() * 0.3;
    const positions = geometryRef.current.attributes.position.array as Float32Array;
    
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      
      const z = Math.sin(x * 0.15 + time) * 1.5 + 
                Math.cos(y * 0.15 + time * 0.8) * 1.5 + 
                Math.sin((x + y) * 0.1 - time * 0.5) * 1.0;
                
      positions[i + 2] = z;
    }
    
    geometryRef.current.attributes.position.needsUpdate = true;
  });

  return (
    <mesh rotation={[-Math.PI / 2.2, 0, 0]} position={[0, -6, -15]}>
      <planeGeometry ref={geometryRef} args={[120, 120, 70, 70]} />
      <meshBasicMaterial 
        color="#3b82f6"
        wireframe={true}
        transparent={true}
        opacity={0.15}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
};

const AmbientParticles = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 800;

  const [positions, phases] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const p = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 60; 
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40; 
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40 - 10;
      p[i] = Math.random() * Math.PI * 2;
    }
    return [pos, p];
  }, [particleCount]);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const time = clock.getElapsedTime();
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3 + 1] += Math.sin(time * 0.5 + phases[i]) * 0.005;
      pos[i * 3] += Math.cos(time * 0.3 + phases[i]) * 0.005;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.06} color="#3b82f6" transparent opacity={0.5} blending={THREE.AdditiveBlending} sizeAttenuation />
    </points>
  );
};

export default function HomeScene() {
  useFrame(({ camera }) => {
    const scrollY = window.scrollY;
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 8 - (scrollY * 0.002), 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 1 - (scrollY * 0.001), 0.05);
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, 0, 0.05);
  });

  return (
    <>
      <fog attach="fog" args={['#050505', 5, 35]} />
      <TerrainWave />
      <AmbientParticles />
    </>
  );
}
