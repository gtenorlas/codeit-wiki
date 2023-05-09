import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light">
      <Layout className="py-8 flex flex-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">Developed by<span>&nbsp;Gene Tenorlas&nbsp;</span>from CodeIt.Wiki</div>
        <Link href="mailto:gene.tenorlas@yahoo.com" target="_blank" className="underline underline-offset-2">Contact Me</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
