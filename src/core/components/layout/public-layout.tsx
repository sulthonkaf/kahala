import type { ReactNode } from "react";
import { PublicFooter } from "./public-footer";
import { PublicNavbar } from "./public-navbar";
import { WhatsAppFloatingButton } from "@/core/components/common/whatsapp-floating-button";
export function PublicLayout({ children }: { children: ReactNode }) { return <div className="min-h-screen bg-[#FFFDF7] text-zinc-950"><PublicNavbar /><main>{children}</main><PublicFooter /><WhatsAppFloatingButton /></div>; }
