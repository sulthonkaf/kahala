import { ArrowUpRight, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/core/components/ui/badge";
import { formatCurrency } from "@/core/lib/currency";
import type { Product } from "../types/product.type";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/menu/${product.slug}`}
      className="kahala-product-card group block overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/72 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:border-green-200 hover:bg-white/88 hover:shadow-2xl hover:shadow-green-950/10"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-green-50">
        {product.image ? (
          <Image
            src={product.image}
            alt={`${product.name} Kahala`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-green-50 to-yellow-50 text-7xl">
            {product.emoji}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-green-950/35 via-transparent to-transparent opacity-80" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {product.badges.slice(0, 2).map((badge) => (
            <Badge key={badge} className="bg-white/90 text-green-800 backdrop-blur">
              {badge}
            </Badge>
          ))}
        </div>
        <div className="absolute bottom-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg shadow-orange-900/20 transition group-hover:rotate-45">
          <Plus className="h-5 w-5" />
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-black text-zinc-950 group-hover:text-green-800">{product.name}</h3>
            <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-600">{product.description}</p>
          </div>
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-green-700 opacity-0 transition group-hover:opacity-100" />
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-zinc-100 pt-4">
          <p className="text-lg font-black text-green-800">{formatCurrency(product.price)}</p>
          <p className="text-xs font-bold uppercase text-zinc-400">Fresh daily</p>
        </div>
      </div>
    </Link>
  );
}
