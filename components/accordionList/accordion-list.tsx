import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import styles from "./accordion-list.module.css";

interface ProjectAccordionListProps {
  title: string;
  items: string[];
  defaultOpen?: boolean;
}

export function ProjectAccordionList({ title, items, defaultOpen = false }: ProjectAccordionListProps) {
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
                      <label htmlFor={`checkbox-item-${idx}`} className={styles.itemLabel}>{item}</label>
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