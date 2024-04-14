import Brands from "@/components/marketing/brands";
import FAQS from "@/components/marketing/faq";
import GraphicDesign from "@/components/marketing/graphic-design";
import Hero from "@/components/marketing/hero";
import { InfiniteMovingCardsDemo } from "@/components/marketing/infinite-moving-card-snippet";
import Services from "@/components/marketing/services";
import ShopifyStores from "@/components/marketing/shopify-stores";
import WebsiteDevelopment from "@/components/marketing/website-development";
import SliderOne from "@/components/ui/slider";
import StarsCanvas from "@/components/ui/srars";

export default function Home() {
  return (
    <main className="relative z-10 mx-auto w-full p-4 px-2 pt-10 md:pt-20">
      <div className="relative">
        <Hero />
        <StarsCanvas />
      </div>

      <div className="w-full pt-20">
        <SliderOne />

        <WebsiteDevelopment />

        <GraphicDesign />

        <ShopifyStores />

        <Brands />

        <Services />

        <InfiniteMovingCardsDemo />

        <FAQS />
      </div>
    </main>
  );
}
