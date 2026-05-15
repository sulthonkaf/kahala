"use client";
import { Input } from "@/core/components/ui/input";
import { Textarea } from "@/core/components/ui/textarea";
import { Button } from "@/core/components/ui/button";
export function CorporateLeadForm() { return <form className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"><div className="grid gap-4"><Input placeholder="Nama perusahaan/komunitas" /><Input placeholder="Jumlah pax" /><Input placeholder="Tanggal kebutuhan" /><Textarea placeholder="Ceritakan kebutuhan corporate order kamu" /><Button type="button">Kirim Inquiry</Button></div></form>; }
