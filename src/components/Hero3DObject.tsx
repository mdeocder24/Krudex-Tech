"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PresentationControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Procedural Data Particles flowing vertically
const DataParticles = ({ count = 40 }) => {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Create initial random positions and speeds
  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      // X and Z scattered within the bounds of the slabs
      pos[i * 3] = (Math.random() - 0.5) * 3.5;
      // Y starts at random heights between bottom and top slab
      pos[i * 3 + 1] = (Math.random() - 0.5) * 4;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 3.5;
      // Speed moving upwards
      spd[i] = 0.02 + Math.random() * 0.05;
    }
    return [pos, spd];
  }, [count]);

  useFrame(() => {
    if (!pointsRef.current) return;
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] += speeds[i];
      // If particle reaches the top, reset it to the bottom
      if (pos[i * 3 + 1] > 2.5) {
        pos[i * 3 + 1] = -2.5;
        // Randomize X and Z slightly on reset for organic feel
        pos[i * 3] = (Math.random() - 0.5) * 3.5;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 3.5;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#22c55e" transparent opacity={0.8} blending={THREE.AdditiveBlending} />
    </points>
  );
};

const ArchitectureCore = () => {
  const groupRef = useRef<THREE.Group>(null);

  // Slowly rotate the entire structure
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
    }
  });

  // Shared glass material for the architecture layers
  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: '#050505',
    metalness: 0.9,
    roughness: 0.1,
    transmission: 0.9, // glass-like transmission
    thickness: 0.5,
    envMapIntensity: 2.0,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    transparent: true,
    opacity: 0.7,
  });

  // Glowing wireframe material for the edges and AI core
  const glowMaterial = new THREE.MeshBasicMaterial({
    color: '#22c55e',
    wireframe: true,
    transparent: true,
    opacity: 0.15,
  });

  return (
    <group ref={groupRef}>
      {/* Top Layer: Frontend / UI */}
      <group position={[0, 1.8, 0]}>
        <mesh material={glassMaterial}>
          <boxGeometry args={[4, 0.2, 4]} />
        </mesh>
        <mesh material={glowMaterial} scale={1.01}>
          <boxGeometry args={[4, 0.2, 4]} />
        </mesh>
      </group>

      {/* Middle Layer: Backend / Logic */}
      <group position={[0, 0, 0]}>
        <mesh material={glassMaterial}>
          <boxGeometry args={[3.8, 0.3, 3.8]} />
        </mesh>
        <mesh material={glowMaterial} scale={1.01}>
          <boxGeometry args={[3.8, 0.3, 3.8]} />
        </mesh>
      </group>

      {/* Bottom Layer: AI Core / Database */}
      <group position={[0, -1.8, 0]}>
        <mesh material={glassMaterial}>
          <boxGeometry args={[4.2, 0.4, 4.2]} />
        </mesh>
        {/* Dense grid representing AI compute */}
        <mesh scale={1.01}>
          <boxGeometry args={[4.2, 0.4, 4.2]} />
          <meshBasicMaterial color="#22c55e" wireframe={true} transparent={true} opacity={0.4} />
        </mesh>
        {/* Inner AI Core Engine Block */}
        <mesh position={[0, 0.4, 0]}>
          <boxGeometry args={[1.5, 0.8, 1.5]} />
          <meshBasicMaterial color="#22c55e" wireframe={true} transparent={true} opacity={0.6} />
        </mesh>
      </group>

      {/* Data Flow */}
      <DataParticles count={80} />
      
      {/* Central Axis Beam */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 5, 8]} />
        <meshBasicMaterial color="#22c55e" transparent={true} opacity={0.5} blending={THREE.AdditiveBlending} />
      </mesh>
    </group>
  );
};

const Hero3DObject = () => {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
        {/* High-contrast environment for striking glass reflections */}
        <Environment preset="city" />
        
        {/* Subtle ambient light */}
        <ambientLight intensity={0.2} />
        
        {/* Dramatic directional lights */}
        <directionalLight position={[5, 10, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-5, -10, -5]} intensity={1} color="#22c55e" />

        <PresentationControls 
          global={false} 
          config={{ mass: 2, tension: 500 }} 
          snap={{ mass: 4, tension: 1500 }} 
          rotation={[0.2, -0.4, 0]} 
          polar={[-Math.PI / 4, Math.PI / 4]} 
          azimuth={[-Math.PI / 3, Math.PI / 3]}
        >
          <Float 
            speed={1.5} 
            rotationIntensity={0.5} 
            floatIntensity={1} 
            floatingRange={[-0.1, 0.1]}
          >
            <ArchitectureCore />
          </Float>
        </PresentationControls>
      </Canvas>
    </div>
  );
};

export default Hero3DObject;
