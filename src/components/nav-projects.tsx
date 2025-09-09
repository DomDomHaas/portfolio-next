"use client"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

import {Project} from "@/../types/projectTypes";


export function NavProjects(
  {
    projects,
    onSelectProject,
    onSelectProjectItem,
  }: {
    projects: Project[];
    onSelectProject(title: string): void;
    onSelectProjectItem(title: string): void;
}) {


  return <SidebarGroup>

    <SidebarGroupLabel className="font-normal text-md ">Projects Highlights</SidebarGroupLabel>

    <SidebarMenu>
      {
        projects.map((item, index) =>
          <SidebarMenuItem
            key={`${item.title}_${index}`}
          >

              <SidebarMenuButton tooltip={item.title}
                                 className="cursor-pointer"
                                 onClick={() => onSelectProject(item.title)}
              >
                <span>{item.title}</span>
              </SidebarMenuButton>
              <SidebarMenuSub>
                {
                  ('items' in item) ?
                    item?.items.map((subItem, index) => (
                      <SidebarMenuSubItem
                        key={`${subItem.title}_${index}`}
                      >
                        <SidebarMenuSubButton asChild
                                              className={`cursor-pointer
                                                ${subItem.isActive ? 'dark:bg-slate-800/50 bg-slate-300/50' : ''}
                                              `}
                                              onClick={() => onSelectProjectItem(subItem.title)}
                        >
                          <a >
                            {subItem.title}
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))
                  : null
                }
              </SidebarMenuSub>
          </SidebarMenuItem>
        )
      }
    </SidebarMenu>
  </SidebarGroup>
}
