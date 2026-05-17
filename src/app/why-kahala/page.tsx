import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, Leaf, PackageCheck, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/core/components/common/container";
import { PublicLayout } from "@/core/components/layout/public-layout";
import { KAHALA_IMAGES } from "@/core/constants/asset.constant";
import { APP_ROUTES } from "@/core/constants/route.constant";
import { generateGeneralOrderMessage, generateWhatsAppUrl } from "@/core/lib/whatsapp";

const pillars = [
  {
    title: "Fresh-first preparation",
    description: "Produk disiapkan dengan pendekatan fresh daily agar rasa, warna, dan tekstur tetap menarik saat diterima.",
    icon: Leaf,
  },
  {
    title: "Balanced sweetness",
    description: "Kahala menjaga rasa tetap enjoyable tanpa membuat snack terasa terlalu berat untuk konsumsi harian.",
    icon: Sparkles,
  },
  {
    title: "Clean order flow",
    description: "User bisa pilih menu, lihat paket, lalu lanjut WhatsApp dengan pesan yang sudah rapi.",
    icon: Clock3,
  },
  {
    title: "Corporate ready",
    description: "Packaging, pax, dan kebutuhan event bisa dikonsultasikan sejak awal untuk memudahkan operasional.",
    icon: PackageCheck,
  },
];

const proofPoints = [
  "Menu personal, sharing, weekly, dan corporate siap dikembangkan dari data yang sama.",
  "CTA WhatsApp ditempatkan di area penting agar pelanggan cepat mengambil keputusan.",
  "Visual produk dibuat dominan supaya user langsung paham Kahala menjual healthy snack berbasis buah.",
  "Sistem warna fresh bright mendorong appetite tanpa mengorbankan kesan bersih dan premium.",
];

const comparison = [
  { label: "Daily snack", ordinary: "Sering impulsif dan tidak terencana", kahala: "Pilihan fresh yang mudah diulang" },
  { label: "Office order", ordinary: "Butuh chat panjang untuk jelaskan kebutuhan", kahala: "Paket dan corporate CTA sudah jelas" },
  { label: "Sweet craving", ordinary: "Cenderung berat atau terlalu manis", kahala: "Rasa buah dengan sweetness lebih mindful" },
  { label: "Brand trust", ordinary: "Menu terlihat umum dan kurang terkurasi", kahala: "Story, visual, FAQ, dan flow order lebih lengkap" },
];

export default function WhyKahalaPage() {
  return (
    <PublicLayout>
      <section className="overflow-hidden py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div data-gsap-hero>
              <p className="inline-flex rounded-full bg-green-50 px-4 py-2 text-sm font-black text-green-800">
                Why Kahala
              </p>
              <h1 className="mt-5 max-w-3xl text-3xl font-black leading-tight tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
                Healthy snack yang terasa fresh, rapi, dan mudah dipercaya.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
                Kahala dirancang bukan hanya untuk menampilkan menu, tetapi untuk membuat pelanggan cepat yakin: produk
                jelas, order mudah, dan kebutuhan personal maupun corporate bisa dilayani dengan rapi.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={APP_ROUTES.menu}
                  className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-orange-500 sm:w-auto px-7 text-sm font-black text-white shadow-xl shadow-orange-900/20 transition hover:-translate-y-0.5 hover:bg-orange-600"
                >
                  Coba Lihat Menu
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={generateWhatsAppUrl(generateGeneralOrderMessage())}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-13 w-full items-center justify-center rounded-full border border-green-200 sm:w-auto bg-white px-7 text-sm font-black text-green-800 transition hover:bg-green-50"
                >
                  Konsultasi Order
                </Link>
              </div>
            </div>
            <div className="relative min-h-[430px]" data-gsap="fade-up">
              <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-green-100 via-[#FFF7ED] to-orange-100" />
              <div className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-green-950/10">
                <Image
                  src={KAHALA_IMAGES.healthyPrep}
                  alt="Fresh healthy bowl preparation"
                  width={1200}
                  height={900}
                  className="h-[430px] w-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-950/55 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-3">
                  {["Fresh", "Clean", "Ready"].map((item) => (
                    <div key={item} className="rounded-2xl bg-white/90 p-4 text-center text-sm font-black text-green-800 backdrop-blur">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4" data-gsap="stagger">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article key={pillar.title} className="rounded-[2rem] border border-green-950/10 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 text-xl font-black tracking-tight text-zinc-950">{pillar.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{pillar.description}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="rounded-[2rem] bg-green-800 p-8 text-white shadow-2xl shadow-green-950/15" data-gsap="fade-up">
              <ShieldCheck className="h-10 w-10 text-yellow-300" />
              <h2 className="mt-5 text-3xl font-black tracking-tight">Built for repeat order.</h2>
              <p className="mt-4 text-sm leading-7 text-green-50/85">
                Website Kahala dibuat agar pelanggan baru paham dalam beberapa detik, lalu pelanggan lama bisa kembali
                order tanpa berpikir ulang.
              </p>
              <div className="mt-6 space-y-3">
                {proofPoints.map((point) => (
                  <div key={point} className="flex gap-3 text-sm font-bold leading-6 text-green-50">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-yellow-300" />
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-green-100 bg-white shadow-sm" data-gsap="fade-up">
              <div className="overflow-x-auto">
                <div className="grid min-w-[680px] grid-cols-[0.8fr_1fr_1fr] bg-[#FFF7ED] px-5 py-4 text-xs font-black uppercase tracking-wide text-zinc-500">
                  <span>Kebutuhan</span>
                  <span>Snack biasa</span>
                  <span>Kahala</span>
                </div>
                {comparison.map((row) => (
                  <div key={row.label} className="grid min-w-[680px] grid-cols-[0.8fr_1fr_1fr] gap-4 border-t border-zinc-100 px-5 py-5 text-sm">
                    <p className="font-black text-zinc-950">{row.label}</p>
                    <p className="leading-6 text-zinc-500">{row.ordinary}</p>
                    <p className="font-bold leading-6 text-green-800">{row.kahala}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PublicLayout>
  );
}
