import Post from "@/components/marketing/post";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { Post as PostType } from "types";

export const metadata = {
  title: "Blog",
};

async function getPosts(index?: number) {
  const query = `
  *[_type == "post"]{
    title,
    "slug": slug.current,
    coverImage,
    publishedAt,
    excerpt,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `;

  const posts = await client.fetch(query);
  return posts;
}

export default async function BlogPage() {
  const posts: Array<PostType> = await getPosts();

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore Insights, Ideas, and Inspiration from Our Latest Posts
          </p>
        </div>
      </div>
      <hr className="my-8" />
      {posts?.length ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {posts.map((post, index) => (
            <Post post={post} key={post._id}/>
          ))}
        </div>
      ) : (
        <p>No posts published.</p>
      )}
    </div>
  );
}
