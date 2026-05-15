export const SITE_CONFIG = {
  name: "Kahala",
  legalName: "Kahala Healthy Snack",
  tagline: "Healthy snack, made simple.",
  description:
    "Kahala menghadirkan healthy snack bowl, fruit mix, dan paket sehat untuk daily lifestyle, office, community, dan corporate order.",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  ogImage: "/images/og-kahala.jpg",
  phone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "6281234567890",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "6281234567890",
  email: "hello@kahala.id",
  address: "Indonesia",
  instagram: "https://instagram.com/kahala.id",
  tiktok: "https://tiktok.com/@kahala.id",
} as const;

export const SITE_STATS = [
  { label: "Menu sehat", value: "20+" },
  { label: "Order mudah", value: "WA" },
  { label: "Corporate ready", value: "B2B" },
] as const;
