import { Card } from "@/components/ui/card"
import { BlogPost } from "../../types/blogTypes";
import BlogCardBody from "@/components/blog-card-body";

type BlogCardProps = BlogPost & {
  imgClassName?: string;
  id?: string,
}

const defaultImgClassName = "rounded-t-xl w-full object-cover";

export default function BlogCard({
  title,
  img,
  description,
  content,
  imgClassName,
  id,
  date,
} : BlogCardProps) {
  return(
    <Card id={ id ? id : "BlogCard" }
          className="grid
                     grid-rows-[170px_200px]
                     gap-0 py-0
                     bg-slate-200/30
                     border-0
                     dark:bg-slate-500/40
                     h-[375px]
                     rounded-xl
                     hover:shadow-md
          ">

      <div className="h-full overflow-hidden">
        {
          img ? (
            <img className={imgClassName ? imgClassName + defaultImgClassName : defaultImgClassName}
                 src={img}
                 alt={title}/>
          ) : null
        }
      </div>

      <BlogCardBody title={title} description={description} content={content} date={date} />

    </Card>
  )
}
