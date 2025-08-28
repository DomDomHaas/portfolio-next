'use client'

import {Button} from "@/components/ui/button";
import Link from "next/link";
import BlogCard from "@/components/blog-card-body";
import OverviewCard from "@/components/overview-card";
import MosaicOverviewCard from "@/components/mosaic-overview-card";
import {useEffect, useState} from "react";
import {Project, ProjectItem} from "../../types/projectTypes";
import {loadProjects} from "@/app/projects/projectsApi";
import {BlogPost} from "../../types/blogTypes";
import {loadPosts} from "@/app/blog/blogApi";
import ProfileImage from "@/components/profile-image";

const previews = [
  { title: 'bla', img: '/images/projects/EnviDat_Flyer.jpg'},
  { title: 'bli', img: '/images/projects/EnviDat_logo_128.png'},
  { title: 'blu', img: '/images/projects/EnviDat_Flyer.jpg'},
]


export default function HomePage() {

  const [previews, setPreviews] = useState<ProjectItem[]>([]);
  const [blogPreviews, setBlogPreviews] = useState<BlogPost[]>([]);

  // on mount
  useEffect(() => {
    loadProjects().then((projects) => {
      const enviDatProjects = projects[0].items;
      setPreviews(enviDatProjects.slice(0, 3));
    });

    loadPosts().then((posts) => {
      setBlogPreviews(posts.slice(0, 9));
    })
  }, []);


  return (
    <div className={`h-full
                    grid-rows-3
                    grid-cols-1
                    gap-4
                    p-4
                    `}>

      <div id="row-1"
           className="py-4 pt-0 "
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

      <div id="row-2"
           className="py-4 md:py-8">

        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/4 md:h-full">
              <ProfileImage/>
            </div>

            <div className="w-full mt-4 md:my-0 md:ml-8 md:mr-4 md:w-3/4">
              <div className="text-lg">Welcome and Thanks for the visit.</div>
              <div className="mt-2">
                I'm Dominik Haas an Application Engineer. 2005 I've started with my professional Software Engineering journey. Since then I love creating
                interactive, digital experiences. With a background in Game Design I have a eye for emotional design and design in general.
              </div>

              <div className="mt-4">
                <div className="text-lg">Work Experience</div>
                <div className="mt-2">
                I worked on desktop & web apps, complex multi-tier client-server-applications, mobile-apps and 2D / 3D
                Games.
                I take care of the full software lifecycle from design stage to deployment. I've lead teams as senior
                engineer in all concerns of
                software engineering and design.
                I enjoy rapid prototyping as much as working in high quality environments with solid architectures.
                </div>
              </div>

            </div>

          </div>

      </div>


      <div id="row-3"
           className="grid
                      grid-cols-1
                      md:grid-cols-[3fr_2fr]
                      gap-4
                      pb-4 md:pb-8
                      "
      >

        <div className="">

          <div className="flex flex-col h-full">

            <div className="">

              <OverviewCard
                title="Recent Projects"
                previewProjects={previews}
              >
              <Button asChild>
                <Link href="projects">View Projects</Link>
                </Button>
              </OverviewCard>

            </div>
          </div>
        </div>


        <div className="">
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
                blogPosts={blogPreviews}
              >
                <Button asChild>
                  <Link href="blog">Read Blog</Link>
                </Button>
              </MosaicOverviewCard>

            </div>
          </div>
        </div>
      </div>

{/*
      <div id="row-4"
           className="py-4">
        <div className="text-lg">Work Experience</div>
        I worked on desktop & web apps, complex multi-tier client-server-applications, mobile-apps and 2D / 3D Games.
        I take care of the full software lifecycle from design stage to deployment. I've lead teams as senior engineer in all concerns of
        software engineering and design.
        I enjoy rapid prototyping as much as working in high quality environments with solid architectures.
      </div>
*/}

    </div>
  );
}
