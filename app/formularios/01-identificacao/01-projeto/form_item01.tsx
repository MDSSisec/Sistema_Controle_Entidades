"use client"

import React from "react";
import { Formulario, FormField } from "@/components/fomulario/formulario";
import { Button } from "@/components/ui/button";
import { InputWithLabel, TextareaWithLabel } from "@/components/ui/input-form";
import styles from "./form_item01.module.css";

const identificacaoFields: FormField[] = [
  {
    id: "nomeProjeto",
    label: "1.1 - Nome do Projeto",
    type: "text" as const,
    placeholder: "Digite o nome do projeto",
    required: true,
  },
  {
    id: "localExecucao",
    label: "1.2 - Local de Execução",
    type: "text" as const,
    placeholder: "Digite o local de execução",
    required: true,
  },
  {
    id: "duracao",
    label: "1.3 - Duração",
    type: "text" as const,
    placeholder: "Ex: 12 meses",
    required: true,
  },
  {
    id: "resumoProjeto",
    label: "1.4 - Resumo do Projeto",
    type: "textarea" as const,
    placeholder: "Descreva um resumo do projeto",
    required: true,
    rows: 6,
  },
];

const dadosExemplo = {
  nomeProjeto: "",
  localExecucao: "",
  duracao: "",
  resumoProjeto: "",
};

export function FormIdentificacao() {
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
          <h2 className={styles.title}>I - Identificação</h2>
          <h3 className={styles.subtitle}>1.0 - Identificação do Projeto</h3>
          <div className={styles.grid}>
            <div className={styles.field}>
              <div className={styles.labelMuted}>1.1 - Nome do Projeto</div>
              <div className={styles.valueBox}>{dados.nomeProjeto}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>1.2 - Local de Execução</div>
              <div className={styles.valueBox}>{dados.localExecucao}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>1.3 - Duração</div>
              <div className={styles.valueBox}>{dados.duracao}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>1.4 - Resumo do Projeto</div>
              <div className={`${styles.valueBox} ${styles.valueBoxResumo}`}>{dados.resumoProjeto}</div>
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
        <h2 className={styles.title}>I - Identificação do Projeto</h2>
        <form
          onSubmit={e => { e.preventDefault(); handleFormSubmit(formData); }}
          className={styles.grid}
        >
          <InputWithLabel
            id="nomeProjeto"
            label="Nome do Projeto"
            type="text"
            placeholder="Digite o nome do projeto"
            required={true}
            value={formData.nomeProjeto || ''}
            onChange={e => setFormData({ ...formData, nomeProjeto: e.target.value })}
          />
          
          <InputWithLabel
            id="localExecucao"
            label="Local de Execução"
            type="text"
            placeholder="Digite o local de execução"
            required={true}
            value={formData.localExecucao || ''}
            onChange={e => setFormData({ ...formData, localExecucao: e.target.value })}
          />
          
          <InputWithLabel
            id="duracao"
            label="Duração"
            type="text"
            placeholder="Ex: 12 meses"
            required={true}
            value={formData.duracao || ''}
            onChange={e => setFormData({ ...formData, duracao: e.target.value })}
          />
          
          <TextareaWithLabel
            id="resumoProjeto"
            label="Resumo do Projeto"
            placeholder="Descreva um resumo do projeto"
            required={true}
            rows={6}
            maxHeight={300}
            maxChars={1000}
            value={formData.resumoProjeto || ''}
            onChange={e => setFormData({ ...formData, resumoProjeto: e.target.value })}
          />
          
          <div className={styles.buttonRow}>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => {
                setFormData(dados);
                setModoEdicao(false);
              }}
            >
              Cancelar
            </Button>
            <Button type="submit">Salvar Identificação</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
