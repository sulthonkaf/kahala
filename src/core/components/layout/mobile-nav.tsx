import Link from "next/link";
import { PUBLIC_NAVIGATION } from "@/core/constants/navigation.constant";
export function MobileNav() { return <div className="grid gap-2 p-4">{PUBLIC_NAVIGATION.map((item) => <Link key={item.href} href={item.href} className="rounded-2xl px-4 py-3 text-sm font-bold text-zinc-700 hover:bg-green-50 hover:text-green-800">{item.label}</Link>)}</div>; }
