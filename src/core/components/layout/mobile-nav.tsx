"use client";

import { LogIn, ShoppingBag, UserPlus } from "lucide-react";
import Link from "next/link";
import { AUTH_NAVIGATION, PUBLIC_NAVIGATION } from "@/core/constants/navigation.constant";
import { APP_ROUTES } from "@/core/constants/route.constant";
import { generateGeneralOrderMessage, generateWhatsAppUrl } from "@/core/lib/whatsapp";

type MobileNavProps = {
  onNavigate?: () => void;
};

export function MobileNav({ onNavigate }: MobileNavProps) {
  return (
    <div className="grid gap-5 p-4">
      <nav className="grid gap-1" aria-label="Mobile navigation">
        {PUBLIC_NAVIGATION.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className="rounded-2xl px-4 py-3 text-sm font-bold text-zinc-700 transition hover:bg-green-50 hover:text-green-800"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="grid gap-2 border-t border-zinc-100 pt-4">
        <Link
          href={APP_ROUTES.cart}
          onClick={onNavigate}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-green-200 bg-white px-5 text-sm font-black text-green-800"
        >
          <ShoppingBag className="h-4 w-4" />
          Cart
        </Link>
        <Link
          href={generateWhatsAppUrl(generateGeneralOrderMessage())}
          target="_blank"
          rel="noreferrer"
          onClick={onNavigate}
          className="inline-flex h-12 items-center justify-center rounded-full bg-orange-500 px-5 text-sm font-black text-white shadow-lg shadow-orange-900/15"
        >
          Order Now
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-2 border-t border-zinc-100 pt-4">
        <Link
          href={AUTH_NAVIGATION[0].href}
          onClick={onNavigate}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-4 text-sm font-black text-zinc-800"
        >
          <LogIn className="h-4 w-4" />
          {AUTH_NAVIGATION[0].label}
        </Link>
        <Link
          href={AUTH_NAVIGATION[1].href}
          onClick={onNavigate}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-green-700 px-4 text-sm font-black text-white"
        >
          <UserPlus className="h-4 w-4" />
          {AUTH_NAVIGATION[1].label}
        </Link>
      </div>
    </div>
  );
}
