import * as React from "react";
import { cn } from "@/core/lib/cn";
export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) { return <span className={cn("inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-800", className)} {...props} />; }
