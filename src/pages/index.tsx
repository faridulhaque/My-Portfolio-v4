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
import AppBar from "@/components/header/AppBar";

import AOS from "aos";
import "aos/dist/aos.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    AOS.init();

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
    <>
      {/* this part will be visible in large and smallest screen and will be hidden in normal screen */}
      <div className="h-screen w-full items-center justify-center xl:hidden lg:hidden ml:hidden md:hidden ms:hidden sm:hidden xs:hidden  xxs:hidden zero:flex xxl:flex">
        <p className="xxl:text-5xl zero:text-md text-black text-center">
          Your device is either too small or too large for this website
        </p>
      </div>

      <div className="relative w-full xl:block lg:block ml:block md:block ms:block sm:block xs:block  xxs:block zero:hidden xxl:hidden">
        <header className="relative w-full h-screen">
          <Navbar></Navbar>
          {/* navbar is for  larger devices and appBar is for smaller devices*/}
          <AppBar></AppBar>
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
          className={`fixed flex items-center justify-center bottom-5 right-5 text-white bg-[#4A8CB3] px-3 py-2 shadow-lg rounded-md text-3xl opacity-3 ${
            showScroll ? "visible" : "hidden"
          }`}
        >
          ^
        </button>
      </div>
    </>
  );
}
