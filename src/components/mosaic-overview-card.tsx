import { Card } from "@/components/ui/card"
import {Button} from "@/components/ui/button";
import Link from "next/link";


const previews = [
  { title: 'bla', img: '/images/projects/EnviDat_Flyer.jpg'},
  { title: 'bli', img: '/images/projects/EnviDat_logo_128.png'},
  { title: 'blu', img: '/images/projects/EnviDat_Flyer.jpg'},
  { title: 'bli', img: '/images/projects/EnviDat_logo_128.png'},
  { title: 'blu', img: '/images/projects/EnviDat_Flyer.jpg'},
  { title: 'bli', img: '/images/projects/EnviDat_logo_128.png'},
  { title: 'blu', img: '/images/projects/EnviDat_Flyer.jpg'},
  { title: 'bli', img: '/images/projects/EnviDat_logo_128.png'},
  { title: 'blu', img: '/images/projects/EnviDat_Flyer.jpg'},
]

const defaultImgClassName = "rounded-t-xl max-h-full w-full object-cover";

export default function MosaicOverviewCard({
 title,
} : { title: string }) {
  return(
    <Card id="MosaicOverviewCard"
          className="grid grid-rows-[2fr_150px_2fr]
                     gap-4 p-0
                     bg-slate-100/70
                     border-slate-100
                     dark:bg-slate-500/60
                     dark:border-slate-500
                     rounded-xl
          ">

      <div className="p-4 pb-0 text-lg">
        {title}
      </div>

      <div className="h-[150px] overflow-hidden flex flex-wrap">
        {
          previews.map((entry, index) => (
            <div key={`${entry.title}_${index}`}
                 className="
                    basis-1/3
                    h-[50px]
                    w-[50px]
                    hover:scale-110
                    opacity-100
                    bg-slate-100
                    dark:bg-slate-500
                    transition-all
                   "
            >

              <img src={entry.img} alt={entry.title}
                   height={50} width={50}
                   className="h-full w-full object-cover"
              />

            </div>
          ))
        }
      </div>

      <div className="justify-self-end p-4 pt-0">
        <Button asChild>
          <Link href="projects">View All</Link>
        </Button>
      </div>

    </Card>
  )
}
