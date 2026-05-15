import { notFound } from "next/navigation";
import { Container } from "@/core/components/common/container";
import { PublicLayout } from "@/core/components/layout/public-layout";
import { CampaignHero } from "@/features/campaigns/components/campaign-hero";
import { CampaignCountdown } from "@/features/campaigns/components/campaign-countdown";
import { CampaignProductSection } from "@/features/campaigns/components/campaign-product-section";
import { getCampaignBySlug } from "@/features/campaigns/services/campaign.service";
import { getProducts } from "@/features/products/services/product.service";
export default async function CampaignPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const campaign = await getCampaignBySlug(slug); if (!campaign) notFound(); const products = await getProducts(); return <PublicLayout><section className="py-20"><Container><CampaignHero campaign={campaign} /><div className="mt-8"><CampaignCountdown endsAt={campaign.endsAt} /></div><CampaignProductSection products={products.slice(0, 3)} /></Container></section></PublicLayout>; }
