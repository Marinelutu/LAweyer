"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { initMasterTimeline } from "@/animations/masterTimeline";

type ScrollProviderProps = {
  children: React.ReactNode;
};

export function ScrollProvider({ children }: ScrollProviderProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || !rootRef.current) {
      return;
    }

    const lenis = new Lenis({
      smoothWheel: true,
      duration: 1.05
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    const cleanupTimeline = initMasterTimeline(rootRef.current, reducedMotion);

    return () => {
      cleanupTimeline();
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return <div ref={rootRef}>{children}</div>;
}
