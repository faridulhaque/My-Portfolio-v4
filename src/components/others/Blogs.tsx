import React from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <div id="blog" className="h-auto w-full m-auto bg-[#333333] py-10">
      <h2 className="w-11/12 m-auto text-5xl text-white my-10">Blogs</h2>
      <div className="w-11/12 m-auto grid grid-cols-3 gap-5">
        <BlogCard></BlogCard>
      </div>
    </div>
  );
};

export default Blogs;
