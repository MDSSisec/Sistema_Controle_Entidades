"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/data-table";
import { IconDotsVertical } from "@tabler/icons-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Row } from "@tanstack/react-table";
import { FORMS } from "@/components/constants/formularios/forms";
import styles from "./form_item06.module.css";

interface ObjetivoEspecifico {
  id: number;
  texto: string;
}

const dadosExemplo = {
  objetivoGeral: "",
  objetivosEspecificos: []
};

export function FormObjetivos() {
  const [modoEdicao, setModoEdicao] = React.useState(false);
  const [dados, setDados] = React.useState<{
    objetivoGeral: string;
    objetivosEspecificos: string[];
  }>(dadosExemplo);
  const [formData, setFormData] = React.useState<{
    objetivoGeral: string;
    objetivosEspecificos: string[];
    novoObjetivo: string;
  }>({
    objetivoGeral: dadosExemplo.objetivoGeral,
    objetivosEspecificos: [...dadosExemplo.objetivosEspecificos],
    novoObjetivo: ""
  });
  const [editandoId, setEditandoId] = React.useState<number | null>(null);
  const [editandoGeral, setEditandoGeral] = React.useState(false);
  const [objetivoGeralTemp, setObjetivoGeralTemp] = React.useState(formData.objetivoGeral);

  // Sempre que entrar no modo edição, sincroniza formData com dados atuais
  React.useEffect(() => {
    if (modoEdicao) {
      setFormData({
        objetivoGeral: dados.objetivoGeral,
        objetivosEspecificos: [...dados.objetivosEspecificos],
        novoObjetivo: ""
      });
    }
  }, [modoEdicao, dados]);

  const handleAddObjetivo = () => {
    const texto = formData.novoObjetivo.trim();
    if (texto) {
      setFormData({
        ...formData,
        objetivosEspecificos: [...formData.objetivosEspecificos, texto],
        novoObjetivo: ""
      });
    }
  };

  const handleEditar = (idx: number) => {
    setFormData({
      ...formData,
      novoObjetivo: formData.objetivosEspecificos[idx]
    });
    setEditandoId(idx);
  };

  const handleSalvarEdicao = () => {
    const texto = formData.novoObjetivo.trim();
    if (texto && editandoId !== null) {
      const novosObjetivos = [...formData.objetivosEspecificos];
      novosObjetivos[editandoId] = texto;
      setFormData({
        ...formData,
        objetivosEspecificos: novosObjetivos,
        novoObjetivo: ""
      });
      setEditandoId(null);
    }
  };

  const handleCancelarEdicao = () => {
    setEditandoId(null);
    setFormData({
      ...formData,
      novoObjetivo: ""
    });
  };

  const handleRemoveObjetivo = (idx: number) => {
    setFormData({
      ...formData,
      objetivosEspecificos: formData.objetivosEspecificos.filter((_, i) => i !== idx)
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDados({
      objetivoGeral: formData.objetivoGeral,
      objetivosEspecificos: formData.objetivosEspecificos
    });
    setModoEdicao(false);
  };

  // Funções para editar/salvar/cancelar objetivo geral
  const handleEditarGeral = () => {
    setObjetivoGeralTemp(formData.objetivoGeral);
    setEditandoGeral(true);
  };
  const handleSalvarGeral = () => {
    setFormData({ ...formData, objetivoGeral: objetivoGeralTemp });
    setEditandoGeral(false);
  };
  const handleCancelarGeral = () => {
    setObjetivoGeralTemp(formData.objetivoGeral);
    setEditandoGeral(false);
  };

  // DataTable columns para objetivos específicos (modo edição)
  const columns = [
    {
      id: "numero",
      header: "Objetivos",
      cell: ({ row }: { row: Row<ObjetivoEspecifico> }) => (
        <div className="font-medium">
          Objetivo Específico {String(row.original.id).padStart(2, '0')}
        </div>
      ),
      enableHiding: false,
    },
    {
      accessorKey: "texto",
      header: "Descrição do Objetivo",
      cell: ({ row }: { row: Row<ObjetivoEspecifico> }) => row.original.texto,
      enableHiding: false,
    },
    {
      id: "actions",
      header: "Ações",
      cell: ({ row }: { row: Row<ObjetivoEspecifico> }) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
              size="icon"
            >
              <IconDotsVertical />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-32">
            <DropdownMenuItem onClick={() => handleEditar(row.original.id - 1)}>{FORMS.OBJETIVOS.BOTAO_EDITAR}</DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleRemoveObjetivo(row.original.id - 1)}>Remover</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  // DataTable columns para objetivos específicos (modo visualização - sem ações)
  const columnsVisualizacao = [
    {
      id: "numero",
      header: "Objetivos",
      cell: ({ row }: { row: Row<ObjetivoEspecifico> }) => (
        <div className="font-medium">
          Objetivo Específico {String(row.original.id).padStart(2, '0')}
        </div>
      ),
      enableHiding: false,
    },
    {
      accessorKey: "texto",
      header: "Descrição do Objetivo",
      cell: ({ row }: { row: Row<ObjetivoEspecifico> }) => row.original.texto,
      enableHiding: false,
    },
  ];

  const objetivosTableData: ObjetivoEspecifico[] = formData.objetivosEspecificos.map((texto, idx) => ({
    id: idx + 1,
    texto
  }));

  const objetivosTableDataVisualizacao: ObjetivoEspecifico[] = dados.objetivosEspecificos.map((texto, idx) => ({
    id: idx + 1,
    texto
  }));

  if (!modoEdicao) {
    // Modo visualização - apenas objetivo geral e tabela de objetivos específicos
    return (
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <h2 className={styles.title}>{FORMS.TITULO_DESCRICAO}</h2>
          <h3 className={styles.subtitle}>{FORMS.OBJETIVOS.TITULO}</h3>
          
          {/* Campo 6.1 - Objetivo Geral */}
          <div className={styles.formCard}>
            <h4 className={styles.cardTitle}>{FORMS.OBJETIVOS.LABEL_OBJETIVO_GERAL}</h4>
            <div className={styles.valueBox}>
              {dados.objetivoGeral || "Nenhum objetivo geral cadastrado"}
            </div>
          </div>
          
          {/* Tabela de Objetivos Específicos */}
          <div className={styles.tableSection}>
            <h4 className={styles.tableTitle}>{FORMS.OBJETIVOS.LABEL_OBJETIVOS_CADASTRADOS}</h4>
            {dados.objetivosEspecificos.length > 0 ? (
              <DataTable data={objetivosTableDataVisualizacao} columns={columnsVisualizacao} pageSize={5} />
            ) : (
              <div className={styles.valueBox} style={{ textAlign: 'center', color: '#6b7280', padding: '2rem' }}>
                Nenhum item cadastrado
              </div>
            )}
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
        <h3 className={styles.subtitle}>{FORMS.OBJETIVOS.TITULO}</h3>
        
        {/* Campo 6.1 - Objetivo Geral */}
        <div className={styles.formCard}>
          <h4 className={styles.cardTitle}>{FORMS.OBJETIVOS.LABEL_OBJETIVO_GERAL}</h4>
          <div className={styles.formGrid}>
            <div className={`${styles.field} ${styles.fullWidth}`}>
              <label className={styles.label} htmlFor="objetivoGeral">
                Objetivo Geral<span className="text-destructive ml-1">*</span>
              </label>
              {editandoGeral ? (
                <>
                  <textarea
                    id="objetivoGeral"
                    required
                    rows={6}
                    className={styles.textarea}
                    placeholder={FORMS.OBJETIVOS.OBJETIVO_GERAL}
                    value={objetivoGeralTemp}
                    onChange={e => setObjetivoGeralTemp(e.target.value)}
                  />
                  <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 12 }}>
                    <Button type="button" onClick={handleSalvarGeral} style={{ minWidth: 100 }}>{FORMS.OBJETIVOS.BOTAO_SALVAR}</Button>
                    <Button type="button" variant="outline" onClick={handleCancelarGeral} style={{ minWidth: 100 }}>{FORMS.OBJETIVOS.BOTAO_CANCELAR}</Button>
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.valueBox}>
                    {formData.objetivoGeral}
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 12 }}>
                    <Button type="button" onClick={handleEditarGeral} style={{ minWidth: 100 }}>{FORMS.OBJETIVOS.BOTAO_EDITAR}</Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* Card do Formulário para Objetivos Específicos */}
        <div className={styles.formCard}>
          <h4 className={styles.cardTitle}>{FORMS.OBJETIVOS.LABEL_OBJETIVO_ESPECIFICO}</h4>
          <form onSubmit={(e) => { e.preventDefault(); editandoId !== null ? handleSalvarEdicao() : handleAddObjetivo(); }} className={styles.formGrid}>
            <div className={`${styles.field} ${styles.fullWidth}`}>
              <label className={styles.label} htmlFor="novoObjetivo">
                Objetivo Específico<span className="text-destructive ml-1">*</span>
              </label>
              <textarea
                id="novoObjetivo"
                required
                rows={6}
                className={styles.textarea}
                placeholder={editandoId !== null ? FORMS.OBJETIVOS.OBJETIVO_ESPECIFICO_EDICAO : FORMS.OBJETIVOS.OBJETIVO_ESPECIFICO}
                value={formData.novoObjetivo}
                onChange={e => setFormData({ ...formData, novoObjetivo: e.target.value })}
                onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); editandoId !== null ? handleSalvarEdicao() : handleAddObjetivo(); } }}
              />
              <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 12 }}>
                <Button type="submit" style={{ minWidth: 100 }}>
                  {editandoId !== null ? FORMS.OBJETIVOS.BOTAO_SALVAR : FORMS.OBJETIVOS.BOTAO_ADICIONAR}
                </Button>
                {editandoId !== null && (
                  <Button type="button" variant="outline" onClick={handleCancelarEdicao} style={{ minWidth: 100 }}>
                    {FORMS.OBJETIVOS.BOTAO_CANCELAR}
                  </Button>
                )}
              </div>
            </div>
          </form>
        </div>
        
        {/* Tabela de Objetivos Específicos */}
        <div className={styles.tableSection}>
          <h4 className={styles.tableTitle}>{FORMS.OBJETIVOS.LABEL_OBJETIVOS_CADASTRADOS}</h4>
          <DataTable data={objetivosTableData} columns={columns} pageSize={5} />
        </div>
        
        {/* Botão Salvar */}
        <div className={styles.buttonRow}>
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => {
              setFormData({
                objetivoGeral: dados.objetivoGeral,
                objetivosEspecificos: [...dados.objetivosEspecificos],
                novoObjetivo: ""
              });
              setModoEdicao(false);
            }}
          >
            {FORMS.BOTAO_CANCELAR}
          </Button>
          <Button onClick={handleFormSubmit}>
            {FORMS.BOTAO_SALVAR}
          </Button>
        </div>
      </div>
    </div>
  );
}
