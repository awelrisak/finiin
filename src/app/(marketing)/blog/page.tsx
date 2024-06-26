import Post from "@/components/marketing/post";
import {Button} from "@/components/ui/button"
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { Post as PostType } from "types";

export const metadata = {
  title: "Blog",
};


async function getPosts(index?: number): Promise<PostType[]> {
  const query = `
  *[_type == "post"] | order(publishedAt desc){
    title,
    "slug": slug.current,
    "coverImage": coverImage.asset->url,
    publishedAt,
    excerpt,
   "plainText": pt::text(body),
  }
  `;

  const posts = await client.fetch(query);
  return posts;
}

interface BlogPageProps {
  searchParams?: { 
      [key: string]: string | string[] | undefined 
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const posts = await getPosts();

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
      <hr className="mt-8 mb-4" />
      { searchParams?.tag && <p className="my-4 text-muted-foreground text-sm my-2 md:my-4">Showing posts with tag: {searchParams?.tag}</p>}
      {posts?.length ? (
        <div className="grid gap-10 sm:grid-cols-2 max-md:divide-y-2">
          {posts.map((post, index) => (
            <Post post={post} key={post.slug}/>
          ))}
        </div>
      ) : (
        <p>No posts published yet.</p>
      )}
    </div>
  );
}
