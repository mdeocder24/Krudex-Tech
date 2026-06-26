"use client";

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ArchitectureGeometry = () => {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const outerRef1 = useRef<THREE.Mesh>(null);
  const outerRef2 = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current || !coreRef.current || !outerRef1.current || !outerRef2.current) return;
    
    const t = clock.getElapsedTime();
    
    groupRef.current.rotation.y = t * 0.1;
    groupRef.current.position.y = Math.sin(t * 0.5) * 0.5;

    coreRef.current.rotation.x = t * 0.2;
    coreRef.current.rotation.y = t * 0.3;

    outerRef1.current.rotation.x = -t * 0.15;
    outerRef1.current.rotation.z = t * 0.2;

    outerRef2.current.rotation.y = -t * 0.25;
    outerRef2.current.rotation.z = -t * 0.1;
  });

  return (
    <group ref={groupRef} position={[4, 0, -8]}>
      {/* Core solid structure */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial color="#050505" emissive="#3b82f6" emissiveIntensity={0.2} wireframe={false} />
      </mesh>
      
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshBasicMaterial color="#3b82f6" wireframe={true} transparent opacity={0.5} blending={THREE.AdditiveBlending} />
      </mesh>

      {/* Outer wireframe structures */}
      <mesh ref={outerRef1}>
        <boxGeometry args={[4, 4, 4]} />
        <meshBasicMaterial color="#3b82f6" wireframe={true} transparent opacity={0.3} blending={THREE.AdditiveBlending} />
      </mesh>

      <mesh ref={outerRef2}>
        <octahedronGeometry args={[5, 0]} />
        <meshBasicMaterial color="#3b82f6" wireframe={true} transparent opacity={0.15} blending={THREE.AdditiveBlending} />
      </mesh>
      
      {/* Background grid */}
      <gridHelper args={[40, 40, '#3b82f6', '#3b82f6']} position={[0, -5, 0]} material-transparent material-opacity={0.1} />
    </group>
  );
};

export default function ServicesScene() {
  useFrame(({ camera }) => {
    const scrollY = window.scrollY;
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 8 - (scrollY * 0.002), 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, -(scrollY * 0.003), 0.05);
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, 0, 0.05);
  });

  return (
    <>
      <fog attach="fog" args={['#050505', 5, 25]} />
      <ambientLight intensity={1} />
      <ArchitectureGeometry />
    </>
  );
}
