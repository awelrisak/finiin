"use client";

import { CardHoverEffect } from "./card-hover-effect";

const Services = () => {
  return (
    <div className="mx-auto max-w-5xl py-20" id="services">
      <div
        className="font-heading mt-20 bg-opacity-50 bg-gradient-to-b from-blue-500
         to-neutral-50 bg-clip-text pb-5
          text-center text-4xl text-transparent md:text-7xl"
      >
        Streamline your business with our services
      </div>
      <p
        className="mx-auto mt-4 max-w-lg
          text-center text-lg 
          font-normal text-muted-foreground"
      >
        From website design to social media management, We offer a wide range of
        services to help you grow your business.
      </p>

      <CardHoverEffect />
    </div>
  );
};

export default Services;
