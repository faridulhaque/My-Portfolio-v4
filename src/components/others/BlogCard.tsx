import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }: any) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
      className="bg-[#222222] text-white group w-full xl:h-[625px] lg:h-[625px] ml:h-[625px] md:h-[625px] ms:h-[650px] sm:h-[750px] xs:h-[625px] xxs:h-[625px] overflow-hidden relative shadow-2xl"
    >
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
        className="absolute btn bg-[#8AC7FF] text-[#333333] xl:px-5 lg:px-5 md:px-4 sm:px-4 xs:px-3 xxs:px-3 xl:py-3 lg:py-3 md:py-2 sm:py-2 xs:py-1 xxs:py-1 rounded-md bottom-5 left-3"
      >
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
