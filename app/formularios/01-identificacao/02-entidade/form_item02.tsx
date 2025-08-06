"use client"

import React from "react";
import { Formulario, FormField } from "@/components/fomulario/formulario";
import { Button } from "@/components/ui/button";
import { InputWithLabel, TextareaWithLabel } from "@/components/ui/input-form";
import { FORMS } from "@/components/constants/formularios/forms";
import styles from "./form_item02.module.css";

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
  nome: "",
  cnpj: "",
  dataFundacao: "",
  registroCnpj: "",
  enderecoCompleto: "",
  bairro: "",
  cep: "",
  uf: "",
  telefoneFax: "",
  email: "",
  paginaWeb: "",
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
          <h2 className={styles.title}>I - Identificação</h2>
          <h3 className={styles.subtitle}>{FORMS.ENTIDADE.TITULO}</h3>
          <div className={styles.grid}>
            <div className={styles.field}>
              <div className={styles.labelMuted}>{FORMS.ENTIDADE.LABEL_NOME}</div>
              <div className={styles.valueBox}>{dados.nome}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>{FORMS.ENTIDADE.LABEL_CNPJ}</div>
              <div className={styles.valueBox}>{dados.cnpj}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>{FORMS.ENTIDADE.LABEL_DATA_FUNDACAO}</div>
              <div className={styles.valueBox}>{dados.dataFundacao}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>{FORMS.ENTIDADE.LABEL_REGISTRO_CNPJ}</div>
              <div className={styles.valueBox}>{dados.registroCnpj}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>{FORMS.ENTIDADE.LABEL_CEP}</div>
              <div className={styles.valueBox}>{dados.cep}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>{FORMS.ENTIDADE.LABEL_BAIRRO}</div>
              <div className={styles.valueBox}>{dados.bairro}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>{FORMS.ENTIDADE.LABEL_UF}</div>
              <div className={styles.valueBox}>{dados.uf}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>{FORMS.ENTIDADE.LABEL_ENDERECO_COMPLETO}</div>
              <div className={styles.valueBox}>{dados.enderecoCompleto}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>{FORMS.ENTIDADE.LABEL_EMAIL}</div>
              <div className={styles.valueBox}>{dados.email}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>{FORMS.ENTIDADE.LABEL_TELEFONE_FAX}</div>
              <div className={styles.valueBox}>{dados.telefoneFax}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>{FORMS.ENTIDADE.LABEL_PAGINA_WEB}</div>
              <div className={styles.valueBox}>{dados.paginaWeb}</div>
            </div>
          </div>
          <div className={styles.buttonRow}>
            <Button onClick={() => setModoEdicao(true)}>
              {FORMS.ENTIDADE.BOTAO_EDITAR}
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
        <h2 className={styles.title}>I - Identificação</h2>
        <h3 className={styles.subtitle}>{FORMS.ENTIDADE.TITULO}</h3>
        <form
          onSubmit={e => { e.preventDefault(); handleFormSubmit(formData); }}
          className={styles.grid}
        >
          <div className={styles.field}>
            <InputWithLabel
              id="nome"
              label={FORMS.ENTIDADE.LABEL_NOME}
              type="text"
              placeholder={FORMS.ENTIDADE.NOME}
              required={true}
              value={formData.nome || ''}
              onChange={e => setFormData({ ...formData, nome: e.target.value })}
            />
          </div>
          
          <div className={styles.field}>
            <InputWithLabel
              id="cnpj"
              label={FORMS.ENTIDADE.LABEL_CNPJ}
              type="text"
              placeholder={FORMS.ENTIDADE.CNPJ}
              required={true}
              value={formData.cnpj || ''}
              onChange={e => setFormData({ ...formData, cnpj: e.target.value })}
            />
          </div>
          
          <div className={styles.field}>
            <InputWithLabel
              id="dataFundacao"
              label={FORMS.ENTIDADE.LABEL_DATA_FUNDACAO}
              type="text"
              placeholder={FORMS.ENTIDADE.DATA_FUNDACAO}
              required={true}
              value={formData.dataFundacao || ''}
              onChange={e => setFormData({ ...formData, dataFundacao: e.target.value })}
            />
          </div>
          
          <div className={styles.field}>
            <InputWithLabel
              id="registroCnpj"
              label={FORMS.ENTIDADE.LABEL_REGISTRO_CNPJ}
              type="text"
              placeholder={FORMS.ENTIDADE.REGISTRO_CNPJ}
              required={true}
              value={formData.registroCnpj || ''}
              onChange={e => setFormData({ ...formData, registroCnpj: e.target.value })}
            />
          </div>
          
          <div className={styles.field}>
            <InputWithLabel
              id="cep"
              label={FORMS.ENTIDADE.LABEL_CEP}
              type="text"
              placeholder={FORMS.ENTIDADE.CEP}
              required={true}
              value={formData.cep || ''}
              onChange={e => setFormData({ ...formData, cep: e.target.value })}
            />
          </div>
          
          <div className={styles.field}>
            <InputWithLabel
              id="bairro"
              label={FORMS.ENTIDADE.LABEL_BAIRRO}
              type="text"
              placeholder={FORMS.ENTIDADE.BAIRRO}
              required={true}
              value={formData.bairro || ''}
              onChange={e => setFormData({ ...formData, bairro: e.target.value })}
            />
          </div>
          
          <div className={styles.field}>
            <InputWithLabel
              id="uf"
              label={FORMS.ENTIDADE.LABEL_UF}
              type="text"
              placeholder={FORMS.ENTIDADE.UF}
              required={true}
              value={formData.uf || ''}
              onChange={e => setFormData({ ...formData, uf: e.target.value })}
            />
          </div>
          
          <div className={styles.field}>
            <InputWithLabel
              id="enderecoCompleto"
              label={FORMS.ENTIDADE.LABEL_ENDERECO_COMPLETO}
              type="text"
              placeholder={FORMS.ENTIDADE.ENDERECO_COMPLETO}
              required={true}
              value={formData.enderecoCompleto || ''}
              onChange={e => setFormData({ ...formData, enderecoCompleto: e.target.value })}
            />
          </div>
          
          <div className={styles.field}>
            <InputWithLabel
              id="email"
              label={FORMS.ENTIDADE.LABEL_EMAIL}
              type="email"
              placeholder={FORMS.ENTIDADE.EMAIL}
              required={true}
              value={formData.email || ''}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          
          <div className={styles.field}>
            <InputWithLabel
              id="telefoneFax"
              label={FORMS.ENTIDADE.LABEL_TELEFONE_FAX}
              type="text"
              placeholder={FORMS.ENTIDADE.TELEFONE_FAX}
              required={true}
              value={formData.telefoneFax || ''}
              onChange={e => setFormData({ ...formData, telefoneFax: e.target.value })}
            />
          </div>
          
          <div className={styles.field}>
            <InputWithLabel
              id="paginaWeb"
              label={FORMS.ENTIDADE.LABEL_PAGINA_WEB}
              type="text"
              placeholder={FORMS.ENTIDADE.PAGINA_WEB}
              required={false}
              value={formData.paginaWeb || ''}
              onChange={e => setFormData({ ...formData, paginaWeb: e.target.value })}
            />
          </div>
          
          <div className={styles.buttonRow}>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => {
                setFormData(dados);
                setModoEdicao(false);
              }}
            >
              {FORMS.ENTIDADE.BOTAO_CANCELAR}
            </Button>
            <Button type="submit">{FORMS.ENTIDADE.BOTAO_SALVAR}</Button>
          </div>
        </form>
      </div>
    </div>
  );
} 