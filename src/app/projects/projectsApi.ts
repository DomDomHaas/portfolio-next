import {marked} from "marked";
import {Project} from "../../../types/projectTypes";

export const loadProjects = async () : Promise<Project[]> => {
  const response = await fetch(`/content/projects/projects.json`);
  const json = await response.json();
  return json.projects;
}

export const loadProjectContent = async (projectId: string) => {
  const response = await fetch(`/content/projects/${projectId}.md`);
  const markdown = await response.text();
  return marked(markdown);
}

/*
export const loadPostHeadImg = async (postId: string) => {
  const posts = await loadProjects();

  const currentPost = posts.filter((post) => post.content === postId)[0];

  return currentPost?.img;
}
*/
