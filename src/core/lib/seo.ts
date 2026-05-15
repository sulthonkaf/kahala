import type { Metadata } from "next";
import { SITE_CONFIG } from "@/core/constants/site.constant";

type SeoInput = { title?: string; description?: string; path?: string; image?: string; noIndex?: boolean; };
export function createMetadata(input: SeoInput = {}): Metadata {
  const title = input.title ? `${input.title} | ${SITE_CONFIG.name}` : `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`;
  const description = input.description ?? SITE_CONFIG.description;
  const url = `${SITE_CONFIG.url}${input.path ?? ""}`;
  const image = input.image ?? SITE_CONFIG.ogImage;
  return { title, description, metadataBase: new URL(SITE_CONFIG.url), robots: input.noIndex ? { index: false, follow: false } : undefined, openGraph: { title, description, url, siteName: SITE_CONFIG.name, images: [{ url: image, width: 1200, height: 630, alt: title }], locale: "id_ID", type: "website" }, twitter: { card: "summary_large_image", title, description, images: [image] } };
}
