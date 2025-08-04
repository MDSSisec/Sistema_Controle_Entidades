"use client"

import React from "react";
import { Formulario, FormField } from "@/components/fomulario/formulario";
import { Button } from "@/components/ui/button";
import { InputWithLabel, TextareaWithLabel } from "@/components/ui/input-form";
import { projeto } from "@/components/constants/formularios/01-identificacao/projeto";
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
          <h2 className={styles.title}>II - Descrição da Entidade</h2>
          <div className={styles.grid}>
            <div className={styles.field}>
              <div className={styles.labelMuted}>Nome</div>
              <div className={`${styles.valueBox} ${!dados.nome ? styles.valueBoxPlaceholder : ''}`}>
                {dados.nome || projeto.ENTIDADE.NOME}
              </div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>CNPJ</div>
              <div className={`${styles.valueBox} ${!dados.cnpj ? styles.valueBoxPlaceholder : ''}`}>
                {dados.cnpj || projeto.ENTIDADE.CNPJ}
              </div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>Data de Fundação</div>
              <div className={`${styles.valueBox} ${!dados.dataFundacao ? styles.valueBoxPlaceholder : ''}`}>
                {dados.dataFundacao || projeto.ENTIDADE.DATA_FUNDACAO}
              </div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>Registro do CNPJ</div>
              <div className={`${styles.valueBox} ${!dados.registroCnpj ? styles.valueBoxPlaceholder : ''}`}>
                {dados.registroCnpj || projeto.ENTIDADE.REGISTRO_CNPJ}
              </div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>CEP</div>
              <div className={`${styles.valueBox} ${!dados.cep ? styles.valueBoxPlaceholder : ''}`}>
                {dados.cep || projeto.ENTIDADE.CEP}
              </div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>Bairro</div>
              <div className={`${styles.valueBox} ${!dados.bairro ? styles.valueBoxPlaceholder : ''}`}>
                {dados.bairro || projeto.ENTIDADE.BAIRRO}
              </div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>UF</div>
              <div className={`${styles.valueBox} ${!dados.uf ? styles.valueBoxPlaceholder : ''}`}>
                {dados.uf || projeto.ENTIDADE.UF}
              </div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>Endereço Completo</div>
              <div className={`${styles.valueBox} ${!dados.enderecoCompleto ? styles.valueBoxPlaceholder : ''}`}>
                {dados.enderecoCompleto || projeto.ENTIDADE.ENDERECO_COMPLETO}
              </div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>E-mail</div>
              <div className={`${styles.valueBox} ${!dados.email ? styles.valueBoxPlaceholder : ''}`}>
                {dados.email || projeto.ENTIDADE.EMAIL}
              </div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>Número de telefone e fax com DDD</div>
              <div className={`${styles.valueBox} ${!dados.telefoneFax ? styles.valueBoxPlaceholder : ''}`}>
                {dados.telefoneFax || projeto.ENTIDADE.TELEFONE_FAX}
              </div>
            </div>
            <div className={styles.field}>
              <div className={styles.labelMuted}>Página na web</div>
              <div className={`${styles.valueBox} ${!dados.paginaWeb ? styles.valueBoxPlaceholder : ''}`}>
                {dados.paginaWeb || projeto.ENTIDADE.PAGINA_WEB}
              </div>
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
          <div className={styles.field}>
            <InputWithLabel
              id="nome"
              label="Nome"
              type="text"
              placeholder={projeto.ENTIDADE.NOME}
              required={true}
              value={formData.nome || ''}
              onChange={e => setFormData({ ...formData, nome: e.target.value })}
            />
          </div>
          
          <div className={styles.field}>
            <InputWithLabel
              id="cnpj"
              label="CNPJ"
              type="text"
              placeholder={projeto.ENTIDADE.CNPJ}
              required={true}
              value={formData.cnpj || ''}
              onChange={e => setFormData({ ...formData, cnpj: e.target.value })}
            />
          </div>
          
          <div className={styles.field}>
            <InputWithLabel
              id="dataFundacao"
              label="Data de Fundação"
              type="text"
              placeholder={projeto.ENTIDADE.DATA_FUNDACAO}
              required={true}
              value={formData.dataFundacao || ''}
              onChange={e => setFormData({ ...formData, dataFundacao: e.target.value })}
            />
          </div>
          
          <div className={styles.field}>
            <InputWithLabel
              id="registroCnpj"
              label="Registro do CNPJ"
              type="text"
              placeholder={projeto.ENTIDADE.REGISTRO_CNPJ}
              required={true}
              value={formData.registroCnpj || ''}
              onChange={e => setFormData({ ...formData, registroCnpj: e.target.value })}
            />
          </div>
          
          <div className={styles.field}>
            <InputWithLabel
              id="cep"
              label="CEP"
              type="text"
              placeholder={projeto.ENTIDADE.CEP}
              required={true}
              value={formData.cep || ''}
              onChange={e => setFormData({ ...formData, cep: e.target.value })}
            />
          </div>
          
          <div className={styles.field}>
            <InputWithLabel
              id="bairro"
              label="Bairro"
              type="text"
              placeholder={projeto.ENTIDADE.BAIRRO}
              required={true}
              value={formData.bairro || ''}
              onChange={e => setFormData({ ...formData, bairro: e.target.value })}
            />
          </div>
          
          <div className={styles.field}>
            <InputWithLabel
              id="uf"
              label="UF"
              type="text"
              placeholder={projeto.ENTIDADE.UF}
              required={true}
              value={formData.uf || ''}
              onChange={e => setFormData({ ...formData, uf: e.target.value })}
            />
          </div>
          
          <div className={styles.field}>
            <TextareaWithLabel
              id="enderecoCompleto"
              label="Endereço Completo"
              placeholder={projeto.ENTIDADE.ENDERECO_COMPLETO}
              required={true}
              rows={1}
              value={formData.enderecoCompleto || ''}
              onChange={e => setFormData({ ...formData, enderecoCompleto: e.target.value })}
            />
          </div>
          
          <div className={styles.field}>
            <InputWithLabel
              id="email"
              label="E-mail"
              type="email"
              placeholder={projeto.ENTIDADE.EMAIL}
              required={true}
              value={formData.email || ''}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          
          <div className={styles.field}>
            <InputWithLabel
              id="telefoneFax"
              label="Número de telefone e fax com DDD"
              type="text"
              placeholder={projeto.ENTIDADE.TELEFONE_FAX}
              required={true}
              value={formData.telefoneFax || ''}
              onChange={e => setFormData({ ...formData, telefoneFax: e.target.value })}
            />
          </div>
          
          <div className={styles.field}>
            <InputWithLabel
              id="paginaWeb"
              label="Página na web"
              type="text"
              placeholder={projeto.ENTIDADE.PAGINA_WEB}
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
              Cancelar
            </Button>
            <Button type="submit">Salvar Descrição</Button>
          </div>
        </form>
      </div>
    </div>
  );
} 