import { AdminPageHeader } from "@/features/admin/components/admin-page-header";
import { AdminDataTable } from "@/features/admin/components/admin-data-table";
export default function Page() { return <div><AdminPageHeader title="Reports" description="Laporan order, revenue, best seller, dan customer." /><AdminDataTable title="Reports Data" /></div>; }
