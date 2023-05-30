import Link from "next/link";
import React from "react";
import {AiOutlineArrowDown} from "react-icons/ai"

const Banner = () => {
  return (
    <div className="relative text-[#8AC7FF] w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center">
      <h1 className=" text-[80px] uppercase font-bold">
        welcome to my website
      </h1>
      <p className=" text-2xl text-center w-3/4">
        I am Faridul Haque Murshed, a passionate MERN stack developer, equipped
        with the skills to create robust and dynamic web applications that
        seamlessly integrate MongoDB, Express.js, React, and Node.js.
      </p>
      <Link href="#" className="btn bg-[#8AC7FF] px-5 py-3 text-black rounded-md mt-5">Download Resume</Link>

      <span className="absolute bottom-10 animate-bounce"><AiOutlineArrowDown className="text-white text-3xl"></AiOutlineArrowDown></span>
    </div>
  );
};

export default Banner;
