import { CheckCircle2, MessageCircle, ShoppingBasket, Truck } from "lucide-react";

import { Container } from "@/core/components/common/container";
import { SectionHeading } from "@/core/components/common/section-heading";

const steps = [
  { icon: ShoppingBasket, title: "Pilih Menu", description: "Lihat menu atau bundle sesuai kebutuhan harian, kantor, atau event." },
  { icon: MessageCircle, title: "Chat WhatsApp", description: "Kirim pesanan, jumlah, alamat, dan jadwal kebutuhan." },
  { icon: CheckCircle2, title: "Konfirmasi", description: "Tim Kahala bantu konfirmasi stok, total harga, dan pembayaran." },
  { icon: Truck, title: "Enjoy", description: "Pesanan disiapkan dengan fresh flow dan siap dinikmati." },
];

export function HowToOrderSection() {
  return (
    <section className="relative bg-transparent py-20 sm:py-24">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[2.75rem] border border-white/64 bg-[#F4FBF6]/62 p-6 shadow-xl shadow-green-950/5 backdrop-blur-xl sm:p-10">
          <div className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-[#FACC15]/20 blur-3xl" />
          <SectionHeading
            eyebrow="How To Order"
            title="Order mudah dalam 4 langkah."
            description="Simple, cepat, dan cocok untuk repeat order harian maupun corporate."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.title} className="group relative rounded-[2rem] border border-white/68 bg-white/66 p-6 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/84 hover:shadow-xl hover:shadow-green-950/8">
                  <div className="absolute right-5 top-5 text-5xl font-black tracking-[-0.08em] text-[#166534]/8">{index + 1}</div>
                  <div className="relative z-10 flex h-13 w-13 items-center justify-center rounded-2xl bg-[#166534] text-white shadow-lg shadow-green-950/16 transition group-hover:bg-[#F97316]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="relative z-10 mt-5 text-lg font-black text-zinc-950">{step.title}</h3>
                  <p className="relative z-10 mt-2 text-sm leading-7 text-zinc-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
