import React from "react";

import Image from "next/image";
import Background from "@/public/landing-page/background.png";
import Picture from "@/public/landing-page/Picture Frame.svg";

import Navbar from "@/src/components/resuable/Navbar";

const Banner = () => {
  return (
    <div className="w-[100vw] h-[100vh] relative bg-black">
      <Image
        src={Background}
        alt="background"
        className="w-[100vw] h-[100vh] object-cover"
      />
      <div className="w-full h-full px-[100px] md:px-[5%] py-[32px] md:py-[20px] absolute z-10 top-0 left-0 flex flex-col items-center">
        <Navbar />
        <div className="w-full flex flex-col items-center mt-24 md:mt-32">
          <Image
            src={Picture}
            alt="picture frame"
            className="w-[170px] md:w-[116px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
