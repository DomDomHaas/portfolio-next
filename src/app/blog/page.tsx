'use client'

import {useEffect, useState} from "react";
import BlogCard from "@/components/blog-card";
import BlogHeroCard from "@/components/blog-hero-card";
import {BlogPost} from "@/../types/blogTypes";



const loadPosts = async () : Promise<BlogPost[]> => {
  const response = await fetch(`/content/blog/posts.json`);
  const json = await response.json();
  return json.blogPosts;
}

export default function BlogList() {

  const [posts, setPosts] = useState<BlogPost[]>([]);

  // only on mount
  useEffect(() => {
    loadPosts().then((blogPosts) => setPosts(blogPosts));
  }, []);

  const firstPost = posts[0] || {};
  const remainingPosts = posts ? posts.slice(1, posts.length) : [];

  return (
    <div className="grid grid-rows-[200px_auto] md:grid-rows-[300px_auto] gap-4 grid-cols-1">
      <div className="bg-slat-500 w-full">

        <BlogHeroCard
          {...firstPost}
        />

      </div>

      <div className="grid grid-cols-2 gap-2 m-2 h-auto overflow-auto">
        {
          remainingPosts.map((post) => (
            <BlogCard
              key={post.title}
              {...post}
            />
          ))
        }
      </div>
    </div>
  )
}
