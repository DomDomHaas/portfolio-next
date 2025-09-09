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

import {Project, ProjectItem} from "@/../types/projectTypes";
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
    onSelectProjectItem,
  }: {
    projects: Project[];
    onSelectProject(title: string): void;
    onSelectProjectItem(title: string): void;
}) {

  const [searchText, setSearchText] = useState<string>('');

  const assignSearchText = (text: string) => {
    setSearchText(text);
  }

  const selectProject = (title: string) => {
    onSelectProject(title)
  }

  return <SidebarGroup>

    <SidebarGroupLabel className="font-normal text-md ">Projects Highlights</SidebarGroupLabel>

    <SidebarMenu>
      {
        subSelectItems(projects, searchText).map((item, index) =>
          <SidebarMenuItem
            key={`${item.title}_${index}`}
          >

              <SidebarMenuButton tooltip={item.title}
                                 className="cursor-pointer"
              >
                <span>{item.title}</span>
              </SidebarMenuButton>
              <SidebarMenuSub>
                {
                  ('items' in item) ?
                    subSelectItems(item?.items, searchText).map((subItem, index) => (
                      <SidebarMenuSubItem
                        key={`${subItem.title}_${index}`}
                      >
                        <SidebarMenuSubButton asChild
                                              className="cursor-pointer"
                                              onClick={() => onSelectProjectItem(subItem.title)}
                        >
{/*
                          isActive={subItem.isActive}
*/}
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
