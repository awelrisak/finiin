import slugify from "slugify";

import Toc from "@/components/marketing/toc";
import Moment from "@/components/ui/moment";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { Post } from "types";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/shared/icons";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getPost(slug: string) {
  const query = `
  *[_type == "post" && slug.current == "${slug}"][0] {
    title,
    slug,
    publishedAt,
    excerpt,
    _id,
    "headings": body[style in ["h2", "h3", "h4", "h5", "h6"]],
    body,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `;

  const post = await client.fetch(query);
  return post;
}

export const revalidate = 60;

const page = async ({ params }: PageProps) => {
  const post: Post = await getPost(params?.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      {/* <pre>
       
        {JSON.stringify(post.headings, null, 2)}
      </pre> */}
      <div className="absolute left-[-200px]  flex-col xl:inline-flex">
        <Link href="/blog" className={buttonVariants({ variant: "ghost" })}>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          See all posts
        </Link>
        {/* {(post?.headings && post.headings.length >= 0) && "hello"} */}
      </div>

      <div>
        <span className="block">
          Published on &nbsp;
          <Moment format="MMMM Do, YYYY" date={post?.publishedAt} />
        </span>
        <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
          {post.title}
        </h1>
        {/* {authors?.length ? (
          <div className="mt-4 flex space-x-4">
            {authors.map((author) =>
              author ? (
                <Link
                  key={author._id}
                  href={`https://twitter.com/${author.twitter}`}
                  className="flex items-center space-x-2 text-sm"
                >
                  <Image
                    src={author.avatar}
                    alt={author.title}
                    width={42}
                    height={42}
                    className="rounded-full bg-white"
                  />
                  <div className="flex-1 text-left leading-tight">
                    <p className="font-medium">{author.title}</p>
                    <p className="text-[12px] text-muted-foreground">
                      @{author.twitter}
                    </p>
                  </div>
                </Link>
              ) : null,
            )}
          </div>
        ) : null} */}
      </div>
      {/* {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={720}
          height={405}
          className="my-8 rounded-md border bg-muted transition-colors"
          priority
        />
      )} */}
      <div className={richTextStyles}>
        <PortableText
          value={post?.body}
          components={myPortableTextComponents}
        />
      </div>
      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link href="/blog" className={cn(buttonVariants({ variant: "ghost" }))}>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          See all posts
        </Link>
      </div>
    </article>
  );
};

//  <div className="">
//  <span>
//    Published on &nbsp;
//    <Moment format="MMMM Do, YYYY" date={post?.publishedAt} />
//  </span>
//    <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
//      {post.title}
//    </h1>
//    {/* <span className={`${dateFont?.className} text-purple-500`}>
//           {new Date(post?.publishedAt).toDateString()}
//         </span> */}
//    <div className="mt-5">
//      {post?.tags?.map((tag) => (
//        <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
//          <span className="mr-2 rounded-sm border p-1 text-sm lowercase dark:border-gray-900 dark:bg-gray-950">
//            #{tag.name}
//          </span>
//        </Link>
//      ))}
//    </div>
//    <Toc headings={post?.headings} />
//  <div className={richTextStyles}>
//    <PortableText value={post?.body} components={myPortableTextComponents} />
//  </div>
//  </div>;

export default page;

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image
        src={urlForImage(value)}
        alt="Post"
        width={720}
        height={405}
        className="my-8 rounded-md border bg-muted transition-colors"
        priority
      />
    ),
  },
  block: {
    h2: ({ value }: any) => (
      <h2
        id={slugify(value.children[0].text)}
        className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
      >
        {value.children[0].text}
      </h2>
    ),
    h3: ({ value }: any) => (
      <h3
        id={slugify(value.children[0].text)}
        className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
      >
        {value.children[0].text}
      </h3>
    ),
    h4: ({ value }: any) => (
      <h4
        id={slugify(value.children[0].text)}
        className="scroll-m-20 text-xl font-semibold tracking-tight"
      >
        {value.children[0].text}
      </h4>
    ),
    h5: ({ value }: any) => (
      <h5
        id={slugify(value.children[0].text)}
        className="mb-3 text-2xl font-bold"
      >
        {value.children[0].text}
      </h5>
    ),
    h6: ({ value }: any) => (
      <h6
        id={slugify(value.children[0].text)}
        className="mb-3 text-xl font-bold"
      >
        {value.children[0].text}
      </h6>
    ),
    p: ({ value }: any) => (
      <p
        id={slugify(value.children[0].text)}
        className="leading-7 [&:not(:first-child)]:mt-6"
      >
        {value.children[0].text}
      </p>
    ),
  },
};

const richTextStyles = `
mt-14
text-justify
max-w-2xl
m-auto
prose-headings:my-5
prose-heading:text-2xl
prose-p:mb-5
prose-p:leading-7
prose-li:list-disc
prose-li:leading-7
prose-li:ml-4
`;
