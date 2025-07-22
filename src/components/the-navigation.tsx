import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export type NavEntry = {
  title: string,
  href: string,
}

export default function TheNavigation ({ entries }: { entries: NavEntry[] }){
  return (
    <div className="grid grid-rows-[100px_auto]">
      <div id="HeaderTitle">
        <h1>Porfolio - Dominik Haas</h1>
      </div>

      <NavigationMenu id="HeaderNavigation" className="NavigationMenuRoot bg-slate-400 w-full max-w-full">
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
    </div>
)
}


