"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

function CampaignSceneFallback() {
  return <div className="h-[280px] lg:h-[340px]" aria-hidden="true" />;
}

const CampaignScene = dynamic(
  () => import("@/features/three/components/campaign-scene").then((mod) => mod.CampaignScene),
  {
    ssr: false,
    loading: () => <CampaignSceneFallback />,
  },
);

export function CampaignSceneLoader() {
  return (
    <Suspense fallback={<CampaignSceneFallback />}>
      <CampaignScene />
    </Suspense>
  );
}
