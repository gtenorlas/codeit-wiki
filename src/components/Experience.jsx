import React from "react";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import LiICon from "./LiICon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiICon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]
          "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Full-Stack Developer"
            company="Jobabot"
            time="February 2023 - Present"
            address="Mississauga, ON"
            work="The project involved utilizing Node.js, Express, and PostgreSQL to build an API on the back-end. For the front-end views, Tailwind CSS, Next.js, and React.js were employed. The API was tested using various tools such as Postman and curl"
          />
               <Details
            position="Back-End Developer"
            company="RB&W"
            time="January 2020 - April 2020"
            address="Brampton, ON"
            work="Engineered a dynamic and responsive API leveraging the power of Java and Spring Boot, delivering efficient and reliable solutions."
          />

          <Details
            position="User Acceptance Tester"
            company="Finastra (D + H)"
            time="August 2013 - February 2015"
            address="Mississauga, ON"
            work="In my previous role at a fin-tech company, I was responsible for creating and implementing comprehensive test plans and test cases. I also conducted rigorous testing and closely monitored results to ensure that any defects were promptly reported and addressed. Throughout this process, I utilized HP Quality Center to maintain organized records of all testing procedures and outcomes"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
