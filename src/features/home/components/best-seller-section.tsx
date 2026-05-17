import { Container } from "@/core/components/common/container";
import { SectionHeading } from "@/core/components/common/section-heading";
import { ProductGrid } from "@/features/products/components/product-grid";
import { getBestSellerProducts } from "@/features/products/services/product.service";
export async function BestSellerSection() { const products = await getBestSellerProducts(); return <section className="bg-[#FFF7ED] py-20"><Container><SectionHeading eyebrow="Best Seller" title="Favorit pelanggan Kahala." description="Menu yang paling sering dipilih untuk daily snack, meeting, dan sharing moment." /><div className="mt-12"><ProductGrid products={products} /></div></Container></section>; }
