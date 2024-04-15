import { Rule } from "sanity";
import slugify from "slugify";
import { nanoid } from "nanoid";

const customSlugify = (input: string) => {
  const slug = slugify(input, {
    remove: /[*+~.()'"!:@]/g,
    strict: true,
    lower: true,
  });

  return `${slug}-${nanoid(4)}`;
};

export const post = {
  name: "post",
  title: "Post",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        slugify: (input: string) => customSlugify(input),
      },
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
      required: true,
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      required: true,
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      required: true,
      validation: (Rule: Rule) => Rule.max(200).error("Max 200 characters"),
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [{ type: "text", name: "alt", title: "Alt" }],
        },
      ],
      required: true,
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tag" }] }],
    },
  ],
};
