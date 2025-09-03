"use client"

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import {TheProjectSidebar} from "@/components/the-project-sidebar";

import {useEffect, useState} from "react";
import {loadProjects} from "@/app/projects/projectsApi";
import {Project, ProjectItem} from "../../../types/projectTypes";
import ProjectBody from "@/components/project-body";


const extractProjectTags = (projects: Project[]) => {
  const allTags: Map<string, number> = new Map<string, number>();

  if (!projects) {
    return allTags;
  }

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
  const [selectedProject, setSelectedProject] = useState<ProjectItem | undefined>(undefined)

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

  const filterProjects = () => {
/*
    if (selectedTags.length <= 0) {
      return projects;
    }
*/

    // let filtered: Project[] = [];


    for (let i = 0; i < selectedTags.length; i++) {
      const tag = selectedTags[i];

      projects.forEach((item) => {
        const projectItems = item.items;
        if (projectItems) {
          projectItems.forEach((proItem) => {
            proItem.hidden = proItem.tags.includes(tag);
          })
        }
      });

/*
      if (matches.length > 0) {
        filtered = [...filtered, ...matches];
      }
*/
    }

    // return filtered;
  }

  const toggleTagSelected = (toggleTag: string) => {
    setSelectedTags((prevTags) => {
      return prevTags.includes(toggleTag) ? prevTags.filter((t) => t !== toggleTag) : [...prevTags, toggleTag];
    });

    filterProjects();
  }

  const loadingProjects = () => projects?.length <= 0;
/*
  className="grid grid-rows-1 h-svh gap-4 grid-cols-1"
*/

  return (
    <div id="projectRoot"
         className="
          bg-transparent border-0
          min-h-0
          pt-4
          p-0
          h-full"
    >

    <SidebarProvider
      className="bg-transparent border-0 h-full">

{/*
      className="bg-slate-400 grid sm:grid-cols-1 md:grid-cols-[1fr_4fr] grid-rows-1 gap-0 auto-rows-auto">
*/}
      <TheProjectSidebar id="TheProjectSidebar"
                         projects={projects}
                         onSelectProject={(value) => selectProject(value)}
                         className="
                         overflow-hidden
                         bg-transparent border-0
                         shadow-none
                         p-0 h-full"
      >

{/*
        <TagSearch
          loading={loadingProjects()}
          projectTags={projectTags}
          selectedTags={selectedTags}
          onTagSelection={(value) => toggleTagSelected(value)}
        />
*/}


      </TheProjectSidebar>

      <SidebarInset
        id="TheSidebarInset"
        className="bg-transparent border-0"
      >

        <div className="h-full shrink-0">
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
