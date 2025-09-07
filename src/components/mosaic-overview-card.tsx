import { Card } from "@/components/ui/card"
import Link from "next/link";
import { PreviewItem } from "../../types/blogTypes";
import {useState} from "react";


export default function MosaicOverviewCard({
  title,
  previewItems,
  contain = false,
  children,
} : {
  title: string,
  previewItems: PreviewItem[],
  contain?: boolean,
  children: React.ReactNode,
}) {

  const height = previewItems.length === 3 ? 150 : 75;
  const [isHover, setIsHover] = useState(false);


  return(
    <Card id="MosaicOverviewCard"
          className="grid
                     grid-rows-[150px_2fr]
                     gap-4
                     p-0
                     bg-slate-200/30
                     border-0
                     dark:bg-slate-500/40
                     rounded-xl
                     hover:shadow-md
          "
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          style={{
            transform: `${ isHover ? 'translate(0px, -1px)' : '' }`,
          }}
    >

      <div className="h-[150px] overflow-hidden flex flex-wrap">
        {
          previewItems.map((entry, index) => (

                    // h-[50px]

            <Link href={entry.content}
                  key={`${entry.title}_${index}`}
                  className={`
                    basis-1/3
                    h-[${height}px]
                    hover:scale-110
                    transition-all
                  `}
            >
              <img src={entry.img} alt={entry.title}
                   height={height}
                   className={`
                    h-[${height}px]
                    w-full
                    ${ contain ? 'object-contain' : 'object-cover' }
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
