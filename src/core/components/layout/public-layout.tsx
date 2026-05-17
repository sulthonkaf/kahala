import type { ReactNode } from "react";
import { GsapMotionProvider } from "@/core/components/common/gsap-motion-provider";
import { PublicFooter } from "./public-footer";
import { PublicNavbar } from "./public-navbar";
import { WhatsAppFloatingButton } from "@/core/components/common/whatsapp-floating-button";
export function PublicLayout({ children }: { children: ReactNode }) { return <div className="min-h-screen bg-[#FFFDF7] text-zinc-950"><GsapMotionProvider /><PublicNavbar /><main>{children}</main><PublicFooter /><WhatsAppFloatingButton /></div>; }
