import {Button} from "@/components/ui/button";
import Link from "next/link";
import {BlogPost} from "../../types/blogTypes";
import {NotebookText} from "lucide-react";

export default function BlogCardBody({
 title,
 description,
 content,
} : BlogPost) {
  return (
    <div id="BlogCardBody" className="grid grid-rows-[auto_auto_36px] h-full p-4 gap-2">

      <div className="text-base md:text-lg leading-none font-semibold">
        {title}
      </div>

      <div className="text-xs md:text-base">
        {description}
      </div>

      <div className="h-auto justify-self-end content-end">
        <Button asChild >
          <div>
            <NotebookText />
            <Link href={"/blog/" + content}>Read</Link>
          </div>
        </Button>
      </div>

    </div>
  )
}
