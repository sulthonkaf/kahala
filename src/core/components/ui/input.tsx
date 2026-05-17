import * as React from "react";
import { cn } from "@/core/lib/cn";
export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) { return <input className={cn("h-11 w-full rounded-2xl border border-zinc-200 bg-white px-4 text-sm outline-none transition placeholder:text-zinc-400 focus:border-green-500 focus:ring-4 focus:ring-green-100", className)} {...props} />; }
