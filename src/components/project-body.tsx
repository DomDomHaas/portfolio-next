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
import {Skeleton} from "@/components/ui/skeleton";
import {SidebarTrigger} from "@/components/ui/sidebar";
import {Separator} from "@/components/ui/separator";

export default function ProjectBody({
  loading,
  projectItem,
} : {
  loading: boolean,
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
    observer.observe(document.documentElement, {attributes: true, attributeFilter: ['class']});

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

  if (loading) {
    return (
      <div className="grid
                    grid-rows-[225px_1fr]
                    lg:grid-rows-[250px_1fr]
                    gap-0
                    mt-4
                    h-full
                    "
      >
        <div className="flex space-y-3 mx-auto justify-self-center">
          <Skeleton className="h-[250px] w-[250px] lg:w-[400px] rounded-xl mx-2"/>
          <Skeleton className="
                      h-[0px] w-[0px]
                      md:w-[250px] md:h-[250px]
                      lg:w-[400px]
                      rounded-xl mx-2"/>
        </div>

        <div className="mx-auto justify-self-center mt-20">
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px] lg:w-[750px]"/>
            <Skeleton className="h-4 w-[250px] lg:w-[750px]"/>
            <Skeleton className="h-4 w-[200px] lg:w-[650px]"/>
          </div>

        </div>
      </div>
    )
  }

  return (

    <div className="grid
                    grid-rows-[48px_225px_1fr]
                    lg:grid-rows-[48px_250px_1fr]
                    bg-slate-100/70
                    border-slate-100
                    dark:bg-slate-500/60
                    dark:border-slate-500
                    rounded-xl
                    gap-0
                    pt-2
                    h-full
                    "
    >

      <div className="flex h-12 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4 ">
          <SidebarTrigger className="-ml-1" />

          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />

          { projectItem?.title }

        </div>
      </div>

      <div className="w-full py-2">
        <Carousel className="w-3/5 md:w-4/5 h-full justify-self-center">
          <CarouselContent id="CarouselContent" className="w-full h-full ">
            {
              projectItem.images.map((image, i) => (
                <CarouselItem
                  className="sm:basis-1/2 lg:basis-1/3"
                  key={i}
                  id={`CarouselItem_${i}`}
                >
                  <Card className="relative h-[200px] lg:h-[230px] p-2">

                    <img className="aspect-square
                                    overflow-hidden
                                    object-cover
                                    w-full h-full
                                    "
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
                      <Expand/>
                    </Button>

                  </Card>
                </CarouselItem>
              ))
            }
          </CarouselContent>

          <CarouselPrevious className="dark:bg-slate-500" />
          <CarouselNext className="dark:bg-slate-500" />
        </Carousel>
      </div>

      <div className="overflow-auto
                      bg-slate-100/70
                      border-slate-100
                      dark:bg-slate-500/60
                      dark:border-slate-500
                      p-5
                      rounded-b-xl
                      "
      >
        <div
          className={`markdown-body h-full   ${isDark ? 'markdown-body-dark' : 'markdown-body-light'}`}
          dangerouslySetInnerHTML={{__html: html || ''}}/>

        <Dialog modal open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent>
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
