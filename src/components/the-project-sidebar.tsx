import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

import {NavProjects} from '@/components/nav-projects'
import {ProjectGroupItem} from "@/components/projectNavItems";

type TheProjectSidebarProps = React.ComponentProps<typeof Sidebar> & {
  items: ProjectGroupItem[]
}

export function TheProjectSidebar({ items, ...props }: TheProjectSidebarProps) {

  return (
    <Sidebar variant="inset"
             collapsible="icon"
             style={{position: "relative"}}
             {...props}
    >
      <SidebarHeader>
      </SidebarHeader>
      <SidebarContent>
        <NavProjects items={items} />
      </SidebarContent>
      <SidebarFooter>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

