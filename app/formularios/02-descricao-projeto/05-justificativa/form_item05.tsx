"use client"

import React from "react";
import { Formulario, FormField } from "@/components/fomulario/formulario";
import { Button } from "@/components/ui/button";
import styles from "./form_item05.module.css";

const justificativaFields: FormField[] = [
  {
    id: "interessesReciprocos",
    label: "5.1 - Caracterização dos Interesses Recíprocos",
    type: "textarea" as const,
    placeholder: "Descreva a caracterização dos interesses recíprocos entre as partes envolvidas no projeto",
    required: true,
    rows: 6,
  },
  {
    id: "publicoAlvo",
    label: "5.2 - Público Alvo",
    type: "textarea" as const,
    placeholder: "Descreva o público alvo do projeto, suas características e necessidades",
    required: true,
    rows: 4,
  },
  {
    id: "problemaResolver",
    label: "5.3 - Problema a ser Resolvido",
    type: "textarea" as const,
    placeholder: "Descreva o problema específico que o projeto visa resolver",
    required: true,
    rows: 4,
  },
  {
    id: "resultadosEsperados",
    label: "5.4 - Resultados Esperados",
    type: "textarea" as const,
    placeholder: "Descreva os resultados esperados com a implementação do projeto",
    required: true,
    rows: 4,
  },
  {
    id: "relacaoObjetivos",
    label: "5.5 - Relação entre a Proposta e os Objetivos e Diretrizes do Programa",
    type: "textarea" as const,
    placeholder: "Explique como a proposta se relaciona com os objetivos e diretrizes do programa",
    required: true,
    rows: 6,
  },
];

const dadosExemplo = {
  interessesReciprocos: "O projeto visa estabelecer uma parceria estratégica entre a entidade proponente e os beneficiários, onde ambos têm interesses alinhados no desenvolvimento socioeconômico da região. A entidade busca fortalecer sua atuação social, enquanto os beneficiários buscam qualificação profissional e inserção no mercado de trabalho.",
  publicoAlvo: "Mulheres em situação de vulnerabilidade social, com idade entre 18 e 45 anos, residentes em comunidades de baixa renda. O público alvo inclui mulheres que buscam qualificação profissional e oportunidades de geração de renda.",
  problemaResolver: "A falta de qualificação profissional e oportunidades de emprego para mulheres em situação de vulnerabilidade social, resultando em baixa renda familiar e dependência de programas sociais. O projeto visa capacitar essas mulheres em técnicas de corte e costura, proporcionando uma fonte de renda sustentável.",
  resultadosEsperados: "Capacitação de 50 mulheres em técnicas de corte e costura, criação de uma cooperativa de costura, geração de renda média de R$ 800,00 por beneficiária, redução da dependência de programas sociais em 60% das famílias beneficiadas.",
  relacaoObjetivos: "O projeto está alinhado com os objetivos do programa de inclusão produtiva e geração de renda, contribuindo para a redução da pobreza e desigualdade social. A proposta atende às diretrizes de capacitação profissional e fomento ao empreendedorismo feminino.",
};

export function FormJustificativa() {
  const [modoEdicao, setModoEdicao] = React.useState(false);
  const [dados, setDados] = React.useState<Record<string, string>>(dadosExemplo);
  const [formData, setFormData] = React.useState<Record<string, string>>(dadosExemplo);

  // Sempre que entrar no modo edição, sincroniza formData com dados atuais
  React.useEffect(() => {
    if (modoEdicao) {
      setFormData(dados);
    }
  }, [modoEdicao, dados]);

  const handleFormSubmit = (data: Record<string, string>) => {
    setDados(data);
    setModoEdicao(false);
  };

  if (!modoEdicao) {
    // Modo visualização
    return (
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <h2 className={styles.title}>II - Descrição do Projeto</h2>
          <h3 className={styles.subtitle}>5.0 - Justificativa e Motivação do Instrumento</h3>
          <div className={styles.grid}>
            <div className={`${styles.field} ${styles.fullWidth}`}>
              <div className={styles.labelMuted}>5.1 - Caracterização dos Interesses Recíprocos</div>
              <div className={styles.valueBox}>{dados.interessesReciprocos}</div>
            </div>
            <div className={`${styles.field} ${styles.fullWidth}`}>
              <div className={styles.labelMuted}>5.2 - Público Alvo</div>
              <div className={styles.valueBox}>{dados.publicoAlvo}</div>
            </div>
            <div className={`${styles.field} ${styles.fullWidth}`}>
              <div className={styles.labelMuted}>5.3 - Problema a ser Resolvido</div>
              <div className={styles.valueBox}>{dados.problemaResolver}</div>
            </div>
            <div className={`${styles.field} ${styles.fullWidth}`}>
              <div className={styles.labelMuted}>5.4 - Resultados Esperados</div>
              <div className={styles.valueBox}>{dados.resultadosEsperados}</div>
            </div>
            <div className={`${styles.field} ${styles.fullWidth}`}>
              <div className={styles.labelMuted}>5.5 - Relação entre a Proposta e os Objetivos e Diretrizes do Programa</div>
              <div className={styles.valueBox}>{dados.relacaoObjetivos}</div>
            </div>
          </div>
          <div className={styles.buttonRow}>
            <Button onClick={() => setModoEdicao(true)}>
              Editar
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Modo edição
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>II - Descrição do Projeto</h2>
        <h3 className={styles.subtitle}>5.0 - Justificativa e Motivação do Instrumento</h3>
        <form
          onSubmit={e => { e.preventDefault(); handleFormSubmit(formData); }}
          className={styles.grid}
        >
          {justificativaFields.map((field) => (
            <div key={field.id} className={`${styles.field} ${styles.fullWidth}`}>
              <label className={styles.label} htmlFor={field.id}>{field.label}{field.required && <span className="text-destructive ml-1">*</span>}</label>
              <textarea
                id={field.id}
                required={field.required}
                rows={field.rows || 4}
                className={styles.textarea}
                placeholder={field.placeholder}
                value={formData[field.id] || ''}
                onChange={e => setFormData({ ...formData, [field.id]: e.target.value })}
              />
            </div>
          ))}
          <div className={styles.buttonRow}>
            <Button type="submit">Salvar Justificativa</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
