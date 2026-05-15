export const PRODUCT_CATEGORIES = [
  { id: "all", name: "All Products", slug: "all-products", description: "Semua pilihan snack sehat Kahala." },
  { id: "diet-friendly", name: "Diet Friendly", slug: "diet-friendly", description: "Pilihan ringan untuk pola makan lebih seimbang." },
  { id: "sweet-control", name: "Sweet Control", slug: "sweet-control", description: "Manis secukupnya, tetap mindful." },
  { id: "fruit-mix-bowl", name: "Fruit Mix Bowl", slug: "fruit-mix-bowl", description: "Buah segar dalam bowl praktis." },
  { id: "fresh-boost", name: "Fresh Boost", slug: "fresh-boost", description: "Segar, ringan, dan cocok untuk aktivitas harian." },
  { id: "sharing-pack", name: "Sharing Pack", slug: "sharing-pack", description: "Paket sehat untuk dinikmati bersama." },
] as const;

export const PRODUCT_BADGES = {
  bestSeller: "Best Seller",
  new: "New",
  lowSugar: "Low Sugar",
  freshDaily: "Fresh Daily",
  corporateReady: "Corporate Ready",
} as const;
