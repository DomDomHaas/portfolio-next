import { ProjectItem} from "../../types/projectTypes";
import {useEffect, useState} from "react";
import {loadProjectContent} from "@/app/projects/projectsApi";


export default function ProjectBody({
  projectItem
} : {
  projectItem: ProjectItem,
}) {

  const [isDark, setIsDark] = useState(true)
  const [html, setHtml] = useState<string | null>(null)

  // on mount
  useEffect(() => {
    const updateDark = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    }

    updateDark();

    const observer = new MutationObserver(updateDark)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    loadProjectContent(projectItem.content).then((renderedHtml: string) => setHtml(renderedHtml));
  }, [projectItem])

  return (
    <div className="grid grid-rows-[200px_auto] gap-0">
      <div className="bg-slate-700" />

{/*
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        {
          projectItem.images.map((image, i) => (
            <div className="bg-muted/50 aspect-video rounded-xl"
                 key={i}
            >
              <img src={image} alt={image}/>
            </div>
          ))
        }

      </div>
*/}

{/*
      <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min">
        {projectItem.title}
      </div>
*/}

      <div className="rounded bg-slate-500 p-2">
        <article className={`markdown-body  ${isDark ? 'markdown-body-dark' : 'markdown-body-light'}`}
                 dangerouslySetInnerHTML={{__html: html || ''}}/>
      </div>
    </div>
  )
}
