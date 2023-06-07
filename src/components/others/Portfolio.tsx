import React, { useEffect, useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import Loading from "../loading/Loading";

const Portfolio = () => {
  const [data, setData] = useState<any>([]);

  const [loading, setLoading] = useState(false);

  useMemo(() => {
    setLoading(true);
    fetch(
      "https://raw.githubusercontent.com/faridulhaque/My-json-data/main/portfolio4.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div id="portfolio" className="h-auto w-full m-auto bg-[#333] py-10">
      <h2 className="w-11/12 m-auto text-5xl text-white my-10">Portfolio</h2>
      {loading && <Loading></Loading>}
      <div className="w-11/12 m-auto grid xl:grid-cols-4 lg:grid-cols-3 ml:grid-cols-3 md:grid-cols-2 ms:grid-cols-2  sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1  xl:gap-10 lg:gap-5 ml:gap-7 md:gap-5 ms:gap-5 sm:gap-5 xs:gap-5 xxs:gap-5">
        {data.map((data: any) => (
          <ProjectCard key={data?.img} data={data}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
