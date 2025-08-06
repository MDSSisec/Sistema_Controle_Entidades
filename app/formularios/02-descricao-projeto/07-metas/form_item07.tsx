"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/data-table";
import { IconDotsVertical } from "@tabler/icons-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Row } from "@tanstack/react-table";
import { FORMS } from "@/components/constants/formularios/forms";
import styles from "./form_item07.module.css";

// Tipagem dos dados da meta
interface Meta {
  id: number;
  especificacao: string;
  valor: string;
  dataInicio: string;
  dataTermino: string;
}

const dadosExemplo: Meta[] = [
  {
    id: 1,
    especificacao: "Capacitação de 50 mulheres em corte e costura",
    valor: "R$ 25.000,00",
    dataInicio: "01/03/2024",
    dataTermino: "30/06/2024"
  },
  {
    id: 2,
    especificacao: "Aquisição de 20 máquinas de costura",
    valor: "R$ 40.000,00",
    dataInicio: "01/04/2024",
    dataTermino: "31/05/2024"
  }
];

export function FormMetas() {
  const [modoEdicao, setModoEdicao] = React.useState(false);
  const [dados, setDados] = React.useState<Meta[]>(dadosExemplo);
  const [formData, setFormData] = React.useState<Omit<Meta, 'id'>>({
    especificacao: "",
    valor: "",
    dataInicio: "",
    dataTermino: ""
  });
  const [editandoId, setEditandoId] = React.useState<number | null>(null);

  // Sempre que entrar no modo edição, sincroniza formData com dados atuais
  React.useEffect(() => {
    if (modoEdicao) {
      setFormData({
        especificacao: "",
        valor: "",
        dataInicio: "",
        dataTermino: ""
      });
    }
  }, [modoEdicao]);

  // Função para formatar valor monetário
  const formatarValor = (valor: string): string => {
    // Remove tudo que não é número
    const apenasNumeros = valor.replace(/\D/g, '');
    
    // Se não há números, retorna vazio
    if (apenasNumeros === '') return '';
    
    // Converte para número e divide por 100 para considerar centavos
    const numero = parseInt(apenasNumeros) / 100;
    
    // Formata como moeda brasileira
    return numero.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  // Função para lidar com mudança no campo valor
  const handleValorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorDigitado = e.target.value;
    const valorFormatado = formatarValor(valorDigitado);
    setFormData({ ...formData, valor: valorFormatado });
  };

  // Função para formatar data no formato dd/mm/aaaa
  const formatarData = (valor: string): string => {
    // Remove tudo que não é número
    const apenasNumeros = valor.replace(/\D/g, '');
    
    // Se não há números, retorna vazio
    if (apenasNumeros === '') return '';
    
    // Aplica a máscara dd/mm/aaaa
    if (apenasNumeros.length <= 2) {
      return apenasNumeros;
    } else if (apenasNumeros.length <= 4) {
      return `${apenasNumeros.slice(0, 2)}/${apenasNumeros.slice(2)}`;
    } else {
      return `${apenasNumeros.slice(0, 2)}/${apenasNumeros.slice(2, 4)}/${apenasNumeros.slice(4, 8)}`;
    }
  };

  // Função para lidar com mudança no campo data de início
  const handleDataInicioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorDigitado = e.target.value;
    const valorFormatado = formatarData(valorDigitado);
    setFormData({ ...formData, dataInicio: valorFormatado });
  };

  // Função para lidar com mudança no campo data de término
  const handleDataTerminoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorDigitado = e.target.value;
    const valorFormatado = formatarData(valorDigitado);
    setFormData({ ...formData, dataTermino: valorFormatado });
  };

  const handleEditar = (meta: Meta) => {
    setFormData({
      especificacao: meta.especificacao,
      valor: meta.valor,
      dataInicio: meta.dataInicio,
      dataTermino: meta.dataTermino
    });
    setEditandoId(meta.id);
  };

  const handleRemoveMeta = (idx: number) => {
    setDados(dados.filter((_, i) => i !== idx));
  };

  const handleCancelarEdicao = () => {
    setEditandoId(null);
    setFormData({
      especificacao: "",
      valor: "",
      dataInicio: "",
      dataTermino: ""
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar se todos os campos estão preenchidos
    if (!formData.especificacao || !formData.valor || !formData.dataInicio || !formData.dataTermino) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    if (editandoId) {
      // Atualizar meta existente
      setDados(dados.map(meta =>
        meta.id === editandoId ? { ...meta, ...formData } : meta
      ));
      setEditandoId(null);
    } else {
      // Adicionar nova meta
      const novaMeta: Meta = {
        id: dados.length + 1,
        ...formData
      };
      setDados([...dados, novaMeta]);
    }

    // Limpar formulário
    setFormData({
      especificacao: "",
      valor: "",
      dataInicio: "",
      dataTermino: ""
    });
  };

  // Mover columns para dentro do componente para acessar handleEditar
  const columns = [
    {
      id: "numero",
      header: "Meta",
      cell: ({ row }: { row: Row<Meta> }) => (
        <div className="font-medium">
          Meta {String(row.original.id).padStart(2, '0')}
        </div>
      ),
      enableHiding: false,
    },
    {
      accessorKey: "especificacao",
      header: "Especificação da Meta",
      cell: ({ row }: { row: Row<Meta> }) => row.original.especificacao,
      enableHiding: false,
    },
    {
      accessorKey: "valor",
      header: "Valor",
      cell: ({ row }: { row: Row<Meta> }) => row.original.valor,
    },
    {
      accessorKey: "dataInicio",
      header: "Data de Início",
      cell: ({ row }: { row: Row<Meta> }) => row.original.dataInicio,
    },
    {
      accessorKey: "dataTermino",
      header: "Data de Término",
      cell: ({ row }: { row: Row<Meta> }) => row.original.dataTermino,
    },
    {
      id: "actions",
      header: "Ações",
      cell: ({ row }: { row: Row<Meta> }) => (
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
            <DropdownMenuItem onClick={() => handleEditar(row.original)}>{FORMS.METAS.BOTAO_EDITAR}</DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleRemoveMeta(row.original.id - 1)}>Remover</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  // DataTable columns para metas (modo visualização - sem ações)
  const columnsVisualizacao = [
    {
      id: "numero",
      header: "Meta",
      cell: ({ row }: { row: Row<Meta> }) => (
        <div className="font-medium">
          Meta {String(row.original.id).padStart(2, '0')}
        </div>
      ),
      enableHiding: false,
    },
    {
      accessorKey: "especificacao",
      header: "Especificação da Meta",
      cell: ({ row }: { row: Row<Meta> }) => row.original.especificacao,
      enableHiding: false,
    },
    {
      accessorKey: "valor",
      header: "Valor",
      cell: ({ row }: { row: Row<Meta> }) => row.original.valor,
    },
    {
      accessorKey: "dataInicio",
      header: "Data de Início",
      cell: ({ row }: { row: Row<Meta> }) => row.original.dataInicio,
    },
    {
      accessorKey: "dataTermino",
      header: "Data de Término",
      cell: ({ row }: { row: Row<Meta> }) => row.original.dataTermino,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>{FORMS.TITULO_DESCRICAO}</h2>
        <h3 className={styles.subtitle}>{FORMS.METAS.TITULO}</h3>
        
        {!modoEdicao ? (
          // Modo visualização - apenas tabela de metas
          <>
            {/* Tabela de Metas */}
            <div className={styles.tableSection}>
              <h4 className={styles.tableTitle}>{FORMS.METAS.LABEL_METAS_CADASTRADAS}</h4>
              {dados.length > 0 ? (
                <DataTable data={dados} columns={columnsVisualizacao} pageSize={5} />
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
          </>
        ) : (
          // Modo edição
          <>
            {/* Card do Formulário */}
            <div className={styles.formCard}>
              <h4 className={styles.cardTitle}>Adicionar Nova Meta</h4>
              <form onSubmit={handleFormSubmit} className={styles.formGrid}>
                <div className={`${styles.field} ${styles.fullWidth}`}>
                  <label className={styles.label} htmlFor="especificacao">
                    {FORMS.METAS.LABEL_ESPECIFICACAO}<span className="text-destructive ml-1">*</span>
                  </label>
                  <textarea
                    id="especificacao"
                    required
                    rows={3}
                    className={styles.textarea}
                    placeholder={FORMS.METAS.ESPECIFICACAO}
                    value={formData.especificacao}
                    onChange={e => setFormData({ ...formData, especificacao: e.target.value })}
                  />
                </div>
                
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="valor">
                    {FORMS.METAS.LABEL_VALOR}<span className="text-destructive ml-1">*</span>
                  </label>
                  <input
                    id="valor"
                    type="text"
                    required
                    className={styles.input}
                    placeholder={FORMS.METAS.VALOR}
                    value={formData.valor}
                    onChange={handleValorChange}
                  />
                </div>
                
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="dataInicio">
                    {FORMS.METAS.LABEL_DATA_INICIO}<span className="text-destructive ml-1">*</span>
                  </label>
                  <input
                    id="dataInicio"
                    type="text"
                    required
                    className={styles.input}
                    placeholder={FORMS.METAS.DATA_INICIO}
                    maxLength={10}
                    value={formData.dataInicio}
                    onChange={handleDataInicioChange}
                  />
                </div>
                
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="dataTermino">
                    {FORMS.METAS.LABEL_DATA_TERMINO}<span className="text-destructive ml-1">*</span>
                  </label>
                  <input
                    id="dataTermino"
                    type="text"
                    required
                    className={styles.input}
                    placeholder={FORMS.METAS.DATA_TERMINO}
                    maxLength={10}
                    value={formData.dataTermino}
                    onChange={handleDataTerminoChange}
                  />
                </div>
                
                <div className={styles.buttonRow}>
                  <Button type="submit">{editandoId ? FORMS.METAS.BOTAO_SALVAR : FORMS.METAS.BOTAO_ADICIONAR}</Button>
                  {editandoId && (
                    <Button type="button" variant="outline" onClick={handleCancelarEdicao}>
                      {FORMS.METAS.BOTAO_CANCELAR}
                    </Button>
                  )}
                </div>
              </form>
            </div>
            
            {/* Tabela de Metas */}
            <div className={styles.tableSection}>
              <h4 className={styles.tableTitle}>{FORMS.METAS.LABEL_METAS_CADASTRADAS}</h4>
              <DataTable data={dados} columns={columns} pageSize={5} />
            </div>
            
            {/* Botões Salvar/Cancelar */}
            <div className={styles.buttonRow}>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setModoEdicao(false)}
              >
                {FORMS.BOTAO_CANCELAR}
              </Button>
              <Button onClick={() => setModoEdicao(false)}>
                {FORMS.BOTAO_SALVAR}
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
