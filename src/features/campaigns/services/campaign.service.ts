import type { Campaign } from "../types/campaign.type";
export const CAMPAIGNS: Campaign[] = [{ id: "fresh-week", slug: "fresh-week", title: "Fresh Week Campaign", description: "Promo menu fresh untuk weekly healthy snack.", endsAt: "2026-12-31", cta: "Order Fresh Pack" }];
export async function getCampaignBySlug(slug: string) { return CAMPAIGNS.find((c) => c.slug === slug) ?? null; }
