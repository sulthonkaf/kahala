import { ShoppingBag, Sparkles } from "lucide-react";

import { Container } from "@/core/components/common/container";
import { SectionHeading } from "@/core/components/common/section-heading";
import { ProductGrid } from "@/features/products/components/product-grid";
import { getBestSellerProducts } from "@/features/products/services/product.service";

export async function BestSellerSection() {
  const products = await getBestSellerProducts();

  return (
    <section className="relative bg-transparent py-20 sm:py-24">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[2.75rem] border border-white/64 bg-white/52 px-5 py-14 shadow-2xl shadow-orange-950/6 backdrop-blur-xl sm:px-8 lg:px-12">
          <div className="absolute -right-28 -top-28 -z-10 h-80 w-80 rounded-full bg-[#F97316]/14 blur-3xl" />
          <div className="absolute -bottom-28 -left-28 -z-10 h-80 w-80 rounded-full bg-[#22C55E]/18 blur-3xl" />

          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-[#166534]/10 bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#166534] shadow-sm backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-[#F97316]" />
              Best Seller
            </div>
            <SectionHeading
              eyebrow="Customer Favorite"
              title="Favorit pelanggan Kahala."
              description="Menu yang paling sering dipilih untuk daily snack, meeting, dan sharing moment."
            />
          </div>

          <div className="mt-12">
            {products.length > 0 ? (
              <ProductGrid products={products} />
            ) : (
              <div className="rounded-[2rem] border border-white/70 bg-white/70 p-10 text-center shadow-sm backdrop-blur-xl">
                <ShoppingBag className="mx-auto h-10 w-10 text-[#166534]" />
                <h3 className="mt-4 text-xl font-black text-zinc-950">Produk best seller segera hadir.</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-600">Tambahkan produk best seller agar section ini otomatis terisi.</p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
