"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { TextareaWithLabel } from "@/components/ui/input-form";
import { FORMS } from "@/components/constants/formularios/forms";
import styles from "./form_item05.module.css";

const dadosExemplo = {
  interessesReciprocos: "",
  publicoAlvo: "",
  problemaResolver: "",
  resultadosEsperados: "",
  relacaoObjetivos: "",
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
          <h2 className={styles.title}>{FORMS.TITULO_DESCRICAO}</h2>
          <h3 className={styles.subtitle}>{FORMS.JUSTIFICATIVA.SUBTITULO}</h3>
          <div className={styles.grid}>
            <div className={`${styles.field} ${styles.fullWidth}`}>
              <div className={styles.labelMuted}>{FORMS.JUSTIFICATIVA.LABEL_INTERESSES_RECIPROCOS}</div>
              <div className={styles.valueBox}>{dados.interessesReciprocos}</div>
            </div>
            <div className={`${styles.field} ${styles.fullWidth}`}>
              <div className={styles.labelMuted}>{FORMS.JUSTIFICATIVA.LABEL_PUBLICO_ALVO}</div>
              <div className={styles.valueBox}>{dados.publicoAlvo}</div>
            </div>
            <div className={`${styles.field} ${styles.fullWidth}`}>
              <div className={styles.labelMuted}>{FORMS.JUSTIFICATIVA.LABEL_PROBLEMA_RESOLVER}</div>
              <div className={styles.valueBox}>{dados.problemaResolver}</div>
            </div>
            <div className={`${styles.field} ${styles.fullWidth}`}>
              <div className={styles.labelMuted}>{FORMS.JUSTIFICATIVA.LABEL_RESULTADOS_ESPERADOS}</div>
              <div className={styles.valueBox}>{dados.resultadosEsperados}</div>
            </div>
            <div className={`${styles.field} ${styles.fullWidth}`}>
              <div className={styles.labelMuted}>{FORMS.JUSTIFICATIVA.LABEL_RELACAO_OBJETIVOS}</div>
              <div className={styles.valueBox}>{dados.relacaoObjetivos}</div>
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
        <h2 className={styles.title}>{FORMS.TITULO_DESCRICAO}</h2>
        <h3 className={styles.subtitle}>{FORMS.JUSTIFICATIVA.SUBTITULO}</h3>
        <form
          onSubmit={e => { e.preventDefault(); handleFormSubmit(formData); }}
          className={styles.grid}
        >
          <div className={styles.field}>
            <TextareaWithLabel
              id="interessesReciprocos"
              label={FORMS.JUSTIFICATIVA.LABEL_INTERESSES_RECIPROCOS_EDICAO}
              placeholder={FORMS.JUSTIFICATIVA.INTERESSES_RECIPROCOS}
              required={true}
              rows={6}
              value={formData.interessesReciprocos || ''}
              onChange={e => setFormData({ ...formData, interessesReciprocos: e.target.value })}
            />
          </div>
          
          <div className={styles.field}>
            <TextareaWithLabel
              id="publicoAlvo"
              label={FORMS.JUSTIFICATIVA.LABEL_PUBLICO_ALVO_EDICAO}
              placeholder={FORMS.JUSTIFICATIVA.PUBLICO_ALVO}
              required={true}
              rows={4}
              value={formData.publicoAlvo || ''}
              onChange={e => setFormData({ ...formData, publicoAlvo: e.target.value })}
            />
          </div>
          
          <div className={styles.field}>
            <TextareaWithLabel
              id="problemaResolver"
              label={FORMS.JUSTIFICATIVA.LABEL_PROBLEMA_RESOLVER_EDICAO}
              placeholder={FORMS.JUSTIFICATIVA.PROBLEMA_RESOLVER}
              required={true}
              rows={4}
              value={formData.problemaResolver || ''}
              onChange={e => setFormData({ ...formData, problemaResolver: e.target.value })}
            />
          </div>
          
          <div className={styles.field}>
            <TextareaWithLabel
              id="resultadosEsperados"
              label={FORMS.JUSTIFICATIVA.LABEL_RESULTADOS_ESPERADOS_EDICAO}
              placeholder={FORMS.JUSTIFICATIVA.RESULTADOS_ESPERADOS}
              required={true}
              rows={4}
              value={formData.resultadosEsperados || ''}
              onChange={e => setFormData({ ...formData, resultadosEsperados: e.target.value })}
            />
          </div>
          
          <div className={styles.field}>
            <TextareaWithLabel
              id="relacaoObjetivos"
              label={FORMS.JUSTIFICATIVA.LABEL_RELACAO_OBJETIVOS_EDICAO}
              placeholder={FORMS.JUSTIFICATIVA.RELACAO_OBJETIVOS}
              required={true}
              rows={6}
              value={formData.relacaoObjetivos || ''}
              onChange={e => setFormData({ ...formData, relacaoObjetivos: e.target.value })}
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
