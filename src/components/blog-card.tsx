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

export default function BlogCard({
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

      <CardHeader className="max-h-[260px]">
        <img className="rounded max-h-full w-full object-cover"
             src={img}
             alt={title} />
{/*
        <Image src={img} alt={title} width={100}/>
*/}
      </CardHeader>


      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardAction>
          <Button>Read</Button>
        </CardAction>
      </CardContent>

{/*
      <CardFooter>
      </CardFooter>
*/}

    </Card>
  )
}
