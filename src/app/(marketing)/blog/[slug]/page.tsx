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
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/shared/icons";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import readingTime from "reading-time"

interface PageProps {
  params: {
    slug: string;
  };
}

interface Data { 
  post: Post; 
  recentPosts: Partial<Post>[];
  relatedPosts: Partial<Post>[]; 
}

async function getData(slug: string): Promise<Data>  {
  const query = `
  {
  "post": *[_type == "post" && slug.current == "${slug}"][0] {
    title,
    _id,
    "slug": slug.current,
    "coverImage": coverImage.asset->url,
    publishedAt,
    excerpt,
    _id,
    "headings": body[style in ["h2", "h3", "h4", "h5", "h6"]],
    body,
    tags[]-> {
      _id,
      "slug": slug.current,
      name
    },
    author[]->{
    name,
    twitter,
    "image": image.asset->url
    },
    "plainText": pt::text(body),
    "keywords": string::split(keywords, ",")
  },

  "recentPosts": *[_type == "post" ] | order(publishedAt desc)[0..5] {
     title,
    "slug": slug.current,
    "coverImage": coverImage.asset->url,
    publishedAt,
    "plainText": pt::text(body)
  },

  "relatedPosts": *[
     _type == "post"
     && count(tags[@._ref in ^.^.post.tags[]._ref]) > 0
   ] | order(publishedAt desc)[0..5] {
     title,
    "slug": slug.current,
    "coverImage": coverImage.asset->url,
    publishedAt,
    "plainText": pt::text(body)
  }
  
  }
  `;

  const data = await client.fetch(query);
  return data;
}

export async function generateMetadata({
  params: { slug },
}: PageProps): Promise<Metadata> {
  const { post } = await getData(slug);

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


const page = async ({ params: { slug } }: PageProps) => {
  const { post, recentPosts, relatedPosts } = await getData(slug);

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
    <div className="lg:pt-1 lg:pb-6 flex flex-col lg:flex-row gap-4 md:gap-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(postJsonLd) }}
         />
        <div className="flex flex-col md:sticky md:top-0 ">
          <Link
            href="/blog"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "hidden xl:inline-flex gap-2 items-center ml-auto"
            )}
          >
            <Icons.chevronLeft className="h-4 w-4" />
            See all blogs
          </Link>
        </div>
    <article className="flex-1 container overflow-auto relative max-w-3xl py-6 lg:py-10">
      <div>
        <div className="text-muted-foreground">
          <span>Published on</span> &nbsp;
          <span>
            <Moment format="MMMM Do, YYYY" date={post.publishedAt} />
          </span>
       &nbsp;
                           
                         <span>&#x2022;</span>
       &nbsp;
                           <span>
                          {readingTime(post?.plainText || "").text}
                          </span>
        </div>
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
                <Image
                    src={author.image}
                    alt={author.name}
                    width={42}
                    height={42}
                    className="rounded-full bg-white"
                  />
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
      <div>
        <PortableText
          value={post?.body}
          components={portableTextComponents}
        />
      </div>
      <hr className="mt-12" />

      {
       post?.tags.length && (
         <div className="my-4 space-x-2">
           <span>Tags:</span>
           {
            post?.tags.map((tag, i) => (
            <Button variant="outline" asChild key={tag._id}>
              <Link href={`/blog?tag=${tag.name}`}>
                <span>
                  {tag.name}
                </span>
               </Link>
            </Button>
            
           ))}
         </div>
       )
      }
      
      <div className="flex xl:hidden justify-center py-6 lg:py-10">
        <Link href="/blog" className={cn(buttonVariants({ variant: "ghost" }))}>
          <Icons.chevronLeft className="mr-2 size-4" />
          See all posts
        </Link>
      </div>
      
    </article>

    <div className="lg:h-full-dvh flex flex-col gap-10 max-w-2xl md:sticky md:top-20 relative px-6">


    {relatedPosts && (
          <section className="lg:max-w-xs">
            <div className="flex items-baseline justify-between mb-3">
              <h2 className="text-lg font-semibold md:text-2xl">Related Posts</h2>

              <Link href="/blog" className={cn(buttonVariants({ variant: 'ghost' }), "font-light")}>
                See more
                <span aria-hidden="true" className="ml-2">
                  &rarr;
                </span>
              </Link>
            </div>

            <div className="relative">
              <div className="mt-6 flex items-center w-full">
                <div className="w-full gap-y-10 gap-x-8">
                  {recentPosts?.map((post, i) => (
                    <div key={post.slug} className="relative w-full flex justify-between items-center hover:bg-muted">
                      <Link 
                        href={`/blog/${post.slug}`} 
                        className="absolute inset-0">
                        <span className="sr-only">View Article</span>
                      </Link>
                      <Image
                        src={post.coverImage}
                        alt="Post cover image"
                        height={80}
                        width={80}
                        className="size-20 rounded-lg"
                      />
                      <div className="flex-1 space-y-2 mx-3">
                        <h3 className="md:text-lg font-semibold leading-tight">
                          {post.title}
                        </h3>

                        <div className="text-sm text-muted-foreground space-x-2">
                          <span>
                            <Moment format="MMMM Do, YYYY" date={post.publishedAt} />
                          </span>
                           
                         <span>&#x2022;</span>
                           <span>
                          {readingTime(post?.plainText || "").text}
                          </span>
                        </div>
                      </div>
                    </div> /* End post card */
                  ))}
                </div>
              </div>
            </div>
          </section>
      )}
    

    {recentPosts && (
          <section className="lg:max-w-xs">
            <div className="flex items-baseline justify-between mb-3">
              <h2 className="text-lg font-semibold md:text-2xl">Recent Posts</h2>

              <Link href="/blog" className={cn(buttonVariants({ variant: 'ghost' }), "font-light")}>
                See more
                <span aria-hidden="true" className="ml-2">
                  &rarr;
                </span>
              </Link>
            </div>

            <div className="relative">
              <div className="mt-6 flex items-center w-full">
                <div className="w-full gap-y-10 gap-x-8">
                  {recentPosts?.map((post, i) => (
                    <div key={post.slug} className="relative w-full flex justify-between items-center hover:bg-muted">
                      <Link 
                        href={`/blog/${post.slug}`} 
                        className="absolute inset-0">
                        <span className="sr-only">View Article</span>
                      </Link>
                      <Image
                        src={post.coverImage}
                        alt="Post cover image"
                        height={80}
                        width={80}
                        className="size-20 rounded-lg"
                      />
                      <div className="flex-1 space-y-2 mx-3">
                        <h3 className="md:text-lg font-semibold leading-tight">
                          {post.title}
                        </h3>

                        <div className="text-sm text-muted-foreground space-x-2">
                          <span>
                            <Moment format="MMMM Do, YYYY" date={post.publishedAt} />
                          </span>
                           
                         <span>&#x2022;</span>
                           <span>
                          {readingTime(post?.plainText || "").text}
                          </span>
                        </div>
                      </div>
                    </div> /* End post card */
                  ))}
                </div>
              </div>
            </div>
          </section>
      )}

     </div>
    </div>
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
        <Link
          href={value.href} 
          rel={rel}
          className="font-medium underline underline-offset-4"
         >
          {children}
        </Link>
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
    normal: ({ children }: any) => (
      <p
        className="leading-7 [&:not(:first-child)]:mt-6"
      >
        {children}
      </p>
    ),
    h1: ({ children, value }: any) => (
      <h1
        id={slugify(toPlainText(value))}
        className="mt-2 scroll-m-20 text-4xl font-bold tracking-tight"
      >
        {children}
      </h1>
    ),
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
    blockquote: ({ children, value }: any) => (
      <blockquote
        id={slugify(toPlainText(value))}
        className="mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground"
      >
        { children }
      </blockquote>
    ),
  },
};
