import type { CorporatePackage } from "../types/corporate.type";
export const CORPORATE_PACKAGES: CorporatePackage[] = [{ id: "weekly", name: "Weekly Office Pack", description: "Paket snack sehat mingguan untuk kantor.", minPax: 20, priceFrom: 25000, features: ["Menu rotation", "Bulk order", "WA support"] }, { id: "event", name: "Event Healthy Pack", description: "Paket acara, seminar, dan komunitas.", minPax: 50, priceFrom: 23000, features: ["Custom packaging", "Delivery schedule", "Corporate invoice"] }];
export async function getCorporatePackages() { return CORPORATE_PACKAGES; }
