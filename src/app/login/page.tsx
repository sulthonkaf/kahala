import Link from "next/link";
import { ArrowRight, LockKeyhole, Mail } from "lucide-react";
import { Container } from "@/core/components/common/container";
import { PublicLayout } from "@/core/components/layout/public-layout";
import { Input } from "@/core/components/ui/input";
import { APP_ROUTES } from "@/core/constants/route.constant";

export default function LoginPage() {
  return (
    <PublicLayout>
      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div data-gsap-hero>
            <p className="inline-flex rounded-full bg-green-50 px-4 py-2 text-sm font-black text-green-800">
              Customer Account
            </p>
            <h1 className="mt-5 max-w-2xl text-3xl font-black leading-tight tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
              Masuk untuk melihat order dan favoritmu.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-600">
              Login UI ini siap dihubungkan ke backend auth saat Kahala mulai menyimpan riwayat order, alamat, dan
              repeat order pelanggan.
            </p>
          </div>
          <form className="rounded-[2rem] border border-green-100 bg-white p-6 shadow-2xl shadow-green-950/10 sm:p-8" data-gsap="fade-up">
            <h2 className="text-2xl font-black text-zinc-950">Login</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600">Gunakan email atau nomor WhatsApp yang terdaftar.</p>
            <div className="mt-6 space-y-4">
              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-bold text-zinc-700">
                  <Mail className="h-4 w-4 text-green-700" />
                  Email atau WhatsApp
                </span>
                <Input placeholder="hello@kahala.id" />
              </label>
              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-bold text-zinc-700">
                  <LockKeyhole className="h-4 w-4 text-green-700" />
                  Password
                </span>
                <Input type="password" placeholder="Password" />
              </label>
            </div>
            <button className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-6 text-sm font-black text-white shadow-lg shadow-orange-900/15 transition hover:bg-orange-600" type="button">
              Masuk
              <ArrowRight className="h-4 w-4" />
            </button>
            <p className="mt-5 text-center text-sm text-zinc-600">
              Belum punya akun?{" "}
              <Link href={APP_ROUTES.register} className="font-black text-green-800">
                Register
              </Link>
            </p>
          </form>
        </Container>
      </section>
    </PublicLayout>
  );
}
