import Link from "next/link";
import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

const Banner = () => {
  return (
    <div className="relative text-[#fff] w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center">
      <h1 className="xl:text-6xl lg:text-5xl md:text-5xl sm:text-4xl xs:text-4xl xxs:text-3xl  uppercase font-bold text-center">
        welcome to my website
      </h1>
      <p className=" xl:text-2xl lg:text-2xl md:text-xl sm:text-xl xs:text-lg xxs:text-lg text-center xl:w-3/4 lg:w-3/4 md:w-3/5 sm:w-3/4 xs:w-11/12 xxs:w-11/12">
        I am Faridul Haque Murshed, a passionate MERN stack developer, equipped
        with the skills to create robust and dynamic web applications that
        seamlessly integrate MongoDB, Express.js, React, and Node.js.
      </p>
      <Link
        href="#"
        className="btn bg-[#8AC7FF] xl:px-5 lg:px-5 md:px-4 sm:px-3 xs:px-3 xxs:px-3 xl:py-3 lg:py-3 md:py-2 sm:py-2 xs:py-1 xxs:py-1 text-[#333333] rounded-md mt-5"
      >
        Download Resume
      </Link>

      <span className="absolute bottom-10 animate-bounce">
        <AiOutlineArrowDown className="text-white text-3xl"></AiOutlineArrowDown>
      </span>
    </div>
  );
};

export default Banner;
