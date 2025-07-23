import {BlogPost} from "../../../types/blogTypes";
import {marked} from "marked";

export const loadPosts = async () : Promise<BlogPost[]> => {
  const response = await fetch(`/content/blog/posts.json`);
  const json = await response.json();
  return json.blogPosts;
}

export const loadPostContent = async (postId: string) => {
  const response = await fetch(`/content/blog/${postId}.md`);
  const markdown = await response.text();
  return marked(markdown);
}

export const loadPostHeadImg = async (postId: string) => {
  const posts = await loadPosts();

  const currentPost = posts.filter((post) => post.content === postId)[0];

  return currentPost?.img;
}
