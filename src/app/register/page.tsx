import { Container } from "@/core/components/common/container";
import { SectionHeading } from "@/core/components/common/section-heading";
import { PublicLayout } from "@/core/components/layout/public-layout";
export default function Page() { return <PublicLayout><section className="py-20"><Container><SectionHeading eyebrow="Kahala" title="Register" description="Buat akun pelanggan Kahala untuk menyimpan alamat dan riwayat order." /><div className="mt-10 rounded-3xl border border-zinc-200 bg-white p-8 text-center text-sm leading-7 text-zinc-600">Halaman ini sudah siap secara struktur. Tahap berikutnya adalah menghubungkan form, data, dan API sesuai kebutuhan fitur.</div></Container></section></PublicLayout>; }
