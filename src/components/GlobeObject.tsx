"use client";

import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

const MARKERS = [
  { location: [37.7595, -122.4367] as [number, number], size: 0.07 }, // San Francisco
  { location: [40.7128, -74.0060] as [number, number], size: 0.07 }, // New York
  { location: [51.5074, -0.1278] as [number, number], size: 0.06 },  // London
  { location: [1.3521, 103.8198] as [number, number], size: 0.06 },  // Singapore
  { location: [35.6762, 139.6503] as [number, number], size: 0.05 }, // Tokyo
  { location: [48.8566, 2.3522] as [number, number], size: 0.05 },   // Paris
  { location: [-33.8688, 151.2093] as [number, number], size: 0.05 },// Sydney
  { location: [25.2048, 55.2708] as [number, number], size: 0.05 },  // Dubai
  { location: [19.0760, 72.8777] as [number, number], size: 0.04 },  // Mumbai
  { location: [-23.5505, -46.6333] as [number, number], size: 0.05 },// São Paulo
];

export default function GlobeObject() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phi = useRef(0);
  const isDragging = useRef(false);
  const lastX = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let width = canvas.offsetWidth;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: phi.current,
      theta: 0.3,
      dark: 1,
      diffuse: 1.4,
      mapSamples: 16000,
      mapBrightness: 2.8,
      baseColor: [0.05, 0.05, 0.05],
      markerColor: [0.769, 0.604, 0.235],
      glowColor: [0.12, 0.12, 0.12],
      markers: MARKERS,
    });

    let raf: number;
    const animate = () => {
      if (!isDragging.current) {
        phi.current += 0.003;
      }
      width = canvas.offsetWidth;
      globe.update({
        phi: phi.current,
        width: width * 2,
        height: width * 2,
      });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const handleResize = () => { width = canvas.offsetWidth; };
    window.addEventListener('resize', handleResize);

    return () => {
      globe.destroy();
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Ambient golden glow behind the globe */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[65%] aspect-square rounded-full bg-[#c49a3c]/6 blur-[100px]" />
      </div>
      <canvas
        ref={canvasRef}
        className="w-full aspect-square max-w-[600px] cursor-grab active:cursor-grabbing"
        style={{ contain: 'layout paint size' }}
        onPointerDown={(e) => {
          (e.target as HTMLCanvasElement).setPointerCapture(e.pointerId);
          isDragging.current = true;
          lastX.current = e.clientX;
        }}
        onPointerUp={() => { isDragging.current = false; }}
        onPointerOut={() => { isDragging.current = false; }}
        onPointerMove={(e) => {
          if (isDragging.current) {
            const delta = e.clientX - lastX.current;
            phi.current += delta / 200;
            lastX.current = e.clientX;
          }
        }}
      />
    </div>
  );
}
