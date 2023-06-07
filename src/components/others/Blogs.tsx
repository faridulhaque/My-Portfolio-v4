import BlogCard from "./BlogCard";
import React, { useMemo, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState<any>([]);

  useMemo(() => {
    fetch(
      "https://raw.githubusercontent.com/faridulhaque/My-json-data/main/portfolio4_blog.json"
    )
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div
      id="blog"
      className="h-auto w-full m-auto bg-[#333] py-10"
    >
      <h2 className="w-11/12 m-auto text-5xl text-white my-10">Blogs</h2>
      <div className="w-11/12 m-auto grid xl:grid-cols-4 lg:grid-cols-3 ml:grid-cols-3 md:grid-cols-2 ms:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 xl:gap-10 lg:gap-5 md:gap-5 sm:gap-5 xs:gap-3 xxs:gap-3">
        {blogs.map((blog: any) => (
          <BlogCard key={blog.title} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
