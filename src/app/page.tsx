'use client'

import {Button} from "@/components/ui/button";
import Link from "next/link";
import BlogCard from "@/components/blog-card-body";
import OverviewCard from "@/components/overview-card";

export default function HomePage() {
  return (
    <div className={`h-full overflow-auto
                    grid-rows-3
                    grid-cols-1
                    gap-4
                    p-4
                    `}>

      <div className="pt-0 py-4 md:pb-8 "
      >
        <div className="inline md:hidden text-3xl text-center">
          Crafting intuitive<br/>
          <span className="text-white dark:text-black font-light"> User Experiences</span>
          <br/>by balancing<br/>
          <span className={`text-white dark:text-black font-light`}>Design & Engineering</span>
        </div>

        <div className="hidden md:inline text-5xl">
          Crafting intuitive <span className="text-white dark:text-black font-light"> User Experiences</span>
          <br/>by balancing <span className={`text-white dark:text-black font-light`}>Design & Engineering</span>
        </div>

      </div>

      <div className="grid
                      grid-cols-1
                      md:grid-cols-[1fr_1fr_1fr]
                      lg:grid-cols-[1fr_2fr_1fr]
                      gap-8
                      "
      >

        <div className="sm:order-2 ">

          <div className="flex flex-col h-full">
            <div className="h-1/2">
              Hello, I'm Dominik Haas a Software Engineer with Game Design experience. <br/>
              I worked on desktop & web apps to complex multi-tier client-server-applications, to mobile-apps and 2D / 3D Games.
              In prototyping and high quality environments.
              I can take care of the full software lifecycle from design stage to deployment and lead a team in concerns of software engineering.
            </div>

            <div className="h-1/2">

{/*
              <Button asChild>
                <Link href="projects">All Projects</Link>
              </Button>
*/}

              <OverviewCard
              />

            </div>
          </div>
        </div>

        <div className="flex sm:order-1">
          <div className="mx-auto py-4 ">
{/*
relative h-[350px] w-[250px]
              className="hover:hidden z-10 h-[350px] w-[250px]
                         absolute
*/}
            <img
              className="z-10 h-[350px] w-[250px]
                         rounded-[125px]
                         border-1
                         border-white
                         dark:border-black
                         hover:border-black
                         transition-all
                         p-4
                         object-cover object-center"
              src="/images/dominikhaasartho_small.webp"
              alt="Portrait of Dominik Haas Artho" />

{/*
            <img
              className="z-0 h-[350px] w-[250px]
                         rounded-[125px]
                         absolute
                         object-cover object-center"
                 src="/images/dominikhaasartho_small_2.webp"
                 alt="Portrait of Dominik Haas Artho" />
*/}

          </div>

          <div>
          </div>
        </div>

        <div className="sm:order-3 ">
          <div className="flex flex-col h-full">
            <div className="h-1/2">
              <div>
              Side-Projects
              </div>
              <div>
              </div>
            </div>

            <div className="h-1/2">
              <div>
              Latest Blog Post
              </div>

{/*
              <Button asChild>
                <Link href="blog">All Blog Posts</Link>
              </Button>
*/}

              <BlogCard
                title="Bla bla"
                img=""
                description="some stuff"
                content="">

                <Button asChild className="shadow-md"
                        variant="outline"
                >
                  <Link href="blog">All Blog Posts</Link>
                </Button>

              </BlogCard>
            </div>
          </div>
        </div>
      </div>

      <div className="grid
                      grid-cols-1
                      md:grid-cols-[1fr_1fr_1fr]
                      "
      >
        <div>
          Crafting interactive digital experiences since 2005 with passion and

        </div>
        <div>
          About <br/>
          asdf<br/>
          asdf<br/>
          as<br/>
          fsa<br/>
          fd<br/>
          saf<br/>
          as<br/>
        </div>
        <div></div>
      </div>

    </div>
  );
}
