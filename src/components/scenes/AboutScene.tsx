"use client";

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Constellation = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const groupRef = useRef<THREE.Group>(null);
  
  const particleCount = 150;
  const maxDistance = 4.0;

  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const vel = [];
    
    for (let i = 0; i < particleCount; i++) {
      // Sphere distribution
      const r = 8 + Math.random() * 4;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      
      vel.push({
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01,
        z: (Math.random() - 0.5) * 0.01,
      });
    }
    return [pos, vel];
  }, [particleCount]);

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
    
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] += velocities[i].x;
      pos[i * 3 + 1] += velocities[i].y;
      pos[i * 3 + 2] += velocities[i].z;

      // Keep within sphere loosely
      const dist = Math.sqrt(pos[i*3]**2 + pos[i*3+1]**2 + pos[i*3+2]**2);
      if (dist > 15) {
        velocities[i].x *= -1;
        velocities[i].y *= -1;
        velocities[i].z *= -1;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;

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
    
    groupRef.current.rotation.y += 0.001;
    groupRef.current.rotation.x += 0.0005;
  });

  return (
    <group ref={groupRef} position={[5, 0, -5]}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.06} color="#22c55e" transparent opacity={0.8} sizeAttenuation blending={THREE.AdditiveBlending} />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
          <bufferAttribute attach="attributes-color" args={[lineColors, 3]} />
        </bufferGeometry>
        <lineBasicMaterial vertexColors={true} transparent opacity={0.6} blending={THREE.AdditiveBlending} />
      </lineSegments>
    </group>
  );
};

export default function AboutScene() {
  useFrame(({ camera }) => {
    const scrollY = window.scrollY;
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 10 - (scrollY * 0.002), 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, -(scrollY * 0.002), 0.05);
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, 0, 0.05);
  });

  return (
    <>
      <fog attach="fog" args={['#050505', 5, 25]} />
      <Constellation />
    </>
  );
}
