"use client"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import styles from "./accordion-list.module.css";

interface ProjectAccordionListProps {
  title: string;
  items: string[];
  defaultOpen?: boolean;
}

export function ProjectAccordionList({ title, items, defaultOpen = false }: ProjectAccordionListProps) {
  const router = useRouter();

  const handleItemClick = (item: string) => {
    // Mapeamento dos itens para as rotas
    const routeMap: Record<string, string> = {
      "1.0 - Identificação do Projeto": "/formularios/01_identificacao",
      "2.0 - Identificação da Entidade Proponente": "/formularios/02_entidade",
      "3.0 - Identificação do Representante Legal da Entidade Proponente": "/formularios/03_representante",
      "4.0 - Identificação do Responsável Técnico pelo Projeto": "/formularios/04_responsavel",
      "5.0 - Justificativa e Motivação do Instrumento": "/formularios/05_justificativa",
      "5.1 - Caracterização dos Interesses Recíprocos": "/formularios/05_1_interesses",
      "5.2 - Público Alvo": "/formularios/05_2_publico",
      "5.3 - Problema a ser Resolvido": "/formularios/05_3_problema",
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
          <Accordion type="single" collapsible defaultValue={defaultOpen ? "section" : undefined}>
            <AccordionItem value="section">
              <AccordionTrigger>
                <Label className={styles.title}>{title}</Label>
              </AccordionTrigger>
              <AccordionContent>
                <ul className={styles.list}>
                  {items.map((item, idx) => (
                    <li key={idx} className={styles.listItem}>
                      <Checkbox className={styles.checkbox} id={`checkbox-item-${idx}`} />
                      <span className={styles.bullet} />
                      <button 
                        onClick={() => handleItemClick(item)}
                        className={styles.itemButton}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
} 