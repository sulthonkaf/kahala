"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

function KahalaHeroSceneFallback() {
  return (
    <div
      className="h-[360px] rounded-[2rem] bg-[radial-gradient(circle_at_52%_45%,#ffffff_0,#fff7ed_35%,#dcfce7_78%)] sm:h-[460px] lg:h-[560px]"
      aria-hidden="true"
    />
  );
}

const KahalaHeroScene = dynamic(
  () => import("@/features/three/components/kahala-hero-scene").then((mod) => mod.KahalaHeroScene),
  {
    ssr: false,
    loading: () => <KahalaHeroSceneFallback />,
  },
);

export function KahalaHeroSceneLoader() {
  return (
    <Suspense fallback={<KahalaHeroSceneFallback />}>
      <KahalaHeroScene />
    </Suspense>
  );
}
