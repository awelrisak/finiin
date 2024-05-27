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

async function getPost(slug: string) {
  const query = `
  *[_type == "post" && slug.current == "${slug}"][0] {
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
  }
  `;

  const post = await client.fetch(query);
  return post;
}

export async function generateMetadata({
  params: { slug },
}: PageProps): Promise<Metadata> {
  const post: Post = await getPost(slug);

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

const page = async ({ params }: PageProps) => {
  const post: Post = await getPost(params?.slug);

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
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postJsonLd) }}
      />
      <div className="absolute left-[-200px]  flex-col xl:inline-flex">
        <Link href="/post" className={buttonVariants({ variant: "ghost" })}>
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
      <div>
        <PortableText
          value={post?.body}
          components={myPortableTextComponents}
        />
      </div>
      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link href="/post" className={cn(buttonVariants({ variant: "ghost" }))}>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          See all posts
        </Link>
      </div>
    </article>
  );
};


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
      />
    ),
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
        className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
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
        className="scroll-m-20 text-xl font-semibold tracking-tight"
      >
        {children}
      </h4>
    ),
    h5: ({ children, value }: any) => (
      <h5
        id={slugify(toPlainText(value))}
        className="mb-3 text-2xl font-bold"
      >
        {children}
      </h5>
    ),
    h6: ({ children, value }: any) => (
      <h6
        id={slugify(toPlainText(value))}
        className="mb-3 text-xl font-bold"
      >
        { children }
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
