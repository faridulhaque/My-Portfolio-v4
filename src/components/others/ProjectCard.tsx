import Image from "next/image";
import React, { useState } from "react";
import ProjectDialog from "./ProjectDialog";


const ProjectCard = ({ data }: any) => {
  const [isOpen, setOpen] = useState(false);

 

  return (
    <div 
    data-aos="flip-right"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="1000"
    className="group w-full xl:h-[300px] lg:h-[300px] md:h-[300px] sm:h-[275px] xs:h-[275px] xxs:h-[275px]  overflow-hidden relative ">
      <Image
        src={data?.img}
        width={400}
        height={400}
        alt="ss"
        className="w-full h-full shadow-lg rounded-lg group-hover:scale-125 transition-all ease-in-out duration-500 "
      />
      <div className="absolute bg-light-black top-0 w-full h-full z-5 transition-opacity duration-500 hidden group-hover:block">
        <div className="h-full flex flex-col items-center justify-center xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-4/5 xs:4/5 xxs:4/5 m-auto">
          <h2 className="uppercase text-4xl text-white text-center font-bold">
            {data.title}
          </h2>
          <p className="text-center text-white text-lg mt-3">
            {data.description}
          </p>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="cursor-pointer btn border-2 border-white text-white absolute left-0 right-0 bottom-4 m-auto px-1 py-1 xl:w-1/5 lg:w-1/5 md:w-2/5 sm:w-2/5 xs:w-2/5 xxs:w-3/5 rounded-sm capitalize hover:bg-white hover:text-black"
        >
          see more
        </button>
      </div>
      {isOpen && <ProjectDialog setOpen={setOpen} data={data}></ProjectDialog>}
    </div>
  );
};

export default ProjectCard;
