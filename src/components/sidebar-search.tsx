import {Search, Sidebar} from "lucide-react"

import { Label } from "@/components/ui/label"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "@/components/ui/sidebar"

type SidebarSearchProps = React.ComponentProps<typeof Sidebar> & {
  onSearchChange(value: string): void;
}

export function SidebarSearch({ onSearchChange, ...props }: SidebarSearchProps) {
  return (
    // @ts-ignore
    <form {...props}>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <SidebarInput
            id="search"
            placeholder="Search Projects..."
            className="pl-8"
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  )
}
