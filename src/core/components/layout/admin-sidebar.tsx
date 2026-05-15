"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ADMIN_NAVIGATION } from "@/core/constants/navigation.constant";
import { APP_ROUTES } from "@/core/constants/route.constant";
import { cn } from "@/core/lib/cn";
export function AdminSidebar() { const pathname = usePathname(); return <aside className="hidden min-h-screen w-72 border-r border-zinc-200 bg-white lg:block"><div className="sticky top-0 p-5"><Link href={APP_ROUTES.admin} className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-700 text-lg font-black text-white">K</div><div><p className="font-black text-zinc-950">Kahala Admin</p><p className="text-xs text-zinc-500">Commerce Dashboard</p></div></Link><nav className="mt-8 space-y-1">{ADMIN_NAVIGATION.map((item) => { const active = item.href === APP_ROUTES.admin ? pathname === item.href : pathname.startsWith(item.href); return <Link key={item.href} href={item.href} className={cn("flex rounded-2xl px-4 py-3 text-sm font-bold transition", active ? "bg-emerald-700 text-white" : "text-zinc-600 hover:bg-emerald-50 hover:text-emerald-800")}>{item.label}</Link>; })}</nav></div></aside>; }
