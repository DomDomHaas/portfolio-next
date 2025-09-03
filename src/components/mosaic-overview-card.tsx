import { Card } from "@/components/ui/card"
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {BlogPost} from "../../types/blogTypes";



const defaultImgClassName = "rounded-t-xl max-h-full w-full object-cover";

export default function MosaicOverviewCard({
  title,
  blogPosts,
  children,
} : {
  title: string,
  blogPosts: BlogPost[],
  children: React.ReactNode,
}) {
  return(
    <Card id="MosaicOverviewCard"
          className="grid
                     grid-rows-[150px_2fr]
                     gap-4
                     p-0
                     bg-slate-200/50
                     border-0
                     dark:bg-slate-500/50
                     rounded-xl
          ">

      <div className="h-[150px] overflow-hidden flex flex-wrap">
        {
          blogPosts.map((entry, index) => (

            <Link href={`/blog/${entry.content}`}
                  key={`${entry.title}_${index}`}
                  className="
                    basis-1/3
                    h-[50px]
                    hover:scale-110
                    transition-all
                  "
            >
              <img src={entry.img} alt={entry.title}
                   height={50} width={50}
                   className={`
                    h-[50px]
                    w-full
                    object-cover
                    ${index === 0 ? 'rounded-tl-xl' : ''}
                    ${index === 2 ? 'rounded-tr-xl' : ''}                   
                   `}
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
