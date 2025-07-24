import type { Metadata } from "next";
import {Anaheim, Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import TheNavigation, {NavEntry} from "@/components/the-navigation";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anaheim = Anaheim({
  variable: "--font-anaheim-sans",
  subsets: ["latin"],
});

const NavEntries : NavEntry[] = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'projects',
    href: '/projects'
  },
  {
    title: 'blog',
    href: '/blog'
  },
]


export const metadata: Metadata = {
  title: "Portfolio - Dominik Haas",
  description: "Professional work of Dominik Haas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
      className={`bg-slate-200 overflow-hidden ${geistSans.variable} ${geistMono.variable} antialiased`}
    >
{/*
      className={`${anaheim.variable} antialiased`}
*/}

{/*
min-h-screen p-8 pb-20 gap-16 sm:p-20
*/}

{/*
sm:grid-cols-1 sm:grid-rows-[1fr_6fr_1fr] sm:gap-0
*/}

    <div
      className="grid
                 grid-rows-[100px_10fr_1fr]
                 md:grid-rows-[136px_10fr_1fr]
                 sm:grid-cols-1
                 md:grid-cols-[1fr_10fr_1fr]
                 h-screen
                 font-[family-name:var(--font-geist-sans)]"
      style={{
        gridTemplateAreas: `
                ". nav ."
                ". main ."
                ". foot ."
              `
      }}
    >

{/*
*/}

      <header id="rootHead"
              className="bg-slate-300"
              style={{
                gridArea: 'nav',
              }}
      >
        <TheNavigation entries={NavEntries}/>
      </header>

      <main id="rootMain"
            className="
              overflow-auto
              mt-1
            "
            style={{
              gridArea: 'main',
            }}
      >
        {children}
      </main>

      <footer id="rootFoot"
              style={{
                gridArea: 'foot',
              }}
      >

      </footer>

    </div>
    </body>
    </html>
  );
}


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

