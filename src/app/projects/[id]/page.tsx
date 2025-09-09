import ProjectsList from "@/app/projects/page";
import projectJSON from "@/../public/content/projects/projects.json";

export async function generateStaticParams() {
  const projects = projectJSON.projects;

  const ids: { id: string }[] = [];

  projects.forEach((pro) => {
    pro.items.forEach((item) => {
      ids.push({
        id: item.content || '',
      })
    })
  })
 
  return ids;
}

export default function SpecificProject() {
  return <ProjectsList />
}
