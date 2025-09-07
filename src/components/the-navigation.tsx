"use client"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

import {Moon, Sun} from "lucide-react"
import {Button} from "@/components/ui/button";

export type NavEntry = {
  title: string,
  href: string,
  active: boolean,
}

export default function TheNavigation (
  {
    entries,
    isDark,
    onDarkToggle,
  }: {
    entries: NavEntry[],
    isDark: boolean,
    onDarkToggle(): void,
  }){

  return (
    <NavigationMenu
      id="HeaderNavigation"
      className="NavigationMenuRoot w-full max-w-full p-2">

      <NavigationMenuList className="NavigationMenuList">
        {
          entries.map((entry) => (
            <NavigationMenuItem key={entry.href}>

              <NavigationMenuLink href={entry.href}
                                  active={entry.active}
                                  className="font-normal text-lg"
              >
                {entry.title}
              </NavigationMenuLink>

            </NavigationMenuItem>
          ))
        }

        <Button aria-roledescription="button"
                onClick={onDarkToggle}
                variant="ghost"
                size="icon"
        >
          {
            isDark ? <Moon /> : <Sun />
          }
        </Button>

      </NavigationMenuList>
    </NavigationMenu>
)
}


