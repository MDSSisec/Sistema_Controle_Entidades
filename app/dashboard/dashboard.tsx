"use client"

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { SectionCards } from "@/components/section-cards"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import styles from "./dashboard.module.css"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"

export function Dashboard() {
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
        <div className={styles.dashboardContainer}>
          <div className={styles.mainContainer}>
            <div className={styles.contentContainer}>
              <h1 className={styles.title}>Dashboard</h1>
              <div className={styles.cardsGrid}>
                <SectionCards title="Total Cursos" value="100" />
                <SectionCards title="Total Entidades" value="10" />
                <SectionCards title="Total Concluídos" value="10" />
                <SectionCards title="Total em Andamento" value="10" />
                <SectionCards title="Total Cancelados" value="10" />
              </div>
            </div>
            <div className={styles.chartContainer}>
              <ChartAreaInteractive />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
