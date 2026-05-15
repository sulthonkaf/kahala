import type { CartItem } from "../types/order.type";
export function calculateCartTotal(items: CartItem[]) { return items.reduce((total, item) => total + item.product.price * item.quantity, 0); }
export function createOrderCode() { return `KHL-${Date.now().toString().slice(-8)}`; }
