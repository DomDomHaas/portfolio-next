import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function ButtonCard({
  text,
  url,
} : {
  text: string;
  url: string;
}) {
  return(
    <Button asChild className="bg-slate-400
                              hover:bg-slate-200
                              dark:bg-slate-500
                              dark:hover:bg-slate-600
                              text-black dark:text-white
                              rounded-3xl
                              shadow-none
                              hover:shadow-md
                              transition-all
                              ">
      <Link href={url}>{text}</Link>
    </Button>
  )
}
