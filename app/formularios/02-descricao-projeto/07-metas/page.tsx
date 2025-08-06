"use client";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { FormMetas } from "./form_item07";
import { BackToProjectDetails } from "@/components/BackToProjectDetails";
import { FormNavigationSimple } from "@/components/form-navigation-simple";

export default function MetasPage() {
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
        <BackToProjectDetails/>
        <FormMetas />
        <FormNavigationSimple currentForm="07-metas" />
      </SidebarInset>
    </SidebarProvider>
  );
}
