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
      className="NavigationMenuRoot w-full max-w-full px-2">

      <NavigationMenuList className="NavigationMenuList">
        {
          entries.map((entry) => (
            <NavigationMenuItem key={entry.href}>

              <NavigationMenuLink
                href={entry.href}
                className={`m-2 my-2 p-2 py-1
                  dark:hover:bg-slate-800/50 hover:bg-slate-300/50
                  ${entry.active ? 'dark:bg-slate-800 bg-slate-300' : ''}
                  font-normal text-lg
                `}
              >
                {entry.title}
              </NavigationMenuLink>

            </NavigationMenuItem>
          ))
        }

        <Button aria-roledescription="button"
                onClick={onDarkToggle}
                className="dark:hover:bg-slate-800/50 hover:bg-slate-300/50"
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


