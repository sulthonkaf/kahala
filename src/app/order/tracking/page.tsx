import { CheckCircle2, Clock3, PackageCheck, Truck } from "lucide-react";
import { Container } from "@/core/components/common/container";
import { PublicLayout } from "@/core/components/layout/public-layout";
import { Input } from "@/core/components/ui/input";

const timeline = [
  { title: "Order received", description: "Pesanan masuk ke sistem Kahala.", icon: CheckCircle2, active: true },
  { title: "Confirmation", description: "Tim menghubungi untuk detail pembayaran dan pengiriman.", icon: Clock3, active: true },
  { title: "Preparation", description: "Produk fresh disiapkan sesuai slot order.", icon: PackageCheck, active: false },
  { title: "Delivery", description: "Pesanan dikirim ke alamat pelanggan.", icon: Truck, active: false },
];

export default function TrackingPage() {
  return (
    <PublicLayout>
      <section className="py-16 sm:py-20">
        <Container className="max-w-5xl">
          <div className="rounded-[2rem] border border-green-100 bg-white p-6 shadow-2xl shadow-green-950/10 sm:p-8">
            <p className="inline-flex rounded-full bg-green-50 px-4 py-2 text-sm font-black text-green-800">
              Order Tracking
            </p>
            <h1 className="mt-5 text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl">Pantau status pesanan.</h1>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Input defaultValue="KHL-2026-0517" aria-label="Order ID" />
              <button className="h-11 rounded-full bg-orange-500 px-6 text-sm font-black text-white shadow-lg shadow-orange-900/15 transition hover:bg-orange-600" type="button">
                Cek Status
              </button>
            </div>
          </div>
          <div className="mt-8 grid gap-4">
            {timeline.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="flex gap-4 rounded-[2rem] border border-green-100 bg-white p-5 shadow-sm">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${item.active ? "bg-green-600 text-white" : "bg-zinc-100 text-zinc-400"}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="font-black text-zinc-950">{item.title}</h2>
                    <p className="mt-1 text-sm leading-6 text-zinc-600">{item.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
    </PublicLayout>
  );
}
