"use client";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { FormObjetivos } from "./form_item06";
import { BackToProjectDetails } from "@/components/BackToProjectDetails";
import { FormNavigationSimple } from "@/components/form-navigation-simple";

export default function ObjetivosPage() {
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
        <FormNavigationSimple currentForm="06-objetivos" />
        <FormObjetivos />
      </SidebarInset>
    </SidebarProvider>
  );
}
