import Link from "next/link";
import { PackageCheck } from "lucide-react";
import { APP_ROUTES } from "@/core/constants/route.constant";
import { formatCurrency } from "@/core/lib/currency";

const orders = [
  { id: "KHL-2026-0517", date: "17 Mei 2026", status: "Confirmation", total: 175000 },
  { id: "KHL-2026-0509", date: "9 Mei 2026", status: "Completed", total: 119000 },
];

export default function DashboardOrdersPage() {
  return (
    <section>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-green-700">Customer</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-zinc-950">My Orders</h1>
          <p className="mt-2 text-sm leading-7 text-zinc-600">Riwayat order mock untuk dashboard pelanggan.</p>
        </div>
        <Link href={APP_ROUTES.menu} className="inline-flex h-11 items-center justify-center rounded-full bg-orange-500 px-5 text-sm font-black text-white">
          Order Again
        </Link>
      </div>
      <div className="mt-8 grid gap-4">
        {orders.map((order) => (
          <article key={order.id} className="flex flex-col gap-4 rounded-[2rem] border border-green-100 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-700">
                <PackageCheck className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-black text-zinc-950">{order.id}</h2>
                <p className="mt-1 text-sm text-zinc-500">{order.date}</p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 sm:justify-end">
              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-black text-green-800">{order.status}</span>
              <strong className="text-green-800">{formatCurrency(order.total)}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
