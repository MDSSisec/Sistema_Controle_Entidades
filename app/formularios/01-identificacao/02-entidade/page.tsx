"use client";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { FormDescricao } from "./form_item02";
import { BackToProjectDetails } from "@/components/BackToProjectDetails";
import { FormNavigationSimple } from "@/components/form-navigation-simple";

export default function DescricaoPage() {
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
        <FormNavigationSimple currentForm="02-entidade" />
        <FormDescricao />
      </SidebarInset>
    </SidebarProvider>
  );
}
