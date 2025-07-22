import BlogCard from "@/components/blog-card";
import BlogHeroCard from "@/components/blog-hero-card";

const blogPosts = [
  {
    title: 'Uncrankd Game Jam 2025 Winter Edition',
    img: '/images/blog/bossRusher_1.png',
    content: 'uncrankedGameJam2025.md',
  },
  {
    title: 'DevBlog: Start of a Boss Rusher Game?',
    img: '',
    content: 'bossRusher.md',
  },
  {
    title: 'blu',
    img: '',
  },
];

const firstPost = blogPosts[0];
const remainingPosts = blogPosts.slice(1, blogPosts.length)


export default function BlogList() {
  return (
    <div className="grid grid-rows-[300px_auto] gap-4 grid-cols-1">
      <div className="bg-slat-500 w-full">
        <BlogHeroCard
          key={firstPost.title}
          title={firstPost.title}
          img={firstPost.img}
          description={firstPost.description}
          className="h-[300px] overflow-hidden py-0"
        />
      </div>

      <div className="flex flex-row flex-wrap gap-2">
        {
          remainingPosts.map((post) => (
            <BlogCard
              key={post.title}
              title={post.title}
              img={post.img}
              description={post.description}
              className="basis-1/4"
            />
          ))
        }
      </div>
    </div>
  )
}
