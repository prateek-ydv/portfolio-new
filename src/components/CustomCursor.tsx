"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const addHoverListeners = () => {
      const hoverables = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, [data-hoverable]'
      );
      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    window.addEventListener("mousemove", updateMousePosition);
    addHoverListeners();

    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      observer.disconnect();
    };
  }, []);

  if (!isMounted) return null;

  return (
    <>
      {/* Crosshair cursor */}
      <motion.div
        className="fixed pointer-events-none z-[99999] hidden md:flex items-center justify-center"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div
          className={`relative w-6 h-6 transition-all duration-200 ${
            isHovering ? "text-[#39ff14]" : "text-[#8b949e]"
          }`}
        >
          {/* Horizontal line */}
          <div
            className={`absolute top-1/2 left-0 w-full h-px -translate-y-1/2 transition-all ${
              isHovering ? "bg-[#39ff14] shadow-[0_0_10px_#39ff14]" : "bg-current"
            }`}
          />
          {/* Vertical line */}
          <div
            className={`absolute left-1/2 top-0 h-full w-px -translate-x-1/2 transition-all ${
              isHovering ? "bg-[#39ff14] shadow-[0_0_10px_#39ff14]" : "bg-current"
            }`}
          />
          {/* Center dot */}
          <div
            className={`absolute top-1/2 left-1/2 w-1 h-1 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all ${
              isHovering ? "bg-[#39ff14] shadow-[0_0_8px_#39ff14]" : "bg-current"
            }`}
          />
        </div>
      </motion.div>

      {/* Trailing glow on hover */}
      {isHovering && (
        <motion.div
          className="fixed pointer-events-none z-[99998] hidden md:block"
          animate={{
            x: mousePosition.x - 20,
            y: mousePosition.y - 20,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
        >
          <div className="w-10 h-10 rounded-full bg-[#39ff14]/10 blur-md" />
        </motion.div>
      )}
    </>
  );
}
