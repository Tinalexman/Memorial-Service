import React from "react";

import Image from "next/image";

import { BsArrowUpRight } from "react-icons/bs";
import Gear from "@/public/landing-page/Gear.svg";
import DonateButton from "../resuable/DonateButton";

const Biography = () => {
  return (
    <div
      id="biography-div"
      className="w-[100vw] min-h-[800px] h-auto flex flex-col px-[200px] md:px-[5%] py-24 md:pt-20 md:pb-0 bg-white relative"
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
        <DonateButton
          style="solid yellow"
          useShadow={true}
          custom="hidden md:z-10 md:mb-10"
        />
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
