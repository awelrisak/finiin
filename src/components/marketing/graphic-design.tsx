"use client";

import { motion } from "framer-motion";
import { ThreeDCard } from "./3d-card";
import { EvervaultCardSnippet } from "./evervault-card";

interface GraphicDesigProps {
  title: string;
  text: string;
  // services: Service[];
}

const GraphicDesign = ({title, text}: GraphicDesigProps) => {
  return (
    <section
      className="relative z-10 mx-auto w-full  p-4 pt-20 md:pt-32"
      id="graphic-design"
    >
      <div className="bg-opacity-50 bg-gradient-to-b from-purple-500 to-sky-400 bg-clip-text text-center font-heading  text-4xl text-transparent dark:to-sky-200 md:pb-8 md:text-7xl">
        {title}
      </div>

      <p className="mx-auto mt-4 max-w-lg  text-center text-lg font-normal text-muted-foreground">
        {text}
      </p>
      <div className="items-center justify-center md:mx-auto md:flex md:space-x-10">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="px-10 md:px-0"
        >
          <ThreeDCard />
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="px-10 md:px-0"
        >
          <EvervaultCardSnippet />
        </motion.div>
      </div>
    </section>
  );
};

export default GraphicDesign;
