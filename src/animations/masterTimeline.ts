"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadeUp, staggerFadeUp, pinnedCaseSequence } from "@/animations/sectionAnimations";

gsap.registerPlugin(ScrollTrigger);

export const initMasterTimeline = (root: HTMLElement, reducedMotion: boolean) => {
  if (reducedMotion) {
    return () => undefined;
  }

  const ctx = gsap.context(() => {
    const master = gsap.timeline({
      defaults: { ease: "power2.out" },
      scrollTrigger: {
        trigger: root,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.7
      }
    });

    master.addLabel("hero");
    master.add(fadeUp("[data-anim='hero-title']", 0.85), "hero");
    master.add(staggerFadeUp("[data-anim='hero-copy']", 0.7, 0.06), "hero+=0.1");
    master.add(fadeUp("[data-anim='hero-cta']", 0.55), "hero+=0.2");

    master.addLabel("intro", ">-0.1");
    master.add(fadeUp("[data-anim='intro']", 0.7), "intro");

    master.addLabel("practice", ">-0.1");
    master.add(fadeUp("[data-anim='practice-title']", 0.7), "practice");
    master.add(staggerFadeUp("[data-anim='practice-card']", 0.6, 0.08), "practice+=0.1");

    master.addLabel("type", ">-0.1");
    master.add(staggerFadeUp("[data-anim='type-line']", 0.8, 0.06), "type");

    master.addLabel("testimonials", ">-0.1");
    master.add(staggerFadeUp("[data-anim='testimonial-card']", 0.65, 0.08), "testimonials");

    master.addLabel("cta", ">-0.1");
    master.add(fadeUp("[data-anim='cta-block']", 0.7), "cta");
    master.add(fadeUp("[data-anim='cta-button']", 0.55), "cta+=0.12");

    master.addLabel("footer", ">-0.1");
    master.add(fadeUp("[data-anim='footer']", 0.5), "footer");

    const pinnedContainer = root.querySelector<HTMLElement>("[data-pin='case']");
    const caseSteps = root.querySelectorAll<HTMLElement>("[data-case-step]");
    if (pinnedContainer && caseSteps.length > 0) {
      pinnedCaseSequence(pinnedContainer, Array.from(caseSteps));
    }
  }, root);

  return () => {
    ctx.revert();
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
};
