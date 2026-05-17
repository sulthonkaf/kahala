import Link from "next/link";
import { ArrowRight, CheckCircle2, Leaf, MessageCircle, Sparkles } from "lucide-react";

import { Container } from "@/core/components/common/container";
import { APP_ROUTES } from "@/core/constants/route.constant";
import { KAHALA_IMAGES, KAHALA_VIDEOS } from "@/core/constants/asset.constant";
import { BRAND_MESSAGES } from "@/core/constants/brand.constant";
import { SITE_STATS } from "@/core/constants/site.constant";
import { generateGeneralOrderMessage, generateWhatsAppUrl } from "@/core/lib/whatsapp";
import { KahalaHeroSceneLoader } from "@/features/three/components/kahala-hero-scene-loader";

export function HeroSection() {
  const whatsappUrl = generateWhatsAppUrl(generateGeneralOrderMessage());

  return (
    <section className="relative isolate overflow-hidden bg-[#166534] py-20 text-white sm:py-24 lg:min-h-[calc(100vh-5rem)] lg:py-20">
      <video
        className="absolute inset-0 -z-30 h-full w-full scale-105 object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={KAHALA_IMAGES.fruitBowl}
        aria-hidden="true"
      >
        <source src={KAHALA_VIDEOS.heroFruit} type="video/mp4" />
      </video>

      <div className="absolute inset-0 -z-20 bg-[linear-gradient(108deg,rgba(22,101,52,0.96)_0%,rgba(22,101,52,0.82)_38%,rgba(249,115,22,0.45)_72%,rgba(250,204,21,0.38)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_20%,rgba(250,204,21,0.34),transparent_28rem),radial-gradient(circle_at_10%_88%,rgba(34,197,94,0.34),transparent_24rem),linear-gradient(180deg,rgba(18,41,55,0.12),rgba(22,101,52,0.52))]" />
      <div className="absolute inset-x-0 bottom-0 z-0 h-40 bg-gradient-to-t from-[#FFFDF7] to-transparent" />

      <Container className="relative z-10 grid min-w-0 items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="min-w-0" data-gsap-hero>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/28 bg-white/14 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white shadow-sm backdrop-blur-xl sm:text-sm">
            <Leaf className="h-4 w-4 text-[#FACC15]" />
            Fresh • Natural • Healthy
          </div>

          <h1 className="mt-6 max-w-4xl text-balance text-4xl font-black leading-[1.03] tracking-[-0.04em] text-white drop-shadow-sm sm:text-6xl lg:text-7xl">
            {BRAND_MESSAGES.headline}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/88 sm:text-lg">
            {BRAND_MESSAGES.subheadline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={APP_ROUTES.menu}
              className="inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-full bg-[#F97316] px-7 text-sm font-black text-white shadow-xl shadow-orange-950/25 transition hover:-translate-y-0.5 hover:bg-[#ea6a0c] focus:outline-none focus:ring-4 focus:ring-orange-200/60"
            >
              {BRAND_MESSAGES.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-full border border-white/38 bg-white/94 px-7 text-sm font-black text-[#166534] shadow-lg shadow-green-950/10 transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-4 focus:ring-white/40"
            >
              <MessageCircle className="h-4 w-4" />
              {BRAND_MESSAGES.ctaSecondary}
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {SITE_STATS.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/20 bg-white/12 p-4 shadow-lg shadow-green-950/10 backdrop-blur-xl"
              >
                <div className="flex items-center gap-2 text-sm font-black text-white">
                  <CheckCircle2 className="h-4 w-4 text-[#FACC15]" />
                  {item.value}
                </div>
                <p className="mt-1 text-xs font-semibold text-white/72">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative isolate min-h-[380px] min-w-0 self-start sm:min-h-[500px] lg:min-h-[560px]" data-gsap="fade-up">
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-[radial-gradient(circle_at_50%_42%,rgba(255,247,237,0.44),transparent_64%)]" />
          <KahalaHeroSceneLoader />

          <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#166534] shadow-xl shadow-green-950/10 backdrop-blur-xl sm:left-8 sm:top-8">
            Best Seller Bowl
          </div>

          <div className="pointer-events-none absolute bottom-8 right-4 max-w-[14rem] rounded-[1.75rem] border border-white/70 bg-white/86 p-4 text-[#1F2937] shadow-2xl shadow-green-950/14 backdrop-blur-xl sm:right-8">
            <div className="flex items-center gap-2 text-sm font-black text-[#166534]">
              <Sparkles className="h-4 w-4 text-[#F97316]" />
              Daily Fresh
            </div>
            <p className="mt-2 text-xs font-semibold leading-5 text-zinc-600">
              Rasa segar, visual premium, dan order yang lebih mudah.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
