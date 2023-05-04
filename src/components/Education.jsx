import React from "react";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import LiICon from "./LiICon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiICon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {type}
      </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Education
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
        <Details
            type="Diploma in Full-Stack Web Development"

            time="July 2022 - February 2023"
            place="Lighthouse Labs"
            info="
            Lighthouse Labs' Web Development Program provides an immersive education for aspiring web developers with a focus on full-stack development, back-end development, front-end development, and testing. The program covers a wide range of technologies, including Node.js, React.js, Express, JavaScript, databases, and Ruby. Front-end developers create responsive, user-friendly, and interactive user experiences, while back-end developers configure servers and databases to power the front-end. Full-stack developers have the skills to build both front-end and back-end components, allowing for a more comprehensive understanding of web development. Testing is emphasized throughout the program to ensure the development of high-quality products."
          />
          <Details
            type="Computer Systems Technology – Systems Analyst"

            time="January 2016 - December 2018"
            place="Sheridan College"
            info="Sheridan College's Computer Systems Technology - Systems Analyst program provides students with a diverse range of computing skills and knowledge, including full-stack development and mobile development. With a focus on the latest computing technologies, students will learn to analyze, plan, design, and implement computer systems, networking solutions, and databases. They will also gain proficiency in iOS and Android application development, Java, C#, .NET, and web technologies. Graduates will be equipped to participate in the deployment and administration of databases and automate routine tasks using various scripting tools and languages. They will have the ability to provide technical support and apply their knowledge of security issues to the implementation of information technology solutions. Graduates can pursue career opportunities such as web application developers, computer programmer analysts, and technical analysts, among others."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
