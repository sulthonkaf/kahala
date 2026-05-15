"use client";
import { Menu, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { APP_ROUTES } from "@/core/constants/route.constant";
import { PUBLIC_NAVIGATION } from "@/core/constants/navigation.constant";
import { SITE_CONFIG } from "@/core/constants/site.constant";
import { cn } from "@/core/lib/cn";
import { generateGeneralOrderMessage, generateWhatsAppUrl } from "@/core/lib/whatsapp";

export function PublicNavbar() {
  const pathname = usePathname();
  return <header className="sticky top-0 z-40 border-b border-emerald-950/10 bg-white/85 backdrop-blur-xl"><div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"><Link href={APP_ROUTES.home} className="group flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-700 text-lg font-black text-white shadow-lg shadow-emerald-900/20">K</div><div><p className="text-lg font-black tracking-tight text-zinc-950">{SITE_CONFIG.name}</p><p className="-mt-1 text-xs font-medium text-zinc-500">Healthy Snack</p></div></Link><nav className="hidden items-center gap-1 lg:flex">{PUBLIC_NAVIGATION.map((item) => { const active = item.href === APP_ROUTES.home ? pathname === item.href : pathname.startsWith(item.href); return <Link key={item.href} href={item.href} className={cn("rounded-full px-4 py-2 text-sm font-bold transition", active ? "bg-emerald-50 text-emerald-800" : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950")}>{item.label}</Link>; })}</nav><div className="flex items-center gap-2"><Link href={APP_ROUTES.cart} className="hidden h-11 items-center gap-2 rounded-full border border-zinc-200 px-4 text-sm font-bold text-zinc-800 transition hover:border-emerald-200 hover:bg-emerald-50 sm:inline-flex"><ShoppingBag className="h-4 w-4" />Cart</Link><Link href={generateWhatsAppUrl(generateGeneralOrderMessage())} target="_blank" rel="noreferrer" className="hidden h-11 items-center rounded-full bg-emerald-700 px-5 text-sm font-black text-white shadow-lg shadow-emerald-900/20 transition hover:-translate-y-0.5 hover:bg-emerald-800 md:inline-flex">Order Now</Link><button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 lg:hidden" aria-label="Open menu"><Menu className="h-5 w-5" /></button></div></div></header>;
}
