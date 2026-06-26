"use client";

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Environment, Lightformer } from '@react-three/drei';
import * as THREE from 'three';

const LiquidOrbital = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1} floatingRange={[-0.5, 0.5]}>
      <mesh ref={meshRef} position={[3, 0, -5]} scale={1.5}>
        <torusKnotGeometry args={[1.5, 0.6, 128, 64]} />
        <MeshDistortMaterial
          color="#1e3a8a" // deep blue base
          emissive="#000000"
          roughness={0.1}
          metalness={0.8}
          clearcoat={1}
          clearcoatRoughness={0.1}
          distort={0.4}
          speed={2}
          envMapIntensity={2}
        />
      </mesh>
      
      {/* A second, contrasting inner shape */}
      <mesh position={[3, 0, -5]} scale={0.8}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#3b82f6" // bright blue
          roughness={0}
          metalness={1}
          distort={0.5}
          speed={3}
          envMapIntensity={3}
        />
      </mesh>
    </Float>
  );
};

export default function HomeScene() {
  useFrame(({ camera }) => {
    const scrollY = window.scrollY;
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 8 - (scrollY * 0.002), 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, -(scrollY * 0.001), 0.05);
  });

  return (
    <>
      <fog attach="fog" args={['#050505', 5, 25]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#60a5fa" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#1d4ed8" />
      
      {/* Studio environment for epic reflections */}
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer form="circle" intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} color="#3b82f6" />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} color="#bfdbfe" />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[5, 1, -1]} scale={2} color="#1e3a8a" />
          <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} color="#93c5fd" />
        </group>
      </Environment>

      <LiquidOrbital />
    </>
  );
}
