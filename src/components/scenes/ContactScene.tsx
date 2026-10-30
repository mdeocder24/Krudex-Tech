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
            color="#080607"
            metalness={1}
            roughness={0.15}
            clearcoat={1}
            clearcoatRoughness={0.1}
            envMapIntensity={3}
          />
        </mesh>

        {/* Orbiting Energy Ring 1 (Torus) - Crimson Glow */}
        <mesh ref={ring1Ref}>
          <torusGeometry args={[3.5, 0.05, 16, 100]} />
          <meshBasicMaterial color="#E52B3B" transparent opacity={0.85} blending={THREE.AdditiveBlending} />
        </mesh>

        {/* Orbiting Energy Ring 2 - Ruby Glow */}
        <mesh ref={ring2Ref}>
          <torusGeometry args={[4.5, 0.02, 16, 100]} />
          <meshBasicMaterial color="#FF4D5E" transparent opacity={0.6} blending={THREE.AdditiveBlending} />
        </mesh>
      </Float>

      <pointLight position={[0, 0, 0]} intensity={3} color="#E52B3B" distance={12} />
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
      <fog attach="fog" args={['#080607', 5, 25]} />
      <ambientLight intensity={0.15} />

      <Environment resolution={256}>
        <group rotation={[Math.PI / 3, 0, 0]}>
          <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} color="#FAF7F8" />
          <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 2, 1]} color="#E52B3B" />
        </group>
      </Environment>

      <EnergyCore />
    </>
  );
}
