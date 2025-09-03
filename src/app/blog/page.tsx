'use client'

import {useEffect, useState} from "react";
import BlogCard from "@/components/blog-card";
import BlogHeroCard from "@/components/blog-hero-card";
import {BlogPost} from "@/../types/blogTypes";
import {loadPosts} from "@/app/blog/blogApi";




export default function BlogList() {

  const [posts, setPosts] = useState<BlogPost[]>([]);

  // on mount
  useEffect(() => {
    loadPosts().then((blogPosts) => setPosts(blogPosts));
  }, []);

  const firstPost = posts[0] || {};
  const remainingPosts = posts ? posts.slice(1, posts.length) : [];

  return (
    <div className="grid
                    grid-rows-[200px_1fr]
                    md:grid-rows-[250px_1fr]
                    lg:grid-rows-[300px_1fr]
                    gap-8
                    grid-cols-1
                    h-full
                    p-4
                    pb-8
                    overflow-auto
                    "
         style={{
           scrollbarWidth: 'thin',
           scrollbarColor: 'white transparent',
         }}
    >
      <div className="w-full">
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

    </div>
  )
}
