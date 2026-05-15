import type { CartItem } from "../types/order.type";
import { calculateCartTotal } from "../services/order.service";
import { formatCurrency } from "@/core/lib/currency";
export function OrderSummary({ items }: { items: CartItem[] }) { return <div className="rounded-3xl border border-zinc-200 bg-white p-6"><h2 className="text-xl font-black">Order Summary</h2><div className="mt-5 flex items-center justify-between"><span className="text-zinc-500">Total</span><strong className="text-emerald-800">{formatCurrency(calculateCartTotal(items))}</strong></div></div>; }
