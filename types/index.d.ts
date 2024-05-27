// import { User } from "@prisma/client";
// import type { Icon } from "lucide-react";

// import { Icons } from "@/components/icons";
import type { Metadata } from "next";

interface Link {
  name: string;
  href: string;
  Icon?: any;
  external?: boolean;
  disabled?: boolean;
}

interface Address {
  street: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
}

interface Contact {
  telephone: string;
}

interface FooterSection {
  Icon?: Icon;
  title?: string;
  links: Link[];
}

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;


export interface SiteConfig extends Metadata {
  name: string;
  shortName: string;
  description: string;
  url: string;
  ogImage: string;
  Icon?: Icon;
  links: Link[];
  address?: Address;
  contact?: Contact;
};

interface Service {
  icon: any;
  title: string;
  description: string;
}

interface Testimony {
  quote: string;
  title: string;
  name: string;
}

interface Price {
  title: string;
  description: string;
  price: number;
  currency: string;
  features: string[];
  super?: boolean;
}

interface Person {
  id: number;
  name: string;
  designation: string;
  twitter?: string;
  image: string;
}

interface Post {
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  body: any;
  tags: Array<Tag>;
  _id: string;
  headings?: Array<HTMLHeadElement | string>;
  coverImage: any;
  author: {
    name: string;
    twitter: string;
  }[];
  plainText: string;
  keywords: string[]
}


type MarketingConfig = {
  mainNav: MainNavItem[];
  footer?: {
    sections?: FooterSection[];
    copyYears?: string;
  };
};

type ContactFormValues = {
  first_name: string;
  last_name: string;
  email: string;
  job_title: string;
  company_name: string;
  help: "Evaluate Bird for my company" | "Learn More" | "Get a Quote" | "Other";
  services:
    | "Mobile App Develoment"
    | "Social Media Marketing"
    | "UI/UX Design"
    | "Branding"
    | "Website Development";
  info: string;
  terms: boolean;
};


