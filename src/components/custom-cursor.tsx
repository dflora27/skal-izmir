'use client';

import { useEffect, useState, useRef } from 'react';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const updatePosition = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        // Check for specific layout cursor manipulations
        target.closest('.cursor-none') || 
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition, { passive: true });
    window.addEventListener('mouseover', updateHoverState, { passive: true });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateHoverState);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div 
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] opacity-0 min-[1024px]:opacity-100 will-change-transform"
      style={{ left: 0, top: 0 }}
    >
        <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ease-out ${isHovering ? 'scale-[2] bg-[#0A192F]/5 border-transparent' : 'scale-100 border-[#0A192F]/40'}`}>
            <div className={`w-1.5 h-1.5 bg-[#0A192F] rounded-full transition-transform duration-300 ${isHovering ? 'scale-0' : 'scale-100'}`}></div>
        </div>
    </div>
  );
}
