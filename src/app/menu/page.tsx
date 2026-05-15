import { Container } from "@/core/components/common/container";
import { SectionHeading } from "@/core/components/common/section-heading";
import { PublicLayout } from "@/core/components/layout/public-layout";
import { ProductFilter } from "@/features/products/components/product-filter";
import { ProductGrid } from "@/features/products/components/product-grid";
import { getProducts } from "@/features/products/services/product.service";
export default async function MenuPage() { const products = await getProducts(); return <PublicLayout><section className="py-20"><Container><SectionHeading eyebrow="Kahala Menu" title="Healthy snack pilihan untuk harimu." description="Pilih menu favoritmu dan order langsung melalui WhatsApp." /><div className="mt-8"><ProductFilter /></div><div className="mt-10"><ProductGrid products={products} /></div></Container></section></PublicLayout>; }
