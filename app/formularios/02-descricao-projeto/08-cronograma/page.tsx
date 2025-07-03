"use client";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";

export default function CronogramaPage() {
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
        <div className="container mx-auto p-6">
          <h1 className="text-2xl font-bold mb-4">Cronograma</h1>
          <p className="text-muted-foreground">Formulário em desenvolvimento...</p>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
