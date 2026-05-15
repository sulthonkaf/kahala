import { cn } from "@/core/lib/cn";
export function StatusBadge({ status }: { status: string }) { return <span className={cn("rounded-full px-3 py-1 text-xs font-black", status === "active" || status === "completed" ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-800")}>{status}</span>; }
