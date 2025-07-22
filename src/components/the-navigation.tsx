import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export type NavEntry = {
  title: string,
  href: string,
}

export default function TheNavigation ({ entries }: { entries: NavEntry[] }){
  return (
    <NavigationMenu className="NavigationMenuRoot">
      <NavigationMenuList className="NavigationMenuList">
        {entries.map((entry) => (
          <NavigationMenuItem  key={entry.href}>
            <NavigationMenuLink href={entry.href}>
              {entry.title}
            </NavigationMenuLink>
          </NavigationMenuItem>
          ))}
      </NavigationMenuList>
    </NavigationMenu>
)
}


