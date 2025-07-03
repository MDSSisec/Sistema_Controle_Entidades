"use client"

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
              // { label: "Justificativa e Motivação do Instrumento", isSection: true},
              "5.0 - Justificativa e Motivação do Instrumento",
              "6.1 - Objetivo Geral",
              "6.2 - Objetivos Específicos",
              "7.0 - Metas",
              "8.0 - Etapas e Cronograma de Execução",
              "9.0 - Metodologia",
              "10.0 - Resultados Esperados",
              "11.0 - Gestão de Projeto",
              "11.1 - Dimensionamento da Equipe Necessária para a Execução do Projeto",
              "11.2 - Dimensionamento de Contratações e Aquisições de Serviços de Terceiros - Pessoas Jurídicas para o Projeto."
            ]}
          />
        </div>
        <div>
          <ProjectAccordionList
            title="III - Público Alvo e Território"
            items={[
              "12.0 - Histórico e Situação Socioeconômica do Território e da População a ser Beneficiada.",
              "13.0 - Detalhamento da Base Territorial do Projeto",
              "14.0 - Público Beneficiário do Projeto.",
              "15.0 - Informe se o Público Beneficiário faz Parte de Algum Destes povos ou comunidades tradicionais.",
              "16.0 - Informe o perfil socio ocupacional predominante do público beneficiário.",
              "17.0 - Informe se o público beneficiário está acessando alguns dos seguintes serviços"
            ]}
          />
        </div>
        <div>
          <ProjectAccordionList
            title="IV - Caracterização da Entidade Proponente"
            items={[
              "18.0 - Outras Informações julgadas apropriadas sobre a entidade proponente."
            ]}
          />
        </div>
        <div>
          <ProjectAccordionList
            title="V - Dados Físico Financeiro: Planilhas Orçamentárias"
            items={[
              "19.0 - Valor Total do Projeto.",
              "20.0 - Cronograma de Desembolso."
            ]}
          />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
