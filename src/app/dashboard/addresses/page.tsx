import { Home, MapPin, Plus } from "lucide-react";

const addresses = [
  { label: "Home", detail: "Jl. Fresh Bowl No. 12, Jakarta Selatan", note: "Default delivery address" },
  { label: "Office", detail: "Gedung Wellness Lt. 5, Jakarta Pusat", note: "Meeting snack delivery" },
];

export default function DashboardAddressesPage() {
  return (
    <section>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-green-700">Delivery</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-zinc-950">Addresses</h1>
          <p className="mt-2 text-sm leading-7 text-zinc-600">Alamat mock untuk persiapan checkout backend.</p>
        </div>
        <button className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-orange-500 px-5 text-sm font-black text-white" type="button">
          <Plus className="h-4 w-4" />
          Add Address
        </button>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {addresses.map((address) => (
          <article key={address.label} className="rounded-[2rem] border border-green-100 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-700">
              {address.label === "Home" ? <Home className="h-5 w-5" /> : <MapPin className="h-5 w-5" />}
            </div>
            <h2 className="mt-5 text-xl font-black text-zinc-950">{address.label}</h2>
            <p className="mt-2 text-sm leading-7 text-zinc-600">{address.detail}</p>
            <p className="mt-4 text-xs font-black uppercase tracking-wide text-orange-600">{address.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
