"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const MOTION_DEFAULTS = {
  y: 24,
  opacity: 0,
  duration: 0.7,
  ease: "power2.out"
};

export const fadeUp = (target: gsap.TweenTarget, duration = 0.7) =>
  gsap.fromTo(
    target,
    { y: MOTION_DEFAULTS.y, opacity: MOTION_DEFAULTS.opacity },
    { y: 0, opacity: 1, duration, ease: MOTION_DEFAULTS.ease }
  );

export const staggerFadeUp = (
  targets: gsap.TweenTarget,
  duration = 0.6,
  stagger = 0.08
) =>
  gsap.fromTo(
    targets,
    { y: MOTION_DEFAULTS.y, opacity: MOTION_DEFAULTS.opacity },
    {
      y: 0,
      opacity: 1,
      duration,
      stagger,
      ease: MOTION_DEFAULTS.ease
    }
  );

export const pinnedCaseSequence = (
  container: HTMLElement,
  items: HTMLElement[]
) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top top",
      end: "+=200%",
      scrub: true,
      pin: true
    }
  });

  items.forEach((item, index) => {
    tl.fromTo(
      item,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: MOTION_DEFAULTS.ease },
      index === 0 ? 0 : "+=0.15"
    ).to(item, { opacity: index === items.length - 1 ? 1 : 0.2, duration: 0.4 });
  });

  return tl;
};
