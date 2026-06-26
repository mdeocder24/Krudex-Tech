"use client";

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Environment, Lightformer } from '@react-three/drei';
import * as THREE from 'three';

const EnergyCore = () => {
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (!coreRef.current || !ring1Ref.current || !ring2Ref.current) return;
    const t = clock.getElapsedTime();
    
    // Smooth slow rotation
    coreRef.current.rotation.y = t * 0.1;
    coreRef.current.rotation.x = t * 0.05;
    
    // Rings orbit the core
    ring1Ref.current.rotation.x = t * 0.5;
    ring1Ref.current.rotation.y = t * 0.2;
    
    ring2Ref.current.rotation.x = -t * 0.3;
    ring2Ref.current.rotation.z = t * 0.4;
    
    // Core pulsing effect on scale
    const pulse = 1 + Math.sin(t * 2) * 0.02;
    coreRef.current.scale.set(pulse, pulse, pulse);
  });

  return (
    <group position={[0, -2, -10]}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={1} floatingRange={[-0.5, 0.5]}>
        {/* The Solid Metallic Core */}
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[2.5, 4]} />
          <meshPhysicalMaterial 
            color="#050505"
            metalness={1}
            roughness={0.2}
            clearcoat={1}
            clearcoatRoughness={0.1}
            envMapIntensity={3}
          />
        </mesh>

        {/* Orbiting Energy Ring 1 (Torus) */}
        <mesh ref={ring1Ref}>
          <torusGeometry args={[3.5, 0.05, 16, 100]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.8} />
        </mesh>
        
        {/* Orbiting Energy Ring 2 */}
        <mesh ref={ring2Ref}>
          <torusGeometry args={[4.5, 0.02, 16, 100]} />
          <meshBasicMaterial color="#60a5fa" transparent opacity={0.5} />
        </mesh>
      </Float>
      
      <pointLight position={[0, 0, 0]} intensity={2} color="#3b82f6" distance={10} />
    </group>
  );
};

export default function ContactScene() {
  useFrame(({ camera }) => {
    const scrollY = window.scrollY;
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 8 - (scrollY * 0.002), 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 1 - (scrollY * 0.002), 0.05);
  });

  return (
    <>
      <fog attach="fog" args={['#050505', 5, 25]} />
      <ambientLight intensity={0.1} />
      
      <Environment resolution={256}>
        <group rotation={[Math.PI / 3, 0, 0]}>
          <Lightformer form="circle" intensity={10} position={[0, 10, -5]} scale={5} color="#3b82f6" />
          <Lightformer form="rect" intensity={5} position={[-5, 0, -5]} scale={[2, 10, 1]} color="#bfdbfe" />
          <Lightformer form="rect" intensity={5} position={[5, 0, -5]} scale={[2, 10, 1]} color="#1e3a8a" />
        </group>
      </Environment>

      <EnergyCore />
    </>
  );
}
