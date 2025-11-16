'use client'

import {useEffect, useState} from "react";
import BlogCard from "@/components/blog-card";
import BlogHeroCard from "@/components/blog-hero-card";
import {BlogPost} from "@/../types/blogTypes";
import {loadPosts} from "@/app/blog/blogApi";
import { useParams, useRouter } from "next/navigation";
import { loadProjects } from "../projects/projectsApi";
import { Project, ProjectItem } from "../../../types/projectTypes";




export default function ProjectList() {

  // const router = useRouter();

  // const params = useParams();
  // const preSelectedProjectItem = params.id as string;

  const [projects, setProjects] = useState<Project[]>([]);

  // on mount
  useEffect(() => {
    loadProjects().then((projects) => {
      setProjects(projects);
    });
  }, []);

  const firstProjectItem = projects[0]?.items[0] || {};
  const remainingProjects = projects; // ? projects.slice(1, projects.length) : [];

  return (
    <div className="grid
                    grid-rows-[200px_1fr]
                    md:grid-rows-[250px_1fr]
                    lg:grid-rows-[300px_1fr]
                    gap-8
                    grid-cols-1
                    h-full
                    p-4
                    pb-8
                    overflow-auto
                    "
         style={{
           scrollbarWidth: 'thin',
           scrollbarColor: 'white transparent',
         }}
    >
      {/* <div className="w-full">
        <BlogHeroCard
          title={firstProjectItem.title}
          description={firstProjectItem.tldr || ''}
          img={firstProjectItem.hero || ''}
          content={firstProjectItem.content}
        />
      </div> */}

      <div className="min-h-0">

      {
        remainingProjects.map((project, index) => (

          <div key={index}
                className="flex flex-col">

            <div className="">{ project.title }</div>

            <div className="flex flex-row">

            {/* {
              project.items.map((projectItem, itemIndex) => 

                // itemIndex === 0 ? console.log('0') : console.log('1')

                // <BlogCard
                //   id={`${projectItem.title}_${index}_${itemIndex}`}
                //   key={`${projectItem.title}_${index}_${itemIndex}`}
                //     title={`${projectItem.title}`}
                //   description={projectItem.tldr || ''}
                //   img={projectItem.hero || ''}
                //   content={projectItem.content}
                // />                    
              )

            } */}
              
            </div>
          </div>

          // {
          //   project.items.map((projectItem, itemIndex) => (
          //     <BlogCard
          //       id={`${projectItem.title}_${index}_${itemIndex}`}
          //       key={`${projectItem.title}_${index}_${itemIndex}`}
          //       title={`${project.title} - ${projectItem.title}`}
          //       description={projectItem.tldr || ''}
          //       img={projectItem.hero || ''}
          //       content={projectItem.content}
          //     />
          //   ))
          // }              
        ))
      }

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-50">
          {
            remainingProjects.map((project, index) => (
              project.items.map((projectItem, itemIndex) => (
                <BlogCard
                  id={`${projectItem.title}_${index}_${itemIndex}`}
                  key={`${projectItem.title}_${index}_${itemIndex}`}
                  title={`${project.title} - ${projectItem.title}`}
                  description={projectItem.tldr || ''}
                  img={projectItem.hero || ''}
                  content={projectItem.content}
                />
              ))
            ))
          }
        </div> */}

      </div>

    </div>
  )
}
