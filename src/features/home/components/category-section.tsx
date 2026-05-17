import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/core/components/common/container";
import { SectionHeading } from "@/core/components/common/section-heading";
import { PRODUCT_CATEGORIES } from "@/core/constants/product.constant";

export function CategorySection() {
  return (
    <section className="relative bg-transparent py-20 sm:py-24" data-gsap="fade-up">
      <Container>
        <SectionHeading
          eyebrow="Menu Category"
          title="Pilih sesuai kebutuhan harianmu."
          description="Mulai dari fruit bowl, diet friendly, sampai sharing pack untuk kantor dan komunitas."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-gsap="stagger">
          {PRODUCT_CATEGORIES.filter((category) => category.id !== "all").map((category) => (
            <Link
              key={category.id}
              href={`/menu?category=${category.slug}`}
              className="group overflow-hidden rounded-[2rem] border border-white/64 bg-white/64 shadow-xl shadow-green-950/5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/84 hover:shadow-2xl hover:shadow-green-950/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#FFF7ED]">
                <Image
                  src={category.image}
                  alt={`${category.name} Kahala category`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(22,101,52,0.12)_42%,rgba(22,101,52,0.72)_100%)]" />
                <div className="absolute left-4 top-4 rounded-full bg-white/88 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-[#166534] backdrop-blur-md">
                  Fresh Menu
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4">
                  <h3 className="text-xl font-black text-white drop-shadow-sm">{category.name}</h3>
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#166534] shadow-lg shadow-green-950/12 transition group-hover:rotate-12 group-hover:bg-[#FACC15]">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm leading-7 text-zinc-600">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
