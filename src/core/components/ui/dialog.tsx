import type { ReactNode } from "react";
export function DialogShell({ title, children }: { title: string; children: ReactNode }) { return <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-xl"><h2 className="text-xl font-black text-zinc-950">{title}</h2><div className="mt-4">{children}</div></div>; }
