import { AdminPageHeader } from "@/features/admin/components/admin-page-header";
import { AdminDataTable } from "@/features/admin/components/admin-data-table";
export default function Page() { return <div><AdminPageHeader title="Orders" description="Kelola order pelanggan." /><AdminDataTable title="Orders Data" /></div>; }
