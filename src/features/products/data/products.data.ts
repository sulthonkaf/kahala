import type { Product } from "@/features/products/types/product.type";

export const PRODUCTS: Product[] = [
  {
    id: "prod-001",
    slug: "signature-fruit-bowl",
    name: "Signature Fruit Bowl",
    categorySlug: "fruit-mix-bowl",
    shortDescription: "Perpaduan buah segar dalam satu porsi praktis.",
    description:
      "Signature Fruit Bowl adalah pilihan utama untuk kamu yang ingin menikmati berbagai buah segar dalam satu porsi yang praktis, menarik, dan lebih mindful.",
    price: 29000,
    imageGradient: "from-emerald-100 via-lime-100 to-yellow-100",
    badges: ["Best Seller", "Fruit Lovers"],
    ingredients: ["Melon", "Semangka", "Mangga", "Anggur", "Kiwi"],
    portionSize: "Personal bowl",
    sweetnessLevel: "Medium",
    suitableFor: ["Fruit lovers", "Snack siang", "Pengganti dessert ringan"],
    storageInstruction: "Simpan di suhu dingin jika tidak langsung dikonsumsi.",
    bestConsumed: "Sebaiknya dikonsumsi segera setelah diterima.",
    isBestSeller: true,
    isFeatured: true,
  },
  {
    id: "prod-002",
    slug: "light-fresh-cup",
    name: "Light Fresh Cup",
    categorySlug: "diet-friendly",
    shortDescription: "Camilan buah ringan untuk pola makan lebih terkontrol.",
    description:
      "Light Fresh Cup dibuat untuk kamu yang ingin ngemil lebih ringan tanpa rasa bersalah berlebihan. Cocok sebagai snack harian yang segar.",
    price: 22000,
    imageGradient: "from-green-100 via-emerald-50 to-white",
    badges: ["Diet Friendly", "Light Choice"],
    ingredients: ["Melon", "Apel", "Pear", "Jeruk"],
    portionSize: "Personal cup",
    sweetnessLevel: "Light",
    suitableFor: ["Diet ringan", "Snack pagi", "Mindful snacking"],
    storageInstruction: "Simpan dingin dan konsumsi dalam kondisi segar.",
    bestConsumed: "Sebaiknya dikonsumsi di hari yang sama.",
    isFeatured: true,
  },
  {
    id: "prod-003",
    slug: "sweet-berry-cup",
    name: "Sweet Berry Cup",
    categorySlug: "sweet-control",
    shortDescription: "Rasa manis segar untuk sweet craving yang lebih mindful.",
    description:
      "Sweet Berry Cup cocok untuk kamu yang suka rasa manis, tetapi ingin pilihan yang lebih segar dan berbasis buah.",
    price: 27000,
    imageGradient: "from-pink-100 via-rose-100 to-orange-50",
    badges: ["Sweet Control", "Berry Fresh"],
    ingredients: ["Strawberry", "Anggur", "Apel", "Yogurt ringan"],
    portionSize: "Personal cup",
    sweetnessLevel: "Sweet",
    suitableFor: ["Sweet tooth", "Dessert ringan", "Snack sore"],
    storageInstruction: "Simpan di kulkas dan hindari suhu panas terlalu lama.",
    bestConsumed: "Sebaiknya dikonsumsi segera setelah diterima.",
    isBestSeller: true,
  },
  {
    id: "prod-004",
    slug: "tropical-mango-bowl",
    name: "Tropical Mango Bowl",
    categorySlug: "fruit-mix-bowl",
    shortDescription: "Campuran buah tropis dengan rasa segar dan menyenangkan.",
    description:
      "Tropical Mango Bowl menghadirkan rasa buah tropis yang fresh, colorful, dan cocok untuk snack harian maupun dessert ringan.",
    price: 32000,
    imageGradient: "from-yellow-100 via-orange-100 to-amber-50",
    badges: ["Tropical", "Fresh Mix"],
    ingredients: ["Mangga", "Nanas", "Melon", "Jeruk", "Anggur"],
    portionSize: "Personal bowl",
    sweetnessLevel: "Medium",
    suitableFor: ["Fruit lovers", "Snack siang", "Fresh dessert"],
    storageInstruction: "Simpan dingin agar kualitas buah tetap terjaga.",
    bestConsumed: "Sebaiknya dikonsumsi dalam 3–5 jam setelah diterima.",
    isFeatured: true,
  },
  {
    id: "prod-005",
    slug: "citrus-fresh-boost",
    name: "Citrus Fresh Boost",
    categorySlug: "fresh-boost",
    shortDescription: "Rasa citrus segar untuk menemani aktivitas harian.",
    description:
      "Citrus Fresh Boost cocok untuk kamu yang mencari camilan segar, ringan, dan tidak terlalu berat di tengah aktivitas.",
    price: 24000,
    imageGradient: "from-orange-100 via-yellow-50 to-lime-50",
    badges: ["Fresh Boost", "Daily Freshness"],
    ingredients: ["Jeruk", "Kiwi", "Apel", "Melon"],
    portionSize: "Personal cup",
    sweetnessLevel: "Light",
    suitableFor: ["Snack kantor", "Setelah olahraga ringan", "Fresh break"],
    storageInstruction: "Simpan dingin untuk rasa terbaik.",
    bestConsumed: "Sebaiknya dikonsumsi segera setelah diterima.",
  },
  {
    id: "prod-006",
    slug: "family-fruit-box",
    name: "Family Fruit Box",
    categorySlug: "sharing-pack",
    shortDescription: "Paket buah segar untuk dinikmati bersama.",
    description:
      "Family Fruit Box cocok untuk keluarga, kantor kecil, meeting, atau acara santai yang membutuhkan pilihan snack lebih segar.",
    price: 119000,
    imageGradient: "from-lime-100 via-emerald-100 to-pink-50",
    badges: ["Sharing Pack", "Family"],
    ingredients: ["Melon", "Semangka", "Mangga", "Anggur", "Kiwi", "Jeruk"],
    portionSize: "Sharing box",
    sweetnessLevel: "Medium",
    suitableFor: ["Keluarga", "Kantor", "Event kecil", "Komunitas"],
    storageInstruction: "Simpan di suhu dingin sebelum disajikan.",
    bestConsumed: "Sebaiknya dikonsumsi di hari yang sama.",
    isFeatured: true,
  },
];

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((product) => product.slug === slug);
}

export function getFeaturedProducts() {
  return PRODUCTS.filter((product) => product.isFeatured);
}

export function getBestSellerProducts() {
  return PRODUCTS.filter((product) => product.isBestSeller);
}

export function getRelatedProducts(productId: string, categorySlug: string) {
  return PRODUCTS.filter(
    (product) => product.id !== productId && product.categorySlug === categorySlug,
  ).slice(0, 3);
}