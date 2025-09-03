"use client"

import { ChevronRight } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
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

import {Project, ProjectItem} from "@/../types/projectTypes";
import {SidebarSearch} from "@/components/sidebar-search";
import {useState} from "react";

const subSelectItems = (items: Project[] | ProjectItem[] | undefined, text: string): (Project | ProjectItem)[] => {
  if (!items || !items.length) {
    return [];
  }

  const foundItems: (Project | ProjectItem)[] = items.filter((item) => item.title.toLowerCase().includes(text.toLowerCase()));

  items.forEach((item) => {
    if ('items' in item) {
      const project = item as Project;
      const subs = subSelectItems(project.items, text);
      if (subs.length > 0 && !foundItems.includes(item)) {
        foundItems.push(item);
      }
    }
  })

  return foundItems; // .sort((a,b) => a.title.localeCompare(b.title));
}

export function NavProjects(
  {
    projects,
    onSelectProject,
  }: {
    projects: Project[]
    onSelectProject(title: string): void;
}) {

  const [searchText, setSearchText] = useState<string>('');

  const assignSearchText = (text: string) => {
    setSearchText(text);
  }

  const selectProject = (title: string) => {
    onSelectProject(title)
  }

  return <SidebarGroup>
    <SidebarSearch onSearchChange={assignSearchText} />

{/*
    <SidebarGroupLabel className="mt-2">Projects</SidebarGroupLabel>
*/}
    <SidebarGroupLabel className="mt-2"></SidebarGroupLabel>

    <SidebarMenu>
      {
        subSelectItems(projects, searchText).map((item) => <Collapsible
          key={item.title}
          asChild
          className="group/collapsible"
        >

{/*
          defaultOpen={item.isActive}
*/}

          <SidebarMenuItem>

            <CollapsibleTrigger asChild>
              <SidebarMenuButton tooltip={item.title}
                                 className="cursor-pointer"
              >
                <span>{item.title}</span>
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuButton>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <SidebarMenuSub>
                {
                  ('items' in item) ?
                    subSelectItems(item?.items, searchText).map((subItem, index) => (
                      <SidebarMenuSubItem
                        key={`${subItem.title}_${index}`}
                        className={subItem.hidden ? 'hidden' : '' }
                      >
                        <SidebarMenuSubButton asChild
                                              className="cursor-pointer"
                        >
{/*
                          isActive={subItem.isActive}
*/}
                          <a onClick={() => selectProject(subItem.title)}>
                            <span>{subItem.title}</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))
                  : null
                }
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>)
      }
    </SidebarMenu>
  </SidebarGroup>
}
