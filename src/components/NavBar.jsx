import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  TwitterIcon,
  LinkedInIcon,
  GithubIcon,
  SunIcon,
  MoonIcon,
  YoutubeIcon,
  InstagramIcon,
} from "./Icon";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`
      h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? "w-full" : "w-0"}
      dark:bg-light
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      className={`${className} relative group my-1.5 text-light dark:text-dark text-base font-medium`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`
      h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? "w-full" : "w-0"}
      dark:bg-dark
      `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center justify-between
    dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8"
    >
      {/* Hamburger Button (Mobile view) */}
      <button
        className="flex-col justify-center items-center hidden lg:flex z-50"
        onClick={handleClick}
        aria-label="hamburger menu"
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm -translate-y-0.5
        ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}
        `}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5
        ${isOpen ? "opacity-0" : "opacity-100"}
        `}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm -translate-y-0.5
        ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}
        `}
        ></span>
      </button>

      {/* Desktop Navigation */}
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/blogs" title="Blogs" className="mx-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://www.linkedin.com/in/genetenorlas/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
            aria-label="Visit my linkedin profile page"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://github.com/gtenorlas"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
            aria-label="Visit my github profile page"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.youtube.com/channel/UCbs_zA46a24Thc9Oge1PpUA"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
            aria-label="Visit my youtube channel"
          >
            <YoutubeIcon />
          </motion.a>
          <motion.a
            href="https://twitter.com/gene_tenorlas"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
            aria-label="Visit my twitter profile page"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/gtenorlas/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
            aria-label="Visit my instagram profile page"
          >
            <InstagramIcon />
          </motion.a>
          <button
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            aria-label="switch-theme"
            className={`ml-3 flex items-center justify-center rounded-full p-1
         ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark w-6 h-6"} />
            ) : (
              <MoonIcon className={"fill-dark w-6 h-6"} />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-[75vw] max-w-[280px] flex flex-col justify-between z-50 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-dark/90 dark:bg-light/75 rounded-2xl backdrop-blur-md py-6 px-5 shadow-2xl box-border"
        >
          {/* Close / X Button inside the modal */}
          <button
            onClick={handleClick}
            className="absolute top-2 right-2 text-light dark:text-dark p-1.5 text-lg font-bold rounded-full hover:bg-light/10 transition-colors"
            aria-label="Close menu"
          >
            ✕
          </button>

          <nav className="flex items-center flex-col justify-center w-full text-center my-1">
            <CustomMobileLink toggle={handleClick} href="/" title="Home" className="w-full text-center" />
            <CustomMobileLink toggle={handleClick} href="/about" title="About" className="w-full text-center" />
            <CustomMobileLink toggle={handleClick} href="/projects" title="Projects" className="w-full text-center" />
            <CustomMobileLink toggle={handleClick} href="/blogs" title="Blogs" className="w-full text-center" />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-4 w-full gap-3 px-2">
            <motion.a
              href="https://www.linkedin.com/in/genetenorlas/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-5"
              aria-label="Visit my linkedin profile page"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://github.com/gtenorlas"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-5 text-light dark:text-dark"
              aria-label="Visit my github profile page"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.youtube.com/channel/UCbs_zA46a24Thc9Oge1PpUA"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-5"
              aria-label="Visit my youtube channel"
            >
              <YoutubeIcon />
            </motion.a>
            <motion.a
              href="https://twitter.com/gene_tenorlas"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-5"
              aria-label="Visit my twitter profile page"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/gtenorlas/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-5"
              aria-label="Visit my instagram profile page"
            >
              <InstagramIcon />
            </motion.a>
            <button
              onClick={() => setMode(mode === "dark" ? "light" : "dark")}
              aria-label="switch-theme"
              className={`flex items-center justify-center rounded-full p-1
         ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark w-4 h-4"} />
              ) : (
                <MoonIcon className={"fill-dark w-4 h-4"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
