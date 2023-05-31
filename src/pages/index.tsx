import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/header/Navbar";
import Banner from "@/components/header/Banner";
import Portfolio from "@/components/others/Portfolio";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header className="relative">
        <Navbar></Navbar>
        <Banner></Banner>
      </header>

      <main>
        <Portfolio></Portfolio>
      </main>
    </>
  );
}
