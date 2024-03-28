import React from "react";

import Image from "next/image";

import { BsArrowUpRight } from "react-icons/bs";
import Gear from "@/public/landing-page/Gear.svg";

const Biography = () => {
  return (
    <div
      id="biography-div"
      className="w-[100vw] h-[100vh] md:h-auto flex flex-col px-[200px] md:px-[5%] py-24 md:pt-20 md:pb-0 bg-white relative"
    >
      <h3 className="text-tertiary-20 font-[700] text-[20px] md:text-[16px] leading-[30px] md:leading-[24px] md:text-center">
        BIOGRAPHY
      </h3>
      <div className="flex md:flex-col md:items-center relative md:static mt-8">
        <h2 className="text-tertiary-100 text-[36px] md:text-[26px] leading-[54px] md:leading-[39px] font-semibold w-[60%] md:text-center md:w-full">
          Lorem ipsum dolor sit amet, cons piscing elit lorem ipsumsit. Lorem
          ipsum dolor sit amet, cons piscing elit lorem ipsumsit. Lorem ipsum
          dolor sit amet, cons piscing elit lorem ipsumsit. Lorem ipsum dolor
          sit amet,{" "}
          <span className="text-tertiary-20">
            cons piscing elit lorem ipsumsit.
          </span>
        </h2>
        <div className="w-[210px] md:w-[150px] h-[210px] md:h-[150px] rounded-full bg-tertiary-100 cursor-pointer text-white text-[20px] md:text-[16px] leading-[30px] md:leading-[20.5px] flex justify-center items-center gap-1 absolute -bottom-10 md:static right-[10%] md:my-20">
          <p>Read more</p>
          <BsArrowUpRight size={"16px"} />
        </div>
        <button className="text-white bg-primary-base font-normal text-[20px] leading-[30px] w-[180px] py-3 rounded-full justify-center items-center gap-[10px] md:flex hidden md:z-10 md:mb-10">
          <div className="w-[20px] h-[20px] bg-primary-border-40 rounded-full flex items-center justify-center">
            <div className="w-[10px] h-[10px] bg-primary-10 rounded-full" />
          </div>
          <p>DONATE</p>
        </button>
      </div>
      <Image
        src={Gear}
        alt="gear"
        className="w-[360px] md:w-[190px] h-auto absolute bottom-0 md:mt-20 "
      />
    </div>
  );
};

export default Biography;
