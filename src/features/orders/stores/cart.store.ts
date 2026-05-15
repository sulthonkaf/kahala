import type { CartItem } from "../types/order.type";
const KEY = "kahala-cart";
export function getStoredCart(): CartItem[] { if (typeof window === "undefined") return []; try { return JSON.parse(localStorage.getItem(KEY) ?? "[]") as CartItem[]; } catch { return []; } }
export function setStoredCart(items: CartItem[]) { if (typeof window !== "undefined") localStorage.setItem(KEY, JSON.stringify(items)); }
