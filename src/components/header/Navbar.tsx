import Link from "next/link";
import React from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

import {ImGithub, ImTwitter, ImLinkedin2} from "react-icons/im"

const Navbar = () => {
  const navItems = ["home", "portfolio", "blog", "contact", "about"];
  return (
    <div className="w-full h-20 bg-[#090909] flex">
      <div className="w-1/4 h-full flex items-center justify-center">
        <Link href="#home" className="text-2xl text-white my-logo">
          Faridul Haque Murshed
        </Link>
      </div>
      <div className="w-2/4 h-full">
        <ul className="w-full h-full flex items-center justify-evenly">
          {navItems.map((item: string) => (
            <li key={item}>
              <Link className="text-white text-2xl capitalize hover:text-[#4A8CB3]" href={`#${item}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/4 h-full flex justify-center">
        <ul className="w-8/12 h-full flex items-center justify-evenly">
          <li>
            <Link href="" target="_blank">
              <ImLinkedin2 className="text-white text-2xl hover:text-[#4A8CB3]"></ImLinkedin2>
            </Link>
          </li>
          <li>
            <Link href="" target="_blank">
              <ImGithub className="text-white text-2xl hover:text-[#4A8CB3]"></ImGithub>
            </Link>
          </li>
          <li>
            <Link href="" target="_blank">
              <ImTwitter className="text-white text-2xl hover:text-[#4A8CB3]"></ImTwitter>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
