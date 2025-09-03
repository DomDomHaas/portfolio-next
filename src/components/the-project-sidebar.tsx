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
  projects: Project[]
  onSelectProject(title: string): void;
  className: string;
  children?: React.ReactNode;
}

export function TheProjectSidebar({ projects, onSelectProject, className, children, ...props }: TheProjectSidebarProps) {

  return (
    <Sidebar variant="inset"
             collapsible="icon"
             className={cn(className)}
             style={{position: "relative"}}
             {...props}
    >



{/*
      <SidebarHeader className="
                         bg-slate-100
                         md:bg-transparent
                          p-4 pt-2">
        Projects
      </SidebarHeader>
*/}


      <SidebarContent
        className="mt-1
                   bg-slate-100
                   md:bg-transparent
                   shadow-none
                  "
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: 'white transparent',
        }}
      >
        <NavProjects projects={projects}
                     onSelectProject={onSelectProject}/>

      </SidebarContent>

      <SidebarFooter
        className="bg-slate-100
                   md:bg-transparent
                  "
      >
        {children}
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}

