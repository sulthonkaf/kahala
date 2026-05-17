import type { Campaign } from "../types/campaign.type";
import { CampaignSceneLoader } from "@/features/three/components/campaign-scene-loader";

export function CampaignHero({ campaign }: { campaign: Campaign }) {
  return (
    <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-emerald-800 p-8 text-white shadow-2xl shadow-emerald-950/20 sm:p-10 lg:p-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_42%,rgba(242,184,75,0.26),transparent_34rem)]" />
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.82fr]">
        <div className="relative z-10">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-emerald-100">Campaign</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">{campaign.title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-emerald-50/80">{campaign.description}</p>
          <div className="mt-8 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black text-white backdrop-blur">
            {campaign.cta}
          </div>
        </div>
        <div className="relative min-h-[280px] lg:min-h-[340px]">
          <CampaignSceneLoader />
        </div>
      </div>
    </div>
  );
}
