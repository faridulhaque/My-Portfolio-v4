import React, { useEffect, useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  const [data, setData] = useState<any>([]);

  useMemo(() => {
    fetch(
      "https://raw.githubusercontent.com/faridulhaque/My-json-data/main/portfolio4.json"
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div id="portfolio" className="h-auto w-full m-auto bg-[#333333] py-10">
      <h2 className="w-11/12 m-auto text-5xl text-white my-10">Portfolio</h2>

      <div className="w-11/12 m-auto grid grid-cols-3 gap-5">
        {data.map((data: any) => (
          <ProjectCard key={data?.img} data={data}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
