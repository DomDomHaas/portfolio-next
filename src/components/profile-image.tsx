import { Card } from "@/components/ui/card"
import { BlogPost } from "../../types/blogTypes";
import BlogCardBody from "@/components/blog-card-body";

type BlogCardProps = BlogPost & {
  imgClassName?: string;
}

const defaultImgClassName = "rounded-t-xl w-full object-cover";

export default function ProfileImage() {
  return(

/*
    border-1
  border-white
  dark:border-black
  hover:border-black
*/

    <>
      <img
        className="z-10 h-full
                   rounded-[125px]
                   transition-all
                   p-0
                   aspect-square
                   object-cover object-center"
        src="/images/dominikhaasartho_small.webp"
        alt="Portrait of Dominik Haas Artho"/>
    </>
  )
}
