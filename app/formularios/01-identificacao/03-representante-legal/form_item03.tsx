"use client"

import React from "react";
import { Formulario, FormField } from "@/components/fomulario/formulario";
import { Button } from "@/components/ui/button";
import styles from "./form_item03.module.css";

const publicoFields: FormField[] = [
  {
    id: "nome",
    label: "Nome",
    type: "text" as const,
    placeholder: "Digite o nome completo",
    required: true,
  },
  {
    id: "cpf",
    label: "CPF",
    type: "text" as const,
    placeholder: "000.000.000-00",
    required: true,
  },
  {
    id: "rg",
    label: "RG",
    type: "text" as const,
    placeholder: "Digite o número do RG",
    required: true,
  },
  {
    id: "orgaoExpeditor",
    label: "Órgão Expedidor",
    type: "text" as const,
    placeholder: "Ex: SSP, DETRAN",
    required: true,
  },
  {
    id: "uf",
    label: "UF",
    type: "text" as const,
    placeholder: "Ex: SP",
    required: true,
  },
  {
    id: "profissao",
    label: "Profissão",
    type: "text" as const,
    placeholder: "Digite a profissão",
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
    id: "estadoCivil",
    label: "Estado Civil",
    type: "text" as const,
    placeholder: "Ex: Solteiro, Casado, Divorciado",
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
    id: "email",
    label: "Email",
    type: "email" as const,
    placeholder: "exemplo@email.com",
    required: true,
  },
];

const dadosExemplo = {
  nome: "João Silva Santos",
  cpf: "123.456.789-00",
  rg: "12.345.678-9",
  orgaoExpeditor: "SSP",
  uf: "SP",
  profissao: "Engenheiro",
  cargo: "Gerente de Projetos",
  estadoCivil: "Casado",
  telefone: "(11) 99999-8888",
  email: "joao.silva@email.com",
};

export function FormPublico() {
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
          <h2 className={styles.title}>III - Dados do Público</h2>
          <div className={styles.grid}>
            <div className={styles.field}>
              <div className={styles.labelMuted}>Nome</div>
              <div className={styles.valueBox}>{dados.nome}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>CPF</div>
              <div className={styles.valueBox}>{dados.cpf}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>RG</div>
              <div className={styles.valueBox}>{dados.rg}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>Órgão Expedidor</div>
              <div className={styles.valueBox}>{dados.orgaoExpeditor}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>UF</div>
              <div className={styles.valueBox}>{dados.uf}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>Profissão</div>
              <div className={styles.valueBox}>{dados.profissao}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>Cargo</div>
              <div className={styles.valueBox}>{dados.cargo}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>Estado Civil</div>
              <div className={styles.valueBox}>{dados.estadoCivil}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>Número de telefone com DDD</div>
              <div className={styles.valueBox}>{dados.telefone}</div>
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
        <h2 className={styles.title}>III - Dados do Público</h2>
        <form
          onSubmit={e => { e.preventDefault(); handleFormSubmit(formData); }}
          className={styles.grid}
        >
          {publicoFields.map((field) => (
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
            <Button type="submit">Salvar Dados do Público</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
