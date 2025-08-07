'use client'

import {useParams, useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {loadPostContent, loadPostHeadImg } from "@/app/blog/blogApi";

import '@/app/github-markdown.css'
import {Button} from "@/components/ui/button";
import {CircleX} from "lucide-react";

/*
import '@/app/github-markdown-dark.css'
import '@/app/github-markdown-light.css'
*/


export default function BlogPost() {
  const router = useRouter();
  const navigateToBlogList = () => {
    router.push('/blog');
  }

  const params = useParams();
  const postId = params.id as string;

  const [isDark, setIsDark] = useState(true)
  const [postImg, setPostImg] = useState('')

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
    loadPostContent(postId).then((renderedHtml: string) => setHtml(renderedHtml));
    loadPostHeadImg(postId).then((img) => setPostImg(img));
  }, [postId])


  return (
    <div className="relative h-full p-2 mb-2">

      <Button className="absolute right-4 md:right-7 top-4
                         cursor-pointer shadow-md
                         z-100 p-0 m-1 "
              onClick={navigateToBlogList}
              variant="outline"
      >
        <CircleX /> Back
      </Button>

      <div className="grid
                      grid-rows-[auto_1fr]
                      gap-2
                      h-full
                      overflow-auto
                      bg-slate-300
                      m-1 p-2 rounded-xl
                      relative
                      ">

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

        <article className={`markdown-body p-1  ${isDark ? 'markdown-body-dark' : 'markdown-body-light'}`}
                 dangerouslySetInnerHTML={{__html: html || ''}}/>
      </div>
    </div>
  );
}
