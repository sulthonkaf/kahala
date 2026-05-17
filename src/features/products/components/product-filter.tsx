import { PRODUCT_CATEGORIES } from "@/core/constants/product.constant";
import { Tabs } from "@/core/components/ui/tabs";
import { APP_ROUTES } from "@/core/constants/route.constant";

export function ProductFilter({ active = "all-products" }: { active?: string }) {
  return (
    <Tabs
      items={PRODUCT_CATEGORIES.map((category) => ({
        label: category.name,
        href: category.slug === "all-products" ? APP_ROUTES.menu : `${APP_ROUTES.menu}?category=${category.slug}`,
        active: category.slug === active,
      }))}
    />
  );
}
