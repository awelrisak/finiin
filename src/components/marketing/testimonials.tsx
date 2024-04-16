"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Testimony } from "types";

interface TestimonialsProps {
  title: string;
  text: string;
  testimonials: Testimony[];
}

export function Testimonials({ title, text, testimonials }: TestimonialsProps) {
  return (
    <div className="dark:bg-grid-white/[0.05] relative my-4 flex flex-col items-center justify-center overflow-hidden rounded-md pb-40 antialiased dark:bg-black">
      <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-12">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="mb-5 font-light text-gray-500 dark:text-gray-400 sm:text-xl">
          {text}
        </p>
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
