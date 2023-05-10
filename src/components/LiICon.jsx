import React from "react";
import { motion, useScroll } from "framer-motion";

const LiICon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  return (
    <figure className="absolute left-0 stroke-dark dark:stroke-light">
      <svg className="-rotate-90 md:w-[60px] md:h-[60-px] xs:w-[40px] xs:h-[40-px]" width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary stroke-1 fill-none dark:stroke-primaryDark"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="fill-light stroke-[5px] dark:fill-dark"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="fill-primary stroke-1 animate-pulse dark:fill-primaryDark"
        />
      </svg>
    </figure>
  );
};

export default LiICon;
