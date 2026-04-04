'use client';

import { animate, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: string | number;
  className?: string;
}

export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [hasDot, setHasDot] = useState(false);
  const [numericValue, setNumericValue] = useState(0);

  useEffect(() => {
    // Parse value, removing dot if it's there
    const strVal = String(value);
    if (strVal.includes('.')) {
      setHasDot(true);
      setNumericValue(Number(strVal.replace('.', '')));
    } else {
      setHasDot(false);
      setNumericValue(Number(strVal));
    }
  }, [value]);

  useEffect(() => {
    if (inView && numericValue > 0) {
      if (!ref.current) return;
      const controls = animate(0, numericValue, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(v) {
          if (!ref.current) return;
          const displayVal = Math.round(v);
          // Re-add dot format if necessary (specifically for thousands)
          if (hasDot && displayVal >= 1000) {
            ref.current.textContent = displayVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
          } else {
            ref.current.textContent = displayVal.toString();
          }
        }
      });
      return () => controls.stop();
    }
  }, [inView, numericValue, hasDot]);

  return <span ref={ref} className={className}>0</span>;
}
