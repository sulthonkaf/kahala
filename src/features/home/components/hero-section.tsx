import Link from "next/link";
import { ArrowRight, CheckCircle2, Leaf, MessageCircle } from "lucide-react";
import { Container } from "@/core/components/common/container";
import { APP_ROUTES } from "@/core/constants/route.constant";
import { KAHALA_IMAGES, KAHALA_VIDEOS } from "@/core/constants/asset.constant";
import { BRAND_MESSAGES } from "@/core/constants/brand.constant";
import { SITE_STATS } from "@/core/constants/site.constant";
import { generateGeneralOrderMessage, generateWhatsAppUrl } from "@/core/lib/whatsapp";
import { KahalaHeroSceneLoader } from "@/features/three/components/kahala-hero-scene-loader";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-green-950 py-20 text-white sm:py-20 lg:min-h-[calc(100vh-5rem)] lg:py-16 xl:py-20">
      <video
        className="absolute inset-0 -z-30 h-full w-full object-cover"
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
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(110deg,rgba(22,101,52,0.9)_0%,rgba(34,197,94,0.58)_48%,rgba(249,115,22,0.28)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_84%_20%,rgba(250,204,21,0.24),transparent_28rem),linear-gradient(180deg,rgba(31,41,55,0.08),rgba(22,101,52,0.34))]" />
      <Container className="grid min-w-0 items-center gap-12 lg:grid-cols-[1.16fr_0.84fr]">
        <div className="min-w-0 max-w-[22rem] sm:max-w-none" data-gsap-hero>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/16 px-4 py-2 text-sm font-bold text-white shadow-sm backdrop-blur-md">
            <Leaf className="h-4 w-4" />
            Healthy snack for modern lifestyle
          </div>
          <h1 className="mt-6 max-w-[22rem] break-words text-4xl font-black leading-[1.05] tracking-tight text-white drop-shadow-sm sm:max-w-4xl sm:text-5xl lg:text-6xl">
            {BRAND_MESSAGES.headline}
          </h1>
          <p className="mt-5 max-w-[22rem] text-lg leading-8 text-white/86 sm:max-w-2xl">{BRAND_MESSAGES.subheadline}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={APP_ROUTES.menu}
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-orange-500 px-7 text-sm font-black text-white shadow-xl shadow-orange-950/25 transition hover:-translate-y-0.5 hover:bg-orange-600"
            >
              {BRAND_MESSAGES.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={generateWhatsAppUrl(generateGeneralOrderMessage())}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-white/35 bg-white/95 px-7 text-sm font-black text-green-800 shadow-lg shadow-green-950/10 transition hover:-translate-y-0.5 hover:bg-white"
            >
              <MessageCircle className="h-4 w-4" />
              {BRAND_MESSAGES.ctaSecondary}
            </Link>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {SITE_STATS.map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm font-bold text-white/86">
                <CheckCircle2 className="h-4 w-4 text-yellow-300" />
                {item.value} {item.label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative isolate min-h-[360px] min-w-0 self-start sm:min-h-[460px] lg:mt-2 lg:min-h-[520px]" data-gsap="fade-up">
          <div className="absolute -inset-8 -z-10 bg-[radial-gradient(circle_at_50%_45%,rgba(255,247,237,0.32),transparent_62%)]" />
          <KahalaHeroSceneLoader />
          <div className="pointer-events-none absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-black text-green-800 shadow-lg shadow-green-950/10 backdrop-blur">
            Best Seller Bowl
          </div>
        </div>
      </Container>
    </section>
  );
}
