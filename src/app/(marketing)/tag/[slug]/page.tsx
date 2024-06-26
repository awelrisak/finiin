import { client } from "@/sanity/lib/client";
import React from "react";
import PostCard from "@/components/marketing/post";
import { Post } from "types";

async function getPostsByTag(tag: string) {
  const query = `
  *[_type == "post" && references(*[_type == "tag" && slug.current == "${tag}"]._id)]{
    title,
    slug,
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

export const revalidate = 5;

interface Params {
  params: {
    slug: string;
  };
}

const page = async ({ params }: Params) => {
  const posts: Array<Post> = await getPostsByTag(params.slug);

  return (
    <div>

      <div>
       {posts?.length > 0 && posts?.map((post) => (
          <PostCard key={post?._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default page;