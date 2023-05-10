import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light
    sm:text-base">
      <Layout className="py-8 flex flex-center justify-between lg:flex-col lg:py-6 lg:items-center">
        <span className="sm:text-base sm:text-center">{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2 xs:text-sm xs:flex-col">Developed by<span>&nbsp;Gene Tenorlas&nbsp;</span>from CodeIt.Wiki</div>
        <Link href="mailto:gene.tenorlas@yahoo.com" target="_blank" className="underline underline-offset-2">Contact Me</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
