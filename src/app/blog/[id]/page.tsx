'use client'

import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import {marked} from "marked";
import '@/app/github-markdown.css'
/*
import '@/app/github-markdown-dark.css'
import '@/app/github-markdown-light.css'
*/

const loadPostContent = async (postId: string) => {
  const response = await fetch(`/content/blog/${postId}.md`);
  const markdown = await response.text();
  return marked(markdown);
}

export default function BlogPost() {

  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const updateDark = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }

    updateDark()

    const observer = new MutationObserver(updateDark)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    return () => observer.disconnect()
  }, [])

  const params = useParams();
  const postId = params.id as string;

  const [html, setHtml] = useState<string | null>(null)

  useEffect(() => {
    loadPostContent(postId).then((renderedHtml: string) => setHtml(renderedHtml));
  }, [postId])

  return (
    <div className="grid grid-rows-1 bg-slate-400 m-1 p-2 rounded-xl">
      <article className={`markdown-body  ${isDark ? 'markdown-body-dark' : 'markdown-body-light'}`}
               dangerouslySetInnerHTML={{__html: html || ''}}/>
    </div>
  );
}
