import type { ReactNode } from "react";
import Link from "next/link";
import { DASHBOARD_NAVIGATION } from "@/core/constants/navigation.constant";
export default function DashboardLayout({ children }: { children: ReactNode }) { return <div className="min-h-screen bg-[#FFF7ED]"><div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[260px_1fr]"><aside className="rounded-3xl border border-zinc-200 bg-white p-4 shadow-sm"><p className="px-3 py-2 font-black text-zinc-950">Customer Dashboard</p><nav className="mt-3 grid gap-1">{DASHBOARD_NAVIGATION.map((item) => <Link key={item.href} href={item.href} className="rounded-2xl px-3 py-2 text-sm font-bold text-zinc-600 hover:bg-green-50 hover:text-green-800">{item.label}</Link>)}</nav></aside><main>{children}</main></div></div>; }
