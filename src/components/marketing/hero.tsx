import { Button } from "@/components/ui/moving-border";
import { Spotlight } from "@/components/ui/spotlight";

import Link from "next/link";


export default function Hero() {
  return (
    <div className="relative h-[calc(100vh-9rem)]">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
       
      
      <h1
        className="text-balance bg-opacity-50 bg-gradient-to-b from-neutral-950 to-neutral-700 bg-clip-text px-6 pb-5 text-center font-heading text-4xl text-transparent dark:from-neutral-50 dark:to-neutral-400 md:text-7xl"
      >
        Create, grow, and <br /> scale your business
      </h1>
      <p className="mx-auto mt-4 mb-6 max-w-lg  px-4 text-center text-lg font-normal text-muted-foreground">
        Custom tailored solutions for your business. We are a team of creatives
        who are excited to help you grow your business.
      </p>
     
<div className="my-4" /> 

      <div className="mx-auto my-6 flex w-48 items-center justify-center p-2">
        <Button
          as={Link}
          href="appointment"
          borderRadius="1.75rem"
          className="border-neutral-200 bg-white uppercase text-black dark:border-slate-800 dark:bg-slate-900 dark:text-white"
        >
          Book a call
        </Button>
 </div>
      
    </div>
  );
}
