import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, Leaf, PackageCheck, Sprout } from "lucide-react";
import { Container } from "@/core/components/common/container";
import { PublicLayout } from "@/core/components/layout/public-layout";
import { KAHALA_IMAGES } from "@/core/constants/asset.constant";
import { APP_ROUTES } from "@/core/constants/route.constant";

const values = [
  {
    title: "Fresh by habit",
    description: "Kami ingin snack sehat terasa mudah diulang, bukan hanya jadi pilihan sesekali.",
    icon: Leaf,
  },
  {
    title: "Balanced joy",
    description: "Kahala tetap menjaga rasa enjoyable karena healthy snack harus tetap menyenangkan.",
    icon: HeartHandshake,
  },
  {
    title: "Practical ritual",
    description: "Flow produk, bundle, dan order dibuat agar pelanggan cepat memilih sesuai momen.",
    icon: Sprout,
  },
  {
    title: "Ready to scale",
    description: "Struktur brand disiapkan untuk personal order, community, dan corporate snack.",
    icon: PackageCheck,
  },
];

const timeline = [
  { year: "01", title: "Fresh snack idea", text: "Membuat buah potong dan bowl terasa lebih modern, clean, dan mudah dipesan." },
  { year: "02", title: "Menu system", text: "Mengelompokkan menu ke diet friendly, sweet control, fruit mix, fresh boost, dan sharing pack." },
  { year: "03", title: "Business-ready flow", text: "Menyiapkan website untuk WhatsApp order, bundle, corporate lead, dan dashboard admin." },
];

export default function AboutPage() {
  return (
    <PublicLayout>
      <section className="overflow-hidden py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div data-gsap-hero>
              <p className="inline-flex rounded-full bg-green-50 px-4 py-2 text-sm font-black text-green-800">
                About Kahala
              </p>
              <h1 className="mt-5 max-w-3xl text-3xl font-black leading-tight tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
                Healthy snack brand untuk hari yang lebih fresh.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
                Kahala dibangun untuk membuat fruit bowl, snack buah, dan paket sehat terasa praktis, premium, dan
                mudah masuk ke rutinitas harian maupun kebutuhan kantor.
              </p>
              <Link
                href={APP_ROUTES.menu}
                className="mt-8 inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-orange-500 sm:w-auto px-7 text-sm font-black text-white shadow-xl shadow-orange-900/20 transition hover:-translate-y-0.5 hover:bg-orange-600"
              >
                Explore Menu
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative min-h-[430px]" data-gsap="fade-up">
              <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-green-100 via-[#FFF7ED] to-orange-100" />
              <div className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-green-950/10">
                <Image
                  src={KAHALA_IMAGES.healthyPrep}
                  alt="Healthy bowl story for Kahala"
                  width={1200}
                  height={900}
                  className="h-[430px] w-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-950/55 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-[1.75rem] bg-white/92 p-5 shadow-lg backdrop-blur">
                  <p className="text-sm font-black text-green-800">Brand promise</p>
                  <p className="mt-1 text-sm leading-6 text-zinc-600">
                    Fresh, clean, easy to order, and ready for daily repeat.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4" data-gsap="stagger">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <article key={value.title} className="rounded-[2rem] border border-green-950/10 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 text-xl font-black tracking-tight text-zinc-950">{value.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{value.description}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div data-gsap="fade-up">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-green-700">Our direction</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl">
                Dari snack sederhana menjadi platform healthy ordering.
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                Website ini disiapkan sebagai pondasi: menu, bundle, WhatsApp order, corporate inquiry, blog, customer
                dashboard, dan admin dashboard bisa tumbuh dari satu sistem frontend yang konsisten.
              </p>
            </div>
            <div className="grid gap-4" data-gsap="stagger">
              {timeline.map((item) => (
                <article key={item.title} className="grid gap-4 rounded-[2rem] border border-green-100 bg-white p-5 shadow-sm sm:grid-cols-[72px_1fr]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-lg font-black text-orange-600">
                    {item.year}
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-zinc-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-zinc-600">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </PublicLayout>
  );
}
