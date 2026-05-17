import type { Metadata, Viewport } from "next";
import { createMetadata } from "@/core/lib/seo";
import "./globals.css";

export const metadata: Metadata = createMetadata();
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#166534" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
