import { Card } from "@/components/ui/card"
import { BlogPost } from "@/../types/blogTypes";
import BlogCardBody from "@/components/blog-card-body";

// const defaultImgClassName = "rounded w-full relative bottom-1/4";
const defaultImgClassName = "md:h-[300px] h-[200px] overflow-hidden object-cover justify-self-end";

type BlogHeroProps = BlogPost & {
  imgClassName?: string;
}

export default function BlogHeroCard({
  title,
  img,
  description,
  content,
  imgClassName,
} : BlogHeroProps) {
  return(
    <Card id="BlogHeroCard"
          className=" grid
                      grid-cols-[1fr_200px]
                      md:grid-cols-[250px_auto]
                      lg:grid-cols-[450px_auto]
                      h-[200px] md:h-[300px]
                      gap-0 overflow-hidden m-2 py-0
                      ">

      <BlogCardBody title={title} img={img} description={description} content={content} />

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
