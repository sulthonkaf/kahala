import { CheckCircle2, Heart, Leaf, ShieldCheck } from "lucide-react";

import { Container } from "@/core/components/common/container";
import { SectionHeading } from "@/core/components/common/section-heading";
import { BRAND_VALUES } from "@/core/constants/brand.constant";

const highlights = [
  { icon: Leaf, label: "Fresh ingredients" },
  { icon: ShieldCheck, label: "Clean brand system" },
  { icon: Heart, label: "Made with care" },
];

export function WhyKahalaSection() {
  return (
    <section className="relative bg-transparent py-20 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Why Kahala"
            title="Lebih dari sekadar snack sehat."
            description="Kahala dibangun sebagai healthy lifestyle brand yang menggabungkan kualitas produk, desain, kemudahan order, dan rasa yang menggugah selera."
          />

          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-2xl border border-white/64 bg-white/58 p-4 shadow-sm backdrop-blur-xl">
                  <Icon className="h-5 w-5 text-[#166534]" />
                  <p className="mt-3 text-sm font-black text-zinc-800">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative isolate overflow-hidden rounded-[2.5rem] border border-white/64 bg-white/62 p-6 shadow-2xl shadow-green-950/7 backdrop-blur-xl sm:p-8">
          <div className="absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full bg-[#22C55E]/16 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 -z-10 h-80 w-80 rounded-full bg-[#FACC15]/18 blur-3xl" />

          <div className="space-y-4">
            {BRAND_VALUES.map((reason, index) => (
              <div key={reason} className="flex gap-4 rounded-3xl border border-white/66 bg-white/60 p-4 shadow-sm backdrop-blur-xl">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#166534] text-white shadow-lg shadow-green-950/12">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#F97316]">Value 0{index + 1}</p>
                  <p className="mt-1 font-bold leading-7 text-zinc-700">{reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
