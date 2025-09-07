'use client'

import {useParams, useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {loadPostContent, loadPostHeadImg } from "@/app/blog/blogApi";

import {Button} from "@/components/ui/button";
import {CircleX} from "lucide-react";
import {Skeleton} from "@/components/ui/skeleton";
import {useDark} from "@/hooks/useDark";


export default function BlogPost({
  postId,
} : {
  postId?: string,
}) {
  const router = useRouter();
  const navigateToBlogList = () => {
    router.push('/blog');
  }

  let preSelectedBlog = postId;

  if (!preSelectedBlog) {
    const params = useParams();
    preSelectedBlog = params.id as string;
  }

  const {isDark} = useDark();
  const [postImg, setPostImg] = useState('')

  const [html, setHtml] = useState<string | null>(null)

  // on mount
/*
  useEffect(() => {
    const updateDark = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    }

    updateDark();

    const observer = new MutationObserver(updateDark)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);
*/


  useEffect(() => {
    loadPostContent(postId).then((renderedHtml: string) => setHtml(renderedHtml));
    loadPostHeadImg(postId).then((img) => setPostImg(img));
  }, [postId])


  return (
    <div className="min-h-0 h-full p-4 relative">

      <Button className="absolute right-4 md:right-8 top-4
                         cursor-pointer
                         bg-slate-400
                         hover:bg-slate-200 dark:hover:bg-slate-600
                         text-black dark:text-white
                         rounded-3xl
                         shadow-md
                         z-100 p-0 m-1 "
              onClick={navigateToBlogList}
      >
        <CircleX/> Back
      </Button>

      <div className="grid
                      grid-rows-[auto_1fr]
                      gap-2
                      h-full
                      overflow-auto
                      bg-transparent
                      m-1 p-2 rounded-xl
                      "
           style={{
             scrollbarWidth: 'thin',
             scrollbarColor: 'white transparent',
           }}
      >

        { html ? (
          <>
            <div className="">
              {
                postImg ? (
                  <img className="rounded-xl justify-self-center"
                       src={postImg}
                       alt={postId}
                  />
                ) : null
              }
            </div>

            <article className={`markdown-body pt-5 p-1  ${isDark ? 'markdown-body-dark' : 'markdown-body-light'}`}
                     dangerouslySetInnerHTML={{__html: html || ''}}/>
          </>
        ) : (
          <>
            <div className="pt-4">
              <div className="flex space-y-3 mx-auto justify-self-center">
                <Skeleton className="h-[250px] w-[250px] lg:w-[400px] rounded-xl mx-2"/>
              </div>
            </div>

            <div>
              <div className="w-full justify-self-center mt-10">
                <div className="mx-5 space-y-2">
                  <Skeleton className="h-4 w-full"/>
                  <Skeleton className="h-4 w-5/6"/>
                  <Skeleton className="h-4 w-5/8"/>
                </div>
              </div>
            </div>
          </>
        )}

      </div>

    </div>
  );
}
