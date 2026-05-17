import type { CorporatePackage } from "../types/corporate.type";
import { formatCurrency } from "@/core/lib/currency";
import { CalendarDays, CheckCircle2, Gift, UsersRound } from "lucide-react";
import { generateCorporateOrderMessage, generateWhatsAppUrl } from "@/core/lib/whatsapp";

const iconByPackage = {
  weekly: CalendarDays,
  meeting: UsersRound,
  event: Gift,
} as const;

export function CorporatePackageCard({ item }: { item: CorporatePackage }) {
  const Icon = iconByPackage[item.id as keyof typeof iconByPackage] ?? UsersRound;

  return (
    <article className="group rounded-[2rem] border border-green-950/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-2xl hover:shadow-green-950/10">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-700">
          <Icon className="h-5 w-5" />
        </div>
        <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-black text-orange-600">Min. {item.minPax} pax</span>
      </div>
      <h3 className="mt-5 text-2xl font-black tracking-tight text-zinc-950">{item.name}</h3>
      <p className="mt-3 text-sm leading-7 text-zinc-600">{item.description}</p>
      <p className="mt-5 text-sm font-bold text-zinc-500">Start from</p>
      <p className="mt-1 text-3xl font-black text-green-800">{formatCurrency(item.priceFrom)} <span className="text-sm text-zinc-500">/ pax</span></p>
      <div className="mt-6 space-y-3">
        {item.features.map((feature) => (
          <div key={feature} className="flex gap-3 text-sm font-bold leading-6 text-zinc-700">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
            {feature}
          </div>
        ))}
      </div>
      <a
        href={generateWhatsAppUrl(generateCorporateOrderMessage())}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-orange-500 px-5 text-sm font-black text-white shadow-lg shadow-orange-900/15 transition hover:bg-orange-600"
      >
        Consult Package
      </a>
    </article>
  );
}
