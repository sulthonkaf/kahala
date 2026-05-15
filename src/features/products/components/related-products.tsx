import type { Product } from "../types/product.type";
import { ProductGrid } from "./product-grid";
export function RelatedProducts({ products }: { products: Product[] }) { return <section className="mt-16"><h2 className="text-2xl font-black text-zinc-950">Related Products</h2><div className="mt-6"><ProductGrid products={products} /></div></section>; }
