"use client";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { BackToProjectDetails } from "@/components/BackToProjectDetails";
import { FormResponsavelTecnico } from "./form_item04";

export default function ResponsavelTecnicoPage() {
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
        <BackToProjectDetails />
        <FormResponsavelTecnico />
      </SidebarInset>
    </SidebarProvider>
  );
}
