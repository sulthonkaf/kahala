import { PRODUCT_CATEGORIES } from "@/core/constants/product.constant";
import { Tabs } from "@/core/components/ui/tabs";
export function ProductFilter({ active = "all-products" }: { active?: string }) { return <Tabs items={PRODUCT_CATEGORIES.map((c) => ({ label: c.name, href: c.slug === "all-products" ? "/menu" : `/menu/${c.slug}`, active: c.slug === active }))} />; }
