import Link from "next/link";
import { CheckCircle2, ClipboardList } from "lucide-react";
import { Container } from "@/core/components/common/container";
import { PublicLayout } from "@/core/components/layout/public-layout";
import { APP_ROUTES } from "@/core/constants/route.constant";

export default function OrderSuccessPage() {
  return (
    <PublicLayout>
      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <div className="rounded-[2rem] border border-green-100 bg-white p-8 text-center shadow-2xl shadow-green-950/10 sm:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-700">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <p className="mt-6 text-sm font-black uppercase tracking-[0.22em] text-green-700">Order Success</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl">Pesanan mock berhasil dibuat.</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-zinc-600">
              Nomor order <strong className="text-zinc-950">KHL-2026-0517</strong> siap dipakai untuk simulasi tracking.
              Tim Kahala akan menghubungi pelanggan untuk konfirmasi final.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href={APP_ROUTES.tracking} className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-orange-500 px-6 text-sm font-black text-white shadow-lg shadow-orange-900/15 transition hover:bg-orange-600">
                <ClipboardList className="h-4 w-4" />
                Track Order
              </Link>
              <Link href={APP_ROUTES.menu} className="inline-flex h-12 items-center justify-center rounded-full border border-green-200 bg-white px-6 text-sm font-black text-green-800 transition hover:bg-green-50">
                Back to Menu
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </PublicLayout>
  );
}
