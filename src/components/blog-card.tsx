import { Card } from "@/components/ui/card"
import { BlogPost } from "../../types/blogTypes";
import BlogCardBody from "@/components/blog-card-body";

type BlogCardProps = BlogPost & {
  imgClassName?: string;
}

const defaultImgClassName = "rounded-t-xl w-full object-cover";

export default function BlogCard({
  title,
  img,
  description,
  content,
  imgClassName,
} : BlogCardProps) {
  return(
    <Card id="BlogCard"
          className="grid
                     grid-rows-[180px_220px]
                     gap-0 py-0
                     bg-slate-200/50
                     border-0
                     dark:bg-slate-500/50
                     h-[400px]
                     rounded-xl
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

      <BlogCardBody title={title} img={img} description={description} content={content} />

    </Card>
  )
}
