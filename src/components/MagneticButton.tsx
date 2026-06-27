"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  as?: any;
  href?: string;
  className?: string;
}

export default function MagneticButton({ children, as: Component = "button", href, className, ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Create physics-based springs for the x and y offset
  const springX = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
  
  // To handle hover state
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calculate distance from center of the button
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    // Apply a scaling factor to control the magnetic pull strength
    springX.set(x * 0.3);
    springY.set(y * 0.3);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    springX.set(0);
    springY.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const MotionComponent = motion(Component);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{ x: springX, y: springY }}
      className="inline-block relative z-10"
    >
      <MotionComponent
        href={href}
        className={className}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {children}
      </MotionComponent>
    </motion.div>
  );
}
