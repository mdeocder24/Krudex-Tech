"use client";

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Environment, Lightformer } from '@react-three/drei';
import * as THREE from 'three';

const Monoliths = () => {
  const groupRef = useRef<THREE.Group>(null);
  const monolithsRef = useRef<(THREE.Mesh | null)[]>([]);
  
  const blocks = useMemo(() => {
    const items = [];
    for (let i = 0; i < 12; i++) {
      items.push({
        position: [
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10
        ],
        scale: [
          1 + Math.random() * 2,
          4 + Math.random() * 6,
          1 + Math.random() * 2
        ],
        rotation: [
          Math.random() * 0.2,
          Math.random() * Math.PI,
          Math.random() * 0.2
        ],
        speed: 0.1 + Math.random() * 0.3,
        // Store initial positions for scroll scattering
        initPos: [
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10
        ]
      });
    }
    return items;
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05;
      
      const scrollY = window.scrollY;
      
      // Scatter monoliths as user scrolls
      blocks.forEach((b, i) => {
        const mesh = monolithsRef.current[i];
        if (mesh) {
          // Push them outward based on scroll
          const scatterFactor = scrollY * 0.005;
          const direction = new THREE.Vector3(...b.initPos).normalize();
          
          mesh.position.x = b.initPos[0] + direction.x * scatterFactor * b.speed * 10;
          mesh.position.y = b.initPos[1] + direction.y * scatterFactor * b.speed * 10;
          mesh.position.z = b.initPos[2] + direction.z * scatterFactor * b.speed * 10;
          
          // Add some spin
          mesh.rotation.y = b.rotation[1] + scrollY * 0.001 * b.speed;
        }
      });
    }
  });

  return (
    <group ref={groupRef} position={[0, -2, -15]}>
      {blocks.map((b, i) => (
        <Float key={i} speed={b.speed} rotationIntensity={0.2} floatIntensity={2} floatingRange={[-1, 1]}>
          <mesh 
            ref={(el) => { monolithsRef.current[i] = el; }}
            position={b.initPos as [number, number, number]} 
            scale={b.scale as [number, number, number]}
            rotation={b.rotation as [number, number, number]}
          >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial 
              color="#0a0a0a" 
              metalness={0.8} 
              roughness={0.2}
              envMapIntensity={2}
            />
          </mesh>
        </Float>
      ))}
      
      {/* Central massive monolith */}
      <Float speed={0.5} rotationIntensity={0} floatIntensity={1} floatingRange={[-0.5, 0.5]}>
        <mesh position={[4, 0, -5]}>
          <boxGeometry args={[3, 12, 3]} />
          <meshPhysicalMaterial 
            color="#050505"
            metalness={0.9}
            roughness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            envMapIntensity={3}
          />
        </mesh>
      </Float>
    </group>
  );
};

export default function ServicesScene() {
  useFrame(({ camera }) => {
    const scrollY = window.scrollY;
    // Camera pulls back and rises up to see the scattering
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 10 + (scrollY * 0.005), 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 2 + (scrollY * 0.003), 0.05);
  });

  return (
    <>
      <fog attach="fog" args={['#050505', 10, 35]} />
      <ambientLight intensity={0.1} />
      
      <spotLight position={[15, 20, 10]} angle={0.3} penumbra={1} intensity={5} color="#3b82f6" castShadow />
      <directionalLight position={[-10, -10, -10]} intensity={2} color="#1d4ed8" />

      <Environment resolution={256}>
        <group rotation={[-Math.PI / 4, 0, 0]}>
          <Lightformer form="rect" intensity={10} position={[0, 10, -10]} scale={[20, 2, 1]} color="#60a5fa" />
          <Lightformer form="rect" intensity={5} position={[-10, 0, -10]} scale={[2, 20, 1]} color="#1e3a8a" />
        </group>
      </Environment>

      <Monoliths />
    </>
  );
}
