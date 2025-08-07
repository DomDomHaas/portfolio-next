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
    title: 'Projects',
    href: '/projects'
  },
  {
    title: 'Blog',
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
    <html lang="en"
          className=""
    >
    <body
      className={`
        bg-[url('/images/bg.jpg')] bg-cover bg-center bg-no-repeat
        backdrop-blur-xl
        h-screen overflow-hidden
        ${geistSans.variable} ${geistMono.variable} antialiased`}
    >
{/*

      className={`${anaheim.variable} antialiased`}
min-h-screen p-8 pb-20 gap-16 sm:p-20
sm:grid-cols-1 sm:grid-rows-[1fr_6fr_1fr] sm:gap-0
*/}

    <div id="rootGrid"
      className="grid
                 grid-rows-[100px_10fr_1fr]
                 md:grid-rows-[136px_10fr_1fr]
                 grid-cols-1
                 lg:grid-cols-[1fr_14fr_1fr]
                 lg:[grid-template-areas:'.nav.''.main.''.foot.']
                 h-screen
                 font-[family-name:var(--font-geist-sans)]
                 bg-slate-100/40 dark:bg-slate-600/40
                 pt-2
                 "
    >

      <header
        id="rootHead"
        className="
          bg-slate-300/40
          dark:bg-slate-500/40
          lg:[grid-area:nav]
          rounded-t-md
          noise
        "
      >
        <TheNavigation entries={NavEntries}/>
      </header>

      <main
        id="rootMain"
        className="
          h-full
          overflow-hidden
          rounded-b-md
          lg:[grid-area:main]
          bg-slate-300/40
          dark:bg-slate-500/40
          noise
        "
        style={{ scrollbarWidth: 'thin' }}
      >
        {children}
      </main>

      <footer
        id="rootFoot"
        className="lg:[grid-area:foot]
        "
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

