// import { User } from "@prisma/client";
// import type { Icon } from "lucide-react";

// import { Icons } from "@/components/icons";
import type { Metadata } from "next";

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
  links: {
    twitter: string;
    github: string;
  }; 
};



export type MarketingConfig = {
  mainNav: MainNavItem[];
};



