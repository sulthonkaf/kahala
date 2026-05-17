"use client";

import { ArrowRight, LogIn, Menu, ShoppingBag, UserPlus, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { BrandLogo } from "@/core/components/common/brand-logo";
import { MobileNav } from "@/core/components/layout/mobile-nav";
import {
  AUTH_NAVIGATION,
  PUBLIC_NAVIGATION,
} from "@/core/constants/navigation.constant";
import { APP_ROUTES } from "@/core/constants/route.constant";
import { cn } from "@/core/lib/cn";
import {
  generateGeneralOrderMessage,
  generateWhatsAppUrl,
} from "@/core/lib/whatsapp";

export function PublicNavbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-green-950/10 bg-white/88 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href={APP_ROUTES.home}
          className="group flex shrink-0 items-center"
          aria-label="Kahala Koesoema home"
          onClick={() => setMobileOpen(false)}
        >
          <BrandLogo className="h-14 sm:h-14" />
        </Link>

        <nav
          className="hidden items-center gap-1 xl:flex"
          aria-label="Primary navigation"
        >
          {PUBLIC_NAVIGATION.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-bold transition duration-300 active:scale-[0.98] xl:px-4",
                  active
                    ? "bg-green-500 text-white shadow-lg shadow-green-950/15"
                    : "text-zinc-600 hover:-translate-y-0.5 hover:bg-green-500 hover:text-white hover:shadow-lg hover:shadow-green-950/15",
                )}
              >
                <span>{item.label}</span>
                <ArrowRight
                  className={cn(
                    "h-3.5 w-3.5 transition duration-300",
                    active
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={AUTH_NAVIGATION[0].href}
            className="group hidden h-11 items-center gap-2 rounded-full px-3 text-sm font-black text-zinc-700 transition duration-300 hover:-translate-y-0.5 hover:bg-green-500 hover:text-white hover:shadow-lg hover:shadow-green-950/15 active:scale-[0.98] xl:inline-flex"
          >
            <LogIn className="h-4 w-4 transition duration-300 group-hover:-translate-x-0.5" />
            {AUTH_NAVIGATION[0].label}
          </Link>

          <Link
            href={AUTH_NAVIGATION[1].href}
            className="group hidden h-11 items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 text-sm font-black text-green-800 transition duration-300 hover:-translate-y-0.5 hover:border-green-500 hover:bg-green-500 hover:text-white hover:shadow-lg hover:shadow-green-950/15 active:scale-[0.98] xl:inline-flex"
          >
            <UserPlus className="h-4 w-4 transition duration-300 group-hover:scale-110" />
            {AUTH_NAVIGATION[1].label}
          </Link>

          <Link
            href={APP_ROUTES.cart}
            className="group hidden h-11 items-center gap-2 rounded-full border border-zinc-200 px-4 text-sm font-bold text-zinc-800 transition duration-300 hover:-translate-y-0.5 hover:border-green-500 hover:bg-green-500 hover:text-white hover:shadow-lg hover:shadow-green-950/15 active:scale-[0.98] sm:inline-flex"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-4 w-4 transition duration-300 group-hover:-rotate-6 group-hover:scale-110" />
            <span className="hidden 2xl:inline">Cart</span>
          </Link>

          <Link
            href={generateWhatsAppUrl(generateGeneralOrderMessage())}
            target="_blank"
            rel="noreferrer"
            className="group hidden h-11 items-center gap-2 rounded-full bg-orange-500 px-5 text-sm font-black text-white shadow-lg shadow-orange-900/20 transition duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-900/25 active:scale-[0.98] md:inline-flex"
          >
            Order Now
            <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
          </Link>

          <button
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-full border text-zinc-700 transition duration-300 active:scale-[0.98] xl:hidden",
              mobileOpen
                ? "border-green-500 bg-green-500 text-white shadow-lg shadow-green-950/15"
                : "border-zinc-200 hover:-translate-y-0.5 hover:border-green-500 hover:bg-green-500 hover:text-white hover:shadow-lg hover:shadow-green-950/15",
            )}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            type="button"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-green-950/10 bg-white/95 shadow-2xl shadow-green-950/10 backdrop-blur-xl xl:hidden">
          <MobileNav onNavigate={() => setMobileOpen(false)} />
        </div>
      ) : null}
    </header>
  );
}