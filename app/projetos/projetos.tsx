"use client"

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { IconCircleCheckFilled, IconLoader, IconDotsVertical } from "@tabler/icons-react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { DataTable } from "@/components/data-table"
import { Badge } from "@/components/ui/badge"
import styles from "./projetos.module.css"
import data from "../dashboard/data.json"
import { Row } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import React from "react";

// Tipagem dos dados
interface Projeto {
  header: string;
  id: number;
  type: string;
  status: string;
  reviewer: string;
  target: string;
  limit: string;
}

const columns = [
  {
    id: "select",
    header: ({ table }: { table: any }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </div>
    ),
    cell: ({ row }: { row: any }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "header",
    header: "Nome do Projeto",
    cell: ({ row }: { row: Row<Projeto> }) => row.original.header,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }: { row: Row<Projeto> }) => (
      <Badge variant="outline" className="text-muted-foreground px-1.5">
        {row.original.status === "Done" ? (
          <IconCircleCheckFilled className="fill-green-500 dark:fill-green-400" />
        ) : (
          <IconLoader />
        )}
        {row.original.status}
      </Badge>
    ),
  },
  {
    accessorKey: "reviewer",
    header: "Responsável",
    cell: ({ row }: { row: Row<Projeto> }) => row.original.reviewer,
  },
  {
    accessorKey: "type",
    header: "Andamento",
    cell: ({ row }: { row: Row<Projeto> }) => row.original.type,
  },
  {
    id: "actions",
    header: "Ações",
    cell: () => (
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
          <DropdownMenuItem>Editar</DropdownMenuItem>
          <DropdownMenuItem>Excluir</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
]

export function Projetos() {
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
        <div className={styles.projetosContainer}>
          <div className={styles.mainContainer}>
            <div className={styles.contentContainer}>
              <h1 className={styles.title}>Projetos</h1>
            </div>
            <DataTable data={data} columns={columns} />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
