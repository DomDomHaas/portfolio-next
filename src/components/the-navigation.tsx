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
    <div>

      <NavigationMenu
        id="HeaderNavigation"
        className="NavigationMenuRoot w-full max-w-full">

        <NavigationMenuList className="NavigationMenuList">
          {
            entries.map((entry) => (
              <NavigationMenuItem key={entry.href}>

                <NavigationMenuLink href={entry.href}
                                    className="font-medium text-lg"
                >
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
            { isDark ? ( <Moon /> ) : ( <Sun /> )}
          </Button>

        </NavigationMenuList>
      </NavigationMenu>
    </div>
)
}


