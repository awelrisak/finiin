"use client";

import { motion } from "framer-motion";
import { ThreeDCard } from "./3d-card";
import { EvervaultCardSnippet } from "./evervault-card";

const GraphicDesign = () => {
  return (
    <div id="graphic-design">
      <div className=" relative   z-10 mx-auto w-full  p-4 pt-20 md:pt-32">
        <div className="bg-opacity-50 bg-gradient-to-b from-purple-500 to-sky-200 bg-clip-text text-center font-heading font-heading text-4xl text-transparent md:pb-8 md:text-7xl">
          Graphic Design <br />
        </div>

        <p className="mx-auto mt-4 max-w-lg  text-center text-lg font-normal text-muted-foreground">
          We create stunning visuals for your brand. From logos to social media
          posts, we&apos;ve got you covered.
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
      </div>
    </div>
  );
};

export default GraphicDesign;
