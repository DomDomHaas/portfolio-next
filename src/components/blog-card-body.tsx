import {BlogPost} from "../../types/blogTypes";
import ButtonCard from "@/components/button-card";

type BlogCardProps = Omit<BlogPost, 'img'> & { children?: React.ReactNode; }

export default function BlogCardBody({
 title,
 description,
 content,
 children,
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

      <div className="h-auto justify-self-end content-end">
        <ButtonCard text="Read" url={`/blog/${content}`} />

        {children}
      </div>

    </div>
  )
}
