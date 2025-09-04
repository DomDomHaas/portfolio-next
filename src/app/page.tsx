'use client'

import MosaicOverviewCard from "@/components/mosaic-overview-card";
import {useEffect, useState} from "react";
import {loadProjects} from "@/app/projects/projectsApi";
import {loadPosts} from "@/app/blog/blogApi";
import ProfileImage from "@/components/profile-image";
import ButtonCard from "@/components/button-card";
import { PreviewItem } from "../../types/blogTypes";
import {ProjectItem} from "../../types/projectTypes";

const previewTitles = [
  'EnviDat Frontend',
  'Data Visualization at WSL',
  'DERU',
];


export default function HomePage() {

  const [previews, setPreviews] = useState<PreviewItem[]>([]);
  const [blogPreviews, setBlogPreviews] = useState<PreviewItem[]>([]);

  // on mount
  useEffect(() => {
    loadProjects().then((projects) => {

      const previews : PreviewItem[] = [];

      projects.forEach((pro) => {
        pro.items.forEach((pItem: ProjectItem) => {
          if (previewTitles.includes(pItem.title)) {
            previews.push({
              title: pItem.title,
              img: pItem.preview || '',
              content: `/projects/${pItem.content}`,
            });
          }
        })
      })

      setPreviews(previews.reverse());
    });

    loadPosts().then((posts) => {
      setBlogPreviews(posts.slice(0, 3).map((post) => {
        return {
          title: post.title,
          img: post.img,
          content: `/blog/${post.content}`,
        };
      }));
    })
  }, []);


  return (
    <div className="h-full p-4">

      <div id="row-1"
           className="py-4 md:p-4 md:pb-8 "
      >
        <div className="inline md:hidden text-3xl text-center">
          Crafting intuitive<br/>
          <span className="text-white dark:text-black font-light">Digital Experiences</span>
          <br/>by balancing<br/>
          <span className={`text-white dark:text-black font-light`}>Design & Engineering</span>
        </div>

        <div className="hidden md:inline text-5xl">
          Crafting intuitive <span className="text-white dark:text-black font-light"> Digital Experiences</span>
          <br/>by balancing <span className={`text-white dark:text-black font-light`}>Design & Engineering</span>
        </div>

      </div>

      <div id="row-2"
           className="py-4 md:p-4 md:pb-8">

        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/4 md:h-full">
              <ProfileImage/>
            </div>

            <div className="w-full mt-8 md:mt-0 md:my-0 md:ml-8 md:mr-4 md:w-3/4">
              <div className="text-xl">Welcome and thanks for the visit</div>
              <div className="mt-2 text-lg">
                I'm Dominik Haas-Artho an Application Engineer. 2005 I've started with my professional Software Engineering journey. Since then I love creating
                interactive, digital experiences. With a background in Game Design I have a eye for emotional design and design in general.
              </div>

              <div className="mt-4">
                <div className="text-xl">Work Experience</div>
                <div className="mt-2 text-lg">
                I worked on desktop & web apps, complex multi-tier client-server-applications, mobile-apps and 2D / 3D
                Games.
                I take care of the full software lifecycle from design stage to deployment. I've lead teams as senior
                engineer in all concerns of
                software engineering and design.
                I enjoy rapid prototyping as much as working on high quality, solid architectures.
                </div>
              </div>

            </div>

          </div>

      </div>


      <div id="row-3"
           className="grid
                      grid-cols-1
                      md:grid-cols-[2fr_2fr]
                      gap-8
                      md:gap-16
                      py-4 md:p-4 md:pb-8
                      "
      >

        <div className="">

          <div className="flex flex-col h-full">

            <div className="">

              <MosaicOverviewCard
                title="Projects Highlights"
                previewItems={previews}
              >
                <ButtonCard text="View" url="/projects" />
              </MosaicOverviewCard>

            </div>
          </div>
        </div>


        <div className="">
          <div className="flex flex-col h-full">

            <div className="h-1/2">

              <MosaicOverviewCard
                title="Recent Blog Posts"
                previewItems={blogPreviews}
              >
                <ButtonCard text="Read" url="/blog" />
              </MosaicOverviewCard>

            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
