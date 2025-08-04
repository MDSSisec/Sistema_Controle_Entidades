"use client"

import React from "react";
import { Formulario, FormField } from "@/components/fomulario/formulario";
import { Button } from "@/components/ui/button";
import styles from "./form_item04.module.css";

const responsavelTecnicoFields: FormField[] = [
  {
    id: "nome",
    label: "Nome",
    type: "text" as const,
    placeholder: "Digite o nome completo",
    required: true,
  },
  {
    id: "cargo",
    label: "Cargo",
    type: "text" as const,
    placeholder: "Digite o cargo atual",
    required: true,
  },
  {
    id: "telefone",
    label: "Número de telefone com DDD",
    type: "text" as const,
    placeholder: "(11) 99999-9999",
    required: true,
  },
  {
    id: "celular",
    label: "Número de celular com DDD",
    type: "text" as const,
    placeholder: "(11) 99999-9999",
    required: true,
  },
  {
    id: "email",
    label: "Email",
    type: "email" as const,
    placeholder: "exemplo@email.com",
    required: true,
  },
];

const dadosExemplo = {
  nome: "",
  cargo: "",
  telefone: "",
  celular: "",
  email: "",
};

export function FormResponsavelTecnico() {
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
          <h2 className={styles.title}>IV - Identificação do Responsável Técnico pelo Projeto</h2>
          <div className={styles.grid}>
            <div className={styles.field}>
              <div className={styles.labelMuted}>Nome</div>
              <div className={styles.valueBox}>{dados.nome}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>Cargo</div>
              <div className={styles.valueBox}>{dados.cargo}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>Número de telefone com DDD</div>
              <div className={styles.valueBox}>{dados.telefone}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>Número de celular com DDD</div>
              <div className={styles.valueBox}>{dados.celular}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>Email</div>
              <div className={styles.valueBox}>{dados.email}</div>
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
        <h2 className={styles.title}>IV - Identificação do Responsável Técnico pelo Projeto</h2>
        <form
          onSubmit={e => { e.preventDefault(); handleFormSubmit(formData); }}
          className={styles.grid}
        >
          {responsavelTecnicoFields.map((field) => (
            <div key={field.id} className={styles.field}>
              <label className={styles.label} htmlFor={field.id}>{field.label}{field.required && <span className="text-destructive ml-1">*</span>}</label>
              <input
                id={field.id}
                type={field.type}
                required={field.required}
                className={styles.input}
                placeholder={field.placeholder}
                value={formData[field.id] || ''}
                onChange={e => setFormData({ ...formData, [field.id]: e.target.value })}
              />
            </div>
          ))}
          <div className={styles.buttonRow}>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => {
                setFormData(dados);
                setModoEdicao(false);
              }}
              style={{ marginRight: '1rem' }}
            >
              Cancelar
            </Button>
            <Button type="submit">Salvar Dados do Responsável Técnico</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
