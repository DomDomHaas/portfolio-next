"use client"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

import {Moon, Sun} from "lucide-react"
import {Button} from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

export type NavEntry = {
  title: string,
  href: string,
  active: boolean,
}

const navEntries : NavEntry[] = [
  {
    title: 'Projects',
    href: '/projects',
    active: false
  },
/*
  {
    title: 'Skills',
    href: '/skills'
  },
*/
  {
    title: 'Blog',
    href: '/blog',
    active: false
  },
]


export default function TheNavigation (
  {
    isDark,
    onDarkToggle,
  }: {
    isDark: boolean,
    onDarkToggle(): void,
  }){

  const router = useRouter();
  const path = usePathname(); // window?.location.pathname || '/';

  const navigateToHome = () => {
    router.push('/');
  }

  return (
    <div className="flex flex-row">
      <div className="flex-grow justify-self-start">
        <div className="m-2 mr-0 text-md sm:text-lg md:text-2xl font-normal">
          <a onClick={navigateToHome}
            className="
              border-b-slate-600 dark:border-b-accent
              dark:hover:bg-slate-800/50 hover:bg-slate-300/50
              mx-0 my-4 p-2 py-1 rounded-md
              cursor-pointer
            ">Dominik Haas</a>
        </div>
      </div>

      <div className="flex-shrink justify-self-end">
        <NavigationMenu
          id="HeaderNavigation"
          className="NavigationMenuRoot w-full max-w-full pr-2">

          <NavigationMenuList className="NavigationMenuList">
            {
              navEntries.map((entry) => (
                <NavigationMenuItem key={entry.href}>

                  <NavigationMenuLink
                    href={entry.href}
                    className={`m-2 my-2 p-2 py-1
                      dark:hover:bg-slate-800/50 hover:bg-slate-300/50
                      font-normal text-md sm:text-lg
                      ${path !== "/" && path.includes(entry.href) ? 'dark:bg-slate-800 bg-slate-300' : ''}
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
      </div>
    </div>
  )

}


