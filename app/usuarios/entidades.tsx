"use client";

import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { IconDotsVertical, IconPlus } from "@tabler/icons-react";
import { CadastroEntidade } from "@/app/cadastroEntidade/cadastro-entidade";
import styles from "./usuarios.module.css";
import { ColumnDef } from "@tanstack/react-table";
import React, { useState } from "react";

interface Entidade {
  id: number;
  nome: string;
  cnpj: string;
  email: string;
  telefone: string;
  dataCadastro: string;
}

const entidades: Entidade[] = [
  { 
    id: 1, 
    nome: "Instituto de Desenvolvimento Social", 
    cnpj: "12.345.678/0001-90", 
    email: "contato@ids.org.br", 
    telefone: "(11) 99999-9999",
    dataCadastro: "2024-05-01"
  },
  { 
    id: 2, 
    nome: "Fundação Comunitária", 
    cnpj: "98.765.432/0001-10", 
    email: "contato@fundacao.org.br", 
    telefone: "(11) 88888-8888",
    dataCadastro: "2024-04-15"
  },
  { 
    id: 3, 
    nome: "Associação Beneficente", 
    cnpj: "11.222.333/0001-44", 
    email: "contato@associacao.org.br", 
    telefone: "(11) 77777-7777",
    dataCadastro: "2024-03-20"
  },
];

const columns: ColumnDef<Entidade>[] = [
  {
    accessorKey: "nome",
    header: "Nome da Entidade",
    size: 200,
    cell: ({ getValue }) => <span style={{ display: 'inline-block', minWidth: 160 }}>{getValue() as string}</span>,
  },
  {
    accessorKey: "cnpj",
    header: "CNPJ",
    size: 140,
    cell: ({ getValue }) => <span style={{ display: 'inline-block', minWidth: 120 }}>{getValue() as string}</span>,
  },
  {
    accessorKey: "email",
    header: "Email",
    size: 170,
    cell: ({ getValue }) => <span style={{ display: 'inline-block', minWidth: 120 }}>{getValue() as string}</span>,
  },
  {
    accessorKey: "telefone",
    header: "Telefone",
    size: 120,
    cell: ({ getValue }) => <span style={{ display: 'inline-block', minWidth: 100 }}>{getValue() as string}</span>,
  },
  {
    accessorKey: "dataCadastro",
    header: "Data Cadastro",
    size: 110,
    cell: ({ getValue }) => {
      const data = new Date(getValue() as string);
      return <span style={{ display: 'inline-block', minWidth: 90, textAlign: 'center' }}>{data.toLocaleDateString()}</span>;
    },
  },
  {
    id: "actions",
    header: "Ações",
    size: 60,
    cell: ({ row }) => (
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
        <DropdownMenuContent align="end" className="w-40">
          <DropdownMenuItem>Editar</DropdownMenuItem>
          <DropdownMenuItem>Excluir</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Ver Detalhes</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export function Entidades() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (entidadeData: Omit<Entidade, 'id' | 'dataCadastro'>) => {
    // TODO: Implementar lógica para salvar a entidade
    console.log("Dados da entidade para cadastro:", entidadeData);
    
    // Simular adição de entidade
    const novaEntidade: Entidade = {
      id: entidades.length + 1,
      nome: entidadeData.nome,
      cnpj: entidadeData.cnpj,
      email: entidadeData.email,
      telefone: entidadeData.telefone,
      dataCadastro: new Date().toISOString().split('T')[0]
    };
    
    console.log("Nova entidade criada:", novaEntidade);
    
    // Aqui você pode adicionar a lógica para salvar no backend
    // await api.post('/entidades', entidadeData);
    
    // Fechar modal
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.tabContent}>
      <DataTable<Entidade> data={entidades} columns={columns} />
      
      {/* Botão flutuante para abrir popup */}
      <Button 
        className={styles.fabButton}
        size="icon"
        onClick={() => setIsModalOpen(true)}
      >
        <IconPlus className="h-6 w-6" />
        <span className="sr-only">Adicionar nova entidade</span>
      </Button>
      
      {/* Componente de cadastro de entidade */}
      <CadastroEntidade
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        title="Cadastrar Nova Entidade"
      />
    </div>
  );
} 