import Link from "next/link";
import { BrandLogo } from "@/core/components/common/brand-logo";
import { APP_ROUTES } from "@/core/constants/route.constant";

const groups = [
  {
    title: "Shop",
    links: [
      { label: "Menu", href: APP_ROUTES.menu },
      { label: "Bundles", href: APP_ROUTES.bundles },
      { label: "Corporate Order", href: APP_ROUTES.corporateOrder },
      { label: "Tracking", href: APP_ROUTES.tracking },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: APP_ROUTES.about },
      { label: "Why Kahala", href: APP_ROUTES.whyKahala },
      { label: "Blog", href: APP_ROUTES.blog },
      { label: "Contact", href: APP_ROUTES.contact },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: APP_ROUTES.faq },
      { label: "Login", href: APP_ROUTES.login },
      { label: "Register", href: APP_ROUTES.register },
    ],
  },
];

export function PublicFooter() {
  return (
    <footer className="border-t border-rose-950/10 bg-[#7E4747] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_2fr] lg:px-8">
        <div>
          <BrandLogo className="h-16 shadow-rose-950/20" />
          <p className="mt-5 max-w-md text-sm leading-7 text-rose-50/85">
            Snack sehat yang dirancang untuk lifestyle modern: fresh, praktis, enak, dan mudah dipesan untuk personal maupun corporate order.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="font-bold">{group.title}</h3>
              <div className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <Link key={link.href} href={link.href} className="block text-sm text-rose-50/75 transition hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-sm text-rose-50/75 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Kahala Koesoema. All rights reserved.</p>
          <p>Made for better daily snacking.</p>
        </div>
      </div>
    </footer>
  );
}
