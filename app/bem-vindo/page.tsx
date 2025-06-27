import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { IconPlus, IconChartBar, IconLayoutDashboard, IconChartPie, IconPigMoney, IconTargetArrow } from "@tabler/icons-react";

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
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              {/* Ações Rápidas */}
              <h2 className="text-2xl font-bold mb-4">Ações Rápidas</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-emerald-500 text-white hover:bg-emerald-600 transition-colors cursor-pointer">
                  <CardHeader>
                    <IconPlus size={36} />
                    <CardTitle className="mt-2">Nova Transação</CardTitle>
                    <CardDescription className="text-white/90">Registre rapidamente suas receitas e despesas</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="bg-muted/80 hover:bg-muted transition-colors cursor-pointer">
                  <CardHeader>
                    <IconChartBar size={36} className="text-emerald-400" />
                    <CardTitle className="mt-2">Relatórios</CardTitle>
                    <CardDescription>Visualize seus relatórios mensais</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="bg-muted/80 hover:bg-muted transition-colors cursor-pointer">
                  <CardHeader>
                    <IconLayoutDashboard size={36} className="text-emerald-400" />
                    <CardTitle className="mt-2">Dashboard</CardTitle>
                    <CardDescription>Visualize seus dados financeiros</CardDescription>
                  </CardHeader>
                </Card>
              </div>

              {/* Dicas para Você */}
              <h2 className="text-2xl font-bold mb-4">Dicas para Você</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-muted/80">
                  <CardHeader>
                    <IconChartPie size={32} />
                    <CardTitle className="mt-2">Diversificação</CardTitle>
                    <CardDescription>Não coloque todos os ovos no mesmo cesto: diversifique seus investimentos para reduzir riscos.</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="bg-muted/80">
                  <CardHeader>
                    <IconPigMoney size={32} />
                    <CardTitle className="mt-2">Fundo de Emergência</CardTitle>
                    <CardDescription>Mantenha um fundo de emergência equivalente a 6-12 meses de despesas básicas.</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="bg-muted/80">
                  <CardHeader>
                    <IconTargetArrow size={32} />
                    <CardTitle className="mt-2">Pequenas Economias</CardTitle>
                    <CardDescription>Pequenas economias diárias podem resultar em grandes valores ao longo do ano.</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
