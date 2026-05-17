import { KAHALA_IMAGES } from "@/core/constants/asset.constant";

export const PRODUCT_CATEGORIES = [
  { id: "all", name: "All Products", slug: "all-products", description: "Semua pilihan snack sehat Kahala.", image: KAHALA_IMAGES.fruitPlatter },
  { id: "diet-friendly", name: "Diet Friendly", slug: "diet-friendly", description: "Pilihan ringan untuk pola makan lebih seimbang.", image: KAHALA_IMAGES.smoothieBowl },
  { id: "sweet-control", name: "Sweet Control", slug: "sweet-control", description: "Manis secukupnya, tetap mindful.", image: KAHALA_IMAGES.berryBowl },
  { id: "fruit-mix-bowl", name: "Fruit Mix Bowl", slug: "fruit-mix-bowl", description: "Buah segar dalam bowl praktis.", image: KAHALA_IMAGES.fruitBowl },
  { id: "fresh-boost", name: "Fresh Boost", slug: "fresh-boost", description: "Segar, ringan, dan cocok untuk aktivitas harian.", image: KAHALA_IMAGES.handBowl },
  { id: "sharing-pack", name: "Sharing Pack", slug: "sharing-pack", description: "Paket sehat untuk dinikmati bersama.", image: KAHALA_IMAGES.fruitPlatter },
] as const;

export const PRODUCT_BADGES = {
  bestSeller: "Best Seller",
  new: "New",
  lowSugar: "Low Sugar",
  freshDaily: "Fresh Daily",
  corporateReady: "Corporate Ready",
} as const;
