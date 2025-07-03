"use client"

import * as React from "react"
import { type Icon } from "@tabler/icons-react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavSecondary({
  items,
  className = "",
  ...props
}: {
  items: {
    title: string
    url: string
    icon: Icon
    onClick?: () => void
  }[]
  className?: string
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <SidebarGroup {...props} className={`nav-secondary ${className}`} aria-label="Menu secundário">
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                {item.onClick ? (
                  <button
                    type="button"
                    onClick={item.onClick}
                    className="flex items-center gap-2 w-full text-left px-2 py-1.5 hover:bg-muted rounded-md transition"
                  >
                    {item.icon && <item.icon className="size-5" />}
                    <span className="ml-3 nav-secondary-text">{item.title}</span>
                  </button>
                ) : (
                  <a href={item.url} className="flex items-center gap-2 w-full text-left px-2 py-1.5 hover:bg-muted rounded-md transition">
                    {item.icon && <item.icon className="size-5" />}
                    <span className="ml-3 nav-secondary-text">{item.title}</span>
                  </a>
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
