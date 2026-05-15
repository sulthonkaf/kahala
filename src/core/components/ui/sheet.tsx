import type { ReactNode } from "react";
export function SheetShell({ children }: { children: ReactNode }) { return <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-xl">{children}</div>; }
