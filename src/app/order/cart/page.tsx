import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { Container } from "@/core/components/common/container";
import { PublicLayout } from "@/core/components/layout/public-layout";
import { APP_ROUTES } from "@/core/constants/route.constant";
import { formatCurrency } from "@/core/lib/currency";
import { PRODUCTS } from "@/features/products/data/product.mock";

const cartItems = [
  { product: PRODUCTS[0], quantity: 2 },
  { product: PRODUCTS[4], quantity: 1 },
];

const subtotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

export default function CartPage() {
  return (
    <PublicLayout>
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:items-start">
            <div>
              <p className="inline-flex rounded-full bg-green-50 px-4 py-2 text-sm font-black text-green-800">
                Your Cart
              </p>
              <h1 className="mt-5 text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl">Review order Kahala.</h1>
              <div className="mt-8 space-y-4">
                {cartItems.map((item) => (
                  <article key={item.product.id} className="grid gap-4 rounded-[2rem] border border-green-100 bg-white p-4 shadow-sm sm:grid-cols-[120px_1fr_auto] sm:items-center">
                    <div className="relative aspect-square overflow-hidden rounded-3xl bg-green-50">
                      {item.product.image ? (
                        <Image src={item.product.image} alt={item.product.name} fill sizes="120px" className="object-cover" />
                      ) : (
                        <div className="flex h-full items-center justify-center text-5xl">{item.product.emoji}</div>
                      )}
                    </div>
                    <div>
                      <h2 className="text-xl font-black text-zinc-950">{item.product.name}</h2>
                      <p className="mt-2 text-sm leading-6 text-zinc-600">{item.product.description}</p>
                      <p className="mt-3 text-sm font-black text-green-800">{formatCurrency(item.product.price)}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-700" type="button" aria-label="Decrease quantity">
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-6 text-center text-sm font-black">{item.quantity}</span>
                      <button className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white" type="button" aria-label="Increase quantity">
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <aside className="rounded-[2rem] border border-green-100 bg-white p-6 shadow-2xl shadow-green-950/10">
              <ShoppingBag className="h-8 w-8 text-orange-500" />
              <h2 className="mt-4 text-2xl font-black text-zinc-950">Order Summary</h2>
              <div className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between text-zinc-600">
                  <span>Subtotal</span>
                  <strong className="text-zinc-950">{formatCurrency(subtotal)}</strong>
                </div>
                <div className="flex justify-between text-zinc-600">
                  <span>Delivery</span>
                  <span>Konfirmasi WA</span>
                </div>
                <div className="border-t border-zinc-100 pt-4">
                  <div className="flex justify-between text-lg font-black text-zinc-950">
                    <span>Estimate</span>
                    <span>{formatCurrency(subtotal)}</span>
                  </div>
                </div>
              </div>
              <Link href={APP_ROUTES.checkout} className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-orange-500 px-6 text-sm font-black text-white shadow-lg shadow-orange-900/15 transition hover:bg-orange-600">
                Checkout
              </Link>
              <Link href={APP_ROUTES.menu} className="mt-3 inline-flex h-12 w-full items-center justify-center rounded-full border border-green-200 bg-white px-6 text-sm font-black text-green-800 transition hover:bg-green-50">
                Tambah Menu
              </Link>
            </aside>
          </div>
        </Container>
      </section>
    </PublicLayout>
  );
}
