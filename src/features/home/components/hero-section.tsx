import Link from "next/link";
import { ArrowRight, CheckCircle2, Leaf, MessageCircle } from "lucide-react";
import { Container } from "@/core/components/common/container";
import { APP_ROUTES } from "@/core/constants/route.constant";
import { BRAND_MESSAGES } from "@/core/constants/brand.constant";
import { SITE_STATS } from "@/core/constants/site.constant";
import { generateGeneralOrderMessage, generateWhatsAppUrl } from "@/core/lib/whatsapp";
import { KahalaHeroSceneLoader } from "@/features/three/components/kahala-hero-scene-loader";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <Container className="grid min-w-0 items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="min-w-0 max-w-[22rem] sm:max-w-none" data-gsap-hero>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-bold text-emerald-800 shadow-sm">
            <Leaf className="h-4 w-4" />
            Healthy snack for modern lifestyle
          </div>
          <h1 className="mt-7 max-w-[22rem] break-words text-4xl font-black leading-[1.05] tracking-tight text-zinc-950 sm:max-w-4xl sm:text-6xl lg:text-7xl">
            {BRAND_MESSAGES.headline}
          </h1>
          <p className="mt-6 max-w-[22rem] text-lg leading-8 text-zinc-600 sm:max-w-2xl">{BRAND_MESSAGES.subheadline}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={APP_ROUTES.menu}
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-emerald-700 px-7 text-sm font-black text-white shadow-xl shadow-emerald-900/20 transition hover:-translate-y-0.5 hover:bg-emerald-800"
            >
              {BRAND_MESSAGES.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={generateWhatsAppUrl(generateGeneralOrderMessage())}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-emerald-200 bg-white px-7 text-sm font-black text-emerald-800 transition hover:bg-emerald-50"
            >
              <MessageCircle className="h-4 w-4" />
              {BRAND_MESSAGES.ctaSecondary}
            </Link>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {SITE_STATS.map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm font-bold text-zinc-700">
                <CheckCircle2 className="h-4 w-4 text-emerald-700" />
                {item.value} {item.label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative isolate min-h-[360px] min-w-0 self-start sm:min-h-[460px] lg:mt-6 lg:min-h-[560px]" data-gsap="fade-up">
          <div className="absolute -inset-8 -z-10 bg-[radial-gradient(circle_at_50%_45%,rgba(47,107,79,0.14),transparent_62%)]" />
          <KahalaHeroSceneLoader />
          <div className="pointer-events-none absolute left-5 top-5 rounded-full bg-white/85 px-4 py-2 text-sm font-black text-emerald-800 shadow-lg shadow-emerald-950/10 backdrop-blur">
            Best Seller Bowl
          </div>
        </div>
      </Container>
    </section>
  );
}
