"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/data-table";
import { IconDotsVertical } from "@tabler/icons-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Row } from "@tanstack/react-table";
import styles from "./form_item06.module.css";

interface ObjetivoEspecifico {
  id: number;
  texto: string;
}

const dadosExemplo = {
  objetivoGeral: "Promover a inclusão produtiva de mulheres em situação de vulnerabilidade social por meio da capacitação em corte e costura.",
  objetivosEspecificos: [
    "Capacitar 50 mulheres em técnicas de corte e costura.",
    "Fomentar a criação de uma cooperativa de costura.",
    "Gerar oportunidades de renda e autonomia financeira para as participantes.",
    "Reduzir a dependência de programas sociais."
  ]
};

export function FormObjetivos() {
  const [dados, setDados] = React.useState(dadosExemplo);
  const [formData, setFormData] = React.useState({
    objetivoGeral: dadosExemplo.objetivoGeral,
    objetivosEspecificos: [...dadosExemplo.objetivosEspecificos],
    novoObjetivo: ""
  });
  const [editandoId, setEditandoId] = React.useState<number | null>(null);
  const [editandoGeral, setEditandoGeral] = React.useState(false);
  const [objetivoGeralTemp, setObjetivoGeralTemp] = React.useState(formData.objetivoGeral);

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

  // DataTable columns para objetivos específicos
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
            <DropdownMenuItem onClick={() => handleEditar(row.original.id - 1)}>Editar</DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleRemoveObjetivo(row.original.id - 1)}>Remover</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  const objetivosTableData: ObjetivoEspecifico[] = formData.objetivosEspecificos.map((texto, idx) => ({
    id: idx + 1,
    texto
  }));

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>II - Descrição do Projeto</h2>
        <h3 className={styles.subtitle}>6.0 - Objetivo</h3>
        
        {/* Campo 6.1 - Objetivo Geral */}
        <div className={styles.formCard}>
          <h4 className={styles.cardTitle}>6.1 - Objetivo Geral</h4>
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
                    placeholder="Descreva o objetivo geral do projeto"
                    value={objetivoGeralTemp}
                    onChange={e => setObjetivoGeralTemp(e.target.value)}
                  />
                  <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 12 }}>
                    <Button type="button" onClick={handleSalvarGeral} style={{ minWidth: 100 }}>Salvar</Button>
                    <Button type="button" variant="outline" onClick={handleCancelarGeral} style={{ minWidth: 100 }}>Cancelar</Button>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className={styles.textarea + " " + styles.readonly}
                    style={{ background: "#fff", minHeight: 120, padding: 12, border: "1px solid #e5e7eb", borderRadius: 8, color: "#222", whiteSpace: "pre-line" }}
                  >
                    {formData.objetivoGeral}
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 12 }}>
                    <Button type="button" onClick={handleEditarGeral} style={{ minWidth: 100 }}>Editar</Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* Card do Formulário para Objetivos Específicos */}
        <div className={styles.formCard}>
          <h4 className={styles.cardTitle}>6.2 - Adicionar Objetivo Específico</h4>
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
                placeholder={editandoId !== null ? "Edite o objetivo específico" : "Digite um objetivo específico e adicione"}
                value={formData.novoObjetivo}
                onChange={e => setFormData({ ...formData, novoObjetivo: e.target.value })}
                onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); editandoId !== null ? handleSalvarEdicao() : handleAddObjetivo(); } }}
              />
              <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 12 }}>
                <Button type="submit" style={{ minWidth: 100 }}>
                  {editandoId !== null ? "Salvar" : "Adicionar"}
                </Button>
                {editandoId !== null && (
                  <Button type="button" variant="outline" onClick={handleCancelarEdicao} style={{ minWidth: 100 }}>
                    Cancelar
                  </Button>
                )}
              </div>
            </div>
          </form>
        </div>
        
        {/* Tabela de Objetivos Específicos */}
        <div className={styles.tableSection}>
          <h4 className={styles.tableTitle}>Objetivos Específicos Cadastrados</h4>
          <DataTable data={objetivosTableData} columns={columns} pageSize={5} />
        </div>
        
        {/* Botão Salvar */}
        <div className={styles.buttonRow}>
          <Button onClick={handleFormSubmit}>
            Salvar Objetivos
          </Button>
        </div>
      </div>
    </div>
  );
}
