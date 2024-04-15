"use client";

import { InlineWidget } from "react-calendly";

const Book = () => {
  return (
    <>
      <div className="bg-grid-white/[0.02] flex h-screen  w-full flex-col     ">
        <div
          className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-800 bg-clip-text 
        pb-5 text-center font-heading text-4xl text-transparent md:text-6xl"
        >
          Book a meeting
        </div>

        <InlineWidget url="https://calendly.com/sonamaxmarketing/book-a-call" />
      </div>
    </>
  );
};

export default Book;
