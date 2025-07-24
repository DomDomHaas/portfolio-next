"use client"

import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {TheProjectSidebar} from "@/components/the-project-sidebar";

// import projectEntries from '@/content/projects/projects.json'
import {projectNavItems} from "@/components/projectNavItems";
import {TagSearch} from "@/components/tag-search";
import {useEffect, useState} from "react";
import {loadProjects} from "@/app/projects/projectsApi";
import {Project, ProjectItem} from "../../../types/projectTypes";
import ProjectBody from "@/components/project-body";
/*
import {Tag} from "../../../types/projectTypes";
*/


const extractProjectTags = (projects: Project[]) => {
  if (!projects) {
    return []
  }

  const allTags: string[] = [];

  projects.forEach(item => {
    item.items.forEach((projectItem) => {
      for (let i = 0; i < projectItem.tags?.length; i++) {
        const tag = projectItem.tags[i];
        if (!allTags.includes(tag)) {
          allTags.push(tag);
        }
      }
    })

  })

  return allTags;
}

export default function ProjectsList() {

  const [projects, setProjects] = useState<Project[]>([]);

  // on mount
  useEffect(() => {
    loadProjects().then((projectsJson) => setProjects(projectsJson));
  }, []);

  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [selectedProject, setSelectedProject] = useState<ProjectItem>(null)

  const projectTags = extractProjectTags(projects);

  const selectProject = (projectItemTitle: string) => {
    projects.forEach((project) => {
      for (const item of project.items) {
        if (item.title === projectItemTitle) {
          setSelectedProject(item);
          return;
        }
      }
    })
  }

  const toggleTagSelected = (toggleTag: string) => {
    setSelectedTags((prevTags) => {
      return prevTags.includes(toggleTag) ? prevTags.filter((t) => t !== toggleTag) : [...prevTags, toggleTag];
    });
  }

  return (
    <div id="projectRoot"
         className="grid grid-rows-1 h-full gap-4 grid-cols-1">

    <SidebarProvider
      className="bg-slate-400">

{/*
      className="bg-slate-400 grid sm:grid-cols-1 md:grid-cols-[1fr_4fr] grid-rows-1 gap-0 auto-rows-auto">
*/}
      <TheProjectSidebar items={projects}
                         onSelectProject={(value) => selectProject(value)}
      >
        <TagSearch
          projectTags={projectTags}
          selectedTags={selectedTags}
          onTagSelection={(value) => toggleTagSelected(value)}
        />

      </TheProjectSidebar>

      <SidebarInset>
        <div className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
{/*
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
*/}

          </div>
        </div>

        {
          selectedProject ? (
            <ProjectBody projectItem={selectedProject} />
          ) : null
        }


        {/*
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
          </div>
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
*/}

      </SidebarInset>
    </SidebarProvider>
    </div>
  );
}


/*
.main {  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
  ". .";
  grid-area: main;
}
*/
