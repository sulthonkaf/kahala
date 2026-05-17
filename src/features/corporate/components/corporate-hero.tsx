import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, MessageCircle } from "lucide-react";
import { KAHALA_IMAGES } from "@/core/constants/asset.constant";
import { generateCorporateOrderMessage, generateWhatsAppUrl } from "@/core/lib/whatsapp";

const stats = [
  { value: "20+", label: "minimum pax" },
  { value: "3", label: "package types" },
  { value: "WA", label: "fast inquiry" },
];

export function CorporateHero() {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <div data-gsap-hero>
        <p className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-black text-green-800">
          <Building2 className="h-4 w-4" />
          Corporate Order
        </p>
        <h1 className="mt-5 max-w-3xl text-3xl font-black leading-tight tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
          Fresh snack untuk meeting, pantry, event, dan corporate gifting.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
          Kahala membantu tim HR, admin, komunitas, dan event organizer memilih paket snack buah yang rapi, mudah
          dibagikan, dan tetap terlihat premium saat disajikan.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="#corporate-lead-form"
            className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-7 text-sm font-black text-white shadow-xl shadow-orange-900/20 transition hover:-translate-y-0.5 hover:bg-orange-600 sm:w-auto"
          >
            Request Proposal
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href={generateWhatsAppUrl(generateCorporateOrderMessage())}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full border border-green-200 bg-white px-7 text-sm font-black text-green-800 transition hover:bg-green-50 sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" />
            Chat WhatsApp
          </Link>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-green-100 bg-white p-4 shadow-sm">
              <p className="text-2xl font-black text-green-800">{item.value}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wide text-zinc-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative min-h-[430px]" data-gsap="fade-up">
        <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-green-100 via-[#FFF7ED] to-orange-100" />
        <div className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-green-950/10">
          <Image
            src={KAHALA_IMAGES.officeHealthyLunch}
            alt="Corporate healthy snack setup for Kahala"
            width={1200}
            height={900}
            className="h-[430px] w-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-950/58 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 rounded-[1.75rem] bg-white/92 p-5 shadow-lg backdrop-blur">
            <div className="flex gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-700" />
              <div>
                <p className="text-sm font-black text-green-800">B2B order flow ready</p>
                <p className="mt-1 text-sm leading-6 text-zinc-600">
                  Brief pax, tanggal, lokasi, budget, dan packaging bisa langsung diproses via WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
