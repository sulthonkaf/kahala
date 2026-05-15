"use client";
import { Input } from "@/core/components/ui/input";
import { Textarea } from "@/core/components/ui/textarea";
import { Button } from "@/core/components/ui/button";
export function CheckoutForm() { return <form className="grid gap-4 rounded-3xl border border-zinc-200 bg-white p-6"><Input placeholder="Nama penerima" /><Input placeholder="Nomor WhatsApp" /><Textarea placeholder="Alamat lengkap" /><Button type="button">Submit Order</Button></form>; }
