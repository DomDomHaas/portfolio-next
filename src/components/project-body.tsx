"use client"

import { ProjectItem} from "../../types/projectTypes";
import {useEffect, useState} from "react";
import {loadProjectContent} from "@/app/projects/projectsApi";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {Button} from "@/components/ui/button";
import {Expand} from "lucide-react";
import {Skeleton} from "@/components/ui/skeleton";
import {SidebarTrigger} from "@/components/ui/sidebar";

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
  const [dialogImages, setDialogImages] = useState(projectItem.images || [])
  const [imageTitle, setImageTitle] = useState('')


  const openDialog = (image: string) => {
    setIsOpen(true);

    const currentIndex = dialogImages.findIndex((img) => img === image);
    const back = dialogImages.slice(currentIndex + 1, dialogImages.length + 1);
    const front = dialogImages.slice(0, currentIndex);

    const newSequence = [image, ...front, ...back];

    setDialogImages(newSequence);
    setImageTitle(getImageTitle(image));
  }

  const nextImageTitle = () => {
    const currentIndex = dialogImages.findIndex((img) => getImageTitle(img) === imageTitle);
    const newIndex = currentIndex + 1;
    setNewImageTitle(newIndex);
  }

  const prevImageTitle = () => {
    const currentIndex = dialogImages.findIndex((img) => getImageTitle(img) === imageTitle);
    const newIndex = currentIndex - 1;
    setNewImageTitle(newIndex);
  }

  const setNewImageTitle = (newIndex: number) => {
    if (newIndex > dialogImages.length - 1) {
      newIndex = 0;
    } else if (newIndex <= 0) {
      newIndex = dialogImages.length - 1;
    }

    setImageTitle(getImageTitle(dialogImages[newIndex]));
  }
  
  const getImageTitle = (image: string) => {
    const splits = image.split('/');
    return splits[splits.length - 1];
  }

  if (loading) {
    return (
      <div id="projectBody"
           className="grid
                    grid-rows-[225px_1fr]
                    lg:grid-rows-[250px_1fr]
                    bg-transparent
                    border-0
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
    <div id="projectBody"
         className="flex flex-col
                    bg-transparent
                    border-0
                    shadow-none
                    gap-0
                    p-0
                    pr-1
                    h-full
                    overflow-auto
                    "
         style={{
           scrollbarWidth: 'thin',
           scrollbarColor: 'white transparent',
         }}
    >

      <SidebarTrigger className="
                        md:hidden
                        absolute top-1 left-0
                        m-1 p-5 md:p-5
                        bg-slate-400
                        hover:bg-slate-200 dark:hover:bg-slate-600
                        text-black dark:text-white
                        rounded-3xl
                        shadow-md
                        " />


      <div id="hero" className="basis-base mx-auto">
        <img src={projectItem.hero}
             alt="Project Hero"
             className="
               rounded-md
               "
        />
      </div>

      <div id="tldr" className="my-4 mx-2">{projectItem.tldr}</div>

      <div>
      <Carousel className="h-full w-3/5 md:w-4/5 justify-self-center">
        <CarouselContent id="CarouselContent"
                         className="
                          bg-transparent
                          border-0
                          w-full h-full py-2"
        >
          {
            projectItem.images.map((image, i) => (
              <CarouselItem
                className="h-full md:basis-1/2 lg:basis-1/3"
                key={i}
                id={`CarouselItem_${i}`}
              >
                <div className="h-full relative p-0">
                  <img className="aspect-square
                                  rounded-sm
                                  overflow-hidden
                                  object-cover
                                  object-center
                                  w-full h-full
                                  "
                       src={image} alt={image}/>

                  <Button
                    className="absolute
                                top-1 right-1
                                md:top-0 md:right-0
                                md:w-full md:h-full
                                md:rounded-sm
                                opacity-70
                                md:opacity-0
                                bg-slate-200
                                dark:bg-slate-400
                                md:bg-transparent
                                hover:opacity-50
                                transition-opacity
                                "
                    onClick={() => openDialog(image)}
                    variant="ghost"
                    size="icon"
                  >
                    <Expand/>
                  </Button>
                </div>
              </CarouselItem>
            ))
          }
        </CarouselContent>

        <CarouselPrevious
          className="
                  border-slate-300
                  bg-slate-400
                  hover:bg-slate-200
                  dark:bg-slate-400
                  dark:hover:bg-slate-500
                  shadow-md
                  text-black dark:text-white
                  p-5
                  "
          onPrev={prevImageTitle}
        />

        <CarouselNext
          className="
                  border-slate-300
                  bg-slate-400
                  hover:bg-slate-200
                  dark:bg-slate-400
                  dark:hover:bg-slate-500
                  shadow-md
                  text-black dark:text-white
                  p-5
                  "
          onNext={nextImageTitle}
        />
      </Carousel>
      </div>

      <div id="projectBodyText"
        className="bg-transparent
                   mx-2
                   my-4
                   rounded-b-xl
                   "
      >
        <div
          className={`markdown-body h-full   ${isDark ? 'markdown-body-dark' : 'markdown-body-light'}`}
          dangerouslySetInnerHTML={{__html: html || ''}}/>

        <Dialog modal
                open={isOpen} onOpenChange={setIsOpen}
        >
          <DialogContent
            aria-describedby={imageTitle}
            className="
                    bg-slate-300
                    dark:bg-slate-500
                    noise
                    p-0
                    h-full w-full"
          >

            <DialogHeader className="absolute left-1 top-1" >
              <DialogTitle className="z-100">
                {imageTitle}
              </DialogTitle>
            </DialogHeader>

            <Carousel className="w-full p-0
                                 self-center justify-self-center"
            >
              <CarouselContent id="CarouselContent"
                               className="w-full h-full md:h-auto py-2">
                {
                  dialogImages.map((image, i) => (
                    <CarouselItem
                      className="h-lvh w-full content-center justify-items-center"
                      key={i}
                      id={`CarouselItem_${i}`}
                    >
                        <img className="px-2
                                  max-h-full max-w-full
                                  "
                             src={image} alt={image}/>
                    </CarouselItem>
                  ))
                }
              </CarouselContent>

              <CarouselPrevious
                className="
                  border-slate-300
                  bg-slate-400
                  dark:bg-slate-400
                  hover:bg-slate-200
                  dark:hover:bg-slate-600
                  text-black dark:text-white
                  shadow-md
                  p-6
                  left-2
                  md:left-5
                  lg:fixed
                  lg:top-1/2
                "
                onPrev={prevImageTitle}
              />

              <CarouselNext
                className="
                  border-slate-300
                  bg-slate-400
                  dark:bg-slate-400
                  hover:bg-slate-200
                  dark:hover:bg-slate-600
                  text-black dark:text-white
                  shadow-md
                  p-6
                  right-2
                  md:right-5
                  lg:fixed
                  lg:top-1/2
                "
                onNext={nextImageTitle}
              />
            </Carousel>


          </DialogContent>

        </Dialog>
      </div>
    </div>
  )
}
