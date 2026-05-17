import * as React from "react";
import { cn } from "@/core/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "outline" | "ghost" | "danger"; size?: "sm" | "md" | "lg"; };
const variantClass = { primary: "bg-green-600 text-white shadow-lg shadow-green-900/15 hover:bg-green-700", secondary: "bg-orange-500 text-white shadow-lg shadow-orange-900/15 hover:bg-orange-600", outline: "border border-green-200 bg-white text-green-800 hover:bg-green-50", ghost: "text-zinc-700 hover:bg-orange-50", danger: "bg-red-600 text-white hover:bg-red-700" };
const sizeClass = { sm: "h-9 px-4 text-xs", md: "h-11 px-5 text-sm", lg: "h-13 px-7 text-sm" };
export function Button({ className, variant = "primary", size = "md", ...props }: ButtonProps) { return <button className={cn("inline-flex items-center justify-center gap-2 rounded-full font-bold transition disabled:pointer-events-none disabled:opacity-50", variantClass[variant], sizeClass[size], className)} {...props} />; }
