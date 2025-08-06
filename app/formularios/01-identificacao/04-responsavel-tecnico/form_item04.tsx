"use client"

import React from "react";
import { Formulario, FormField } from "@/components/fomulario/formulario";
import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/ui/input-form";
import { FORMS } from "@/components/constants/formularios/forms";
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
          <h2 className={styles.title}>I - Identificação</h2>
          <h3 className={styles.subtitle}>{FORMS.RESPONSAVEL_TECNICO.TITULO}</h3>
          <div className={styles.grid}>
            <div className={styles.field}>
              <div className={styles.labelMuted}>{FORMS.RESPONSAVEL_TECNICO.LABEL_NOME}</div>
              <div className={styles.valueBox}>{dados.nome}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>{FORMS.RESPONSAVEL_TECNICO.LABEL_CARGO}</div>
              <div className={styles.valueBox}>{dados.cargo}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>{FORMS.RESPONSAVEL_TECNICO.LABEL_TELEFONE}</div>
              <div className={styles.valueBox}>{dados.telefone}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>{FORMS.RESPONSAVEL_TECNICO.LABEL_CELULAR}</div>
              <div className={styles.valueBox}>{dados.celular}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>{FORMS.RESPONSAVEL_TECNICO.LABEL_EMAIL}</div>
              <div className={styles.valueBox}>{dados.email}</div>
            </div>
          </div>
          <div className={styles.buttonRow}>
            <Button onClick={() => setModoEdicao(true)}>
              {FORMS.RESPONSAVEL_TECNICO.BOTAO_EDITAR}
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
        <h3 className={styles.subtitle}>{FORMS.RESPONSAVEL_TECNICO.TITULO}</h3>
        <form
          onSubmit={e => { e.preventDefault(); handleFormSubmit(formData); }}
          className={styles.grid}
        >
          <div className={styles.field}>
            <InputWithLabel
              id="nome"
              label={FORMS.RESPONSAVEL_TECNICO.LABEL_NOME_EDICAO}
              type="text"
              placeholder={FORMS.RESPONSAVEL_TECNICO.NOME}
              required={true}
              value={formData.nome || ''}
              onChange={e => setFormData({ ...formData, nome: e.target.value })}
            />
          </div>
          
          <div className={styles.field}>
            <InputWithLabel
              id="cargo"
              label={FORMS.RESPONSAVEL_TECNICO.LABEL_CARGO_EDICAO}
              type="text"
              placeholder={FORMS.RESPONSAVEL_TECNICO.CARGO}
              required={true}
              value={formData.cargo || ''}
              onChange={e => setFormData({ ...formData, cargo: e.target.value })}
            />
          </div>
          
          <div className={styles.field}>
            <InputWithLabel
              id="telefone"
              label={FORMS.RESPONSAVEL_TECNICO.LABEL_TELEFONE_EDICAO}
              type="text"
              placeholder={FORMS.RESPONSAVEL_TECNICO.TELEFONE}
              required={true}
              value={formData.telefone || ''}
              onChange={e => setFormData({ ...formData, telefone: e.target.value })}
            />
          </div>
          
          <div className={styles.field}>
            <InputWithLabel
              id="celular"
              label={FORMS.RESPONSAVEL_TECNICO.LABEL_CELULAR_EDICAO}
              type="text"
              placeholder={FORMS.RESPONSAVEL_TECNICO.CELULAR}
              required={true}
              value={formData.celular || ''}
              onChange={e => setFormData({ ...formData, celular: e.target.value })}
            />
          </div>
          
          <div className={styles.field}>
            <InputWithLabel
              id="email"
              label={FORMS.RESPONSAVEL_TECNICO.LABEL_EMAIL_EDICAO}
              type="email"
              placeholder={FORMS.RESPONSAVEL_TECNICO.EMAIL}
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
              {FORMS.RESPONSAVEL_TECNICO.BOTAO_CANCELAR}
            </Button>
            <Button type="submit">{FORMS.RESPONSAVEL_TECNICO.BOTAO_SALVAR}</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
