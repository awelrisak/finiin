import { SiteConfig } from "types";

 import {
  IoCall,
  IoGlobeOutline,
  IoLocation,
  IoLogoBehance,
  IoLogoBitbucket,
  IoLogoCodepen,
  IoLogoDiscord,
  IoLogoDribbble,
  IoLogoFacebook,
  IoLogoFoursquare,
  IoLogoGithub,
  IoLogoGitlab,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoMedium,
  IoLogoPinterest,
  IoLogoReddit,
  IoLogoRss,
  IoLogoSkype,
  IoLogoSlack,
  IoLogoSnapchat,
  IoLogoSoundcloud,
  IoLogoTiktok,
  IoLogoTumblr,
  IoLogoTwitter,
  IoLogoVimeo,
  IoLogoVk,
  IoLogoWhatsapp,
  IoLogoYoutube,
  IoMail,
} from "react-icons/io5";
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
    // {
    //   name: "Email",
    //   href: "#",
    //   Icon: Mail,
    //   external: true,
    // },
    {
      name: "X",
      href: "#",
      Icon: IoLogoTwitter,
      external: true,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/",
      Icon: IoLogoFacebook,
      external: true,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/",
      Icon: IoLogoInstagram,
      external: true,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/252634400000",
      Icon: IoLogoWhatsapp,
      external: true,
    },
  ],
};
