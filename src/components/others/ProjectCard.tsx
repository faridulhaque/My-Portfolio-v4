import Image from "next/image";
import React from "react";

const ProjectCard = ({ data }: any) => {
  return (
    <div className="group w-full h-[300px] overflow-hidden relative cursor-pointer">
      <Image
        src={data?.img}
        width={400}
        height={400}
        alt="ss"
        className="w-full h-full shadow-lg rounded-lg group-hover:scale-125 transition-all ease-in-out duration-500 "
      />
      <div className="absolute bg-light-black top-0 w-full h-full z-5 transition-opacity duration-500 hidden group-hover:block">
        <div className="h-full flex flex-col items-center justify-center w-3/4 m-auto">
          <h2 className="uppercase text-4xl text-white text-center font-bold">
            {data.title}
          </h2>
          <p className="text-center text-white text-lg mt-3">
            {data.description}
          </p>
        </div>
        <button className="btn border-2 border-white text-white absolute bottom-4 px-1 py-1 right-2 w-1/5 rounded-sm capitalize hover:bg-white hover:text-black">
          see more
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
