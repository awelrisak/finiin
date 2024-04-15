"use client";

import { InlineWidget } from "react-calendly";

const Book = () => {
  return (
    <>
      <div className="bg-grid-white/[0.02] flex h-screen  w-full flex-col     ">
        <div
          className="bg-opacity-50 bg-gradient-to-b from-neutral-950 to-neutral-100 bg-clip-text  pb-5 text-center  font-heading 
        text-4xl text-transparent dark:from-neutral-50 dark:to-neutral-800 md:text-6xl"
        >
          Book a meeting
        </div>

        <InlineWidget url="https://calendly.com/sonamaxmarketing/book-a-call" />
      </div>
    </>
  );
};

export default Book;
