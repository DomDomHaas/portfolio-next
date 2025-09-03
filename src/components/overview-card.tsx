import { Card } from "@/components/ui/card"
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ProjectItem} from "../../types/projectTypes";



const defaultImgClassName = "rounded-t-xl max-h-full w-full object-cover";

export default function OverviewCard({
  title,
  previewProjects,
  children,
} : {
  title: string,
  previewProjects: ProjectItem[],
  children: React.ReactNode,
}) {
  return(
    <Card id="OverviewCard"
          className="grid grid-rows-[150px_2fr]
                     gap-4 p-0
                     bg-slate-200/50
                     border-0
                     dark:bg-slate-500/50
                     rounded-xl
          ">

      <div className="relative overflow-hidden">
        {
          previewProjects.map((entry, index) => (
            <Link key={`${entry.title}_${index}`}
                  href={`/projects/${entry.content}`}
                 className="
                    absolute
                    top-2
                    rounded-md
                    h-[150px]
                    w-[130px]
                    hover:scale-125
                    opacity-100
                    bg-slate-100
                    dark:bg-slate-500
                    transition-all
                   "
                 style={{
                   left: `${20 + 115 * index}px`,
                   zIndex: `${2 + index}`,
                   transform: `rotate(${-15 + 15 * index}deg) translate(0px, ${index == 1 ? 0 : 20}px)`,
                 }}
            >

              <img src={entry.images[0]} alt={entry.title}
                   height={150} width={130}
                   className="rounded-md"
              />

            </Link>
          ))
        }
      </div>

      <div>
        <div className="p-4 pt-0 text-2xl">
          {title}
        </div>

        <div className="justify-self-end p-4 pt-0">
          {children}
        </div>
      </div>

    </Card>
  )
}
