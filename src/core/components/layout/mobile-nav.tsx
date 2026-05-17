"use client";

import { ArrowRight, LogIn, ShoppingBag, UserPlus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

type MobileNavProps = {
  onNavigate?: () => void;
};

export function MobileNav({ onNavigate }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <div className="grid gap-5 p-4">
      <nav className="grid gap-1" aria-label="Mobile navigation">
        {PUBLIC_NAVIGATION.map((item) => {
          const active =
            pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "group flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold transition duration-300 active:scale-[0.98]",
                active
                  ? "bg-green-50 text-green-800 shadow-sm shadow-green-950/5"
                  : "text-zinc-700 hover:-translate-y-0.5 hover:bg-green-50 hover:text-green-800 hover:shadow-lg hover:shadow-green-950/10",
              )}
            >
              <span>{item.label}</span>
              <ArrowRight
                className={cn(
                  "h-4 w-4 transition duration-300",
                  active
                    ? "text-green-700 opacity-100"
                    : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
                )}
              />
            </Link>
          );
        })}
      </nav>

      <div className="grid gap-2 border-t border-zinc-100 pt-4">
        <Link
          href={APP_ROUTES.cart}
          onClick={onNavigate}
          className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-green-200 bg-white px-5 text-sm font-black text-green-800 transition duration-300 hover:-translate-y-0.5 hover:border-green-300 hover:bg-green-50 hover:shadow-lg hover:shadow-green-950/10 active:scale-[0.98]"
        >
          <ShoppingBag className="h-4 w-4 transition duration-300 group-hover:-rotate-6 group-hover:scale-110" />
          Cart
        </Link>

        <Link
          href={generateWhatsAppUrl(generateGeneralOrderMessage())}
          target="_blank"
          rel="noreferrer"
          onClick={onNavigate}
          className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-orange-500 px-5 text-sm font-black text-white shadow-lg shadow-orange-900/15 transition duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-900/25 active:scale-[0.98]"
        >
          Order Now
          <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-2 border-t border-zinc-100 pt-4">
        <Link
          href={AUTH_NAVIGATION[0].href}
          onClick={onNavigate}
          className="group inline-flex h-11 items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-4 text-sm font-black text-zinc-800 transition duration-300 hover:-translate-y-0.5 hover:border-green-200 hover:bg-green-50 hover:text-green-800 hover:shadow-lg hover:shadow-green-950/10 active:scale-[0.98]"
        >
          <LogIn className="h-4 w-4 transition duration-300 group-hover:-translate-x-0.5" />
          {AUTH_NAVIGATION[0].label}
        </Link>

        <Link
          href={AUTH_NAVIGATION[1].href}
          onClick={onNavigate}
          className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-green-700 px-4 text-sm font-black text-white shadow-sm shadow-green-950/10 transition duration-300 hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-lg hover:shadow-green-950/20 active:scale-[0.98]"
        >
          <UserPlus className="h-4 w-4 transition duration-300 group-hover:scale-110" />
          {AUTH_NAVIGATION[1].label}
        </Link>
      </div>
    </div>
  );
}