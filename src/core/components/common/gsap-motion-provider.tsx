"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function GsapMotionProvider() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const heroItems = gsap.utils.toArray<HTMLElement>("[data-gsap-hero] > *");
      if (heroItems.length) {
        gsap.from(heroItems, {
          y: 22,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: "transform",
        });
      }

      gsap.utils.toArray<HTMLElement>("[data-gsap='fade-up']").forEach((element) => {
        gsap.from(element, {
          y: 34,
          duration: 0.75,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: element,
            start: "top 84%",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-gsap='stagger']").forEach((element) => {
        const children = Array.from(element.children);
        if (!children.length) return;

        gsap.from(children, {
          y: 26,
          duration: 0.64,
          stagger: 0.07,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: element,
            start: "top 84%",
            once: true,
          },
        });
      });

      const floatingItems = gsap.utils.toArray<HTMLElement>("[data-gsap-float]");
      if (floatingItems.length) {
        gsap.to(floatingItems, {
          y: -10,
          duration: 2.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      const parallaxZone = document.querySelector<HTMLElement>("[data-kahala-parallax-zone]");
      if (parallaxZone) {
        gsap.utils.toArray<HTMLElement>("[data-kahala-parallax]").forEach((element) => {
          const speed = Number(element.dataset.speed ?? 24);
          gsap.to(element, {
            y: speed,
            ease: "none",
            scrollTrigger: {
              trigger: parallaxZone,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          });
        });
      }
    });

    return () => context.revert();
  }, []);

  return null;
}
