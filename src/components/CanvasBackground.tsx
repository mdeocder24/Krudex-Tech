"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleNetwork = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  
  const particleCount = 120;
  const maxDistance = 2.5;

  // Generate random positions
  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const vel = [];
    
    for (let i = 0; i < particleCount; i++) {
      // Spread particles across a wide 3D space
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5; // Push slightly back
      
      vel.push({
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01,
        z: (Math.random() - 0.5) * 0.01,
      });
    }
    return [pos, vel];
  }, [particleCount]);

  // Create buffers for lines (max possible connections)
  const [linePositions, lineColors] = useMemo(() => {
    const maxLines = particleCount * particleCount;
    return [
      new Float32Array(maxLines * 6), // 2 points per line, 3 coords per point
      new Float32Array(maxLines * 6)  // 2 colors per line, 3 values per color
    ];
  }, [particleCount]);

  useFrame(() => {
    if (!pointsRef.current || !linesRef.current) return;
    
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
    
    // Update particle positions
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] += velocities[i].x;
      pos[i * 3 + 1] += velocities[i].y;
      pos[i * 3 + 2] += velocities[i].z;

      // Bounce off invisible boundaries
      if (Math.abs(pos[i * 3]) > 10) velocities[i].x *= -1;
      if (Math.abs(pos[i * 3 + 1]) > 5) velocities[i].y *= -1;
      if (pos[i * 3 + 2] > 0 || pos[i * 3 + 2] < -10) velocities[i].z *= -1;
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
          // Add line segment
          linePositions[lineIndex++] = pos[i * 3];
          linePositions[lineIndex++] = pos[i * 3 + 1];
          linePositions[lineIndex++] = pos[i * 3 + 2];
          
          linePositions[lineIndex++] = pos[j * 3];
          linePositions[lineIndex++] = pos[j * 3 + 1];
          linePositions[lineIndex++] = pos[j * 3 + 2];
          
          // Calculate opacity based on distance (closer = more opaque)
          // Green color: #22c55e (34, 197, 94) -> roughly 0.13, 0.77, 0.37
          const alpha = 1.0 - (dist / maxDistance);
          
          // Point 1 color
          lineColors[colorIndex++] = 0.13 * alpha;
          lineColors[colorIndex++] = 0.77 * alpha;
          lineColors[colorIndex++] = 0.37 * alpha;
          
          // Point 2 color
          lineColors[colorIndex++] = 0.13 * alpha;
          lineColors[colorIndex++] = 0.77 * alpha;
          lineColors[colorIndex++] = 0.37 * alpha;
        }
      }
    }
    
    // Update line geometry buffers
    const lineGeo = linesRef.current.geometry;
    lineGeo.setDrawRange(0, lineIndex / 3);
    lineGeo.attributes.position.needsUpdate = true;
    lineGeo.attributes.color.needsUpdate = true;
    
    // Subtle rotation of the whole system
    pointsRef.current.rotation.y += 0.0005;
    linesRef.current.rotation.y += 0.0005;
  });

  return (
    <group>
      {/* Particles */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial 
          size={0.03} 
          color="#22c55e" 
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>

      {/* Connecting Lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={lineColors.length / 3}
            array={lineColors}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial 
          vertexColors={true}
          transparent
          opacity={0.4}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
};

export default function CanvasBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <fog attach="fog" args={['#050505', 2, 12]} />
        <ParticleNetwork />
      </Canvas>
    </div>
  );
}
