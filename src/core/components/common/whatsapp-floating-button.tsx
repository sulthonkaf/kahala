import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { generateGeneralOrderMessage, generateWhatsAppUrl } from "@/core/lib/whatsapp";
export function WhatsAppFloatingButton() { return <Link href={generateWhatsAppUrl(generateGeneralOrderMessage())} target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-emerald-700 text-white shadow-2xl shadow-emerald-900/30 transition hover:-translate-y-1 hover:bg-emerald-800 sm:inline-flex" aria-label="Order Kahala via WhatsApp"><MessageCircle className="h-6 w-6" /></Link>; }
