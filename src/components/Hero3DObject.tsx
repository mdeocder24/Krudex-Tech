"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';

/* ─────────────────────────────────────────────
   Platform — Flat diamond with seamless neon edge and solid base
   ───────────────────────────────────────────── */
interface PlatformProps {
  position: [number, number, number];
  size: [number, number]; // width, depth (square)
}

const Platform = ({ position, size }: PlatformProps) => {
  const [w, d] = size;
  const depth = 30; // Depth of the pillar body for fading into fog

  const groupRef = useRef<THREE.Group>(null);

  // Create a seamless frame geometry using a Shape with a hole
  const frameGeometry = useMemo(() => {
    const t = 0.035; // Neon tube thickness
    const shape = new THREE.Shape();
    // Outer rectangle
    shape.moveTo(-w / 2 - t, -d / 2 - t);
    shape.lineTo(w / 2 + t, -d / 2 - t);
    shape.lineTo(w / 2 + t, d / 2 + t);
    shape.lineTo(-w / 2 - t, d / 2 + t);
    shape.lineTo(-w / 2 - t, -d / 2 - t);

    // Inner rectangle (hole)
    const hole = new THREE.Path();
    hole.moveTo(-w / 2, -d / 2);
    hole.lineTo(-w / 2, d / 2);
    hole.lineTo(w / 2, d / 2);
    hole.lineTo(w / 2, -d / 2);
    hole.lineTo(-w / 2, -d / 2);
    shape.holes.push(hole);

    return new THREE.ShapeGeometry(shape);
  }, [w, d]);

  // Create a larger, softer frame geometry for the bloom effect
  const bloomGeometry = useMemo(() => {
    const t = 0.15; // Bloom spread thickness
    const shape = new THREE.Shape();
    shape.moveTo(-w / 2 - t, -d / 2 - t);
    shape.lineTo(w / 2 + t, -d / 2 - t);
    shape.lineTo(w / 2 + t, d / 2 + t);
    shape.lineTo(-w / 2 - t, d / 2 + t);
    shape.lineTo(-w / 2 - t, -d / 2 - t);

    const hole = new THREE.Path();
    hole.moveTo(-w / 2, -d / 2);
    hole.lineTo(-w / 2, d / 2);
    hole.lineTo(w / 2, d / 2);
    hole.lineTo(w / 2, -d / 2);
    hole.lineTo(-w / 2, -d / 2);
    shape.holes.push(hole);

    return new THREE.ShapeGeometry(shape);
  }, [w, d]);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Very subtle floating motion for the whole platform
      groupRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() + position[0]) * 0.05;
    }
  });

  return (
    // Rotated 45 degrees to create the isometric diamond shape from the camera's perspective
    <group ref={groupRef} position={position} rotation={[0, Math.PI / 4, 0]}>

      {/* 1. Neon Glowing Edge Frame (Seamless) */}
      <group rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        {/* Core solid bright white frame */}
        <mesh geometry={frameGeometry}>
          <meshBasicMaterial color="#ffffff" />
        </mesh>

        {/* Soft Bloom layer (larger, transparent, additive blending) */}
        <mesh geometry={bloomGeometry} position={[0, 0, -0.01]}>
          <meshBasicMaterial color="#ffffff" transparent opacity={0.12} blending={THREE.AdditiveBlending} depthWrite={false} />
        </mesh>
      </group>

      {/* 2. Top Dark Surface (inside the neon frame) */}
      <mesh position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[w, d]} />
        <meshBasicMaterial color="#020202" />
      </mesh>

      {/* 3. Pillar Body extending downwards into the fog */}
      <mesh position={[0, -depth / 2 - 0.02, 0]}>
        <boxGeometry args={[w, depth, d]} />
        {/* Standard material to catch directional light on the sides */}
        <meshStandardMaterial color="#030303" metalness={0.1} roughness={0.9} />
      </mesh>
    </group>
  );
};

/* ─────────────────────────────────────────────
   Floating Figure (The Astronaut)
   ───────────────────────────────────────────── */
const FloatingFigure = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const t = clock.getElapsedTime();
      // Gentle floating bob
      groupRef.current.position.y = 1.0 + Math.sin(t * 1.5) * 0.15;
      // Slight rotation bobbing
      groupRef.current.rotation.x = Math.sin(t * 0.5) * 0.1;
      groupRef.current.rotation.z = Math.sin(t * 0.8) * 0.1;
    }
  });

  // Positioned carefully to sit exactly between the middle and top platforms
  return (
    <group ref={groupRef} position={[2.5, 1.0, -2.5]} scale={0.3} rotation={[0, -0.5, 0]}>
      {/* Head/Visor - metallic bronze */}
      <mesh position={[0, 1.0, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#b87333" roughness={0.2} metalness={0.9} />
      </mesh>

      {/* Torso */}
      <mesh position={[0, 0, 0]}>
        <capsuleGeometry args={[0.3, 0.8, 4, 8]} />
        <meshStandardMaterial color="#333333" roughness={0.7} metalness={0.3} />
      </mesh>

      {/* Left Arm */}
      <mesh position={[-0.4, 0.1, 0]} rotation={[0, 0, 0.6]}>
        <capsuleGeometry args={[0.1, 0.6, 4, 8]} />
        <meshStandardMaterial color="#222222" />
      </mesh>

      {/* Right Arm (raised) */}
      <mesh position={[0.4, 0.3, 0]} rotation={[0, 0, -2.5]}>
        <capsuleGeometry args={[0.1, 0.6, 4, 8]} />
        <meshStandardMaterial color="#222222" />
      </mesh>

      {/* Left Leg */}
      <mesh position={[-0.15, -0.8, 0]} rotation={[0, 0, 0.1]}>
        <capsuleGeometry args={[0.12, 0.6, 4, 8]} />
        <meshStandardMaterial color="#222222" />
      </mesh>

      {/* Right Leg */}
      <mesh position={[0.15, -0.7, -0.2]} rotation={[0.4, 0, -0.1]}>
        <capsuleGeometry args={[0.12, 0.6, 4, 8]} />
        <meshStandardMaterial color="#222222" />
      </mesh>
    </group>
  );
};

/* ─────────────────────────────────────────────
   Main Scene
   ───────────────────────────────────────────── */
const DataArchitectureScene = () => {
  return (
    <group position={[1.5, -0.5, 0]}>
      <ambientLight intensity={0.1} />

      {/* Main light from left to illuminate the left-facing walls of the pillars */}
      <directionalLight position={[-15, 10, 5]} intensity={1.5} color="#ffffff" />

      {/* Subtle fill light from right */}
      <directionalLight position={[15, 5, -5]} intensity={0.2} color="#ffffff" />

      {/* Deep fog to blend the pillars seamlessly into the pitch-black background */}
      <fog attach="fog" args={['#050505', 15, 45]} />

      {/* ── Platforms Stepping Up ── */}
      {/* 1. Lowest, largest, front-left */}
      <Platform position={[-4, -3.5, 4]} size={[5, 5]} />

      {/* 2. Middle, medium, center */}
      <Platform position={[0, -0.5, 0]} size={[3.5, 3.5]} />

      {/* 3. Highest, smallest, back-right */}
      <Platform position={[3.5, 2.5, -3.5]} size={[2.2, 2.2]} />

      {/* Tiny astronaut floating between middle and top platform */}
      <FloatingFigure />
    </group>
  );
};

/* ─────────────────────────────────────────────
   Exported Canvas Component
   ───────────────────────────────────────────── */
const Hero3DObject = () => {
  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none">
      <Canvas
        // Camera pulled back further and positioned perfectly for the isometric framing
        camera={{
          position: [0, 10, 26],
          fov: 25,
          near: 0.1,
          far: 100,
        }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        <DataArchitectureScene />
      </Canvas>
    </div>
  );
};

export default Hero3DObject;
