'use client';

import { useEffect, useRef, useState } from 'react';
import usePrefersReducedMotion from '../ui/usePrefersReducedMotion';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const visibleRef = useRef(false);

  const prefersReducedMotion = usePrefersReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const update = () => {
      rafRef.current = null;
      const el = glowRef.current;
      if (!el) return;

      el.style.left = `${positionRef.current.x}px`;
      el.style.top = `${positionRef.current.y}px`;
    };

    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };

      if (!visibleRef.current) {
        visibleRef.current = true;
        setIsVisible(true);
      }

      if (rafRef.current == null) {
        rafRef.current = window.requestAnimationFrame(update);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      if (e.relatedTarget == null && visibleRef.current) {
        visibleRef.current = false;
        setIsVisible(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      if (rafRef.current != null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div
      ref={glowRef}
      className={`fixed pointer-events-none z-30 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        left: 0,
        top: 0,
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
}
