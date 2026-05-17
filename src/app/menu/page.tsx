import { Container } from "@/core/components/common/container";
import { SectionHeading } from "@/core/components/common/section-heading";
import { PublicLayout } from "@/core/components/layout/public-layout";
import { PRODUCT_CATEGORIES } from "@/core/constants/product.constant";
import { ProductFilter } from "@/features/products/components/product-filter";
import { ProductGrid } from "@/features/products/components/product-grid";
import { getProducts, getProductsByCategory } from "@/features/products/services/product.service";
import type { ProductCategorySlug } from "@/features/products/types/product.type";

type MenuPageProps = {
  searchParams?: Promise<{ category?: string }>;
};

const categorySlugs = PRODUCT_CATEGORIES.map((category) => category.slug);

function getActiveCategory(category?: string) {
  if (!category || !categorySlugs.includes(category as (typeof categorySlugs)[number])) {
    return "all-products";
  }

  return category;
}

export default async function MenuPage({ searchParams }: MenuPageProps) {
  const params = await searchParams;
  const activeCategory = getActiveCategory(params?.category);
  const products =
    activeCategory === "all-products"
      ? await getProducts()
      : await getProductsByCategory(activeCategory as ProductCategorySlug);
  const activeCategoryData = PRODUCT_CATEGORIES.find((category) => category.slug === activeCategory);

  return (
    <PublicLayout>
      <section className="py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <SectionHeading
              align="left"
              eyebrow="Kahala Menu"
              title="Healthy snack pilihan untuk harimu."
              description="Pilih category yang paling cocok untuk kebutuhan harian, sharing, atau order kantor."
            />
            <div className="rounded-[2rem] border border-green-100 bg-white p-5 shadow-sm">
              <p className="text-sm font-black text-green-800">{activeCategoryData?.name ?? "All Products"}</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                {activeCategoryData?.description ?? "Semua pilihan snack sehat Kahala."}
              </p>
            </div>
          </div>
          <div className="mt-8">
            <ProductFilter active={activeCategory} />
          </div>
          <div className="mt-10">
            <ProductGrid products={products} />
          </div>
        </Container>
      </section>
    </PublicLayout>
  );
}
