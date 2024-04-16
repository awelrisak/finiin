import Brands from "@/components/marketing/brands";
import FAQS from "@/components/marketing/faq";
import GraphicDesign from "@/components/marketing/graphic-design";
import Hero from "@/components/marketing/hero";
import Pricing from "@/components/marketing/pricing";
import Services from "@/components/marketing/services";
import ShopifyStores from "@/components/marketing/shopify-stores";
import { Testimonials } from "@/components/marketing/testimonials";
import Trustees from "@/components/marketing/trustees";
import WebsiteDevelopment from "@/components/marketing/website-development";
import SliderOne from "@/components/ui/slider";
import StarsCanvas from "@/components/ui/srars";
import {
  PiAppStoreLogo,
  PiHeadsetFill,
  PiLock,
  PiMegaphone,
  PiMonitor,
  PiStorefront,
} from "react-icons/pi";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

const prices = [
  {
    title: "Website development",
    description: "Best option for personal use & for your next project.",
    price: 349,
    currency: "$",
    features: [
      "Individual configuration",
      "No setup, or hidden fees",
      "Team size: 1 developer",
      "Premium support: 6 months",
      "Free updates: 6 months",
    ],
  },
  {
    title: "Digital marketing",
    description: "Best option for personal use & for your next project.",
    price: 799,
    currency: "$",
    features: [
      "Individual configuration",
      "No setup, or hidden fees",
      "Team size: 1 developer",
      "Premium support: 6 months",
      "Free updates: 6 months",
    ],
    super: true,
  },
  {
    title: "Graphic designing",
    description: "Best option for personal use & for your next project.",
    price: 299,
    currency: "$",
    features: [
      "Individual configuration",
      "No setup, or hidden fees",
      "Team size: 1 developer",
      "Premium support: 6 months",
      "Free updates: 6 months",
    ],
  },
];

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

const services = [
  {
    icon: (
      <div className="rounded-full bg-blue-100 p-4">
        <PiMonitor className="h-8 w-8 text-blue-600" />
      </div>
    ),
    title: "Website Design",
    description:
      "We build fully responsive websites that look great on all devices. Our websites are designed to convert visitors into customers.",
  },
  {
    icon: (
      <div className="rounded-full bg-blue-100 p-4">
        <PiStorefront className="h-8 w-8 text-blue-600" />
      </div>
    ),
    title: "E-commerce Store",
    description:
      "From small stores to large online retailers, we have the expertise to build a store that will help you grow your business.",
  },
  {
    icon: (
      <div className="rounded-full bg-blue-100 p-4">
        <PiLock className="h-8 w-8 text-blue-600" />
      </div>
    ),
    title: "Authentication",
    description:
      "Secure authentication solutions for your website or app. We use the latest technology to keep your data safe.",
  },
  {
    icon: (
      <div className="rounded-full bg-blue-100 p-4">
        <PiMegaphone className="h-8 w-8 text-blue-600" />
      </div>
    ),
    title: "Social Media",
    description:
      "We offer social media management and ad creation services. We can help you grow your social media presence and reach new customers.",
  },
  {
    icon: (
      <div className="rounded-full bg-blue-100 p-4">
        <PiAppStoreLogo className="h-8 w-8 text-blue-600" />
      </div>
    ),
    title: "App Development",
    description:
      "We build custom mobile apps for iOS and Android. Our apps are designed to be user-friendly and performant.",
  },
  {
    icon: (
      <div className="rounded-full bg-blue-100 p-4">
        <PiHeadsetFill className="h-8 w-8 text-blue-600" />
      </div>
    ),
    title: "Support",
    description:
      "We offer support for all our clients. We are here to help you with any issues or questions you may have.",
  },
];

const brandLogos = [
  {
    image: "/logo/logoipsum-248.svg",
  },
  {
    image: "/logo/logoipsum-245.svg",
  },
  {
    image: "/logo/logoipsum-225.svg",
  },
  {
    image: "/logo/logoipsum-248.svg",
  },
  {
    image: "/logo/logoipsum-249.svg",
  },
  {
    image: "/logo/stripelogo.png",
  },
];

const stores = [
  {
    image: "/images/image2.png",
    quote: "Sonmax showed us to get started, what to do, and how to do it.",
    name: "Jason Scer",
  },
  {
    image: "/images/shop-2.jpeg",
    quote:
      "We had no idea how to get started, but Sonamax showed us the way. And we were able to create something amazing.",
    name: "John Prency",
  },

  {
    image: "/images/s-2.webp",
    quote:
      "The team at Sonamax is amazing. They helped us create a stunning store that we are proud of.",
    name: "Miguel Martinez",
  },
];

const slides = [
  "/images/business.jpeg",
  "/images/business-card.jpg",
  "/images/logo-design.jpg",
  "/images/graphic-design.jpg",
  "/images/landing-page.jpg",
  "/images/shopify.jpg",
  "/images/website-dev.jpg",
];

export default function Home() {
  return (
    <main className="relative z-10 mx-auto w-full p-4 px-2 pt-10 md:pt-20">
      <div className="relative">
        <StarsCanvas />
        <Hero />
      </div>

      <Trustees
        people={people}
        text="Trusted choice of founders and entrepreneurs who've built successful businesses globally."
      />

      <div className="w-full pt-10">
        <SliderOne slides={slides} />

        <WebsiteDevelopment
          title="Grow Your Business with Powerful Websites"
          text=" Creating, designing and developing websites that work for your
          business."
        />

        <GraphicDesign
          title="Graphic Design"
          text="We create stunning visuals for your brand. From logos to social media
        posts, we've got you covered."
        />

        <ShopifyStores
          title="Shopify Stores"
          text="We create stunning Shopify stores that are designed to convert."
          stores={stores}
        />

        <Brands
          title="The best brands choose us"
          text="From small businesses to large corporations, we have helped many
        brands elevate their business."
          logos={brandLogos}
        />

        <Services
          services={services}
          title="We handle just about everything!"
          text="From website design to social media management, We offer a wide range of
        services to help you grow your business."
        />

        <Testimonials
          title="We have worked with thousands of amazing founders"
          text=""
          testimonials={testimonials}
        />

        <Pricing
          title="Designed for business teams like yours"
          text="Simple pricing that makes sense for your business. No hidden fees."
          prices={prices}
        />

        <FAQS />
      </div>
    </main>
  );
}
