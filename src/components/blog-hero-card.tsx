import { Card } from "@/components/ui/card"
import { BlogPost } from "@/../types/blogTypes";
import BlogCardBody from "@/components/blog-card-body";

const defaultImgClassName = "lg:h-[300px] md:h-[250px] h-[200px] overflow-hidden object-cover justify-self-end";

type BlogHeroProps = BlogPost & {
  imgClassName?: string;
}

export default function BlogHeroCard({
  title,
  img,
  description,
  content,
  imgClassName,
  date,
} : BlogHeroProps) {
  return(
    <Card id="BlogHeroCard"
          className=" grid
                      grid-cols-[2fr_1fr]
                      md:grid-cols-[1fr_1fr]
                      xl:grid-cols-[700px_auto]
                      h-[200px] md:h-[250px] lg:h-full
                      gap-0 overflow-hidden py-0
                      bg-slate-200/30
                      border-0
                      dark:bg-slate-500/40
                      relative
                      rounded-xl
                      hover:shadow-md
                      ">


      <BlogCardBody title={title} description={description} content={content} date={date} />

      {
        img ? (
          <img className={ imgClassName ? imgClassName + defaultImgClassName : defaultImgClassName}
               src={img}
               alt={title}/>
        ) : null
      }

    </Card>
  )
}
