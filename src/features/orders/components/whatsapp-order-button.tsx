import Link from "next/link";
import { generateGeneralOrderMessage, generateWhatsAppUrl } from "@/core/lib/whatsapp";
export function WhatsappOrderButton() { return <Link href={generateWhatsAppUrl(generateGeneralOrderMessage())} target="_blank" rel="noreferrer" className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-700 px-5 text-sm font-black text-white">Order via WhatsApp</Link>; }
