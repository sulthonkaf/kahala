import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Leaf,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

import { Container } from "@/core/components/common/container";
import { APP_ROUTES } from "@/core/constants/route.constant";
import { KAHALA_IMAGES, KAHALA_VIDEOS } from "@/core/constants/asset.constant";
import { BRAND_MESSAGES } from "@/core/constants/brand.constant";
import { SITE_STATS } from "@/core/constants/site.constant";
import {
  generateGeneralOrderMessage,
  generateWhatsAppUrl,
} from "@/core/lib/whatsapp";
import { KahalaHeroSceneLoader } from "@/features/three/components/kahala-hero-scene-loader";

export function HeroSection() {
  const whatsappUrl = generateWhatsAppUrl(generateGeneralOrderMessage());

  return (
    <section className="relative isolate overflow-hidden bg-[#14532D] text-white">
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

      <div className="absolute inset-0 -z-20 bg-[linear-gradient(108deg,rgba(20,83,45,0.96)_0%,rgba(22,101,52,0.88)_42%,rgba(249,115,22,0.42)_76%,rgba(250,204,21,0.34)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_18%,rgba(250,204,21,0.34),transparent_28rem),radial-gradient(circle_at_12%_88%,rgba(34,197,94,0.28),transparent_24rem),linear-gradient(180deg,rgba(0,0,0,0.10),rgba(20,83,45,0.58))]" />
      <div className="absolute inset-x-0 bottom-0 z-0 h-44 bg-gradient-to-t from-[#FFFDF7] via-[#FFFDF7]/72 to-transparent" />

      <Container className="relative z-10 grid min-h-[calc(100vh-5rem)] min-w-0 items-center gap-12 py-20 sm:py-24 lg:grid-cols-[1.04fr_0.96fr] lg:py-16 xl:py-20">
        <div className="min-w-0" data-gsap-hero>
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/25 bg-white/14 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white shadow-sm backdrop-blur-xl sm:text-sm">
            <Leaf className="h-4 w-4 shrink-0 text-[#FACC15]" />
            <span className="truncate">Fresh fruit bowl for modern lifestyle</span>
          </div>

          <h1 className="mt-6 max-w-4xl text-balance text-4xl font-black leading-[1.02] tracking-[-0.045em] text-white drop-shadow-sm sm:text-6xl lg:text-7xl">
            {BRAND_MESSAGES.headline}
          </h1>

          <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/86 sm:text-lg">
            {BRAND_MESSAGES.subheadline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={APP_ROUTES.menu}
              className="group inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-full bg-[#F97316] px-7 text-sm font-black text-white shadow-xl shadow-orange-950/25 transition duration-300 hover:-translate-y-0.5 hover:bg-[#EA6A0C] hover:shadow-2xl hover:shadow-orange-950/30 focus:outline-none focus:ring-4 focus:ring-orange-200/60"
            >
              {BRAND_MESSAGES.ctaPrimary}
              <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-full border border-white/40 bg-white/95 px-7 text-sm font-black text-[#166534] shadow-lg shadow-green-950/10 transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-xl hover:shadow-green-950/15 focus:outline-none focus:ring-4 focus:ring-white/40"
            >
              <MessageCircle className="h-4 w-4 transition duration-300 group-hover:scale-110" />
              {BRAND_MESSAGES.ctaSecondary}
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-xs font-bold text-white/82 sm:text-sm">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-2 backdrop-blur-xl">
              <ShieldCheck className="h-4 w-4 text-[#FACC15]" />
              Fresh daily preparation
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-2 backdrop-blur-xl">
              <Star className="h-4 w-4 text-[#FACC15]" />
              Healthy but still tasty
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {SITE_STATS.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/18 bg-white/12 p-4 shadow-lg shadow-green-950/10 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white/16"
              >
                <div className="flex items-center gap-2 text-sm font-black text-white">
                  <CheckCircle2 className="h-4 w-4 text-[#FACC15]" />
                  {item.value}
                </div>
                <p className="mt-1 text-xs font-semibold leading-5 text-white/70">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="relative isolate min-h-[380px] min-w-0 self-center sm:min-h-[500px] lg:min-h-[560px]"
          data-gsap="fade-up"
        >
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-[radial-gradient(circle_at_50%_42%,rgba(255,247,237,0.46),transparent_64%)]" />

          <div className="absolute -right-6 top-8 hidden h-28 w-28 rounded-full bg-[#FACC15]/30 blur-2xl sm:block" />
          <div className="absolute -left-4 bottom-14 hidden h-36 w-36 rounded-full bg-[#F97316]/24 blur-3xl sm:block" />

          {/* <KahalaHeroSceneLoader /> */}

          {/* <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/70 bg-white/92 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#166534] shadow-xl shadow-green-950/10 backdrop-blur-xl sm:left-8 sm:top-8">
            Best Seller Bowl
          </div>

          <div className="pointer-events-none absolute bottom-8 right-4 max-w-[15rem] rounded-[1.75rem] border border-white/70 bg-white/88 p-4 text-[#1F2937] shadow-2xl shadow-green-950/15 backdrop-blur-xl sm:right-8">
            <div className="flex items-center gap-2 text-sm font-black text-[#166534]">
              <Sparkles className="h-4 w-4 text-[#F97316]" />
              Daily Fresh
            </div>
            <p className="mt-2 text-xs font-semibold leading-5 text-zinc-600">
              Visual fresh, rasa ringan, dan proses order yang lebih mudah.
            </p>
          </div>

          <div className="pointer-events-none absolute bottom-24 left-2 hidden rounded-[1.5rem] border border-white/70 bg-white/86 p-4 text-[#1F2937] shadow-2xl shadow-green-950/10 backdrop-blur-xl md:block">
            <div className="text-xs font-black uppercase tracking-[0.14em] text-zinc-500">
              Starts from
            </div>
            <div className="mt-1 text-2xl font-black text-[#166534]">
              Fresh
            </div>
          </div> */}
        </div>
      </Container>
    </section>
  );
}