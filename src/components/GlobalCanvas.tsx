"use client";

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

// Import Scenes
import HomeScene from './scenes/HomeScene';
import AboutScene from './scenes/AboutScene';
import ServicesScene from './scenes/ServicesScene';
import WorkScene from './scenes/WorkScene';
import ContactScene from './scenes/ContactScene';

export default function GlobalCanvas() {
  const pathname = usePathname();

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#050505]">
      {/* We use a simple fade transition when the route changes */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full"
        >
          <Canvas camera={{ position: [0, 2, 8], fov: 60 }}>
            <Suspense fallback={null}>
              {pathname === '/' && <HomeScene />}
              {pathname === '/about' && <AboutScene />}
              {pathname === '/services' && <ServicesScene />}
              {pathname === '/work' && <WorkScene />}
              {pathname === '/contact' && <ContactScene />}
              {/* Fallback to HomeScene if route not matched explicitly */}
              {pathname !== '/' && 
               pathname !== '/about' && 
               pathname !== '/services' && 
               pathname !== '/work' && 
               pathname !== '/contact' && <HomeScene />}
            </Suspense>
          </Canvas>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
