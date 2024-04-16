"use client";

import { Service } from "types";
import { ServicesList } from "./services-list";

interface ServicesProps {
  title: string;
  text: string;
  services: Service[];
}

const Services = ({ title, text, services }: ServicesProps) => {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20" id="services">
      <h2
        className="mt-20 text-balance bg-opacity-50 bg-gradient-to-b from-blue-500 to-neutral-950
         bg-clip-text pb-5 text-center font-heading
          text-4xl text-transparent dark:to-neutral-50 md:text-7xl"
      >
        {title}
      </h2>
      <p
        className="mx-auto mt-4 max-w-lg
          text-center text-lg 
          font-normal text-muted-foreground"
      >
        {text}
      </p>

      <ServicesList services={services} />
    </section>
  );
};

export default Services;
