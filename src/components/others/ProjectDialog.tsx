import Link from "next/link";
import React from "react";
import { BsGithub, BsGlobe } from "react-icons/bs";

const ProjectDialog = ({ setOpen, data }: any) => {
  return (
    <div className="w-full h-[100vh] bg-light-black fixed z-10 top-0 left-0">
      <div
        className={`${
          data?.credentials?.email ? "h-[500px]" : "h-[300px]"
        } text-white w-2/4  bg-[#333333] rounded-lg absolute z-11 top-0 bottom-0 right-0 left-0 m-auto`}
      >
        <div className="w-11/12 m-auto mt-3">
          <h2 className="text-4xl text-bold uppercase">{data.title}</h2>
          <p className="text-xl my-5 text-justify">{data.details}</p>

          <div className="w-2/5 h-auto flex items-center">
            <Link
              href={data?.live}
              className="mr-4 px-2 py-2 bg-white rounded-full"
            >
              <BsGlobe className="text-2xl text-[#333333]"></BsGlobe>
            </Link>
            <Link
              href={`${data?.git?.client}`}
              className="mr-4 px-2 py-2 bg-white rounded-full"
            >
              <BsGithub className="text-2xl text-[#333333]"></BsGithub>
            </Link>
            {data?.git?.server && (
              <Link
                href={`${data?.git?.server}`}
                className="mr-4 px-2 py-2 bg-white rounded-full"
              >
                <BsGithub className="text-2xl text-[#333333]"></BsGithub>
              </Link>
            )}
          </div>

          {data?.credentials?.email && (
            <>
              <h2 className="text-3xl font-bold my-3">Admin Credentials</h2>
              <span className="text-xl font-semibold">
                Email: {data?.credentials.email}
              </span>
              <br />
              <span className="text-xl font-semibold">
                Password: {data?.credentials.email}
              </span>
              <p className="text-xl my-3 text-justify">
                {data.credentials.info}
              </p>
            </>
          )}
        </div>

        <span
          onClick={() => setOpen(false)}
          className="absolute z-12 right-2 top-2 rounded-full px-2 py-1 bg-white text-[#333333] cursor-pointer"
        >
          X
        </span>
      </div>
    </div>
  );
};

export default ProjectDialog;
