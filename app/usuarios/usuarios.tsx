"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { IconDotsVertical } from "@tabler/icons-react";
import styles from "./usuarios.module.css";
import { ColumnDef } from "@tanstack/react-table";

interface Usuario {
  id: number;
  nome: string;
  email: string;
  dataCadastro: string;
  perfil: string;
}

const usuarios: Usuario[] = [
  { id: 1, nome: "Lucas Fontoura Righi Fontes", email: "lucas@email.com", dataCadastro: "2024-05-01", perfil: "Administrador" },
  { id: 2, nome: "Maria Silva Alves", email: "maria@email.com", dataCadastro: "2024-04-15", perfil: "Usuário" },
  { id: 3, nome: "João Souza da Silva", email: "joao@email.com", dataCadastro: "2024-03-20", perfil: "Usuário" },
];

const columns: ColumnDef<Usuario>[] = [
  {
    accessorKey: "nome",
    header: "Nome", 
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "dataCadastro",
    header: "Data Cadastro",
    cell: ({ getValue }) => {
      const data = new Date(getValue() as string);
      return data.toLocaleDateString();
    },
  },
  {
    accessorKey: "perfil",
    header: "Perfil",
  },
  {
    id: "actions",
    header: "Ações",
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
              <h1 className={styles.title}>Usuários</h1>
            </div>
            <div className={styles.tableContainer}>
              <DataTable<Usuario> data={usuarios} columns={columns} pageSize={15} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
