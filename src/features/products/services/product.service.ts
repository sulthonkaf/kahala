import { PRODUCTS } from "../data/product.mock";
export async function getProducts() { return PRODUCTS; }
export async function getBestSellerProducts() { return PRODUCTS.filter((p) => p.isBestSeller); }
export async function getProductBySlug(slug: string) { return PRODUCTS.find((product) => product.slug === slug) ?? null; }
export async function getProductsByCategory(categorySlug: string) { if (categorySlug === "all-products") return PRODUCTS; return PRODUCTS.filter((product) => product.category === categorySlug); }
