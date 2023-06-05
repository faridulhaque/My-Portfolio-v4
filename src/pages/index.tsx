import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/header/Navbar";
import Banner from "@/components/header/Banner";
import Portfolio from "@/components/others/Portfolio";
import Blogs from "@/components/others/Blogs";
import Contact from "@/components/others/Contact";
import About from "@/components/others/About";
import Footer from "@/components/footer/Footer";

import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 0.75 * window.innerHeight) {
        setShowScroll(true);
      } else if (
        showScroll &&
        window.pageYOffset <= 0.75 * window.innerHeight
      ) {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  return (
    <div className="relative w-full">
      <header className="relative">
        <Navbar></Navbar>
        <Banner></Banner>
      </header>

      <main>
        <Portfolio></Portfolio>
        <Blogs></Blogs>
        <About></About>
        <Contact></Contact>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
      <button
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        className={`fixed flex items-center justify-center bottom-5 right-5 text-white bg-[#4A8CB3] px-3 py-2 shadow-lg rounded-md text-3xl ${
          showScroll ? "visible" : "hidden"
        }`}
      >
        ^
      </button>
    </div>
  );
}
