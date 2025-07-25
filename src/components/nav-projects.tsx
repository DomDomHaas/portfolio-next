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

import {Project, ProjectGroupItem, ProjectItem} from "@/../types/projectTypes";
import {SidebarSearch} from "@/components/sidebar-search";
import {useState} from "react";
import {log} from "next/dist/server/typescript/utils";
import Link from "next/link";

const subSelectItems = (items: ProjectGroupItem[] | ProjectItem[] | undefined, text: string): ProjectGroupItem[] | ProjectItem[] => {
  if (!items || !items.length) {
    return [];
  }

  const foundItems = items.filter((item) => item.title.toLowerCase().includes(text.toLowerCase()));

  items.forEach((item) => {
    const subs = subSelectItems(item.items, text);
    if (subs.length > 0 && !foundItems.includes(item)) {
      foundItems.push(item);
    }
  })

  return foundItems; // .sort((a,b) => a.title.localeCompare(b.title));
}

export function NavProjects(
  {
    items,
    onSelectProject,
  }: {
    items: Project[]
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

    <SidebarGroupLabel>Projects</SidebarGroupLabel>
    <SidebarMenu>
      {
        subSelectItems(items, searchText).map((item) => <Collapsible
          key={item.title}
          asChild
          defaultOpen={item.isActive}
          className="group/collapsible"
        >
          <SidebarMenuItem>

            <CollapsibleTrigger asChild>
              <SidebarMenuButton tooltip={item.title}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuButton>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <SidebarMenuSub>
                {
                  subSelectItems(item?.items, searchText).map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild >
                        <a href={subItem.url} onClick={() => selectProject(subItem.title)}>
                          <span >{subItem.title}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))
                }
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>)
      }
    </SidebarMenu>
  </SidebarGroup>
}
