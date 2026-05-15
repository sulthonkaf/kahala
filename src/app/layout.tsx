import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { createMetadata } from "@/core/lib/seo";
import { cn } from "@/core/lib/cn";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = createMetadata();
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#2F6B4F" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={cn(inter.variable, playfair.variable, "font-sans antialiased")}>{children}</body>
    </html>
  );
}
