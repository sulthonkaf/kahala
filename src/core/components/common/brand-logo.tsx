import Image from "next/image";
import { cn } from "@/core/lib/cn";

type BrandLogoProps = {
  compact?: boolean;
  className?: string;
};

export function BrandLogo({ compact = false, className }: BrandLogoProps) {
  if (compact) {
    return (
      <Image
        src="/brand/kahala-mark.svg"
        alt="Kahala Koesoema"
        width={256}
        height={256}
        className={cn("h-11 w-11 rounded-2xl object-cover shadow-lg shadow-rose-900/10", className)}
        priority
      />
    );
  }

  return (
    <Image
      src="/brand/kahala-logo.svg"
      alt="Kahala Koesoema"
      width={620}
      height={306}
      className={cn("h-12 w-auto rounded-2xl object-contain shadow-lg shadow-rose-900/10", className)}
      priority
    />
  );
}
