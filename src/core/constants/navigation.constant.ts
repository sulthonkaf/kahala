import { APP_ROUTES } from "./route.constant";

export const PUBLIC_NAVIGATION = [
  { label: "Home", href: APP_ROUTES.home },
  { label: "Menu", href: APP_ROUTES.menu },
  { label: "Bundles", href: APP_ROUTES.bundles },
  { label: "Corporate", href: APP_ROUTES.corporateOrder },
  { label: "Blog", href: APP_ROUTES.blog },
  { label: "Why Kahala", href: APP_ROUTES.whyKahala },
  { label: "FAQ", href: APP_ROUTES.faq },
  { label: "Contact", href: APP_ROUTES.contact },
] as const;

export const ADMIN_NAVIGATION = [
  { label: "Overview", href: APP_ROUTES.admin },
  { label: "Products", href: APP_ROUTES.adminProducts },
  { label: "Categories", href: APP_ROUTES.adminCategories },
  { label: "Orders", href: APP_ROUTES.adminOrders },
  { label: "Customers", href: APP_ROUTES.adminCustomers },
  { label: "Corporate Leads", href: APP_ROUTES.adminCorporateLeads },
  { label: "Campaigns", href: APP_ROUTES.adminCampaigns },
  { label: "Articles", href: APP_ROUTES.adminArticles },
  { label: "Testimonials", href: APP_ROUTES.adminTestimonials },
  { label: "FAQ", href: APP_ROUTES.adminFaqs },
  { label: "Reports", href: APP_ROUTES.adminReports },
  { label: "Settings", href: APP_ROUTES.adminSettings },
] as const;

export const DASHBOARD_NAVIGATION = [
  { label: "My Orders", href: APP_ROUTES.dashboardOrders },
  { label: "Favorite Products", href: APP_ROUTES.dashboardFavorites },
  { label: "Addresses", href: APP_ROUTES.dashboardAddresses },
  { label: "Profile", href: APP_ROUTES.dashboardProfile },
] as const;
