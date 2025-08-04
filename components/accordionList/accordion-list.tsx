"use client"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import styles from "./accordion-list.module.css";
import React from "react";

interface ProjectAccordionListItem {
  label: string;
  isSection?: boolean;
}

interface ProjectAccordionListProps {
  title: string;
  items: (string | ProjectAccordionListItem)[];
  defaultOpen?: boolean;
  checkedItems?: string[];
  open?: boolean;
  forceOpen?: string;
}

export function ProjectAccordionList({ title, items, defaultOpen = false, checkedItems = [], open, forceOpen }: ProjectAccordionListProps) {
  const router = useRouter();
  const [accordionOpen, setAccordionOpen] = React.useState<boolean>(() => {
    // Se forceOpen está definido, verifica se deve estar aberto
    if (forceOpen) {
      return forceOpen === title;
    }
    // Se open está definido, usa esse valor
    if (open !== undefined) {
      return open;
    }
    // Caso contrário, usa o defaultOpen
    return defaultOpen;
  });

  React.useEffect(() => {
    if (forceOpen && forceOpen === title) {
      setAccordionOpen(true);
    } else if (forceOpen) {
      setAccordionOpen(false);
    }
  }, [forceOpen, title]);

  const handleAccordionChange = (value: string | undefined) => {
    if (value === "section") {
      localStorage.setItem("ultimoCardAberto", title);
      setAccordionOpen(true);
    } else {
      setAccordionOpen(false);
    }
  };

  const handleItemClick = (item: string) => {
    // Mapeamento dos itens para as rotas da nova estrutura organizada
    const routeMap: Record<string, string> = {
      // I - Identificação
      "1.0 - Identificação do Projeto": "/formularios/01-identificacao/01-projeto",
      "2.0 - Identificação da Entidade Proponente": "/formularios/01-identificacao/02-entidade",
      "3.0 - Identificação do Representante Legal da Entidade Proponente": "/formularios/01-identificacao/03-representante-legal",
      "4.0 - Identificação do Responsável Técnico pelo Projeto": "/formularios/01-identificacao/04-responsavel-tecnico",
      
      // II - Descrição do Projeto
      "5.0 - Justificativa e Motivação do Instrumento": "/formularios/02-descricao-projeto/05-justificativa",
      "6.0 - Objetivo": "/formularios/02-descricao-projeto/06-objetivos",
      "7.0 - Metas": "/formularios/02-descricao-projeto/07-metas",
      "8.0 - Etapas e Cronograma de Execução": "/formularios/02-descricao-projeto/08-cronograma",
      "9.0 - Metodologia": "/formularios/02-descricao-projeto/09-metodologia",
      "10.0 - Resultados Esperados": "/formularios/02-descricao-projeto/10-resultados-esperados",
      "11.0 - Gestão de Projeto": "/formularios/02-descricao-projeto/11-gestao/11-1-equipe",
      "11.1 - Dimensionamento da Equipe Necessária para a Execução do Projeto": "/formularios/02-descricao-projeto/11-gestao/11-1-equipe",
      "11.2 - Dimensionamento de Contratações e Aquisições de Serviços de Terceiros - Pessoas Jurídicas para o Projeto.": "/formularios/02-descricao-projeto/11-gestao/11-2-contratacoes",
      
      // III - Público Alvo e Território
      "12.0 - Histórico e Situação Socioeconômica do Território e da População a ser Beneficiada.": "/formularios/03-publico-alvo/12-historico-territorio",
      "13.0 - Detalhamento da Base Territorial do Projeto": "/formularios/03-publico-alvo/13-base-territorial",
      "14.0 - Público Beneficiário do Projeto.": "/formularios/03-publico-alvo/14-publico-beneficiario",
      "15.0 - Informe se o Público Beneficiário faz Parte de Algum Destes povos ou comunidades tradicionais.": "/formularios/03-publico-alvo/15-povos-comunidades",
      "16.0 - Informe o perfil socio ocupacional predominante do público beneficiário.": "/formularios/03-publico-alvo/16-perfil-socio-ocupacional",
      "17.0 - Informe se o público beneficiário está acessando alguns dos seguintes serviços": "/formularios/03-publico-alvo/17-servicos-acessados",
      
      // IV - Caracterização da Entidade Proponente
      "18.0 - Outras Informações julgadas apropriadas sobre a entidade proponente.": "/formularios/04-caracterizacao-entidade/18-outras-informacoes",
      
      // V - Dados Físico Financeiro
      "19.0 - Valor Total do Projeto.": "/formularios/05-dados-financeiros/19-valor-total",
      "20.0 - Cronograma de Desembolso.": "/formularios/05-dados-financeiros/20-cronograma-desembolso",
    };

    const route = routeMap[item];
    if (route) {
      router.push(route);
    }
  };

  return (
    <div className={styles.container}>
      <Card>
        <CardContent>
          <Accordion
            type="single"
            collapsible
            value={accordionOpen ? "section" : undefined}
            onValueChange={handleAccordionChange}
          >
            <AccordionItem value="section">
              <AccordionTrigger>
                <Label className={styles.title}>{title}</Label>
              </AccordionTrigger>
              <AccordionContent>
                <ul className={styles.list}>
                  {items.map((item, idx) => {
                    const obj = typeof item === 'string' ? { label: item } : item;
                    if (obj.isSection) {
                      return (
                        <li key={idx} className={styles.listItem}>
                          <span className={styles.sectionLabel}>{obj.label}</span>
                        </li>
                      );
                    }
                    return (
                      <li key={idx} className={styles.listItem}>
                        <Checkbox
                          className={styles.checkbox}
                          id={`checkbox-item-${idx}`}
                          checked={checkedItems.includes(obj.label)}
                        />
                        <span className={styles.bullet} />
                        <button 
                          onClick={() => handleItemClick(obj.label)}
                          className={styles.itemButton}
                        >
                          {obj.label}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
} 