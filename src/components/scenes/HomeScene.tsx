"use client";

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';

const DarkAurora = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock, camera }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime();
      meshRef.current.rotation.x = t * 0.05;
      meshRef.current.rotation.y = t * 0.08;
      
      // Gentle floating
      meshRef.current.position.y = Math.sin(t * 0.2) * 2;
    }
    
    // Very subtle camera parallax based on scroll
    const scrollY = window.scrollY;
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, -(scrollY * 0.001), 0.05);
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -15]} scale={12}>
      <sphereGeometry args={[1, 128, 128]} />
      <MeshDistortMaterial
        color="#030712" // Very dark blue/black base
        emissive="#1e3a8a" // Deep blue glow
        emissiveIntensity={2}
        roughness={0.4}
        metalness={0.8}
        distort={0.4}
        speed={1.5}
      />
    </mesh>
  );
};

export default function HomeScene() {
  return (
    <>
      <fog attach="fog" args={['#020617', 10, 30]} />
      <ambientLight intensity={0.1} />
      
      {/* Deep purple/blue directional lights to create the aurora gradient effect */}
      <directionalLight position={[10, 10, 5]} intensity={2} color="#8b5cf6" />
      <directionalLight position={[-10, -10, -5]} intensity={3} color="#0ea5e9" />
      
      <Environment preset="city" />

      <DarkAurora />
    </>
  );
}
