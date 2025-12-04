import {BlogPost} from "../../types/blogTypes";
import ButtonCard from "@/components/button-card";

type BlogCardProps = Omit<BlogPost, 'img'> & { children?: React.ReactNode; }

export default function BlogCardBody({
 title,
 description,
 content,
 children,
 date,
} : BlogCardProps) {
  return (
    <div id="BlogCardBody"
         className="
           grid grid-rows-[42px_auto_36px]
           h-full p-4 gap-2
         ">

      <div className="text-2xl leading-none">
        {title}
      </div>

      <div className="text-base">
        {description}
      </div>

      <div className="w-full h-auto grid grid-cols-2">
        <div className="content-center">
          {date}
        </div>
        <div className="justify-self-end">
          <ButtonCard text="Read" url={`/blog/${content}`} />
        </div>

        {children}
      </div>

    </div>
  )
}
