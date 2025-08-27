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
import {cn} from "@/lib/utils";

type TheProjectSidebarProps = React.ComponentProps<typeof Sidebar> & {
  items: Project[]
  onSelectProject(title: string): void;
  className: string;
  children: React.ReactNode;
}

export function TheProjectSidebar({ items, onSelectProject, className, children, ...props }: TheProjectSidebarProps) {

  return (
    <Sidebar variant="inset"
             collapsible="icon"
             className={cn(
               className
             )}
             style={{position: "relative"}}
             {...props}
    >

      <SidebarHeader className="p-4 pt-2">
        {`A list of projects I've worked on, some of them are still on-going.`}
      </SidebarHeader>


      <SidebarContent
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: 'white transparent',
        }}
      >
        <NavProjects items={items} onSelectProject={onSelectProject}/>
      </SidebarContent>

      <SidebarFooter>
        {children}
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}

