import type { ReactNode } from "react";
import { AdminSidebar } from "@/core/components/layout/admin-sidebar";
import { AdminTopbar } from "@/core/components/layout/admin-topbar";
export default function AdminLayout({ children }: { children: ReactNode }) { return <div className="min-h-screen bg-zinc-50"><div className="flex"><AdminSidebar /><div className="min-w-0 flex-1"><AdminTopbar /><main className="p-4 sm:p-6 lg:p-8">{children}</main></div></div></div>; }
