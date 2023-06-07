import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { ImGithub, ImTwitter, ImLinkedin2 } from "react-icons/im";

const Navbar = () => {
  const navItems = ["home", "portfolio", "blog", "about", "contact"];

  const router = useRouter();

  return (
    <div className="w-full h-20 bg-[#090909] xl:flex lg:flex ml:flex md:flex ms:hidden sm:hidden xs:hidden xxs:hidden">
      <div className="w-1/4 h-full flex items-center justify-center">
        <Link href="/" className="text-2xl text-white my-logo">
          Faridul Haque Murshed
        </Link>
      </div>
      <div className="w-2/4 h-full">
        <ul className="w-full h-full flex items-center justify-evenly">
          {navItems.map((item: string) => (
            <li key={item}>
              <Link
                className={`${
                  router.asPath === "/#" + item
                    ? "text-[#4A8CB3]"
                    : "text-white"
                } xl:text-2xl  lg:text-2xl ml:text-2xl md:text-2xl ms:text-xl sm:text-xl xs:text-xl xxs:text-xl capitalize hover:text-[#4A8CB3]`}
                href={`#${item}`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/4 h-full flex justify-center">
        <ul className="w-8/12 h-full flex items-center justify-evenly">
          <li>
            <Link href="https://www.linkedin.com/in/faridulhaquemurshed/" target="_blank">
              <ImLinkedin2 className="text-white text-2xl hover:text-[#4A8CB3]"></ImLinkedin2>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/faridulhaque" target="_blank">
              <ImGithub className="text-white text-2xl hover:text-[#4A8CB3]"></ImGithub>
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/FHMurshed" target="_blank">
              <ImTwitter className="text-white text-2xl hover:text-[#4A8CB3]"></ImTwitter>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
