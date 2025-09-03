'use client'

import {Raleway} from "next/font/google";
import "./globals.css";
import '@/app/github-markdown.css';
import TheNavigation, {NavEntry} from "@/components/the-navigation";
import Link from "next/link";


const raleway = Raleway({
  weight: 'variable',
  variable: "--font-raleway",
  subsets: ["latin"],
  preload: true,
});



const NavEntries : NavEntry[] = [
  {
    title: 'Projects',
    href: '/projects'
  },
/*
  {
    title: 'Skills',
    href: '/skills'
  },
*/
  {
    title: 'Blog',
    href: '/blog'
  },
]


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
          className=""
    >
    <body
      className={`
        bg-[url('/images/deru_triangle_small.webp')]
        bg-center bg-repeat
        bg-cover md:bg-contain
        backdrop-blur-3xl
        h-screen overflow-hidden
        ${raleway.className}
        antialiased`}
    >

    <div id="rootGrid"
      className="grid
                 grid-rows-[64px_auto_32px]
                 grid-cols-1
                 h-screen
                 font-[family-name:var(--font-geist-sans)]
                 bg-slate-100/50 dark:bg-slate-600/50
                 p-2
                 md:pt-2
                 "
    >

      <header
        id="rootHead"
        className="
          bg-slate-300/40
          dark:bg-slate-500/40
          mx-auto
          w-full
          lg:w-[1280px]
          rounded-t-xl
          border-0
          noise
        "
      >
        <div className="flex flex-row">
          <div className="flex-grow justify-self-start">
            <div className="p-4 text-lg md:text-2xl font-normal"><Link href="/">Dominik Haas</Link></div>
          </div>

          <div className="flex-shrink justify-self-end">
            <TheNavigation entries={NavEntries}/>
          </div>
        </div>
      </header>

      <main
        id="rootMain"
        className="
          h-full
          overflow-auto
          rounded-b-xl
          mx-auto
          w-full
          lg:w-[1280px]
          bg-slate-300/40
          dark:bg-slate-500/40
          noise
        "
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: 'white transparent',
        }}
      >
        {children}
      </main>

      <footer
        id="rootFoot"
      >

      </footer>

    </div>
    </body>
    </html>
  );
}


/*
.body {
  background-color: #21242d;
}
*/

/*
.container {  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  grid-template-rows: 1fr 6fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
  ". . ."
  ". main ."
  ". . .";
}
*/

