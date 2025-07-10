"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IconDotsVertical, IconPlus } from "@tabler/icons-react";
import { CadastroUsuario } from "@/app/cadastroUsuario/cadastro-usuario";
  import { Entidades } from "./entidades";
import styles from "./usuarios.module.css";
import { ColumnDef } from "@tanstack/react-table";
import React, { useState } from "react";

interface Usuario {
  id: number;
  nome: string;
  email: string;
  dataCadastro: string;
  perfil: string;
}

const usuarios: Usuario[] = [
  { id: 1, nome: "Lucas Fontoura Righi Fontes", email: "lucas.fontes@mds.gov.br.com", dataCadastro: "2024-05-01", perfil: "Administrador" },
  { id: 2, nome: "Maria Silva Alves", email: "maria@email.com", dataCadastro: "2024-04-15", perfil: "Equipe Empreendedorismo" },
  { id: 3, nome: "João Souza da Silva", email: "joao@email.com", dataCadastro: "2024-03-20", perfil: "Administrador" },
  { id: 4, nome: "Ana Costa Santos", email: "ana@email.com", dataCadastro: "2024-02-10", perfil: "Equipe Empreendedorismo" },
  { id: 5, nome: "Pedro Oliveira Lima", email: "pedro@email.com", dataCadastro: "2024-01-05", perfil: "Administrador" },
];

const columns: ColumnDef<Usuario>[] = [
  {
    accessorKey: "nome",
    header: "Nome",
    size: 180,
    cell: ({ getValue }) => <span style={{ display: 'inline-block', minWidth: 140 }}>{getValue() as string}</span>,
  },
  {
    accessorKey: "email",
    header: "Email",
    size: 170,
    cell: ({ getValue }) => <span style={{ display: 'inline-block', minWidth: 120 }}>{getValue() as string}</span>,
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
    accessorKey: "perfil",
    header: "Perfil",
    size: 100,
    cell: ({ getValue }) => <span style={{ display: 'inline-block', minWidth: 70 }}>{getValue() as string}</span>,
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
          <DropdownMenuItem>Redefinir Senha</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export function Usuarios() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (usuarioData: Omit<Usuario, 'id' | 'dataCadastro'>) => {
    // TODO: Implementar lógica para salvar o usuário
    console.log("Dados do usuário para cadastro:", usuarioData);
    
    // Simular adição de usuário
    const novoUsuario: Usuario = {
      id: usuarios.length + 1,
      nome: usuarioData.nome,
      email: usuarioData.email,
      perfil: usuarioData.perfil,
      dataCadastro: new Date().toISOString().split('T')[0]
    };
    
    console.log("Novo usuário criado:", novoUsuario);
    
    // Aqui você pode adicionar a lógica para salvar no backend
    // await api.post('/usuarios', usuarioData);
    
    // Fechar modal
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "calc(var(--spacing) * 72)",
        "--header-height": "calc(var(--spacing) * 12)",
      } as React.CSSProperties}
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className={styles.usuariosContainer}>
          <div className={styles.mainContainer}>
            <div className={styles.contentContainer}>
              <h1 className={styles.title}>Gerenciamento</h1>
            </div>
            
            <Tabs defaultValue="usuarios" className={styles.tabsContainer}>
              <TabsList className={styles.tabsList}>
                <TabsTrigger value="usuarios">Usuários</TabsTrigger>
                <TabsTrigger value="entidades">Entidades</TabsTrigger>
              </TabsList>
              
              <TabsContent value="usuarios" className={styles.tabContent}>
                <DataTable<Usuario> data={usuarios} columns={columns} />
                
                {/* Botão flutuante para abrir popup */}
                <Button 
                  className={styles.fabButton}
                  size="icon"
                  onClick={() => setIsModalOpen(true)}
                >
                  <IconPlus className="h-6 w-6" />
                  <span className="sr-only">Adicionar novo usuário</span>
                </Button>
                
                {/* Componente de cadastro de usuário */}
                <CadastroUsuario
                  isOpen={isModalOpen}
                  onClose={handleCloseModal}
                  onSubmit={handleSubmit}
                  title="Cadastrar Novo Usuário"
                />
              </TabsContent>
              
              <TabsContent value="entidades" className={styles.tabContent}>
                <Entidades />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
