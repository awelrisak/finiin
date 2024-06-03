import { MarketingConfig } from "types";
import { siteConfig } from "./site";

export const marketingConfig: MarketingConfig = {
  mainNav: [
    {
      title: "Services",
      href: "/#services",
    },
    {
      title: "Work",
      href: "/#work",
    },
    {
      title: "Pricing",
      href: "/#pricing",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "About us",
      href: "/about-us",
    }
  ],
  footer: {
    sections: [
      {
        Icon: siteConfig.Icon,
        links: [
          {
            name: "Services",
            href: "/#services",
          },
          {
            name: "Website development",
            href: "/#website-development",
          },

          {
            name: "Graphic design",
            href: "/#graphic-design",
          },
          {
            name: "Digital marketing",
            href: "/#digital-marketting",
          },
          {
            name: "Blog",
            href: "/blog",
          },
          {
            name: "Pricing",
            href: "/pricing",
          },
        ],
      },
      {
        title: "Services",
        links: [
          {
            name: "Digital marketing",
            href: "/#services",
          },
          {
            name: "Graphic design",
            href: "/#services",
          },
          {
            name: "Website development",
            href: "/#services",
          },
          {
            name: "Website design",
            href: "/#services",
          },

          {
            name: "App Development",
            href: "/#services",
          },
          {
            name: "SaaS App development",
            href: "/#services",
          },
          {
            name: "AI App Development",
            href: "/#services",
          },
          {
            name: "E-commerce Store",
            href: "/#services",
          },
          {
            name: "Authentication",
            href: "/#services",
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
          {
            name: "Refund Policy",
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
    copyYears: "2024",
  },
};
