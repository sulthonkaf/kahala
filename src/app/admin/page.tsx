import { AdminPageHeader } from "@/features/admin/components/admin-page-header";
import { AdminStatCard } from "@/features/admin/components/admin-stat-card";
import { AdminDataTable } from "@/features/admin/components/admin-data-table";
import { getAdminStats } from "@/features/admin/services/admin.service";
export default async function AdminOverviewPage() { const stats = await getAdminStats(); return <div><AdminPageHeader title="Overview" description="Ringkasan performa operasional Kahala." /><div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{stats.map((stat) => <AdminStatCard key={stat.label} stat={stat} />)}</div><div className="mt-8"><AdminDataTable title="Recent Activity" /></div></div>; }
