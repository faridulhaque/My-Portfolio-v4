import Link from "next/link";
import React from "react";
import { ImGithub, ImLinkedin2, ImTwitter } from "react-icons/im";

const Footer = () => {
  return (
    <div className="w-full pb-10 pt-10 bg-[#A3BFCD] relative">
      <h2 className="text-center text-4xl">Faridul Haque Murshed</h2>
      <ul className="w-2/12 mt-5 h-auto m-auto flex items-center justify-evenly">
        <li>
          <Link href="" target="_blank">
            <ImLinkedin2 className=" text-2xl hover:text-[#4A8CB3]"></ImLinkedin2>
          </Link>
        </li>
        <li>
          <Link href="" target="_blank">
            <ImGithub className=" text-2xl hover:text-[#4A8CB3]"></ImGithub>
          </Link>
        </li>
        <li>
          <Link href="" target="_blank">
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
