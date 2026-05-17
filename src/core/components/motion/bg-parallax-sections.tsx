"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { gsap, useGSAP } from "@/core/animations/gsap";
import { cn } from "@/core/lib/cn";

type BgParallaxSectionsProps = {
  children: ReactNode;
  className?: string;
};

export function BgParallaxSections({
  children,
  className,
}: BgParallaxSectionsProps) {
  const scope = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        return;
      }

      gsap.to("[data-parallax-layer='soft-green']", {
        yPercent: -18,
        xPercent: 4,
        rotate: 8,
        ease: "none",
        scrollTrigger: {
          trigger: scope.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.15,
        },
      });

      gsap.to("[data-parallax-layer='warm-cream']", {
        yPercent: -28,
        xPercent: -5,
        rotate: -10,
        ease: "none",
        scrollTrigger: {
          trigger: scope.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.35,
        },
      });

      gsap.to("[data-parallax-layer='fruit-orb-a']", {
        yPercent: -42,
        xPercent: 8,
        rotate: 18,
        ease: "none",
        scrollTrigger: {
          trigger: scope.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.8,
        },
      });

      gsap.to("[data-parallax-layer='fruit-orb-b']", {
        yPercent: -34,
        xPercent: -10,
        rotate: -20,
        ease: "none",
        scrollTrigger: {
          trigger: scope.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.55,
        },
      });

      gsap.to("[data-parallax-layer='grid']", {
        yPercent: -12,
        opacity: 0.55,
        ease: "none",
        scrollTrigger: {
          trigger: scope.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to("[data-floating-bg-item]", {
        y: -18,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.3,
          from: "random",
        },
      });
    },
    {
      scope,
    },
  );

  return (
    <section
      ref={scope}
      className={cn(
        "relative isolate overflow-hidden bg-[#FFFDF7]",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(47,107,79,0.10),transparent_34rem),radial-gradient(circle_at_top_right,rgba(242,184,75,0.14),transparent_30rem),linear-gradient(180deg,#FFFDF7_0%,#FFF8EC_38%,#F4FBF6_100%)]" />

        <div
          data-parallax-layer="grid"
          className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgba(47,107,79,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(47,107,79,0.10)_1px,transparent_1px)] [background-size:56px_56px]"
        />

        <div
          data-parallax-layer="soft-green"
          className="absolute -left-32 top-20 h-[32rem] w-[32rem] rounded-full bg-emerald-200/45 blur-3xl"
        />

        <div
          data-parallax-layer="warm-cream"
          className="absolute -right-40 top-[34rem] h-[36rem] w-[36rem] rounded-full bg-amber-200/45 blur-3xl"
        />

        <div
          data-parallax-layer="fruit-orb-a"
          className="absolute left-[8%] top-[46rem] h-32 w-32 rounded-[2rem] bg-white/70 shadow-2xl shadow-emerald-950/10 backdrop-blur-xl"
        />

        <div
          data-parallax-layer="fruit-orb-b"
          className="absolute right-[10%] top-[82rem] h-40 w-40 rounded-full bg-emerald-100/70 shadow-2xl shadow-emerald-950/10 backdrop-blur-xl"
        />

        <div
          data-floating-bg-item
          className="absolute left-[7%] top-[26rem] hidden rounded-full bg-white/80 p-4 text-3xl shadow-xl shadow-emerald-950/10 backdrop-blur-md md:block"
        >
          🍓
        </div>

        <div
          data-floating-bg-item
          className="absolute right-[8%] top-[58rem] hidden rounded-full bg-white/80 p-4 text-3xl shadow-xl shadow-emerald-950/10 backdrop-blur-md md:block"
        >
          🥝
        </div>

        <div
          data-floating-bg-item
          className="absolute left-[12%] top-[96rem] hidden rounded-full bg-white/80 p-4 text-3xl shadow-xl shadow-emerald-950/10 backdrop-blur-md md:block"
        >
          🍌
        </div>

        <div
          data-floating-bg-item
          className="absolute right-[14%] bottom-[24rem] hidden rounded-full bg-white/80 p-4 text-3xl shadow-xl shadow-emerald-950/10 backdrop-blur-md md:block"
        >
          🥗
        </div>
      </div>

      <div className="relative z-10">{children}</div>
    </section>
  );
}