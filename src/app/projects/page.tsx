"use client"

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import {TheProjectSidebar} from "@/components/the-project-sidebar";

import {TagSearch} from "@/components/tag-search";
import {useEffect, useState} from "react";
import {loadProjects} from "@/app/projects/projectsApi";
import {Project, ProjectItem} from "../../../types/projectTypes";
import ProjectBody from "@/components/project-body";


const extractProjectTags = (projects: Project[]) => {
  if (!projects) {
    return []
  }

//  const allTags: string[] = [];
  const allTags: Map<string, number> = new Map<string, number>();

  projects.forEach(project => {
    if (project.items) {
      project.items.forEach((projectItem) => {
        for (let i = 0; i < projectItem.tags?.length; i++) {
          const tag = projectItem.tags[i];

          const tagCount = allTags.get(tag);
          if (tagCount) {
            allTags.set(tag, tagCount + 1);
          } else {
            allTags.set(tag, 1);
          }
        }
      })
    }

  })

  return allTags;
}

export default function ProjectsList() {

  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [selectedProject, setSelectedProject] = useState<ProjectItem>(null)

  // on mount
  useEffect(() => {
    loadProjects().then((projects) => setProjects(projects));
  }, []);

  useEffect(() => {
    if (projects.length > 0) {
      const autoSelectFirst = projects[0].items[0].title;
      selectProject(autoSelectFirst);
    }
  }, [projects]);

  const projectTags = extractProjectTags(projects);

  const selectProject = (projectItemTitle: string) => {
    projects.forEach((project) => {
      if (project.items) {
        for (const item of project.items) {
          if (item.title === projectItemTitle) {
            item.isActive = true;
            setSelectedProject(item);
          } else {
            item.isActive = false;
          }
        }
      }
    })
  }

  const toggleTagSelected = (toggleTag: string) => {
    setSelectedTags((prevTags) => {
      return prevTags.includes(toggleTag) ? prevTags.filter((t) => t !== toggleTag) : [...prevTags, toggleTag];
    });
  }

  const loadingProjects = () => projects?.length <= 0;
/*
  className="grid grid-rows-1 h-svh gap-4 grid-cols-1"
*/

  return (
    <div id="projectRoot"
         className="bg-transparent min-h-0 h-full"
    >

    <SidebarProvider
      className="bg-transparent h-full">

{/*
      className="bg-slate-400 grid sm:grid-cols-1 md:grid-cols-[1fr_4fr] grid-rows-1 gap-0 auto-rows-auto">
*/}
      <TheProjectSidebar id="TheProjectSidebar"
                         items={projects}
                         onSelectProject={(value) => selectProject(value)}
                         className="
                         bg-transparent overflow-hidden
                         rounded-bl-xl
                         p-0 h-full"
      >

        <TagSearch
          loading={loadingProjects()}
          projectTags={projectTags}
          selectedTags={selectedTags}
          onTagSelection={(value) => toggleTagSelected(value)}
        />


      </TheProjectSidebar>

      <SidebarInset
        id="TheSidebarInset"
        className="bg-slate-200/70"
      >

        <div className="bg-transparent h-full shrink-0">
          {
            selectedProject ? (
              <ProjectBody
                loading={loadingProjects()}
                projectItem={selectedProject}
              />
            ) : null
          }
        </div>

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
