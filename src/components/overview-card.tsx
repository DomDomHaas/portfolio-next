import { Card } from "@/components/ui/card"
import {Button} from "@/components/ui/button";
import Link from "next/link";


const previews = [
  { title: 'bla', img: '/images/projects/EnviDat_Flyer.jpg'},
  { title: 'bli', img: '/images/projects/EnviDat_logo_128.png'},
  { title: 'blu', img: '/images/projects/EnviDat_Flyer.jpg'},
]

const defaultImgClassName = "rounded-t-xl max-h-full w-full object-cover";

export default function OverviewCard() {
  return(
    <Card id="OverviewCard"
          className="grid grid-rows-[2fr_6fr_2fr]
                     gap-4 p-0
                     bg-slate-100/70
                     border-slate-100
                     dark:bg-slate-500/60
                     dark:border-slate-500
                     rounded-xl
          ">

      <div className="p-4 pb-0 text-lg">
        Recent Projects
      </div>

      <div className="relative overflow-hidden">
        {
          previews.map((entry, index) => (
            <div key={entry.title}
                 className="
                    absolute
                    top-2
                    border-1
                    border-slate-200
                    dark:border-slate-600
                    rounded-xl
                    h-[150px]
                    w-[130px]
                    hover:scale-125
                    opacity-100
                    bg-slate-100
                    dark:bg-slate-500
                    transition-all
                   "
                 style={{
                   left: `${100 * index}px`,
                   zIndex: `${2 + index}`,
                   transform: `rotate(${-15 + 15 * index}deg) translate(0px, ${ index == 1 ? 0 : 20}px)`,
                 }}
            >

              <img src={entry.img} alt={entry.title}
                   height={150} width={130}
                   className="rounded-xl"
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
