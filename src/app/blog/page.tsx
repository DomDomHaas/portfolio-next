'use client'

import {useEffect, useState} from "react";
import BlogCard from "@/components/blog-card";
import BlogHeroCard from "@/components/blog-hero-card";
import {BlogPost} from "@/../types/blogTypes";
import {loadPosts} from "@/app/blog/blogApi";
import { useBreakpointAgent, DeviceEnum } from "use-breakpoint-agent";



export default function BlogList() {

  const [posts, setPosts] = useState<BlogPost[]>([]);

  // on mount
  useEffect(() => {
    loadPosts().then((blogPosts) => setPosts(blogPosts));
  }, []);

  const firstPost = posts[0] || {};
  const remainingPosts = posts ? posts.slice(1, posts.length) : [];

  const device = useBreakpointAgent();
  const isDesktop = device === 'desktop';

  return (
    <div className="grid
                    grid-rows-[375px_1fr]
                    md:grid-rows-[250px_1fr]
                    lg:grid-rows-[300px_1fr]
                    gap-8
                    grid-cols-1
                    h-full
                    p-4
                    mb-4
                    overflow-auto
                    "
         style={{
           scrollbarWidth: 'thin',
           scrollbarColor: 'white transparent',
         }}
    >

    { isDesktop ?
    (
      <>
        <div className="w-full ">
          <BlogHeroCard
            {...firstPost}
          />
        </div>

        <div className="min-h-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
              remainingPosts.map((post, index) => (
                <BlogCard
                  key={`${post.title}_${index}`}
                  {...post}
                />
              ))
            }
          </div>
        </div>
      </>
    ) : (
      <>
        <div className="w-full ">
          <BlogCard
            {...firstPost}
          />
        </div>

        <div className="min-h-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
              remainingPosts.map((post, index) => (
                <BlogHeroCard
                  key={`${post.title}_${index}`}
                  {...post}
                />
              ))
            }
          </div>
        </div>
      </>
    )}

    </div>
  )
}
