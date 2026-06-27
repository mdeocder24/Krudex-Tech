"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';

/* ─────────────────────────────────────────────
   Glowing Platform — Dark slab with white edge glow
   ───────────────────────────────────────────── */
interface GlowPlatformProps {
  position: [number, number, number];
  size: [number, number, number];
  rotation?: [number, number, number];
  edgeOpacity?: number;
  edgeColor?: string;
}

const GlowPlatform = ({
  position,
  size,
  rotation = [0, 0, 0],
  edgeOpacity = 0.7,
  edgeColor = '#ffffff',
}: GlowPlatformProps) => {
  const edgesRef = useRef<THREE.LineSegments>(null);

  const edgesGeo = useMemo(() => {
    const box = new THREE.BoxGeometry(size[0], size[1], size[2]);
    return new THREE.EdgesGeometry(box);
  }, [size]);

  useFrame(({ clock }) => {
    if (edgesRef.current) {
      const mat = edgesRef.current.material as THREE.LineBasicMaterial;
      mat.opacity = edgeOpacity + Math.sin(clock.getElapsedTime() * 1.5) * 0.08;
    }
  });

  return (
    <group position={position} rotation={rotation}>
      {/* Dark surface body */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={size} />
        <meshStandardMaterial
          color="#080808"
          metalness={0.92}
          roughness={0.25}
          envMapIntensity={0.5}
        />
      </mesh>

      {/* Top face — slightly lighter for depth */}
      <mesh position={[0, size[1] / 2 + 0.001, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[size[0] - 0.02, size[2] - 0.02]} />
        <meshStandardMaterial
          color="#0e0e0e"
          metalness={0.95}
          roughness={0.15}
          envMapIntensity={0.8}
        />
      </mesh>

      {/* Bright white glowing edges */}
      <lineSegments ref={edgesRef} geometry={edgesGeo}>
        <lineBasicMaterial
          color={edgeColor}
          transparent
          opacity={edgeOpacity}
          linewidth={1}
        />
      </lineSegments>

      {/* Second edge pass — additive blend for glow bloom */}
      <lineSegments geometry={edgesGeo}>
        <lineBasicMaterial
          color="#ffffff"
          transparent
          opacity={edgeOpacity * 0.4}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* Edge glow — top face outline using thin planes */}
      {/* Top edge strip */}
      <mesh position={[0, size[1] / 2 + 0.005, size[2] / 2]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[size[0], 0.03]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.5} blending={THREE.AdditiveBlending} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, size[1] / 2 + 0.005, -size[2] / 2]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[size[0], 0.03]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.5} blending={THREE.AdditiveBlending} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[size[0] / 2, size[1] / 2 + 0.005, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <planeGeometry args={[size[2], 0.03]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.5} blending={THREE.AdditiveBlending} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[-size[0] / 2, size[1] / 2 + 0.005, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <planeGeometry args={[size[2], 0.03]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.5} blending={THREE.AdditiveBlending} side={THREE.DoubleSide} />
      </mesh>

      {/* Subtle inner glow plane on top face */}
      <mesh position={[0, size[1] / 2 + 0.003, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[size[0] * 0.95, size[2] * 0.95]} />
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.02}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
};

/* ─────────────────────────────────────────────
   Ambient Dust Particles
   ───────────────────────────────────────────── */
const AmbientDust = ({ count = 60 }) => {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 16;
    }
    return pos;
  }, [count]);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = clock.getElapsedTime() * 0.01;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#ffffff"
        transparent
        opacity={0.15}
        sizeAttenuation
      />
    </points>
  );
};

/* ─────────────────────────────────────────────
   Platform Stack — The cascading 3D architecture
   ───────────────────────────────────────────── */
const PlatformStack = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Very slow, gentle rotation
      groupRef.current.rotation.y = -0.4 + Math.sin(clock.getElapsedTime() * 0.15) * 0.08;
    }
  });

  return (
    <group ref={groupRef} rotation={[0.35, -0.4, 0]}>
      {/* Bottom — Largest platform */}
      <GlowPlatform
        position={[0, -1.8, 0]}
        size={[4.5, 0.18, 3.0]}
        edgeOpacity={0.85}
      />

      {/* Middle — Medium platform */}
      <GlowPlatform
        position={[0.3, 0, 0.1]}
        size={[3.5, 0.16, 2.4]}
        edgeOpacity={0.75}
      />

      {/* Upper — Smaller platform */}
      <GlowPlatform
        position={[0.5, 1.7, 0.2]}
        size={[2.6, 0.14, 1.8]}
        edgeOpacity={0.65}
      />

      {/* Top — Smallest platform */}
      <GlowPlatform
        position={[0.7, 3.2, 0.3]}
        size={[1.8, 0.12, 1.3]}
        edgeOpacity={0.55}
      />
    </group>
  );
};

/* ─────────────────────────────────────────────
   Main Scene
   ───────────────────────────────────────────── */
const DataArchitectureScene = () => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.08} />

      {/* Key light — warm amber from behind-right */}
      <directionalLight
        position={[4, 3, -5]}
        intensity={2.5}
        color="#c49a3c"
        castShadow
      />

      {/* Fill light — subtle cool from left */}
      <directionalLight
        position={[-6, 2, 3]}
        intensity={0.3}
        color="#8899bb"
      />

      {/* Top light — white for edge highlights */}
      <directionalLight
        position={[0, 8, 2]}
        intensity={0.5}
        color="#ffffff"
      />

      {/* Rim light — warm from below-right for edge highlights */}
      <pointLight
        position={[3, -3, -2]}
        intensity={12}
        color="#b08030"
        distance={14}
        decay={2}
      />

      {/* Warm glow behind platforms */}
      <pointLight
        position={[1, 0, -4]}
        intensity={25}
        color="#a07828"
        distance={18}
        decay={2}
      />

      {/* Secondary warm fill from below */}
      <pointLight
        position={[-1, -4, -2]}
        intensity={8}
        color="#c49a3c"
        distance={12}
        decay={2}
      />

      {/* Environment for metallic reflections */}
      <Environment preset="night" />

      {/* Platform stack */}
      <PlatformStack />

      {/* Atmospheric dust */}
      <AmbientDust count={50} />

      {/* Fog for depth fade */}
      <fog attach="fog" args={['#050505', 6, 22]} />
    </>
  );
};

/* ─────────────────────────────────────────────
   Exported Canvas Component
   ───────────────────────────────────────────── */
const Hero3DObject = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{
          position: [5, 3.5, 7],
          fov: 40,
          near: 0.1,
          far: 50,
        }}
        shadows
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
