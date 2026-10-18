import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

type Options = {
  once?: boolean;
  margin?: string;
};

export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: Options = {}
) {
  const { once = true, margin = '-80px 0px 0px 0px' } = options;
  const ref = useRef<T | null>(null);
  const inView = useInView(ref, { once, margin: margin as never });
  return { ref, inView };
}

export function useCountUp(target: number, duration = 1400, start = false) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration, start]);

  return Math.round(value);
}
