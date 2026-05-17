export type ProductCategorySlug =
  | "diet-friendly"
  | "sweet-control"
  | "fruit-mix-bowl"
  | "fresh-boost"
  | "sharing-pack"
  | "weekly-pack";

export type ProductCategory = {
  slug: ProductCategorySlug;
  name: string;
  description: string;
  emoji: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription?: string;
  category: ProductCategorySlug;
  price: number;
  image?: string;
  imageGradient?: string;
  emoji: string;
  badges: string[];
  ingredients?: string[];
  portionSize?: string;
  sweetnessLevel?: string;
  suitableFor?: string[];
  storageInstruction?: string;
  bestConsumed?: string;
  nutrition: {
    calories: number;
    sugar: string;
    protein: string;
  };
  isBestSeller?: boolean;
  isCorporateReady?: boolean;
  isFeatured?: boolean;
};
