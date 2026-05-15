import type { AdminStat } from "../types/admin.type";
export async function getAdminStats(): Promise<AdminStat[]> { return [{ label: "Total Orders", value: "128", hint: "+12% this month" }, { label: "Revenue", value: "Rp 18,4 jt", hint: "Mock data" }, { label: "Products", value: "24" }, { label: "Corporate Leads", value: "16" }]; }
