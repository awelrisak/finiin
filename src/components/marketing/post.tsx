import Link from "next/link";
import { Post as PostType } from "types";
import Image from "next/image";
import Moment from "../ui/moment";
import { urlForImage } from "@/sanity/lib/image";
import readingTime from "reading-time"

interface Props {
  post: PostType;
    //   index: number;
}

const Post = ({ post, }: Props) => {
  return (
    <article key={post._id} className="group relative flex flex-col space-y-2">
      <Image
        src={post.coverImage}
        alt="Post cover image"
        width={804}
        height={452}
        className="rounded-md border bg-muted transition-colors"
        // priority={index <= 1}
      />

      {/* <pre>{JSON.stringify(post.coverImage, null, 2)}</pre> */}

      <h2 className="text-2xl font-extrabold">{post.title}</h2>

      <p className="text-muted-foreground">{post.excerpt}</p>

      <div className="text-sm text-muted-foreground space-x-2">
                          <span>
                            <Moment format="MMMM Do, YYYY" date={post.publishedAt} />
                          </span>
                           
                         <span>&#x2022;</span>
                           <span>
                          {readingTime(post.plainText || "").text}
                          </span>
                        </div>

      <Link href={`/blog/${post.slug}`} className="absolute inset-0">
        <span className="sr-only">View Article</span>
      </Link>
    </article>
  );
};


export default Post;
