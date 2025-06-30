"use client"

import React from "react";
import { Formulario, FormField } from "@/components/fomulario/formulario";
import { Button } from "@/components/ui/button";
import styles from "./form-02.module.css";

const descricaoFields: FormField[] = [
  {
    id: "nome",
    label: "Nome",
    type: "text" as const,
    placeholder: "Digite o nome da entidade",
    required: true,
  },
  {
    id: "cnpj",
    label: "CNPJ",
    type: "text" as const,
    placeholder: "00.000.000/0000-00",
    required: true,
  },
  {
    id: "dataFundacao",
    label: "Data de Fundação",
    type: "date" as const,
    required: true,
  },
  {
    id: "registroCnpj",
    label: "Registro do CNPJ",
    type: "text" as const,
    placeholder: "Número do registro do CNPJ",
    required: true,
  },
  {
    id: "enderecoCompleto",
    label: "Endereço Completo",
    type: "textarea" as const,
    placeholder: "Digite o endereço completo",
    required: true,
    rows: 2,
  },
  {
    id: "bairro",
    label: "Bairro",
    type: "text" as const,
    placeholder: "Digite o bairro",
    required: true,
  },
  {
    id: "cep",
    label: "CEP",
    type: "text" as const,
    placeholder: "00000-000",
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
    id: "telefoneFax",
    label: "Número de telefone e fax com DDD",
    type: "text" as const,
    placeholder: "(11) 99999-9999 / (11) 3333-4444",
    required: true,
  },
  {
    id: "email",
    label: "E-mail",
    type: "email" as const,
    placeholder: "contato@entidade.com.br",
    required: true,
  },
  {
    id: "paginaWeb",
    label: "Página na web",
    type: "text" as const,
    placeholder: "https://www.entidade.com.br",
    required: false,
  },
];

const dadosExemplo = {
  nome: "Associação Brasileira de Tecnologia",
  cnpj: "12.345.678/0001-99",
  dataFundacao: "2001-05-20",
  registroCnpj: "123456789",
  enderecoCompleto: "Rua das Inovações, 1234, Centro",
  bairro: "Centro",
  cep: "70000-000",
  uf: "DF",
  telefoneFax: "(61) 99999-8888 / (61) 3333-2222",
  email: "contato@abtec.org.br",
  paginaWeb: "https://www.abtec.org.br",
};

export function FormDescricao() {
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
          <h2 className={styles.title}>II - Descrição da Entidade</h2>
          <div className={styles.grid}>
            <div className={styles.field}>
              <div className={styles.labelMuted}>Nome</div>
              <div className={styles.valueBox}>{dados.nome}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>CNPJ</div>
              <div className={styles.valueBox}>{dados.cnpj}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>Data de Fundação</div>
              <div className={styles.valueBox}>{dados.dataFundacao}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>Registro do CNPJ</div>
              <div className={styles.valueBox}>{dados.registroCnpj}</div>
            </div>
            <div className={`${styles.field} ${styles.fullWidth}`}>
              <div className={styles.labelMuted}>Endereço Completo</div>
              <div className={styles.valueBox}>{dados.enderecoCompleto}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>Bairro</div>
              <div className={styles.valueBox}>{dados.bairro}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>CEP</div>
              <div className={styles.valueBox}>{dados.cep}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>UF</div>
              <div className={styles.valueBox}>{dados.uf}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>Número de telefone e fax com DDD</div>
              <div className={styles.valueBox}>{dados.telefoneFax}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>E-mail</div>
              <div className={styles.valueBox}>{dados.email}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>Página na web</div>
              <div className={styles.valueBox}>{dados.paginaWeb}</div>
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
        <h2 className={styles.title}>II - Descrição da Entidade</h2>
        <form
          onSubmit={e => { e.preventDefault(); handleFormSubmit(formData); }}
          className={styles.grid}
        >
          {descricaoFields.map((field, idx) => {
            if (field.id === "enderecoCompleto") {
              return (
                <div key={field.id} className={`${styles.field} ${styles.fullWidth}`}>
                  <label className={styles.label} htmlFor={field.id}>{field.label}{field.required && <span className="text-destructive ml-1">*</span>}</label>
                  <textarea
                    id={field.id}
                    required={field.required}
                    rows={field.rows || 2}
                    className={styles.textarea}
                    placeholder={field.placeholder}
                    value={formData[field.id] || ''}
                    onChange={e => setFormData({ ...formData, [field.id]: e.target.value })}
                  />
                </div>
              );
            }
            return (
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
            );
          })}
          <div className={styles.buttonRow}>
            <Button type="submit">Salvar Descrição</Button>
          </div>
        </form>
      </div>
    </div>
  );
} 