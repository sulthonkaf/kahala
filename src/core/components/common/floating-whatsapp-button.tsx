import { MessageCircle } from "lucide-react";

import { generateGeneralOrderMessage, generateWhatsAppUrl } from "@/core/lib/whatsapp";

export function FloatingWhatsAppButton() {
  const href = generateWhatsAppUrl({
    message: generateGeneralOrderMessage(),
  });

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-700 text-white shadow-lg shadow-emerald-900/20 transition hover:-translate-y-1 hover:bg-emerald-800"
      aria-label="Order via WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}