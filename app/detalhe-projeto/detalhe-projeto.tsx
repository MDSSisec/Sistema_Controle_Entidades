import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import styles from "./detalhe-projeto.module.css";
import { ProjectAccordionList } from "@/components/accordionList/accordion-list";

export function DetalheProjeto() {
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
        <div className={styles.container}>
          <h1 className={styles.title}>Etapas do Projeto "{'{ProjectName}'}"</h1>
        </div>
        <div>
          <ProjectAccordionList
            title="I - Identificação"
            items={[
              "1.0 - Identificação do Projeto",
              "2.0 - Identificação da Entidade Proponente",
              "3.0 - Identificação do Representante Legal da Entidade Proponente",
              "4.0 - Identificação do Responsável Técnico pelo Projeto"
            ]}
          />
        </div>
        <div>
          <ProjectAccordionList
            title="II - Descrição do Projeto"
            items={[
              "5.0 - Justificativa e Motivação do Instrumento",
              "5.1 - Caracterização dos Interesses Recíprocos",
              "5.2 - Público Alvo",
              "5.3 - Problema a ser Resolvido",

            ]}
          />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
