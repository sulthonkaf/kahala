import * as React from "react";
import { cn } from "@/core/lib/cn";
export function Table({ className, ...props }: React.TableHTMLAttributes<HTMLTableElement>) { return <div className="w-full overflow-auto"><table className={cn("w-full text-sm", className)} {...props} /></div>; }
export function THead(props: React.HTMLAttributes<HTMLTableSectionElement>) { return <thead className="border-b border-zinc-200 bg-zinc-50" {...props} />; }
export function TBody(props: React.HTMLAttributes<HTMLTableSectionElement>) { return <tbody className="divide-y divide-zinc-100" {...props} />; }
export function TR(props: React.HTMLAttributes<HTMLTableRowElement>) { return <tr className="transition hover:bg-zinc-50" {...props} />; }
export function TH(props: React.ThHTMLAttributes<HTMLTableCellElement>) { return <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wider text-zinc-500" {...props} />; }
export function TD(props: React.TdHTMLAttributes<HTMLTableCellElement>) { return <td className="px-4 py-4 align-middle text-zinc-700" {...props} />; }
