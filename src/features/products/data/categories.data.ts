import type { ProductCategory } from "@/features/products/types/product.type";

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    slug: "diet-friendly",
    name: "Diet Friendly",
    description: "Pilihan lebih ringan untuk kamu yang sedang menjaga pola makan.",
    emoji: "🥝",
  },
  {
    slug: "sweet-control",
    name: "Sweet Control",
    description: "Alternatif manis berbasis buah untuk sweet craving yang lebih mindful.",
    emoji: "🍓",
  },
  {
    slug: "fruit-mix-bowl",
    name: "Fruit Mix Bowl",
    description: "Berbagai buah segar dalam satu porsi praktis dan menarik.",
    emoji: "🥭",
  },
  {
    slug: "fresh-boost",
    name: "Fresh Boost",
    description: "Camilan segar untuk menemani aktivitas harianmu.",
    emoji: "🍊",
  },
  {
    slug: "sharing-pack",
    name: "Sharing Pack",
    description: "Paket buah segar untuk keluarga, kantor, event, dan komunitas.",
    emoji: "🍇",
  },
  {
    slug: "weekly-pack",
    name: "Weekly Pack",
    description: "Paket mingguan untuk membantu kamu lebih konsisten makan buah.",
    emoji: "📦",
  },
];

export function getCategoryBySlug(slug: string) {
  return PRODUCT_CATEGORIES.find((category) => category.slug === slug);
}