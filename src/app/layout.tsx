import type { Metadata } from "next";
import {Raleway} from "next/font/google";
import "./globals.css";
import TheNavigation, {NavEntry} from "@/components/the-navigation";


const raleway = Raleway({
  weight: 'variable',
  variable: "--font-raleway",
  subsets: ["latin"],
  preload: true,
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
        backdrop-blur-3xl
        h-screen overflow-hidden
        ${raleway.className}
        antialiased`}
    >
{/*

      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
min-h-screen p-8 pb-20 gap-16 sm:p-20
sm:grid-cols-1 sm:grid-rows-[1fr_6fr_1fr] sm:gap-0
*/}

    <div id="rootGrid"
      className="grid
                 grid-rows-[64px_10fr_64px]
                 grid-cols-1
                 lg:grid-cols-[1fr_14fr_1fr]
                 xl:grid-cols-[3fr_12fr_3fr]
                 lg:[grid-template-areas:'.nav.''.main.''.foot.']
                 xl:[grid-template-areas:'.nav.''.main.''.foot.']
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
          lg:[grid-area:nav]
          rounded-t-md
          border-b-1
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
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: 'white black',
        }}
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

