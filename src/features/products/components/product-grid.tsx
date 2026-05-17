import type { Product } from "../types/product.type";
import { ProductCard } from "./product-card";
export function ProductGrid({ products }: { products: Product[] }) { return <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-gsap="stagger">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>; }
