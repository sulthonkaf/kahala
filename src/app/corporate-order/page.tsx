import { Container } from "@/core/components/common/container";
import { PublicLayout } from "@/core/components/layout/public-layout";
import { CorporateHero } from "@/features/corporate/components/corporate-hero";
import { CorporateLeadForm } from "@/features/corporate/components/corporate-lead-form";
import { CorporatePackageCard } from "@/features/corporate/components/corporate-package-card";
import { CorporateProcessSection } from "@/features/corporate/components/corporate-process-section";
import { getCorporatePackages } from "@/features/corporate/services/corporate.service";
export default async function CorporateOrderPage() { const packages = await getCorporatePackages(); return <PublicLayout><section className="py-20"><Container><CorporateHero /><div className="mt-12 grid gap-6 lg:grid-cols-2">{packages.map((item) => <CorporatePackageCard key={item.id} item={item} />)}</div><div className="mt-12"><CorporateProcessSection /></div><div className="mx-auto mt-12 max-w-2xl"><CorporateLeadForm /></div></Container></section></PublicLayout>; }
