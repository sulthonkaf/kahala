import { notFound } from "next/navigation";
import { Container } from "@/core/components/common/container";
import { SectionHeading } from "@/core/components/common/section-heading";
import { PublicLayout } from "@/core/components/layout/public-layout";
import { ProductDetail } from "@/features/products/components/product-detail";
import { ProductFilter } from "@/features/products/components/product-filter";
import { ProductGrid } from "@/features/products/components/product-grid";
import { getProductBySlug, getProductsByCategory, getProducts } from "@/features/products/services/product.service";
export default async function ProductSlugPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const product = await getProductBySlug(slug); const categoryProducts = await getProductsByCategory(slug); if (!product && categoryProducts.length === 0) notFound(); const all = await getProducts(); return <PublicLayout><section className="py-20"><Container>{product ? <><ProductDetail product={product} /><div className="mt-16"><SectionHeading title="Produk lain yang mungkin cocok" description="Eksplor pilihan Kahala lainnya." /><div className="mt-10"><ProductGrid products={all.filter((p) => p.slug !== product.slug).slice(0, 3)} /></div></div></> : <><SectionHeading eyebrow="Category" title="Menu Category" description="Pilihan produk sesuai kategori." /><div className="mt-8"><ProductFilter active={slug} /></div><div className="mt-10"><ProductGrid products={categoryProducts} /></div></>}</Container></section></PublicLayout>; }
