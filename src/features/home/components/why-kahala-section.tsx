import { CheckCircle2 } from "lucide-react";
import { Container } from "@/core/components/common/container";
import { SectionHeading } from "@/core/components/common/section-heading";
import { BRAND_VALUES } from "@/core/constants/brand.constant";
export function WhyKahalaSection() { return <section className="py-20"><Container className="grid items-center gap-12 lg:grid-cols-2"><SectionHeading align="left" eyebrow="Why Kahala" title="Lebih dari sekadar snack sehat." description="Kahala dibangun sebagai healthy lifestyle brand yang menggabungkan kualitas produk, desain, dan kemudahan order." /><div className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-xl shadow-emerald-950/5"><div className="space-y-4">{BRAND_VALUES.map((reason) => <div key={reason} className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-700" /><p className="font-bold leading-7 text-zinc-700">{reason}</p></div>)}</div></div></Container></section>; }
