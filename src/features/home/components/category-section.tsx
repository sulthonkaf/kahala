import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/core/components/common/container";
import { SectionHeading } from "@/core/components/common/section-heading";
import { PRODUCT_CATEGORIES } from "@/core/constants/product.constant";

export function CategorySection() {
  return (
    <section className="py-20" data-gsap="fade-up">
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
              href={`/menu/${category.slug}`}
              className="group overflow-hidden rounded-[1.75rem] border border-emerald-950/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-950/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-emerald-50">
                <Image
                  src={category.image}
                  alt={`${category.name} Kahala category`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/55 via-emerald-950/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4">
                  <h3 className="text-xl font-black text-white">{category.name}</h3>
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-emerald-800">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </div>
              <p className="p-5 text-sm leading-7 text-zinc-600">{category.description}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
