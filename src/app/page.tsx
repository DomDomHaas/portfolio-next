'use client'

import {Button} from "@/components/ui/button";
import Link from "next/link";
import BlogCard from "@/components/blog-card-body";
import OverviewCard from "@/components/overview-card";
import MosaicOverviewCard from "@/components/mosaic-overview-card";

export default function HomePage() {
  return (
    <div className={`h-full overflow-auto
                    grid-rows-4
                    grid-cols-1
                    gap-4
                    p-4
                    `}>

      <div className="py-4 pt-0 "
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

      <div className="py-4 md:pb-8">
        <div className="text-lg">Hello and Welcome. I'm Dominik Haas an Application Engineer. </div>
        <div>
        2005 I've started with my professional Software Engineering journey. Since then I love crating interactive, digital experiences. <br/>
        With a background in Game Design I have a eye for emotional design and design in general.
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

            <div className="">

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
              className="z-10 h-[325px] w-[250px]
                         rounded-[125px]
                         border-1
                         border-white
                         dark:border-black
                         hover:border-black
                         transition-all
                         p-4
                         object-cover object-center"
              src="/images/dominikhaasartho_small.webp"
              alt="Portrait of Dominik Haas Artho"/>

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
{/*
            <div className="h-1/2">
              <div>
                Side-Projects
              </div>
              <div>
              </div>
            </div>
*/}

            <div className="h-1/2">

              {/*
              <Button asChild>
                <Link href="blog">All Blog Posts</Link>
              </Button>
*/}

              <MosaicOverviewCard
                title="Latest Blog Posts"
              />

{/*
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
*/}
            </div>
          </div>
        </div>
      </div>

      <div className="py-4">
        <div className="text-lg">Work Experience</div>
        I worked on desktop & web apps, complex multi-tier client-server-applications, mobile-apps and 2D / 3D Games.
        I take care of the full software lifecycle from design stage to deployment. I've lead teams as senior engineer in all concerns of
        software engineering and design.
        I enjoy rapid prototyping as much as working in high quality environments with solid architectures.
      </div>

{/*
      <div className="grid
                      grid-cols-1
                      md:grid-cols-[1fr_1fr_1fr]
                      "
      >
        <div>
          Crafting interactive, digital experiences since 2005 with passion and joy.

        </div>
        <div>
          About <br/>
          asdf<br/>
          as<br/>
        </div>
        <div></div>
      </div>
*/}

    </div>
  );
}
