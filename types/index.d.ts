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
  // links: {
  //   twitter: string;
  //   github: string;
  // };
  Icon?: Icon;
  links: Link[];
  address: Address;
  contact: Contact;
};



type MarketingConfig = {
  mainNav: MainNavItem[];
  footer?: {
    sections?: FooterSection[];
    copyYears?: string;
  };
};


