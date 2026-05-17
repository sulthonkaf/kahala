import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import Link from "next/link";

import { Container } from "@/core/components/common/container";
import { APP_ROUTES } from "@/core/constants/route.constant";
import { generateGeneralOrderMessage, generateWhatsAppUrl } from "@/core/lib/whatsapp";

export function FinalCtaSection() {
  const whatsappUrl = generateWhatsAppUrl(generateGeneralOrderMessage());

  return (
    <section className="relative bg-transparent py-20 sm:py-24">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[2.75rem] border border-white/20 bg-[#166534]/92 p-8 text-white shadow-2xl shadow-green-950/22 backdrop-blur-xl sm:p-12 lg:p-16">
          <div className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-[#FACC15]/26 blur-3xl" />
          <div className="absolute -bottom-32 -left-24 -z-10 h-96 w-96 rounded-full bg-[#22C55E]/26 blur-3xl" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_24%,rgba(249,115,22,0.22),transparent_24rem)]" />

          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#FACC15] backdrop-blur-xl">
                <Sparkles className="h-4 w-4" />
                Ready to order?
              </p>
              <h2 className="mt-5 max-w-3xl text-balance text-3xl font-black tracking-[-0.03em] sm:text-5xl">
                Mulai ngemil lebih sehat bersama Kahala.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-green-50/84">
                Pilih menu favoritmu atau konsultasikan kebutuhan corporate order langsung dengan tim Kahala.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href={APP_ROUTES.menu}
                className="inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-full bg-[#F97316] px-7 text-sm font-black text-white shadow-xl shadow-orange-950/24 transition hover:-translate-y-0.5 hover:bg-[#ea6a0c]"
              >
                Lihat Menu
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-full border border-white/28 bg-white/10 px-7 text-sm font-black text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/16"
              >
                <MessageCircle className="h-4 w-4" />
                Chat WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
