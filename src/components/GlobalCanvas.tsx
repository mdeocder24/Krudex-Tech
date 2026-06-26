"use client";

import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleNetwork = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const groupRef = useRef<THREE.Group>(null);
  
  const particleCount = 200; // Increased density for global scale
  const maxDistance = 3.0;

  // Generate random positions
  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const vel = [];
    
    for (let i = 0; i < particleCount; i++) {
      // Spread particles across a massive vertical 3D space to cover scrolling
      pos[i * 3] = (Math.random() - 0.5) * 30; // X
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40; // Y (taller)
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15 - 5; // Z (depth)
      
      vel.push({
        x: (Math.random() - 0.5) * 0.015,
        y: (Math.random() - 0.5) * 0.015,
        z: (Math.random() - 0.5) * 0.015,
      });
    }
    return [pos, vel];
  }, [particleCount]);

  // Create buffers for lines
  const [linePositions, lineColors] = useMemo(() => {
    const maxLines = particleCount * particleCount;
    return [
      new Float32Array(maxLines * 6),
      new Float32Array(maxLines * 6)
    ];
  }, [particleCount]);

  useFrame(() => {
    if (!pointsRef.current || !linesRef.current || !groupRef.current) return;
    
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
    
    // Update particle positions
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] += velocities[i].x;
      pos[i * 3 + 1] += velocities[i].y;
      pos[i * 3 + 2] += velocities[i].z;

      // Bounce off boundaries
      if (Math.abs(pos[i * 3]) > 15) velocities[i].x *= -1;
      if (Math.abs(pos[i * 3 + 1]) > 20) velocities[i].y *= -1;
      if (pos[i * 3 + 2] > 5 || pos[i * 3 + 2] < -15) velocities[i].z *= -1;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Update lines based on distance
    let lineIndex = 0;
    let colorIndex = 0;
    
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < maxDistance) {
          linePositions[lineIndex++] = pos[i * 3];
          linePositions[lineIndex++] = pos[i * 3 + 1];
          linePositions[lineIndex++] = pos[i * 3 + 2];
          
          linePositions[lineIndex++] = pos[j * 3];
          linePositions[lineIndex++] = pos[j * 3 + 1];
          linePositions[lineIndex++] = pos[j * 3 + 2];
          
          const alpha = 1.0 - (dist / maxDistance);
          const c = 0.13 * alpha;
          const c2 = 0.77 * alpha;
          const c3 = 0.37 * alpha;
          
          lineColors[colorIndex++] = c; lineColors[colorIndex++] = c2; lineColors[colorIndex++] = c3;
          lineColors[colorIndex++] = c; lineColors[colorIndex++] = c2; lineColors[colorIndex++] = c3;
        }
      }
    }
    
    const lineGeo = linesRef.current.geometry;
    lineGeo.setDrawRange(0, lineIndex / 3);
    lineGeo.attributes.position.needsUpdate = true;
    lineGeo.attributes.color.needsUpdate = true;
    
    // Slow continuous rotation
    groupRef.current.rotation.y += 0.0005;
    groupRef.current.rotation.x += 0.0002;
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.04} color="#22c55e" transparent opacity={0.8} sizeAttenuation />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={linePositions.length / 3} array={linePositions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={lineColors.length / 3} array={lineColors} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial vertexColors={true} transparent opacity={0.6} blending={THREE.AdditiveBlending} />
      </lineSegments>
    </group>
  );
};

const ScrollCamera = () => {
  useFrame(({ camera }) => {
    // Parallax effect based on scroll
    // When user scrolls down, camera moves down through the network
    const scrollY = window.scrollY;
    // Map scroll pixels to 3D space movement
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, -(scrollY * 0.005), 0.05);
  });
  return null;
};

export default function GlobalCanvas() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#050505]">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <fog attach="fog" args={['#050505', 3, 20]} />
        <ScrollCamera />
        <ParticleNetwork />
      </Canvas>
    </div>
  );
}
