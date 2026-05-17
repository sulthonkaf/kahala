import type { CorporatePackage } from "../types/corporate.type";
export const CORPORATE_PACKAGES: CorporatePackage[] = [
  {
    id: "weekly",
    name: "Weekly Office Pack",
    description: "Snack buah mingguan untuk pantry kantor, tim kecil, atau wellness ritual setiap pekan.",
    minPax: 20,
    priceFrom: 25000,
    features: ["Menu rotation", "Bulk order schedule", "WA coordination", "Delivery slot planning"],
  },
  {
    id: "meeting",
    name: "Meeting Fresh Box",
    description: "Paket ringkas untuk meeting, workshop, training, dan client visit yang butuh snack rapi.",
    minPax: 30,
    priceFrom: 23000,
    features: ["Individual cup option", "Label note optional", "Clean serving format", "Same-day brief ready"],
  },
  {
    id: "event",
    name: "Event Healthy Pack",
    description: "Paket skala event untuk seminar, komunitas, campaign kantor, dan hampers sehat.",
    minPax: 50,
    priceFrom: 22000,
    features: ["Custom packaging discussion", "Pax estimation support", "Corporate invoice ready", "Event day delivery"],
  },
];
export async function getCorporatePackages() { return CORPORATE_PACKAGES; }
