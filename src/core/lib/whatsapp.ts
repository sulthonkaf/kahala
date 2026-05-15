import { SITE_CONFIG } from "@/core/constants/site.constant";

type WhatsAppMessageInput = { productName?: string; packageName?: string; quantity?: number; customerName?: string; note?: string; };
export function generateWhatsAppUrl(message: string) { return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`; }
export function generateGeneralOrderMessage(input: WhatsAppMessageInput = {}) {
  return ["Halo Kahala, saya ingin order.", input.productName ? `Produk: ${input.productName}` : null, input.packageName ? `Paket: ${input.packageName}` : null, input.quantity ? `Jumlah: ${input.quantity}` : null, input.customerName ? `Nama: ${input.customerName}` : null, input.note ? `Catatan: ${input.note}` : null, "", "Mohon info ketersediaan dan total pembayarannya ya. Terima kasih."].filter(Boolean).join("\n");
}
export function generateCorporateOrderMessage() {
  return ["Halo Kahala, saya ingin konsultasi corporate order.", "Kebutuhan:", "- Nama perusahaan/komunitas:", "- Jumlah pax:", "- Tanggal acara:", "- Lokasi:", "- Budget estimasi:", "", "Mohon dibantu rekomendasi paket terbaik ya."].join("\n");
}
