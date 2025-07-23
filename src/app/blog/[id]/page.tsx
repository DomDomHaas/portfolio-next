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
    <div className="grid grid-rows-[auto_1f] gap-2 bg-slate-400 m-1 p-2 rounded-xl">

      <div className="relative">
        {
          postImg ? (
            <img className="rounded justify-self-center"
                 src={postImg}
                 alt={postId}
            />
          ) : null
        }

        <Button className="absolute right-0 top-0 cursor-pointer"
                onClick={navigateToBlogList}
                variant="secondary"
                >
          <CircleX /> Back
        </Button>
      </div>

      <article className={`markdown-body  ${isDark ? 'markdown-body-dark' : 'markdown-body-light'}`}
               dangerouslySetInnerHTML={{__html: html || ''}}/>
    </div>
  );
}
