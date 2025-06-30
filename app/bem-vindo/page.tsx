import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DataTable } from "@/components/data-table";
import data from "../dashboard/data.json";

export default function BemVindoPage() {
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "calc(var(--spacing) * 72)",
        "--header-height": "calc(var(--spacing) * 12)",
      } as React.CSSProperties}
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Projetos</h1>
          <DataTable data={data} pageSize={15} />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
