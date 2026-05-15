import type { Product } from "@/features/products/types/product.type";
export type CartItem = { product: Product; quantity: number; };
export type OrderStatus = "pending" | "confirmed" | "processing" | "delivered" | "cancelled";
export type CustomerAddress = { id: string; label: string; recipient: string; phone: string; address: string; };
