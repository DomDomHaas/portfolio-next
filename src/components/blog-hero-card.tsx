import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import {Button} from "@/components/ui/button";

export default function BlogHeroCard({
  title,
  img,
  description,
  className
} : {
  title: string;
  img: string;
  description: string;
  className?: string;
}) {
  return(
    <Card className={className}>

      <div className="flex flex-row gap-5 pl-5">
        <div className="py-5">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <CardAction>
            <Button>Read</Button>
          </CardAction>
        </div>

        <img className="rounded max-h-full w-full"
             src={img}
             alt={title}/>
      </div>

      <CardContent>
      </CardContent>

{/*
      <CardFooter>
      </CardFooter>
*/}

    </Card>
  )
}
