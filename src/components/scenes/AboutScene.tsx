"use client";

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Environment, Lightformer } from '@react-three/drei';
import * as THREE from 'three';

const sphereCount = 80;

const spheres = (() => {
  const items = [];
  for (let i = 0; i < sphereCount; i++) {
    const t = i / sphereCount;
    const angle = t * Math.PI * 8; // 4 full turns
    const radius = 2.5;
    const y = (t - 0.5) * 15; // spread vertically
    
    // Strand 1
    items.push({
      position: [Math.cos(angle) * radius, y, Math.sin(angle) * radius],
      scale: 0.3 + Math.random() * 0.4,
      isGlass: Math.random() > 0.5
    });
    
    // Strand 2 (offset by PI)
    items.push({
      position: [Math.cos(angle + Math.PI) * radius, y, Math.sin(angle + Math.PI) * radius],
      scale: 0.3 + Math.random() * 0.4,
      isGlass: Math.random() > 0.5
    });
  }
  return items;
})();

const MetallicHelix = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.2;
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 1;
    }
  });

  return (
    <group ref={groupRef} position={[4, 0, -8]} rotation={[0.2, 0, 0]}>
      {spheres.map((s, i) => (
        <mesh key={i} position={s.position as [number, number, number]} scale={s.scale}>
          <sphereGeometry args={[1, 32, 32]} />
          {s.isGlass ? (
            <meshPhysicalMaterial 
              color="#bfdbfe"
              transmission={1}
              opacity={1}
              metalness={0.1}
              roughness={0.1}
              ior={1.5}
              thickness={1.5}
            />
          ) : (
            <meshStandardMaterial 
              color="#1e3a8a"
              metalness={0.9}
              roughness={0.2}
            />
          )}
        </mesh>
      ))}
      
      {/* Central connecting core/energy line */}
      <mesh>
        <cylinderGeometry args={[0.1, 0.1, 15, 16]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.3} />
      </mesh>
    </group>
  );
};

export default function AboutScene() {
  useFrame(({ camera }) => {
    const scrollY = window.scrollY;
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 12 - (scrollY * 0.002), 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, -(scrollY * 0.003), 0.05);
  });

  return (
    <>
      <fog attach="fog" args={['#050505', 8, 30]} />
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={3} color="#60a5fa" />
      <directionalLight position={[-10, 5, -5]} intensity={2} color="#3b82f6" />
      
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} color="#bfdbfe" />
          <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 2, 1]} color="#1e3a8a" />
        </group>
      </Environment>

      <MetallicHelix />
    </>
  );
}
