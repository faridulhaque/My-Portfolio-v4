import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }: any) => {
  return (
    <div className="bg-[#222222] text-white group w-full h-[600px] overflow-hidden relative shadow-2xl">
      <Image
        className="h-2/4 w-full"
        src={blog?.img}
        width={500}
        height={300}
        alt="normal image"
      ></Image>
      <h2 className="text-2xl my-4 mx-3 text-[#8AC7FF]">{blog?.title}</h2>
      <p className="text-md mx-3 text-justify">{blog.description}</p>

      <Link
        href={blog?.blog}
        target="_blank"
        className="absolute btn bg-[#8AC7FF] text-[#333333] px-5 py-3 rounded-md bottom-5 left-3"
      >
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
