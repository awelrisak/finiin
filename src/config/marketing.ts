import { MarketingConfig } from "types";
import { siteConfig } from "./site";

export const marketingConfig: MarketingConfig = {
  mainNav: [
    {
      title: "Services",
      href: "/#services",
    },
    {
      title: "Digital marketting",
      href: "/#digital-marketting",
    },
    {
      title: "Website design",
      href: "/#website-design",
    },
    {
      title: "Graphic design",
      href: "/#graphic-design",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
  ],
  footer: {
    sections: [
      {
        Icon: siteConfig.Icon,
        links: [
          {
            name: "About Us",
            href: "/about-us",
            disabled: true,
          },
          {
            name: "Donate",
            href: "/donate",
            disabled: true,
          },
          {
            name: "Events",
            href: "/events",
            disabled: true,
          },
          {
            name: "Books",
            href: "/books",
            disabled: true,
          },
          {
            name: "Catalog",
            href: "/catalog",
            disabled: true,
          },
          {
            name: "Writers",
            href: "/writers",
            disabled: true,
          },
          {
            name: "Blog",
            href: "/blog",
            disabled: true,
          },
        ],
      },
      {
        title: "Legal",
        links: [
          {
            name: "Privacy & Policy",
            href: "/privacy-policy",
            disabled: true,
          },
          {
            name: "Terms of Use",
            href: "/terms-of-use",
            disabled: true,
          },
        ],
      },
      {
        title: "Help & Support",
        links: [
          {
            name: "FAQ",
            href: "/faq",
            disabled: true,
          },
          {
            name: "Contact Us",
            href: "/contact-us",
            disabled: true,
          },
        ],
      },
    ],
    copyYears: "2023",
  },
};
