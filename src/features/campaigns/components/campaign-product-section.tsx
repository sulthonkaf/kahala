import { ProductGrid } from "@/features/products/components/product-grid";
import type { Product } from "@/features/products/types/product.type";
export function CampaignProductSection({ products }: { products: Product[] }) { return <section className="mt-12"><h2 className="text-2xl font-black text-zinc-950">Campaign Products</h2><div className="mt-6"><ProductGrid products={products} /></div></section>; }
