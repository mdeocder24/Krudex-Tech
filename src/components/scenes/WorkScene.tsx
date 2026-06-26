"use client";

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Environment, Lightformer } from '@react-three/drei';
import * as THREE from 'three';

const GlassGallery = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  const panels = useMemo(() => {
    const items = [];
    for (let i = 0; i < 25; i++) {
      const radius = 8 + Math.random() * 10;
      const angle = (i / 25) * Math.PI * 2;
      const height = (Math.random() - 0.5) * 8;
      
      items.push({
        position: [
          Math.cos(angle) * radius,
          height,
          Math.sin(angle) * radius
        ],
        rotation: [
          (Math.random() - 0.5) * 0.5,
          -angle + Math.PI / 2, // Face inwards roughly
          0
        ],
        scale: [
          2 + Math.random() * 2,
          3 + Math.random() * 2,
          0.1
        ]
      });
    }
    return items;
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * -0.05;
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.2) * 1;
    }
  });

  return (
    <group ref={groupRef} position={[0, -2, -10]}>
      {panels.map((p, i) => (
        <Float key={i} speed={1} rotationIntensity={0.1} floatIntensity={0.5} floatingRange={[-0.5, 0.5]}>
          <mesh 
            position={p.position as [number, number, number]}
            rotation={p.rotation as [number, number, number]}
            scale={p.scale as [number, number, number]}
          >
            <boxGeometry args={[1, 1, 1]} />
            <meshPhysicalMaterial 
              color="#bfdbfe"
              transmission={1}
              opacity={1}
              metalness={0.1}
              roughness={0.2}
              ior={1.4}
              thickness={0.5}
              envMapIntensity={2}
            />
          </mesh>
        </Float>
      ))}
      
      {/* Central light source inside the ring */}
      <pointLight position={[0, 0, 0]} intensity={5} color="#3b82f6" distance={20} />
    </group>
  );
};

export default function WorkScene() {
  useFrame(({ camera }) => {
    const scrollY = window.scrollY;
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 5 - (scrollY * 0.002), 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 1 - (scrollY * 0.002), 0.05);
  });

  return (
    <>
      <fog attach="fog" args={['#050505', 5, 25]} />
      <ambientLight intensity={0.2} />
      
      <Environment resolution={256}>
        <group rotation={[0, 0, 0]}>
          <Lightformer form="rect" intensity={5} position={[0, 5, -10]} scale={[20, 20, 1]} color="#60a5fa" />
          <Lightformer form="circle" intensity={10} position={[10, 0, -10]} scale={5} color="#1d4ed8" />
        </group>
      </Environment>

      <GlassGallery />
    </>
  );
}
