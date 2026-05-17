import Image from "next/image";
import Link from "next/link";
import { ChevronDown, MessageCircle, Search, ShieldCheck } from "lucide-react";
import { Container } from "@/core/components/common/container";
import { PublicLayout } from "@/core/components/layout/public-layout";
import { KAHALA_IMAGES } from "@/core/constants/asset.constant";
import { APP_ROUTES } from "@/core/constants/route.constant";
import { generateGeneralOrderMessage, generateWhatsAppUrl } from "@/core/lib/whatsapp";

const faqGroups = [
  {
    title: "Order & Payment",
    items: [
      {
        question: "Bagaimana cara order Kahala?",
        answer:
          "Pilih menu atau bundle, lalu klik CTA WhatsApp. Pesan awal akan terisi otomatis agar tim Kahala bisa cepat konfirmasi stok, alamat, ongkir, dan estimasi pengiriman.",
      },
      {
        question: "Apakah checkout di website sudah aktif?",
        answer:
          "Untuk MVP, checkout masih berupa mock flow dan WhatsApp order. Struktur frontend sudah disiapkan agar nanti bisa dihubungkan ke backend, payment gateway, dan API order.",
      },
      {
        question: "Metode pembayaran apa yang tersedia?",
        answer:
          "Pembayaran dapat dikonfirmasi melalui WhatsApp terlebih dahulu. Saat integrasi backend aktif, halaman checkout dapat diperluas untuk transfer, e-wallet, atau payment gateway.",
      },
    ],
  },
  {
    title: "Product & Freshness",
    items: [
      {
        question: "Apakah produk dibuat fresh setiap hari?",
        answer:
          "Kahala diposisikan sebagai fresh daily snack. Produk sebaiknya dikonsumsi segera setelah diterima atau disimpan dingin jika belum langsung dinikmati.",
      },
      {
        question: "Apakah bisa pilih buah tertentu?",
        answer:
          "Bisa dikonsultasikan via WhatsApp. Untuk menjaga kualitas, beberapa kombinasi dapat menyesuaikan ketersediaan buah segar pada hari tersebut.",
      },
      {
        question: "Apakah rasa manisnya bisa disesuaikan?",
        answer:
          "Kahala mendukung konsep balanced sweetness. Untuk request sweet control atau preferensi tertentu, tulis catatan saat chat order.",
      },
    ],
  },
  {
    title: "Delivery & Corporate",
    items: [
      {
        question: "Apakah Kahala menerima corporate order?",
        answer:
          "Ya. Kahala menyiapkan flow corporate order untuk meeting, office snack, event, hampers, komunitas, dan kebutuhan pax besar.",
      },
      {
        question: "Berapa minimal order untuk corporate pack?",
        answer:
          "Sebagai baseline mock, corporate pack dimulai dari sekitar 20 pax. Detail final seperti menu, tanggal, lokasi, dan budget dikonfirmasi melalui WhatsApp.",
      },
      {
        question: "Apakah packaging bisa disesuaikan?",
        answer:
          "Untuk kebutuhan event atau perusahaan, packaging dan label dapat dijadikan opsi pengembangan. Tim Kahala dapat mencatat request tersebut saat konsultasi.",
      },
    ],
  },
];

const quickLinks = [
  { label: "Menu", href: APP_ROUTES.menu },
  { label: "Bundles", href: APP_ROUTES.bundles },
  { label: "Corporate", href: APP_ROUTES.corporateOrder },
  { label: "Tracking", href: APP_ROUTES.tracking },
];

export default function FaqPage() {
  return (
    <PublicLayout>
      <section className="overflow-hidden py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div data-gsap-hero>
              <p className="inline-flex rounded-full bg-green-50 px-4 py-2 text-sm font-black text-green-800">
                Help Center
              </p>
              <h1 className="mt-5 max-w-3xl text-3xl font-black leading-tight tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
                Jawaban cepat sebelum kamu order Kahala.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
                FAQ ini membantu pelanggan memahami cara order, freshness, request khusus, pengiriman, dan corporate
                order tanpa harus menunggu chat panjang.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-2xl border border-green-100 bg-white px-5 py-4 text-sm font-black text-zinc-800 shadow-sm transition hover:border-orange-200 hover:bg-orange-50"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative min-h-[380px]" data-gsap="fade-up">
              <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-green-100 via-[#FFF7ED] to-orange-100" />
              <div className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-green-950/10">
                <Image
                  src={KAHALA_IMAGES.citrusTable}
                  alt="Fresh fruit table for Kahala FAQ"
                  width={1200}
                  height={900}
                  className="h-[380px] w-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-950/55 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-[1.75rem] bg-white/92 p-5 shadow-lg backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-50 text-green-700">
                      <Search className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-black text-zinc-950">Tidak menemukan jawaban?</p>
                      <p className="mt-1 text-sm text-zinc-600">Tim Kahala bisa bantu lewat WhatsApp.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <aside className="rounded-[2rem] bg-green-800 p-7 text-white shadow-2xl shadow-green-950/15" data-gsap="fade-up">
              <ShieldCheck className="h-9 w-9 text-yellow-300" />
              <h2 className="mt-5 text-2xl font-black tracking-tight">Panduan singkat order</h2>
              <div className="mt-5 space-y-4 text-sm font-bold leading-6 text-green-50/90">
                <p>1. Pilih menu atau bundle favorit.</p>
                <p>2. Klik Order via WhatsApp.</p>
                <p>3. Konfirmasi alamat, jumlah, tanggal, dan catatan.</p>
                <p>4. Tim Kahala bantu finalisasi order.</p>
              </div>
              <Link
                href={generateWhatsAppUrl(generateGeneralOrderMessage())}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-5 text-sm font-black text-white shadow-lg shadow-orange-950/20 transition hover:bg-orange-600"
              >
                <MessageCircle className="h-4 w-4" />
                Chat WhatsApp
              </Link>
            </aside>

            <div className="space-y-8">
              {faqGroups.map((group) => (
                <section key={group.title} className="rounded-[2rem] border border-green-100 bg-white p-5 shadow-sm sm:p-6" data-gsap="fade-up">
                  <h2 className="text-xl font-black tracking-tight text-zinc-950">{group.title}</h2>
                  <div className="mt-4 divide-y divide-zinc-100">
                    {group.items.map((item) => (
                      <details key={item.question} className="group py-4">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-sm font-black text-zinc-950">
                          {item.question}
                          <ChevronDown className="h-5 w-5 shrink-0 text-green-700 transition group-open:rotate-180" />
                        </summary>
                        <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-600">{item.answer}</p>
                      </details>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </PublicLayout>
  );
}
