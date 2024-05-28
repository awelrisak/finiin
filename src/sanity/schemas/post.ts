import { Rule } from "sanity";
import slugify from "slugify";
import { nanoid } from "nanoid";

/*const customSlugify = (input: string) => {
  const slug = slugify(input, {
    remove: /[*+~.()'"!:@]/g,
    strict: true,
    lower: true,
  });

  return `${slug}-${nanoid(4)}`;
};*/

export const post = {
  name: "post",
  title: "Post",
  type: "document",
  fieldsets: [{ name: "seo", title: "SEO metadata" }],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description:
        "Make it clear, grab attention, and mention your topic ( make it 50 - 60 characters)",
      required: true,
      fieldset: "seo",
      validation: (Rule: Rule) =>
        Rule.max(60).warning("Shorter titles are always better for SEO."),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      fieldset: "seo",
      description: "This is the URL of the blog.",
      options: {
        source: "title"
      },
      validation: (Rule: Rule) => Rule.required().error("Slug is required."),
    },
    {
      name: "excerpt",
      title: "Description / Excerpt",
      type: "text",
      required: true,
      fieldset: "seo",
      description:
        "A brief summary to catch attention, around 150-160 characters.",
      validation: (Rule: Rule) =>
        Rule.max(160).warning("Shorter Excerpts are always better for SEO."),
    },
    {
      name: "keywords",
      title: "Keywords",
      type: "text",
      fieldset: "seo",
      description:
        "Words that relate to your content, helping people find it when they search online. Separate by (,) commas.",
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      fieldset: "seo",
      description:
        "Choose a compelling image that represents your content well and grabs attention.",
      fields: [
        { type: "text", name: "caption", title: "Caption", rows: 3 },
        { type: "text", name: "alt", title: "Alt", rows: 2 },
      ],
      options: {
        hotspot: true,
      },
    },
    {
      name: "author",
      title: "Author(s)",
      type: "array",
      of: [{ type: "reference", to: [{ type: "author" }] }],
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
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [
            { type: "text", name: "caption", title: "Caption", rows: 3 },
            { type: "text", name: "alt", title: "Alt", rows: 2 },
          ],
        },
      ],
      required: true,
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      description:
        "Keywords related to your post to categorize and improve searchability.",
      of: [{ type: "reference", to: [{ type: "tag" }] }],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "coverImage",
      subtitle: "publishedAt",
    },
  },
};
