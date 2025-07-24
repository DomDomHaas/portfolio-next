"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

import {NavProjects} from '@/components/nav-projects'
import {Project} from "@/../types/projectTypes";

type TheProjectSidebarProps = React.ComponentProps<typeof Sidebar> & {
  items: Project[]
  onSelectProject(title: string): void;
  children: React.ReactNode;
}

export function TheProjectSidebar({ items, onSelectProject, children, ...props }: TheProjectSidebarProps) {

  return (
    <Sidebar variant="inset"
             collapsible="icon"
             style={{position: "relative"}}
             {...props}
    >
      <SidebarHeader>
        {children}
      </SidebarHeader>

      <SidebarContent>
        <NavProjects items={items} onSelectProject={onSelectProject}/>
      </SidebarContent>

      <SidebarFooter>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}

