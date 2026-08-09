import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

// Fades/slides in any [data-reveal] descendant of the returned ref once it
// scrolls into view, reusing the timing of the existing fade-in keyframes
// (0.7s, translateY(20px) -> 0) so scroll-triggered and on-mount reveals feel consistent.
export function useScrollReveal<T extends HTMLElement>() {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const targets = container.querySelectorAll<HTMLElement>("[data-reveal]");
    if (targets.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          once: true,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return containerRef;
}
