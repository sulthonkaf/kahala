import type { CartItem as CartItemType } from "../types/order.type";
import { formatCurrency } from "@/core/lib/currency";
export function CartItem({ item }: { item: CartItemType }) { return <div className="flex items-center justify-between rounded-3xl border border-zinc-200 bg-white p-4"><div><p className="font-black text-zinc-950">{item.product.name}</p><p className="text-sm text-zinc-500">Qty {item.quantity}</p></div><p className="font-black text-emerald-800">{formatCurrency(item.product.price * item.quantity)}</p></div>; }
