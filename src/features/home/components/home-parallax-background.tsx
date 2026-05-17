"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/core/animations/gsap";

export function HomeParallaxBackground() {
  const scope = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      const zone = document.querySelector("[data-kahala-parallax-zone]");
      if (!zone) return;

      const baseTrigger = {
        trigger: zone,
        start: "top bottom",
        end: "bottom top",
      };

      gsap.to("[data-parallax-layer='mist-green']", {
        yPercent: -18,
        xPercent: 4,
        rotate: 8,
        ease: "none",
        scrollTrigger: { ...baseTrigger, scrub: 1.2 },
      });

      gsap.to("[data-parallax-layer='mist-amber']", {
        yPercent: -28,
        xPercent: -5,
        rotate: -8,
        ease: "none",
        scrollTrigger: { ...baseTrigger, scrub: 1.45 },
      });

      gsap.to("[data-parallax-layer='mist-cream']", {
        yPercent: -12,
        xPercent: 3,
        ease: "none",
        scrollTrigger: { ...baseTrigger, scrub: 1 },
      });

      gsap.to("[data-parallax-layer='grid']", {
        yPercent: -10,
        opacity: 0.42,
        ease: "none",
        scrollTrigger: { ...baseTrigger, scrub: 1 },
      });

      gsap.to("[data-parallax-layer='card-a']", {
        yPercent: -42,
        xPercent: 8,
        rotate: 14,
        ease: "none",
        scrollTrigger: { ...baseTrigger, scrub: 1.7 },
      });

      gsap.to("[data-parallax-layer='card-b']", {
        yPercent: -35,
        xPercent: -10,
        rotate: -16,
        ease: "none",
        scrollTrigger: { ...baseTrigger, scrub: 1.55 },
      });

      gsap.to("[data-floating-fruit-bg]", {
        y: -18,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { each: 0.28, from: "random" },
      });

      gsap.to("[data-soft-pulse-bg]", {
        scale: 1.08,
        opacity: 0.88,
        duration: 3.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.4,
      });
    },
    { scope },
  );

  return (
    <div ref={scope} aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#FFFDF7_0%,#FFF7ED_30%,#F4FBF6_66%,#FFFDF7_100%)]" />

      <div
        data-parallax-layer="grid"
        className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(22,101,52,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(22,101,52,0.12)_1px,transparent_1px)] [background-size:56px_56px]"
      />

      <div data-parallax-layer="mist-green" data-soft-pulse-bg className="absolute -left-40 top-16 h-[34rem] w-[34rem] rounded-full bg-[#22C55E]/28 blur-3xl" />
      <div data-parallax-layer="mist-amber" data-soft-pulse-bg className="absolute -right-44 top-[34rem] h-[38rem] w-[38rem] rounded-full bg-[#FACC15]/28 blur-3xl" />
      <div data-parallax-layer="mist-cream" data-soft-pulse-bg className="absolute left-1/2 top-[78rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#FFF1C7]/56 blur-3xl" />
      <div data-soft-pulse-bg className="absolute bottom-28 right-1/3 h-[24rem] w-[24rem] rounded-full bg-[#FB7185]/12 blur-3xl" />

      <div data-parallax-layer="card-a" className="absolute left-[7%] top-[34rem] hidden h-36 w-36 rounded-[2rem] border border-white/70 bg-white/55 shadow-2xl shadow-green-950/10 backdrop-blur-xl lg:block" />
      <div data-parallax-layer="card-b" className="absolute right-[8%] top-[82rem] hidden h-44 w-44 rounded-full border border-white/70 bg-green-50/70 shadow-2xl shadow-green-950/10 backdrop-blur-xl lg:block" />

      <div className="absolute right-[14%] top-[28rem] hidden h-28 w-28 rounded-full border-[18px] border-[#22C55E]/22 md:block" />
      <div className="absolute left-[10%] top-[112rem] hidden h-24 w-24 rounded-full border-[16px] border-[#FACC15]/40 md:block" />

      {[
        ["🍓", "left-[6%] top-[24rem]"],
        ["🥝", "right-[7%] top-[58rem]"],
        ["🍌", "left-[12%] top-[92rem]"],
        ["🥗", "right-[13%] top-[126rem]"],
        ["🍊", "left-[8%] bottom-[28rem]"],
      ].map(([emoji, position]) => (
        <div key={emoji} data-floating-fruit-bg className={`absolute ${position} hidden rounded-full bg-white/84 p-4 text-3xl shadow-xl shadow-green-950/10 backdrop-blur-md md:block`}>
          {emoji}
        </div>
      ))}
    </div>
  );
}
