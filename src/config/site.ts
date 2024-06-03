import { SiteConfig } from "types";

 import { Icons } from "@/components/shared/icons";


export const siteConfig: SiteConfig = {
  name: "Finiin",
  shortName: "Finiin",
  description: "We craft compelling marketing solutions for your brand.",
  url: "https://finiin.vercel.app/", //TODO: FIX URL
  ogImage: "", //TODO:FIX OG IMAGE
  Icon: Icons.logo,
  address: {
    street: "Mweni Road, Nairobi, Kenya",
    city: "Nairobi",
    region: "Nairobi",
    country: "Kenya",
    postalCode: "00100",
  },
  contact: {
    telephone: "+254799992045",
  },
  links: [
    {
      name: "Email",
      href: "contact@finiin.com",
      Icon: Icons.mail,
      external: true,
    },
    {
      name: "X",
      href: "https://www.x.com/finiininc",
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
      href: "https://www.instagram.com/finiininc",
      Icon: Icons.instagram,
      external: true,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/254799992045",
      Icon: Icons.whatsapp,
      external: true,
    },
  ],
};
