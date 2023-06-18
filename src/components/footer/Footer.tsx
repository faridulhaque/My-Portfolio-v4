import Link from "next/link";
import React from "react";
import { ImGithub, ImLinkedin2, ImTwitter } from "react-icons/im";

const Footer = () => {
  return (
    <div className="w-full pb-10 pt-10 bg-[#A3BFCD] relative">
      <h2 className="text-center xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl xxs:text-xl">
        Faridul Haque Murshed
      </h2>
      <ul className="xl:w-2/12 lg:w-2/12 md:w-1/4 sm:w-2/5 xs:w-3/4 xxs:w-3/5 mt-5 h-auto m-auto flex items-center justify-evenly">
        <li>
          <Link
            href="https://www.linkedin.com/in/faridulhaquemurshed/"
            target="_blank"
          >
            <ImLinkedin2 className=" text-2xl hover:text-[#4A8CB3]"></ImLinkedin2>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/faridulhaque" target="_blank">
            <ImGithub className=" text-2xl hover:text-[#4A8CB3]"></ImGithub>
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/FHMurshed" target="_blank">
            <ImTwitter className=" text-2xl hover:text-[#4A8CB3]"></ImTwitter>
          </Link>
        </li>
      </ul>

      <small className="text-center bottom-2 absolute w-full">
        © Faridul Haque Murshed 2023. All rights reserved.
      </small>
    </div>
  );
};

export default Footer;
