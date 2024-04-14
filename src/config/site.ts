import { SiteConfig } from "types";

 import { Icons } from "@/components/shared/icons";


export const siteConfig: SiteConfig = {
  name: "Sonamax",
  shortName: "Sonamax",
  description: "We craft compelling marketing solutions for your brand.",
  url: "http://localhost:3000/", //TODO: FIX URL
  ogImage: "", //TODO:FIX OG IMAGE

  Icon: Icons.logo,
  address: {
    street: "F9C5+Q5R, Laascaanood",
    city: "Laascaanood",
    region: "Sool",
    country: "Somalia",
    postalCode: "00100",
  },
  contact: {
    telephone: "+252699992045",
  },
  links: [
    {
      name: "Email",
      href: "#",
      Icon: Icons.mail,
      external: true,
    },
    {
      name: "X",
      href: "#",
      Icon: Icons.twitter,
      external: true,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/",
      Icon: Icons.facebook,
      external: true,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/",
      Icon: Icons.instagram,
      external: true,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/252634400000",
      Icon: Icons.whatsapp,
      external: true,
    },
  ],
};
