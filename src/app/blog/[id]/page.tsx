import blogJSON from "@/../public/content/blog/posts.json";
import BlogPost from "@/components/blog-post";

export async function generateStaticParams() {
  const posts = blogJSON.blogPosts;

  return posts.map((post) => ({
    id: post.content || '',
  }));
}

export default function SpecificBlog() {
  return <BlogPost />
}
