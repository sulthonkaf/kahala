import * as React from "react";
import { cn } from "@/core/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "outline" | "ghost" | "danger"; size?: "sm" | "md" | "lg"; };
const variantClass = { primary: "bg-emerald-700 text-white shadow-lg shadow-emerald-900/15 hover:bg-emerald-800", secondary: "bg-amber-400 text-zinc-950 hover:bg-amber-300", outline: "border border-emerald-200 bg-white text-emerald-800 hover:bg-emerald-50", ghost: "text-zinc-700 hover:bg-zinc-100", danger: "bg-red-600 text-white hover:bg-red-700" };
const sizeClass = { sm: "h-9 px-4 text-xs", md: "h-11 px-5 text-sm", lg: "h-13 px-7 text-sm" };
export function Button({ className, variant = "primary", size = "md", ...props }: ButtonProps) { return <button className={cn("inline-flex items-center justify-center gap-2 rounded-full font-bold transition disabled:pointer-events-none disabled:opacity-50", variantClass[variant], sizeClass[size], className)} {...props} />; }
