import { AlertCircle, Clock3, Sparkles } from "lucide-react";

import { Container } from "@/core/components/common/container";
import { SectionHeading } from "@/core/components/common/section-heading";

const items = [
  {
    icon: AlertCircle,
    title: "Pilihan sehat belum selalu enak",
    description: "Banyak snack terlihat healthy, tetapi rasa dan pengalaman makannya belum membuat pelanggan ingin repeat order.",
  },
  {
    icon: Clock3,
    title: "Order event sering ribet",
    description: "Untuk kantor, komunitas, atau acara kecil, pelanggan butuh proses order yang cepat, jelas, dan konsisten.",
  },
  {
    icon: Sparkles,
    title: "Brand kurang menggugah selera",
    description: "Produk segar butuh visual, warna, dan narasi yang langsung terasa fresh, clean, dan appetizing.",
  },
];

export function ProblemSection() {
  return (
    <section className="relative bg-transparent py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="The Problem"
          title="Ngemil sehat sering terasa ribet dan kurang menggoda."
          description="Kahala hadir untuk membuat healthy snacking terasa lebih fresh, praktis, modern, dan tetap menggugah selera."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3" data-gsap="stagger">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-[2rem] border border-white/60 bg-white/62 p-6 shadow-xl shadow-green-950/5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/82 hover:shadow-2xl hover:shadow-green-950/10"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#166534] text-white shadow-lg shadow-green-950/16">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-black text-[#F97316]">0{index + 1}</span>
                </div>

                <h3 className="mt-6 text-xl font-black tracking-tight text-zinc-950 group-hover:text-[#166534]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
