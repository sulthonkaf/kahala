import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { APP_ROUTES } from "@/core/constants/route.constant";
import { formatCurrency } from "@/core/lib/currency";
import { PRODUCTS } from "@/features/products/data/product.mock";

const favorites = PRODUCTS.slice(0, 3);

export default function DashboardFavoritesPage() {
  return (
    <section>
      <p className="text-sm font-black uppercase tracking-[0.22em] text-green-700">Saved</p>
      <h1 className="mt-2 text-3xl font-black tracking-tight text-zinc-950">Favorite Products</h1>
      <p className="mt-2 text-sm leading-7 text-zinc-600">Produk mock yang siap dipakai untuk repeat order cepat.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {favorites.map((product) => (
          <article key={product.id} className="overflow-hidden rounded-[2rem] border border-green-100 bg-white shadow-sm">
            <div className="relative aspect-[4/3] bg-green-50">
              {product.image ? <Image src={product.image} alt={product.name} fill sizes="33vw" className="object-cover" /> : null}
              <div className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-pink-600 shadow-sm">
                <Heart className="h-5 w-5 fill-current" />
              </div>
            </div>
            <div className="p-5">
              <h2 className="font-black text-zinc-950">{product.name}</h2>
              <p className="mt-2 text-sm font-black text-green-800">{formatCurrency(product.price)}</p>
              <Link href={`${APP_ROUTES.menu}/${product.slug}`} className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-full bg-orange-500 px-4 text-sm font-black text-white">
                View Product
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
