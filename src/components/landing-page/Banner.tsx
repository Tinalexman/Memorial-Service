import React from "react";

import Image from "next/image";
import Background from "@/public/landing-page/background.png";

import Navbar from "@/src/components/resuable/Navbar";

const Banner = () => {
  return (
    <div className="w-[100vw] h-[100vh] relative bg-black">
      <Image
        src={Background}
        alt="background"
        className="w-[100vw] h-[100vh] object-cover"
      />
      <div className="w-full h-full px-[100px] md:px-[5%] py-[32px] md:py-[20px] absolute z-10 top-0 left-0">
        <Navbar />
      </div>
    </div>
  );
};

export default Banner;
