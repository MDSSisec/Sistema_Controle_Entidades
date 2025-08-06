"use client"

import React from "react";
import { Formulario, FormField } from "@/components/fomulario/formulario";
import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/ui/input-form";
import { FORMS } from "@/components/constants/formularios/forms";
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
  nome: "",
  cpf: "",
  rg: "",
  orgaoExpeditor: "",
  uf: "",
  profissao: "",
  cargo: "",
  estadoCivil: "",
  telefone: "",
  email: "",
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
          <h2 className={styles.title}>{FORMS.TITULO_IDENTIFICACAO}</h2>
          <h3 className={styles.subtitle}>{FORMS.REPRESENTANTE.TITULO}</h3>
          <div className={styles.grid}>
            <div className={styles.field}>
              <div className={styles.labelMuted}>{FORMS.REPRESENTANTE.LABEL_NOME}</div>
              <div className={styles.valueBox}>{dados.nome}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>{FORMS.REPRESENTANTE.LABEL_CPF}</div>
              <div className={styles.valueBox}>{dados.cpf}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>{FORMS.REPRESENTANTE.LABEL_RG}</div>
              <div className={styles.valueBox}>{dados.rg}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>{FORMS.REPRESENTANTE.LABEL_ORGAO_EXPEDITOR}</div>
              <div className={styles.valueBox}>{dados.orgaoExpeditor}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>{FORMS.REPRESENTANTE.LABEL_UF}</div>
              <div className={styles.valueBox}>{dados.uf}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>{FORMS.REPRESENTANTE.LABEL_PROFISSAO}</div>
              <div className={styles.valueBox}>{dados.profissao}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>{FORMS.REPRESENTANTE.LABEL_CARGO}</div>
              <div className={styles.valueBox}>{dados.cargo}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>{FORMS.REPRESENTANTE.LABEL_ESTADO_CIVIL}</div>
              <div className={styles.valueBox}>{dados.estadoCivil}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>{FORMS.REPRESENTANTE.LABEL_TELEFONE}</div>
              <div className={styles.valueBox}>{dados.telefone}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>{FORMS.REPRESENTANTE.LABEL_EMAIL}</div>
              <div className={styles.valueBox}>{dados.email}</div>
            </div>
          </div>
          <div className={styles.buttonRow}>
            <Button onClick={() => setModoEdicao(true)}>
              {FORMS.BOTAO_EDITAR}
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
        <h2 className={styles.title}>{FORMS.TITULO_IDENTIFICACAO}</h2>
        <h3 className={styles.subtitle}>{FORMS.REPRESENTANTE.TITULO}</h3>
        <form
          onSubmit={e => { e.preventDefault(); handleFormSubmit(formData); }}
          className={styles.grid}
        >
          <div className={styles.field}>
            <InputWithLabel
              id="nome"
              label={FORMS.REPRESENTANTE.LABEL_NOME}
              type="text"
              placeholder={FORMS.REPRESENTANTE.NOME}
              required={true}
              value={formData.nome || ''}
              onChange={e => setFormData({ ...formData, nome: e.target.value })}
            />
          </div>
          
          <div className={styles.field}>
            <InputWithLabel
              id="cpf"
              label={FORMS.REPRESENTANTE.LABEL_CPF}
              type="text"
              placeholder={FORMS.REPRESENTANTE.CPF}
              required={true}
              value={formData.cpf || ''}
              onChange={e => setFormData({ ...formData, cpf: e.target.value })}
            />
          </div>
          
          <div className={styles.field}>
            <InputWithLabel
              id="rg"
              label={FORMS.REPRESENTANTE.LABEL_RG}
              type="text"
              placeholder={FORMS.REPRESENTANTE.RG}
              required={true}
              value={formData.rg || ''}
              onChange={e => setFormData({ ...formData, rg: e.target.value })}
            />
          </div>
          
          <div className={styles.field}>
            <InputWithLabel
              id="orgaoExpeditor"
              label={FORMS.REPRESENTANTE.LABEL_ORGAO_EXPEDITOR}
              type="text"
              placeholder={FORMS.REPRESENTANTE.ORGAO_EXPEDITOR}
              required={true}
              value={formData.orgaoExpeditor || ''}
              onChange={e => setFormData({ ...formData, orgaoExpeditor: e.target.value })}
            />
          </div>
          
          <div className={styles.field}>
            <InputWithLabel
              id="uf"
              label={FORMS.REPRESENTANTE.LABEL_UF}
              type="text"
              placeholder={FORMS.REPRESENTANTE.UF}
              required={true}
              value={formData.uf || ''}
              onChange={e => setFormData({ ...formData, uf: e.target.value })}
            />
          </div>
          
          <div className={styles.field}>
            <InputWithLabel
              id="profissao"
              label={FORMS.REPRESENTANTE.LABEL_PROFISSAO}
              type="text"
              placeholder={FORMS.REPRESENTANTE.PROFISSAO}
              required={true}
              value={formData.profissao || ''}
              onChange={e => setFormData({ ...formData, profissao: e.target.value })}
            />
          </div>
          
          <div className={styles.field}>
            <InputWithLabel
              id="cargo"
              label={FORMS.REPRESENTANTE.LABEL_CARGO}
              type="text"
              placeholder={FORMS.REPRESENTANTE.CARGO}
              required={true}
              value={formData.cargo || ''}
              onChange={e => setFormData({ ...formData, cargo: e.target.value })}
            />
          </div>
          
          <div className={styles.field}>
            <InputWithLabel
              id="estadoCivil"
              label={FORMS.REPRESENTANTE.LABEL_ESTADO_CIVIL}
              type="text"
              placeholder={FORMS.REPRESENTANTE.ESTADO_CIVIL}
              required={true}
              value={formData.estadoCivil || ''}
              onChange={e => setFormData({ ...formData, estadoCivil: e.target.value })}
            />
          </div>
          
          <div className={styles.field}>
            <InputWithLabel
              id="telefone"
              label={FORMS.REPRESENTANTE.LABEL_TELEFONE}
              type="text"
              placeholder={FORMS.REPRESENTANTE.TELEFONE}
              required={true}
              value={formData.telefone || ''}
              onChange={e => setFormData({ ...formData, telefone: e.target.value })}
            />
          </div>
          
          <div className={styles.field}>
            <InputWithLabel
              id="email"
              label={FORMS.REPRESENTANTE.LABEL_EMAIL}
              type="email"
              placeholder={FORMS.REPRESENTANTE.EMAIL}
              required={true}
              value={formData.email || ''}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
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
              {FORMS.BOTAO_CANCELAR}
            </Button>
            <Button type="submit">{FORMS.BOTAO_SALVAR}</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
