"use client"

import { ProjectItem} from "../../types/projectTypes";
import {useEffect, useState} from "react";
import {loadProjectContent} from "@/app/projects/projectsApi";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {BookOpen, Expand} from "lucide-react";

export default function ProjectBody({
  projectItem
} : {
  projectItem: ProjectItem,
}) {

  const [isDark, setIsDark] = useState(true)
  const [html, setHtml] = useState<string | null>(null)

  // on mount
  useEffect(() => {
    const updateDark = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    }

    updateDark();

    const observer = new MutationObserver(updateDark)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    loadProjectContent(projectItem.content).then((renderedHtml: string) => setHtml(renderedHtml));
  }, [projectItem])

  const [isOpen, setIsOpen] = useState(false)
  const [dialogImage, setDialogImage] = useState('')


  const openDialog = (image: string) => {
    setIsOpen(true);
    setDialogImage(image);
  }

  const imageTitle = () => {
    const splits = dialogImage.split('/');
    const fileName = splits[splits.length - 1];
    return fileName?.split('.')[0];
  }

  return (
    <div className="grid
                    grid-rows-[250px_auto]
                    md:grid-rows-[300px_auto]
                    gap-0"
    >
{/*
      <div className="bg-slate-700" />
*/}

      <div className="w-full h-full py-2">
      <Carousel className="w-3/5 md:w-4/5 h-full justify-self-center">
        <CarouselContent className="w-full h-full max-h-full">
          {
            projectItem.images.map((image, i) => (
              <CarouselItem
                className="sm:basis-1/2 md:basis-1/3"
                key={i}
              >
                <Card className="relative max-w-[230px] md:max-w-[300px] p-2">
                  
                  <img className="aspect-square overflow-hidden object-cover"
                       src={image} alt={image}/>

                  <Button
                    className="absolute
                                top-0 left-0 w-full h-full
                                opacity-50 md:opacity-0 hover:opacity-50 transition-opacity
                                "
                    onClick={() => openDialog(image)}
                    variant="ghost"
                    size="icon"
                  >
                    <Expand />
                  </Button>

                </Card>
              </CarouselItem>
            ))
          }
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </div>

{/*
      <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min">
        {projectItem.title}
      </div>
*/}

      <div className="rounded bg-slate-500 p-2">
        <article className={`markdown-body  ${isDark ? 'markdown-body-dark' : 'markdown-body-light'}`}
                 dangerouslySetInnerHTML={{__html: html || ''}}/>

        <Dialog modal open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent >
            <DialogHeader>
              <DialogTitle>{imageTitle()}</DialogTitle>
            </DialogHeader>

            <img className="h-full w-full"
                 src={dialogImage} alt={dialogImage}/>

          </DialogContent>
        </Dialog>

      </div>
    </div>
  )
}
