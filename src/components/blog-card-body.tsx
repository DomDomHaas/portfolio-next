import {Button} from "@/components/ui/button";
import Link from "next/link";
import {BlogPost} from "../../types/blogTypes";
import {NotebookText} from "lucide-react";

export default function BlogCardBody({
 title,
 description,
 content,
 children,
} : BlogPost & { children?: object }) {
  return (
    <div id="BlogCardBody"
         className="
           grid grid-rows-[42px_auto_36px]
           h-full p-4 gap-2
         ">

      <div className="text-base md:text-lg leading-none font-semibold">
        {title}
      </div>

      <div className="text-base">
        {description}
      </div>

      <div className="h-auto justify-self-end content-end">
        <Button asChild className="shadow-md"
                variant="outline"
        >
          <Link href={"/blog/" + content}>
            <NotebookText /> Read
          </Link>
        </Button>

        {children}
      </div>

    </div>
  )
}
