import Link from "next/link";
import { cn } from "@/core/lib/cn";
export type TabItem = { label: string; href: string; active?: boolean };
export function Tabs({ items, className }: { items: TabItem[]; className?: string }) { return <div className={cn("flex flex-wrap gap-2", className)}>{items.map((item) => <Link key={item.href} href={item.href} className={cn("rounded-full px-4 py-2 text-sm font-bold transition", item.active ? "bg-emerald-700 text-white" : "bg-white text-zinc-600 hover:bg-emerald-50 hover:text-emerald-800")}>{item.label}</Link>)}</div>; }
