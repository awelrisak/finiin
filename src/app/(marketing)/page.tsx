import Brands from "@/components/marketing/brands";
import FAQS from "@/components/marketing/faq";
import GraphicDesign from "@/components/marketing/graphic-design";
import Hero from "@/components/marketing/hero";
import Services from "@/components/marketing/services";
import ShopifyStores from "@/components/marketing/shopify-stores";
import WebsiteDesign from "@/components/marketing/website-design";
import { InfiniteMovingCardsDemo } from "@/components/ui/infinite-moving-card-snippet";
import SliderOne from "@/components/ui/slider";

export default function Home() {
  return (
    <main className="relative z-10 mx-auto w-full p-4 px-2 pt-10 md:pt-20">
      <Hero />
      <div className="w-full pt-20">
        <SliderOne />

        <WebsiteDesign />

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
