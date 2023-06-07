import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImGithub, ImTwitter, ImLinkedin2 } from "react-icons/im";

const AppBar = () => {
  const [openBar, setOpenBar] = useState(false);

  const navItems = ["home", "portfolio", "blog", "about", "contact"];

  const router = useRouter();

  useEffect(() => {
    if (!openBar) {
        // setModalInfo(null)
        document.body.style.overflowY = "scroll"

    }
    else {
        document.body.style.overflowY = "hidden"
    }
}, [openBar])

  return (
    <div
      className={`xl:hidden lg:hidden ml:hidden md:hidden ms:visible sm:visible xs:visible xxs:visible h-[80px] bg-[#000000] flex items-center relative`}
    >
      <span
        onClick={() => setOpenBar(!openBar)}
        className="ml-3 border-2 border-white rounded-lg px-1 py-2 flex items-center justify-center"
      >
        <FaBars className="text-white text-2xl cursor-pointer"></FaBars>
      </span>

      <span className="text-white text-3xl ml-3 my-logo">FARID</span>

      {/* bar that comes out by clicking on the bar icon */}

      <div
        className={`w-full h-[calc(100vh-80px)] bg-[#4A8CB3] absolute top-[80px] z-20 ${
          openBar
            ? "left-0 transition-all duration-500"
            : "left-[-100%] transition-all duration-500"
        }`}
      >
        <ul className="w-full h-full flex flex-col mt-5">
          {navItems.map((item: string) => (
            <li
              key={item}
              className="border-b-[1px]  border-[#333] w-full h-[60px] flex items-center"
            >
              <Link
                className={`${
                  router.asPath === "/#" + item ? "text-[#000]" : "text-white"
                } text-2xl capitalize hover:text-[#000] ml-3`}
                href={`#${item}`}
              >
                {item}
              </Link>
            </li>
          ))}
          <li className="w-full h-[60px] bg-[#333333] flex items-center justify-around absolute bottom-0">
            <Link
              href="https://www.linkedin.com/in/faridulhaquemurshed/"
              target="_blank"
            >
              <ImLinkedin2 className="text-white text-2xl hover:text-[#4A8CB3]"></ImLinkedin2>
            </Link>
            <Link href="https://github.com/faridulhaque" target="_blank">
              <ImGithub className="text-white text-2xl hover:text-[#4A8CB3]"></ImGithub>
            </Link>
            <Link href="https://twitter.com/FHMurshed" target="_blank">
              <ImTwitter className="text-white text-2xl hover:text-[#4A8CB3]"></ImTwitter>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppBar;
