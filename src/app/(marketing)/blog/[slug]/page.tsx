import slugify from "slugify";

import Toc from "@/components/marketing/toc";
import Moment from "@/components/ui/moment";
import {PortableText, toPlainText, PortableTextComponents} from '@portabletext/react'
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { Post } from "types";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/shared/icons";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getData(slug: string) {
  const query = `
  {
  "post": *[_type == "post" && slug.current == "${slug}"][0] {
    title,
    "slug": slug.current,
    "coverImage": coverImage.asset->url,
    publishedAt,
    excerpt,
    _id,
    "headings": body[style in ["h2", "h3", "h4", "h5", "h6"]],
    body,
    tags[]-> {
      _id,
      slug,
      name
    },
    author[]->{
    name,
    twitter
    },
    "plainText": pt::text(body),
    "keywords": string::split(keywords, ",")
  },

  "recentPosts": *[_type == "post" && slug.current !=  "${slug}"] | order(publishedAt desc)[0..5] {
     title,
    "slug": slug.current,
    "coverImage": coverImage.asset->url,
    publishedAt
  }
  
  }
  `;

  const data = await client.fetch(query);
  return data;
}

export async function generateMetadata({
  params: { slug },
}: PageProps): Promise<Metadata> {
  const { post }: {post: Post; recentPosts: Partial<Post>[]} = await getData(slug);

  if (!post) {
    notFound();
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      locale: "en_US",
      url: `${siteConfig.url}/post/${slug}`,
      title: post.title,
      description: post.excerpt,
      images: post.coverImage,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      creator: post.author[0].twitter,
    },
    keywords: post.keywords,
  };
}

export const revalidate = 5;

const page = async ({ params: { slug } }: PageProps) => {
  const { post, recentPosts }: {post: Post; recentPosts: Partial<Post>[]} = await getData(slug);

  if (!post) {
    notFound();
  }

  const postJsonLd = {
    "@context": "http://schema.org",
    "@type": "post",
    headline: post.title,
    name: post.title,
    description: post.excerpt,
    url: `${siteConfig.url}/post${post.slug}`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
        width: 600,
        height: 60,
      },
    },
    author: post.author.map((author) => ({
      "@type": "Person",
      name: author.name,
      url: `http://www.twitter.com/${author.twitter}`,
    })),

    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    image: post.coverImage,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": siteConfig.url,
    },
    keywords: post.keywords,
    articleBody: post.plainText,
  };

  return (
    <div className="pt-1 pb-6 flex flex-col lg:flex-row gap-4 md:gap-6">
        <div className="flex flex-col md:sticky md:top-0 ">
          <Link
            href="/blog"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "hidden xl:inline-flex gap-2 items-center ml-auto"
            )}
          >
            <ChevronLeft className="h-4 w-4" />
            See all blogs
          </Link>
        </div>
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postJsonLd) }}
      />
      <div className="absolute left-[-200px]  flex-col xl:inline-flex">
        <Link href="/blog" className={buttonVariants({ variant: "ghost" })}>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          See all posts
        </Link>
      </div>

      <div>
        <span className="block">
          Published on &nbsp;
          <Moment format="MMMM Do, YYYY" date={post?.publishedAt} />
        </span>
        <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
          {post.title}
        </h1>
        {post.author.length && (
          <div className="mt-4 flex space-x-4">
            {post.author.map((author, index) => (
              <Link
                key={index + author.name}
                href={`https://twitter.com/${author.twitter}`}
                className="flex items-center space-x-2 text-sm"
                target="_blank"
              >
                <div className="flex-1 text-left leading-tight">
                  <p className="font-medium">{author.name}</p>
                  <p className="text-[12px] text-muted-foreground">
                    @{author.twitter}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Image
        src={post.coverImage}
        alt="Post Cover Image"
        width={720}
        height={405}
        className="my-8 rounded-md border bg-muted transition-colors"
        priority
      />

      {/* <Toc headings={post?.headings} /> */}
      <div className="snap-both">
        <PortableText
          value={post?.body}
          components={portableTextComponents}
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
    {
     recentPosts && (
      <div className="lg:h-full-dvh lg:overflow-auto max-w-2xl w-fit md:sticky md:top-0 relative px-6">
       <section className={cn(rootClass)}>
      <div className="flex items-center justify-between mb-3">       
          <h2 className={"text-lg font-bold md:text-3xl"}>
              Recent Posts
          </h2>
      
          <Link
            href="/blog"
            className={buttonVariants({ variant: "ghost" })}
          >
            See more
            <span aria-hidden="true" className="ml-2">
              &rarr;
            </span>
          </Link>
      </div>

      <div className="relative">
        <div className="mt-6 flex items-center w-full">
          <div
            className={cn(
              "w-full gap-y-10  gap-x-8",
              gridClass
            )}
          >
            {recentposts?.map((post, i) => (
              <div className="w-full flex justify-between items-center hover:bg-muted">
      <Image
        src={post.coverImage}
        alt="Post cover image"
        height = {80}
        width = {80}
        className="size-20 rounded-lg"
      />
      <div className="flex-1 flex flex-col justify-center mx-3">
         <p className="text-lg sm:text-xl font-bold text-foreground line-clamp-2">
             { post.title }
         </p>
       
        <div className="text-sm text-muted-foreground flex gap-2">
        <p>
          <Moment format="MMMM Do, YYYY" date={post.publishedAt} />
        </p>
        &#x2022;
        {/*<p>
          {getBlogReadTime(blog)}
        </p>*/}
      </div>
      </div>
    </div>  {/*End post card*/}
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
     )
    }
  );
};


export default page;

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image
        src={urlForImage(value)}
        alt="Post"
        width={720}
        height={405}
        className="my-8 rounded-md border bg-muted transition-colors"
      />
    ),
  },
  marks: {
    link: ({children, value}) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a 
          href={value.href} 
          rel={rel}
          className="font-medium underline underline-offset-4"
         >
          {children}
        </a>
      )
    },
  },
  list: {
    bullet: ({children}) => <ul className="my-6 ml-6 list-disc">{children}</ul>,
    number: ({children}) => <ol className="my-6 ml-6 list-decimal">{children}</ol>,
  },
  listItem: {
    bullet: ({children}) => <li className="mt-2">{children}</li>,
    number: ({children}) => <li className="mt-2">{children}</li>
  },
  block: {
    h2: ({ children, value }: any) => (
      <h2
        id={slugify(toPlainText(value))}
        className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0"
      >
        {children}
      </h2>
    ),
    h3: ({ children, value  }: any) => (
      <h3
        id={slugify(toPlainText(value))}
        className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
      >
        {children}
      </h3>
    ),
    h4: ({ children, value  }: any) => (
      <h4
        id={slugify(toPlainText(value))}
        className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
      >
        {children}
      </h4>
    ),
    h5: ({ children, value }: any) => (
      <h5
        id={slugify(toPlainText(value))}
        className="mt-8 scroll-m-20 text-lg font-semibold tracking-tight"
      >
        {children}
      </h5>
    ),
    h6: ({ children, value }: any) => (
      <h6
        id={slugify(toPlainText(value))}
        className="mt-8 scroll-m-20 text-base font-semibold tracking-tight"
      >
        { children }
      </h6>
    ),
    p: ({ children }: any) => (
      <p
        className="leading-7 [&:not(:first-child)]:mt-6"
      >
        {children}
      </p>
    ),
  },
};

const richTextStyles = `
mt-14
max-w-2xl
m-auto
prose-headings:my-5
prose-heading:text-2xl
prose-p:mb-5
prose-p:leading-7
prose-ul:list-decimal
prose-ol:list-disc
prose-li:leading-7
prose-li:ml-4
`;
