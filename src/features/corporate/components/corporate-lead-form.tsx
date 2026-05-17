"use client";
import { Input } from "@/core/components/ui/input";
import { Textarea } from "@/core/components/ui/textarea";
import { generateCorporateOrderMessage, generateWhatsAppUrl } from "@/core/lib/whatsapp";

export function CorporateLeadForm() {
  return (
    <form id="corporate-lead-form" className="rounded-[2rem] border border-green-100 bg-white p-6 shadow-2xl shadow-green-950/10 sm:p-8">
      <p className="text-sm font-black uppercase tracking-[0.22em] text-green-700">Request proposal</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-zinc-950">Kirim brief corporate order.</h2>
      <p className="mt-3 text-sm leading-7 text-zinc-600">
        Form ini siap untuk integrasi lead backend. Untuk MVP, CTA diarahkan ke WhatsApp agar tim Kahala bisa langsung
        follow up.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Input placeholder="Nama perusahaan/komunitas" aria-label="Nama perusahaan atau komunitas" />
        <Input placeholder="Nama PIC" aria-label="Nama PIC" />
        <Input placeholder="Nomor WhatsApp" aria-label="Nomor WhatsApp" />
        <Input placeholder="Jumlah pax" aria-label="Jumlah pax" />
        <Input placeholder="Tanggal kebutuhan" aria-label="Tanggal kebutuhan" />
        <Input placeholder="Lokasi pengiriman" aria-label="Lokasi pengiriman" />
      </div>
      <Textarea className="mt-4" placeholder="Ceritakan jenis acara, budget estimasi, preferensi menu, dan catatan packaging." aria-label="Detail kebutuhan corporate order" />
      <a
        href={generateWhatsAppUrl(generateCorporateOrderMessage())}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-full bg-orange-500 px-6 text-sm font-black text-white shadow-lg shadow-orange-900/15 transition hover:bg-orange-600 sm:w-auto"
      >
        Lanjut via WhatsApp
      </a>
    </form>
  );
}
