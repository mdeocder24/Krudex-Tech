"use client";

import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';
import * as THREE from 'three';
import { useScroll } from 'framer-motion';

const ShatteredOrbital = () => {
  const instancedMeshRef = useRef<THREE.InstancedMesh>(null);
  const { scrollYProgress } = useScroll(); // Tracks native page scroll (0 to 1)
  
  const particleCount = 600;

  // Generate 3 sets of positions for the choreography
  const { startPositions, tunnelPositions, corePositions, rotations, randomSpeeds } = useMemo(() => {
    const start = [];
    const tunnel = [];
    const core = [];
    const rots = [];
    const speeds = [];

    for (let i = 0; i < particleCount; i++) {
      // 1. Torus Knot Phase (Start)
      const t = (i / particleCount) * Math.PI * 2;
      const p = 2;
      const q = 3;
      const r = 2; // radius
      const x = r * (2 + Math.cos(q * t)) * Math.cos(p * t);
      const y = r * (2 + Math.cos(q * t)) * Math.sin(p * t);
      const z = r * Math.sin(q * t);
      
      // Add slight noise to knot
      start.push(new THREE.Vector3(
        x * 0.4 + (Math.random() - 0.5) * 0.5, 
        y * 0.4 + (Math.random() - 0.5) * 0.5, 
        z * 0.4 + (Math.random() - 0.5) * 0.5
      ));

      // 2. Tunnel Phase (Mid)
      const tunnelRadius = 4 + Math.random() * 6;
      const tunnelAngle = Math.random() * Math.PI * 2;
      const tunnelDepth = (Math.random() - 0.2) * 40; // Spread out along Z
      tunnel.push(new THREE.Vector3(
        Math.cos(tunnelAngle) * tunnelRadius,
        Math.sin(tunnelAngle) * tunnelRadius,
        tunnelDepth
      ));

      // 3. Data Core Phase (End)
      const coreRadius = Math.random() * 2.5;
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      core.push(new THREE.Vector3(
        coreRadius * Math.sin(phi) * Math.cos(theta),
        coreRadius * Math.sin(phi) * Math.sin(theta),
        coreRadius * Math.cos(phi) - 15 // Move it back in Z
      ));

      rots.push(new THREE.Euler(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI));
      speeds.push(Math.random() * 2 + 0.5);
    }
    
    return { startPositions: start, tunnelPositions: tunnel, corePositions: core, rotations: rots, randomSpeeds: speeds };
  }, [particleCount]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(({ clock, pointer, viewport }) => {
    if (!instancedMeshRef.current) return;
    const time = clock.getElapsedTime();
    const scroll = scrollYProgress.get(); 

    // Convert mouse NDC to world coordinates at roughly Z=0
    const mousePos = new THREE.Vector3(
      (pointer.x * viewport.width) / 2,
      (pointer.y * viewport.height) / 2,
      instancedMeshRef.current.position.z
    );

    for (let i = 0; i < particleCount; i++) {
      const startP = startPositions[i];
      const tunnelP = tunnelPositions[i];
      const coreP = corePositions[i];
      
      const speed = randomSpeeds[i];
      const baseRot = rotations[i];
      
      let currentPos = new THREE.Vector3();
      
      if (scroll < 0.4) {
        const progress = scroll / 0.4;
        const ease = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        currentPos.lerpVectors(startP, tunnelP, ease);
      } else if (scroll < 0.6) {
        currentPos.copy(tunnelP);
      } else {
        const progress = (scroll - 0.6) / 0.4;
        const ease = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        currentPos.lerpVectors(tunnelP, coreP, ease);
      }

      currentPos.y += Math.sin(time * speed + i) * 0.1;
      currentPos.x += Math.cos(time * speed * 0.8 + i) * 0.1;

      // Pointer Interactivity (Repulsion)
      // Check distance from mouse to this particle
      const dist = currentPos.distanceTo(mousePos);
      if (dist < 3) {
        const dir = currentPos.clone().sub(mousePos).normalize();
        const force = (3 - dist) * 0.8; // Repulsion strength
        currentPos.add(dir.multiplyScalar(force));
      }

      dummy.position.copy(currentPos);
      dummy.rotation.set(
        baseRot.x + time * speed * 0.2,
        baseRot.y + time * speed * 0.3,
        baseRot.z
      );
      
      let scale = 1;
      if (scroll > 0.6) {
        const pulse = Math.sin(time * 3 + i) * 0.2;
        scale = 1 + pulse * ((scroll - 0.6) / 0.4); 
      }
      
      // Scale up when hovered
      if (dist < 2) {
        scale += (2 - dist) * 0.5;
      }
      
      dummy.scale.set(scale, scale, scale);
      
      dummy.updateMatrix();
      instancedMeshRef.current.setMatrixAt(i, dummy.matrix);
    }
    
    instancedMeshRef.current.instanceMatrix.needsUpdate = true;
    instancedMeshRef.current.rotation.y = time * 0.05;
  });

  return (
    <instancedMesh ref={instancedMeshRef} args={[undefined, undefined, particleCount]} position={[0, 0, -5]}>
      {/* We use an octahedron to simulate floating glass shards */}
      <octahedronGeometry args={[0.3, 0]} />
      <meshPhysicalMaterial 
        color="#bfdbfe"
        transmission={0.9}
        opacity={1}
        metalness={0.1}
        roughness={0.1}
        ior={1.5}
        thickness={0.5}
        envMapIntensity={2}
      />
    </instancedMesh>
  );
};

export default function HomeScene() {
  const { scrollYProgress } = useScroll();
  
  useFrame(({ camera }) => {
    const scroll = scrollYProgress.get();
    
    // Camera dives into the scene dramatically as you scroll
    // 0% -> Z=8
    // 50% -> Z=-10 (Inside the tunnel)
    // 100% -> Z=-15 (Looking at the core)
    
    let targetZ = 8;
    let targetY = 1;
    
    if (scroll < 0.5) {
      targetZ = THREE.MathUtils.lerp(8, -10, scroll * 2);
    } else {
      targetZ = THREE.MathUtils.lerp(-10, -15, (scroll - 0.5) * 2);
    }
    
    // Smooth camera movement
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05);
  });

  return (
    <>
      <fog attach="fog" args={['#050505', 2, 20]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#60a5fa" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#1d4ed8" />
      
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer form="circle" intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} color="#3b82f6" />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} color="#bfdbfe" />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[5, 1, -1]} scale={2} color="#1e3a8a" />
          <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} color="#93c5fd" />
        </group>
      </Environment>

      <ShatteredOrbital />
    </>
  );
}
