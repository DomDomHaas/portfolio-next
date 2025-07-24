"use client"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

import {Moon, Sun} from "lucide-react"
import {useState} from "react";
import {Button} from "@/components/ui/button";

export type NavEntry = {
  title: string,
  href: string,
}

export default function TheNavigation ({ entries }: { entries: NavEntry[] }){

  const [isDark, setIsDark] = useState(true)

  const toggleIsDark = () => {
    document.body.classList.toggle("dark");
    setIsDark(!isDark);
  }

  return (
    <div className="grid
                    grid-rows-[64px_36px]
                    md:grid-rows-[100px_36px]
        ">
      <div id="HeaderTitle">
        <h1>Portfolio - Dominik Haas</h1>
      </div>

      <NavigationMenu id="HeaderNavigation" className="NavigationMenuRoot bg-slate-400 w-full max-w-full">
        <NavigationMenuList className="NavigationMenuList">
          {
            entries.map((entry) => (
              <NavigationMenuItem  key={entry.href}>
                <NavigationMenuLink href={entry.href}>
                  {entry.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))
          }

          <Button aria-roledescription="button"
                  onClick={toggleIsDark}
                  variant="ghost"
                  size="icon"
          >
            { isDark ? (
              <Moon />
                ) : (
              <Sun />
            )}
          </Button>

        </NavigationMenuList>
      </NavigationMenu>
    </div>
)
}


