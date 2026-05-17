import { Mail, Phone, UserRound } from "lucide-react";
import { Input } from "@/core/components/ui/input";

export default function DashboardProfilePage() {
  return (
    <section>
      <p className="text-sm font-black uppercase tracking-[0.22em] text-green-700">Account</p>
      <h1 className="mt-2 text-3xl font-black tracking-tight text-zinc-950">Profile</h1>
      <p className="mt-2 text-sm leading-7 text-zinc-600">Profil pelanggan mock untuk persiapan integrasi auth.</p>
      <form className="mt-8 rounded-[2rem] border border-green-100 bg-white p-6 shadow-sm">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 flex items-center gap-2 text-sm font-bold text-zinc-700">
              <UserRound className="h-4 w-4 text-green-700" />
              Nama
            </span>
            <Input defaultValue="Kahala Customer" />
          </label>
          <label className="block">
            <span className="mb-2 flex items-center gap-2 text-sm font-bold text-zinc-700">
              <Phone className="h-4 w-4 text-green-700" />
              WhatsApp
            </span>
            <Input defaultValue="081234567890" />
          </label>
          <label className="block sm:col-span-2">
            <span className="mb-2 flex items-center gap-2 text-sm font-bold text-zinc-700">
              <Mail className="h-4 w-4 text-green-700" />
              Email
            </span>
            <Input defaultValue="customer@kahala.id" />
          </label>
        </div>
        <button className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-orange-500 px-6 text-sm font-black text-white" type="button">
          Save Profile
        </button>
      </form>
    </section>
  );
}
