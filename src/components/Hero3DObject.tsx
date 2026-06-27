"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Edges } from '@react-three/drei';
import * as THREE from 'three';

/* ─────────────────────────────────────────────
   Pillar Material — Vertical Gradient Shader
   ───────────────────────────────────────────── */
const pillarMaterial = new THREE.ShaderMaterial({
  uniforms: {
    colorTop: { value: new THREE.Color("#1a1a1a") }, // medium-dark gray
    colorBottom: { value: new THREE.Color("#000000") }, // solid black
    height: { value: 30.0 }, // default depth
  },
  vertexShader: `
    varying vec3 vPosition;
    void main() {
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 colorTop;
    uniform vec3 colorBottom;
    uniform float height;
    varying vec3 vPosition;
    void main() {
      // vPosition.y goes from -height/2 to height/2
      float normalizedY = (vPosition.y + (height / 2.0)) / height; 
      vec3 color = mix(colorBottom, colorTop, normalizedY);
      gl_FragColor = vec4(color, 1.0);
    }
  `,
});

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
    const t = 0.3; // Wider bloom spread thickness
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

  // Create an even larger, much softer frame for the outer glow
  const outerGlowGeometry = useMemo(() => {
    const t = 0.7; // Huge outer glow spread
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

        {/* Soft Bloom layers (transparent, additive blending) */}
        <mesh geometry={bloomGeometry} position={[0, 0, -0.01]}>
          <meshBasicMaterial color="#ffffff" transparent opacity={0.25} blending={THREE.AdditiveBlending} depthWrite={false} />
        </mesh>
        
        {/* Outer large diffuse glow */}
        <mesh geometry={outerGlowGeometry} position={[0, 0, -0.02]}>
          <meshBasicMaterial color="#ffffff" transparent opacity={0.08} blending={THREE.AdditiveBlending} depthWrite={false} />
        </mesh>
      </group>

      {/* 2. Top Dark Surface (inside the neon frame) */}
      <mesh position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[w, d]} />
        <meshBasicMaterial color="#1a1a1a" />
      </mesh>

      {/* 3. Pillar Body extending downwards into the fog */}
      <mesh position={[0, -depth / 2 - 0.02, 0]}>
        <boxGeometry args={[w, depth, d]} />
        {/* Custom shader for smooth vertical gradient fading into darkness */}
        <primitive object={pillarMaterial} attach="material" />
        {/* Subtle structural edge highlights to enhance the 3D volume */}
        <Edges scale={1.001} threshold={15} color="#ffffff" transparent opacity={0.1} />
      </mesh>
    </group>
  );
};

/* ─────────────────────────────────────────────
   Floating Figure (The Astronaut)
   ───────────────────────────────────────────── */
const FloatingFigure = ({ position }: { position: [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const t = clock.getElapsedTime();
      // Gentle floating bob around its initial position
      groupRef.current.position.y = position[1] + Math.sin(t * 1.5) * 0.15;
      // Slight rotation bobbing
      groupRef.current.rotation.x = Math.sin(t * 0.5) * 0.1;
      groupRef.current.rotation.z = Math.sin(t * 0.8) * 0.1;
    }
  });

  // Positioned exactly where specified
  return (
    <group ref={groupRef} position={position} scale={0.25} rotation={[0, -0.5, 0]}>
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
    <group position={[1.5, 1.5, 0]}>
      <ambientLight intensity={0.1} />

      {/* Main light from left to illuminate the left-facing walls of the pillars */}
      <directionalLight position={[-15, 10, 5]} intensity={1.5} color="#ffffff" />

      {/* Subtle fill light from right */}
      <directionalLight position={[15, 5, -5]} intensity={0.2} color="#ffffff" />

      {/* Deep fog to blend the pillars seamlessly into the pitch-black background */}
      <fog attach="fog" args={['#050505', 15, 45]} />

      {/* ── Platforms Stepping Up ── */}
      {/* 1. Lowest, largest, front-left */}
      <Platform position={[-2.5, -2.5, 2.5]} size={[3.5, 3.5]} />

      {/* 2. Middle, medium, center */}
      <Platform position={[0, -0.5, 0]} size={[2.5, 2.5]} />

      {/* 3. Highest, smallest, back-right */}
      <Platform position={[2.5, 1.5, -2.5]} size={[1.6, 1.6]} />

      {/* Tiny astronaut floating high between middle and top platform */}
      <FloatingFigure position={[1.25, 2.2, -1.25]} />
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
        // Camera positioned to perfectly frame the isometric layout on all screen sizes
        camera={{
          position: [0, 8, 20],
          fov: 30,
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
