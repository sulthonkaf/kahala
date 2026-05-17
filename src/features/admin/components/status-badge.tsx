import { cn } from "@/core/lib/cn";
export function StatusBadge({ status }: { status: string }) { return <span className={cn("rounded-full px-3 py-1 text-xs font-black", status === "active" || status === "completed" ? "bg-green-50 text-green-800" : "bg-yellow-50 text-yellow-800")}>{status}</span>; }
