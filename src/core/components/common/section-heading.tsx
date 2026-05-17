import { cn } from "@/core/lib/cn";
export function SectionHeading({ eyebrow, title, description, align = "center", className }: { eyebrow?: string; title: string; description?: string; align?: "left" | "center"; className?: string; }) {
  return <div className={cn("mx-auto max-w-3xl", align === "center" ? "text-center" : "text-left", className)}>{eyebrow ? <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-green-700">{eyebrow}</p> : null}<h2 className="text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl">{title}</h2>{description ? <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg">{description}</p> : null}</div>;
}
