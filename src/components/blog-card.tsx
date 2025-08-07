import { Card } from "@/components/ui/card"
import { BlogPost } from "../../types/blogTypes";
import BlogCardBody from "@/components/blog-card-body";

type BlogCardProps = BlogPost & {
  imgClassName?: string;
}

const defaultImgClassName = "rounded-t-xl max-h-full w-full object-cover";

export default function BlogCard({
  title,
  img,
  description,
  content,
  imgClassName,
} : BlogCardProps) {
  return(
    <Card id="BlogCard"
          className="grid gap-0 py-0
                     bg-slate-100/70
                     border-slate-100
                     dark:bg-slate-500/60
                     dark:border-slate-500
                     rounded-xl
          ">

      {
        img ? (
          <img className={imgClassName ? imgClassName + defaultImgClassName : defaultImgClassName}
               src={img}
               alt={title}/>
        ) : null
      }

      <BlogCardBody title={title} img={img} description={description} content={content} />

    </Card>
  )
}
