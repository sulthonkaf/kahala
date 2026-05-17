import { ArrowRight, CheckCircle2, MessageCircle, PackageCheck } from "lucide-react";
import Link from "next/link";

import { Container } from "@/core/components/common/container";
import { APP_ROUTES } from "@/core/constants/route.constant";

const items = [
  {
    title: "Curated Healthy Menu",
    description: "Menu sehat yang tetap enak, ringan, colorful, dan mudah dinikmati setiap hari.",
  },
  {
    title: "Easy WhatsApp Order",
    description: "Order cepat tanpa flow rumit untuk kebutuhan personal, kantor, komunitas, dan event.",
  },
  {
    title: "Fresh Daily Preparation",
    description: "Produk disiapkan dengan pendekatan fresh, clean, dan konsisten untuk menjaga kualitas.",
  },
];

export function SolutionSection() {
  return (
    <section className="relative bg-transparent py-20 sm:py-24 text-white">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[2.75rem] border border-white/20 bg-[#166534]/90 p-6 shadow-2xl shadow-green-950/20 backdrop-blur-xl sm:p-10 lg:p-14">
          <div className="absolute -right-28 -top-28 -z-10 h-80 w-80 rounded-full bg-[#FACC15]/24 blur-3xl" />
          <div className="absolute -bottom-32 -left-24 -z-10 h-96 w-96 rounded-full bg-[#22C55E]/24 blur-3xl" />

          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-[#FACC15]">Our Solution</p>
              <h2 className="max-w-2xl text-balance text-3xl font-black tracking-[-0.03em] text-white sm:text-5xl">
                Kahala membuat healthy snacking jadi sederhana, cantik, dan repeatable.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-green-50/82">
                Kombinasi produk fresh, brand experience clean, dan proses order yang mudah membuat Kahala cocok untuk daily snack sampai kebutuhan corporate.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <Link
                href={APP_ROUTES.menu}
                className="inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-full bg-[#F97316] px-7 text-sm font-black text-white shadow-xl shadow-orange-950/24 transition hover:-translate-y-0.5 hover:bg-[#ea6a0c]"
              >
                Lihat Produk
                <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="rounded-3xl border border-white/16 bg-white/10 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-3 text-sm font-black">
                  <PackageCheck className="h-5 w-5 text-[#FACC15]" />
                  Fresh brand system ready for growth
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {items.map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-white/16 bg-white/10 p-6 backdrop-blur-xl transition hover:bg-white/14">
                <CheckCircle2 className="h-7 w-7 text-[#FACC15]" />
                <h3 className="mt-5 text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-green-50/76">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
