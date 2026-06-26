"use client";

import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { MeshDistortMaterial, Environment, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const FluidBlob = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);
  const { viewport, mouse } = useThree();
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime();
      meshRef.current.rotation.x = t * 0.1;
      meshRef.current.rotation.y = t * 0.15;
      
      // Target position based on mouse (with easing)
      const targetX = (mouse.x * viewport.width) / 4;
      const targetY = (mouse.y * viewport.height) / 4;
      
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.05);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.05);
    }
    
    if (materialRef.current) {
      // Intensify distortion based on mouse movement speed (approximated here by just pulsing)
      materialRef.current.distort = THREE.MathUtils.lerp(materialRef.current.distort, 0.4 + Math.sin(clock.elapsedTime) * 0.1, 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={[0, 0, -5]} scale={3}>
        <icosahedronGeometry args={[1, 64]} />
        <MeshDistortMaterial
          ref={materialRef}
          color="#06b6d4" // Cyan
          emissive="#1e3a8a" // Deep blue
          emissiveIntensity={2}
          roughness={0.1}
          metalness={0.9}
          distort={0.4}
          speed={2}
          wireframe={false}
        />
      </mesh>
    </Float>
  );
};

export default function HomeScene() {
  return (
    <>
      <fog attach="fog" args={['#050505', 10, 30]} />
      <ambientLight intensity={0.2} />
      
      <directionalLight position={[10, 10, 5]} intensity={3} color="#8b5cf6" />
      <directionalLight position={[-10, -10, -5]} intensity={4} color="#0ea5e9" />
      
      <Environment preset="night" />
      <Stars radius={50} depth={20} count={2000} factor={4} saturation={0} fade speed={1} />

      <FluidBlob />
      
      {/* Background massive ambient blob */}
      <mesh position={[0, 0, -20]} scale={15}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial color="#020617" emissive="#1e3a8a" emissiveIntensity={0.5} distort={0.2} speed={0.5} />
      </mesh>
    </>
  );
}
