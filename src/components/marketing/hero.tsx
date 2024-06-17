import { Button } from "@/components/ui/moving-border";
import { Spotlight } from "@/components/ui/spotlight";

import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative py-6 min-h-[calc(100dvh-5rem)]">
      <Spotlight
        className="-top-40 left-0 fill-white dark:hidden md:-top-20 md:left-60"
        // fill="white"
      />

      <h1 className="px-6 pb-5 md:text-center font-heading text-4xl text-balance bg-gradient-to-b from-neutral-950 to-neutral-500 bg-clip-text  text-transparent dark:from-neutral-50 dark:to-neutral-700 md:text-7xl">
        More Customers. More Sales. <br/> Finiin Makes it Possible.
      </h1>

      <p className="mx-auto mb-6 mt-4 max-w-lg  px-4 md:text-center text-lg font-normal text-muted-foreground">
          Whether you need a website, app, or marketing assistance, we&apos;ve got you covered. 
      </p>

      <div className="my-4" />

      <div className="mx-auto my-6 flex w-48 items-center justify-center p-2">
        <Button
          as={Link}
          href="book-a-call"
          borderRadius="1.75rem"
          className="border-neutral-200 bg-white uppercase text-black dark:border-slate-800 dark:bg-slate-900 dark:text-white"
        >
          Book a call
        </Button>
      </div>
    </div>
  );
}
