import React from "react";

import { BsArrowUpRight } from "react-icons/bs";

import Image from "next/image";
import Arrow from "@/public/landing-page/Long Arrow.svg";

const Announcement = () => {
  return (
    <div className="w-[100vw] h-[100vh] md:h-auto bg-tertiary-100 flex flex-col py-24 md:py-[20px] ">
      <div className="flex md:flex-col w-full gap-20 md:gap-10 px-[100px] md:px-[5%] md:pt-20 md:pb-0">
        <div className="w-[40%] md:w-full flex flex-col gap-[50px] md:gap-[25px]">
          <h3 className="text-tertiary-20 font-[700] text-[20px] md:text-[16px] leading-[30px] md:leading-[24px] md:text-center">
            BURIAL ANNOUNCEMENT
          </h3>
          <div className="w-full h-[300px] bg-tertiary-10" />
        </div>
        <div className="w-[45%] md:w-full flex flex-col ">
          <h2 className="text-white text-[36px] md:text-[26px] leading-[54px] md:leading-[39px] font-semibold md:text-center">
            It is with Jesus Joy that we announce the burial arrangements for
            our dearly departed Father, Ven. Professor Jacob Adeleke Fayomi, who
            peacefully{" "}
            <span className="text-tertiary-20">
              passed away on the 4th of March 2024.
            </span>
          </h2>
        </div>
      </div>


      <div className="flex md:flex-col-reverse md:gap-12 w-full justify-between items-center mt-[72px] pl-[100px] md:pl-[5%] md:pr-[5%]">
        <div className="w-[210px] md:w-[150px] h-[210px] md:h-[150px] rounded-full bg-primary-base cursor-pointer text-white text-[20px] md:text-[16px] leading-[30px] md:leading-[20.5px] flex justify-center items-center gap-1">
          <p>Read more</p>
          <BsArrowUpRight size={"16px"} />
        </div>
        <div className="h-[210px] md:h-[140px] border border-[#862D37] border-x-0 w-[55%] md:w-full flex gap-[72px] md:gap-9 justify-start items-center">
          <h2 className="text-white text-[36px] md:text-[26px] leading-[54px] md:leading-[39px] font-semibold">Age</h2>
          <Image src={Arrow} alt="arrow" className="w-[200px] md:w-[120px] h-auto"/>
          <h1 className="font-semibold text-[132px] md:text-[80px] leading-[132px] md:leading-[80px] text-primary-base">75</h1>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
