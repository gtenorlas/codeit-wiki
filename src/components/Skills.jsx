import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer
      absolute dark:bg-light dark:text-dark"
      whileHover={{ scale: 1.05 }}
      initial={{x:0,y:0}}
      whileInView={{x:x,y:y, transition:{duration:1.5}}}

    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer  dark:bg-light dark:text-dark"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name='HTML' x='-20vw' y='2vw'/>
        <Skill name='CSS' x='-7vw' y='-12vw'/>
        <Skill name='Javascript' x='23vw' y='6vw'/>
        <Skill name='ReactJS' x='0vw' y='12vw'/>
        <Skill name='NextJS' x='-25vw' y='-10vw'/>
        <Skill name='NodeJS' x='15vw' y='-12vw'/>
        <Skill name='Java' x='34vw' y='-5vw'/>
        <Skill name='Python' x='0vw' y='-20vw'/>
        <Skill name='Figma' x='-25vw' y='-18vw'/>
        <Skill name='Tailwind CSS' x='10vw' y='18vw'/>
        <Skill name='C#' x='-27vw' y='18vw'/>
        <Skill name='Swift' x='-34vw' y='5vw'/>


      </div>
    </>
  );
};

export default Skills;
