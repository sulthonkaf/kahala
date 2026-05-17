import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, CalendarDays, CheckCircle2, MessageCircle, UsersRound } from "lucide-react";
import { Container } from "@/core/components/common/container";
import { PublicLayout } from "@/core/components/layout/public-layout";
import { KAHALA_IMAGES } from "@/core/constants/asset.constant";
import { APP_ROUTES } from "@/core/constants/route.constant";
import { formatCurrency } from "@/core/lib/currency";
import { generateGeneralOrderMessage, generateWhatsAppUrl } from "@/core/lib/whatsapp";

const bundles = [
  {
    name: "Weekly Fresh Pack",
    description: "Paket 5 hari untuk bantu kamu konsisten punya snack buah segar di sela aktivitas.",
    price: 135000,
    image: KAHALA_IMAGES.healthyPrep,
    icon: CalendarDays,
    badge: "Daily routine",
    servings: "5 personal cups",
    bestFor: "Meal prep ringan, snack kantor, dan sweet control harian.",
    features: ["Mix buah berubah berkala", "Porsi personal", "Reminder repeat order ready"],
  },
  {
    name: "Family Sharing Pack",
    description: "Fruit box dan bowl mix untuk meja keluarga, gathering kecil, atau cemilan akhir pekan.",
    price: 189000,
    image: KAHALA_IMAGES.fruitPlatter,
    icon: UsersRound,
    badge: "Sharing favorite",
    servings: "4-6 pax",
    bestFor: "Keluarga, arisan kecil, komunitas, dan weekend snack.",
    features: ["Potongan siap saji", "Pilihan sweetness lebih seimbang", "Packaging sharing yang rapi"],
  },
  {
    name: "Corporate Wellness Pack",
    description: "Paket sehat untuk meeting, office snack, event, hampers, dan kebutuhan perusahaan.",
    price: 450000,
    image: KAHALA_IMAGES.officeSnack,
    icon: Building2,
    badge: "B2B ready",
    servings: "Mulai 20 pax",
    bestFor: "Meeting, pantry kantor, event komunitas, dan corporate gifting.",
    features: ["Label brand/event optional", "Estimasi pax fleksibel", "Konsultasi menu via WhatsApp"],
  },
];

const occasions = ["Office meeting", "Weekly snack", "Family table", "Community event", "Healthy hampers", "Pantry refresh"];

export default function BundlesPage() {
  return (
    <PublicLayout>
      <section className="overflow-hidden py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div data-gsap-hero>
              <p className="inline-flex rounded-full bg-orange-50 px-4 py-2 text-sm font-black text-orange-600">
                Kahala Bundles
              </p>
              <h1 className="mt-5 max-w-3xl text-3xl font-black leading-tight tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
                Paket buah segar untuk rutinitas, sharing, dan kebutuhan kantor.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
                Pilih paket yang sudah dikurasi agar order lebih cepat, porsi lebih jelas, dan tampilan snack tetap
                premium saat disajikan.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#bundle-list"
                  className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-orange-500 sm:w-auto px-7 text-sm font-black text-white shadow-xl shadow-orange-900/20 transition hover:-translate-y-0.5 hover:bg-orange-600"
                >
                  Lihat Paket
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={APP_ROUTES.corporateOrder}
                  className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full border border-green-200 sm:w-auto bg-white px-7 text-sm font-black text-green-800 transition hover:bg-green-50"
                >
                  Corporate Order
                </Link>
              </div>
            </div>
            <div className="relative min-h-[420px]" data-gsap="fade-up">
              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-green-100 via-orange-50 to-yellow-100" />
              <div className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-green-950/10">
                <Image
                  src={KAHALA_IMAGES.freshFruitSpread}
                  alt="Fresh fruit spread for Kahala bundles"
                  width={1200}
                  height={900}
                  className="h-[420px] w-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-950/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-[1.75rem] bg-white/92 p-5 shadow-lg backdrop-blur">
                  <p className="text-sm font-black text-green-800">Bundle planning made simple</p>
                  <p className="mt-1 text-sm leading-6 text-zinc-600">
                    Dari personal pack sampai corporate pack, semua bisa diarahkan ke WhatsApp untuk konfirmasi cepat.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="bundle-list" className="mt-16 grid gap-6 lg:grid-cols-3" data-gsap="stagger">
            {bundles.map((bundle) => {
              const Icon = bundle.icon;
              return (
                <article
                  key={bundle.name}
                  className="group overflow-hidden rounded-[2rem] border border-green-950/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-950/10"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-green-50">
                    <Image
                      src={bundle.image}
                      alt={`${bundle.name} Kahala`}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-950/45 via-transparent to-transparent" />
                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-black text-green-800 shadow-sm backdrop-blur">
                      <Icon className="h-4 w-4" />
                      {bundle.badge}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-black text-orange-600">Mulai {formatCurrency(bundle.price)}</p>
                    <h2 className="mt-2 text-2xl font-black tracking-tight text-zinc-950">{bundle.name}</h2>
                    <p className="mt-3 text-sm leading-7 text-zinc-600">{bundle.description}</p>
                    <div className="mt-5 rounded-2xl bg-green-50 p-4">
                      <p className="text-xs font-black uppercase text-green-800">Best for</p>
                      <p className="mt-2 text-sm leading-6 text-zinc-700">{bundle.bestFor}</p>
                    </div>
                    <div className="mt-5 space-y-3">
                      {bundle.features.map((feature) => (
                        <div key={feature} className="flex gap-3 text-sm font-bold text-zinc-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Link
                      href={generateWhatsAppUrl(generateGeneralOrderMessage({ packageName: bundle.name, quantity: 1 }))}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-5 text-sm font-black text-white shadow-lg shadow-orange-900/15 transition hover:bg-orange-600"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Order Paket Ini
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-16 rounded-[2rem] border border-green-100 bg-white p-6 shadow-sm sm:p-8" data-gsap="fade-up">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-green-700">Occasion ready</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-zinc-950">
                  Satu sistem bundle untuk banyak momen.
                </h2>
                <p className="mt-4 text-sm leading-7 text-zinc-600">
                  Bundle Kahala dirancang supaya pelanggan awam cepat memilih, sementara tim Kahala tetap mudah
                  menyesuaikan stok, pax, dan catatan pengiriman.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {occasions.map((occasion) => (
                  <div key={occasion} className="rounded-2xl bg-[#FFF7ED] px-4 py-4 text-sm font-black text-zinc-800">
                    {occasion}
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
