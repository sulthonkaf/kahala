import Image from "next/image";
import Link from "next/link";
import { ArrowRight, AtSign, Clock3, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Container } from "@/core/components/common/container";
import { PublicLayout } from "@/core/components/layout/public-layout";
import { Input } from "@/core/components/ui/input";
import { Textarea } from "@/core/components/ui/textarea";
import { KAHALA_IMAGES } from "@/core/constants/asset.constant";
import { SITE_CONFIG } from "@/core/constants/site.constant";
import { APP_ROUTES } from "@/core/constants/route.constant";
import { generateCorporateOrderMessage, generateGeneralOrderMessage, generateWhatsAppUrl } from "@/core/lib/whatsapp";

const contactCards = [
  {
    label: "WhatsApp Order",
    value: `+${SITE_CONFIG.whatsappNumber}`,
    href: generateWhatsAppUrl(generateGeneralOrderMessage()),
    icon: MessageCircle,
    accent: "bg-orange-500 text-white",
  },
  {
    label: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    icon: Mail,
    accent: "bg-green-50 text-green-700",
  },
  {
    label: "Instagram",
    value: "@kahala.id",
    href: SITE_CONFIG.instagram,
    icon: AtSign,
    accent: "bg-pink-50 text-pink-600",
  },
];

const inquiryTypes = ["Personal order", "Corporate order", "Event snack", "Weekly pack"];

export default function ContactPage() {
  return (
    <PublicLayout>
      <section className="overflow-hidden py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div data-gsap-hero>
              <p className="inline-flex rounded-full bg-orange-50 px-4 py-2 text-sm font-black text-orange-600">
                Contact Kahala
              </p>
              <h1 className="mt-5 max-w-3xl text-3xl font-black leading-tight tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
                Punya kebutuhan snack sehat? Tim Kahala siap bantu.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
                Hubungi kami untuk daily order, weekly pack, corporate snack, meeting, hampers, atau event komunitas.
                WhatsApp adalah jalur tercepat untuk konfirmasi menu dan ketersediaan.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={generateWhatsAppUrl(generateGeneralOrderMessage())}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-orange-500 sm:w-auto px-7 text-sm font-black text-white shadow-xl shadow-orange-900/20 transition hover:-translate-y-0.5 hover:bg-orange-600"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat WhatsApp
                </Link>
                <Link
                  href={APP_ROUTES.corporateOrder}
                  className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full border border-green-200 sm:w-auto bg-white px-7 text-sm font-black text-green-800 transition hover:bg-green-50"
                >
                  Corporate Inquiry
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative min-h-[420px]" data-gsap="fade-up">
              <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-green-100 via-[#FFF7ED] to-orange-100" />
              <div className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-green-950/10">
                <Image
                  src={KAHALA_IMAGES.freshFruitSpread}
                  alt="Fresh fruit contact visual for Kahala"
                  width={1200}
                  height={900}
                  className="h-[420px] w-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-950/55 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-[1.75rem] bg-white/92 p-5 shadow-lg backdrop-blur">
                  <p className="text-sm font-black text-green-800">Fast response channel</p>
                  <p className="mt-1 text-sm leading-6 text-zinc-600">
                    Untuk kebutuhan hari yang sama, gunakan WhatsApp agar tim Kahala bisa cek slot dan stok.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3" data-gsap="stagger">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-[2rem] border border-green-950/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${card.accent}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-5 text-sm font-bold text-zinc-500">{card.label}</p>
                  <p className="mt-1 text-lg font-black text-zinc-950">{card.value}</p>
                </Link>
              );
            })}
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <form className="rounded-[2rem] border border-green-100 bg-white p-6 shadow-sm sm:p-8" data-gsap="fade-up">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-green-700">Inquiry form</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-zinc-950">Kirim detail kebutuhanmu.</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Form ini disiapkan untuk integrasi backend berikutnya. Untuk saat ini, gunakan WhatsApp agar respons
                lebih cepat.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Input placeholder="Nama" aria-label="Nama" />
                <Input placeholder="Nomor WhatsApp" aria-label="Nomor WhatsApp" />
                <Input placeholder="Email opsional" aria-label="Email opsional" />
                <select
                  className="h-11 w-full rounded-2xl border border-zinc-200 bg-white px-4 text-sm outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                  aria-label="Jenis kebutuhan"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Jenis kebutuhan
                  </option>
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <Textarea className="mt-4" placeholder="Ceritakan jumlah pax, tanggal, lokasi, dan catatan menu." aria-label="Detail kebutuhan" />
              <Link
                href={generateWhatsAppUrl(generateCorporateOrderMessage())}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-orange-500 px-6 text-sm font-black text-white shadow-lg shadow-orange-900/15 transition hover:bg-orange-600"
              >
                <Send className="h-4 w-4" />
                Lanjut via WhatsApp
              </Link>
            </form>

            <div className="grid gap-5">
              <div className="rounded-[2rem] bg-green-800 p-7 text-white shadow-2xl shadow-green-950/15" data-gsap="fade-up">
                <Clock3 className="h-9 w-9 text-yellow-300" />
                <h2 className="mt-5 text-2xl font-black tracking-tight">Response guide</h2>
                <div className="mt-5 space-y-4 text-sm font-bold leading-6 text-green-50/90">
                  <p>Daily order: konfirmasi stok dan delivery slot.</p>
                  <p>Corporate order: sertakan pax, tanggal, budget, dan lokasi.</p>
                  <p>Custom request: tulis preferensi buah, sweetness, dan packaging.</p>
                </div>
              </div>
              <div className="rounded-[2rem] border border-green-100 bg-white p-7 shadow-sm" data-gsap="fade-up">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-green-700">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-zinc-950">Service area</h2>
                    <p className="mt-2 text-sm leading-7 text-zinc-600">
                      {SITE_CONFIG.address}. Area pengiriman dan ongkir dikonfirmasi saat order.
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-zinc-950">Priority channel</h2>
                    <p className="mt-2 text-sm leading-7 text-zinc-600">
                      WhatsApp menjadi kanal utama untuk order, perubahan jadwal, dan kebutuhan hari yang sama.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PublicLayout>
  );
}
