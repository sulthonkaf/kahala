import { Container } from "@/core/components/common/container";
import { PublicLayout } from "@/core/components/layout/public-layout";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { CorporateHero } from "@/features/corporate/components/corporate-hero";
import { CorporateLeadForm } from "@/features/corporate/components/corporate-lead-form";
import { CorporatePackageCard } from "@/features/corporate/components/corporate-package-card";
import { CorporateProcessSection } from "@/features/corporate/components/corporate-process-section";
import { getCorporatePackages } from "@/features/corporate/services/corporate.service";

const trustItems = [
  "Format personal cup, sharing box, dan event pack",
  "Paket bisa diarahkan untuk HR, admin, PIC event, dan komunitas",
  "WhatsApp-first untuk brief cepat dan konfirmasi fleksibel",
];

export default async function CorporateOrderPage() {
  const packages = await getCorporatePackages();

  return (
    <PublicLayout>
      <section className="overflow-hidden py-16 sm:py-20">
        <Container>
          <CorporateHero />

          <div className="mt-16 grid gap-6 lg:grid-cols-3" data-gsap="stagger">
            {packages.map((item) => (
              <CorporatePackageCard key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="rounded-[2rem] border border-green-100 bg-white p-7 shadow-sm" data-gsap="fade-up">
              <Sparkles className="h-9 w-9 text-orange-500" />
              <h2 className="mt-5 text-3xl font-black tracking-tight text-zinc-950">Why teams choose Kahala</h2>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                Corporate snack perlu jelas, mudah dibagi, tidak messy, dan tetap terlihat punya niat. Kahala
                memosisikan fruit bowl sebagai snack modern yang lebih fresh untuk lingkungan kerja.
              </p>
              <div className="mt-6 space-y-3">
                {trustItems.map((item) => (
                  <div key={item} className="flex gap-3 text-sm font-bold leading-6 text-zinc-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3" data-gsap="stagger">
              {["Office wellness", "Meeting snack", "Event hampers"].map((item) => (
                <div key={item} className="rounded-[2rem] bg-[#FFF7ED] p-6 shadow-sm">
                  <ShieldCheck className="h-7 w-7 text-green-700" />
                  <p className="mt-5 text-lg font-black text-zinc-950">{item}</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">Paket siap disesuaikan dengan jumlah pax dan momen.</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <CorporateProcessSection />
          </div>
          <div className="mx-auto mt-16 max-w-4xl">
            <CorporateLeadForm />
          </div>
        </Container>
      </section>
    </PublicLayout>
  );
}
