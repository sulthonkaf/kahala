import { Container } from "@/core/components/common/container";
import { SectionHeading } from "@/core/components/common/section-heading";
import { PublicLayout } from "@/core/components/layout/public-layout";
import { CheckoutForm } from "@/features/orders/components/checkout-form";
export default function CheckoutPage() { return <PublicLayout><section className="py-20"><Container><SectionHeading eyebrow="Checkout" title="Lengkapi data order." description="Isi data pengiriman, lalu tim Kahala akan mengonfirmasi pesanan." /><div className="mx-auto mt-10 max-w-2xl"><CheckoutForm /></div></Container></section></PublicLayout>; }
