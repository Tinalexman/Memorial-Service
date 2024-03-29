import React from "react";

import Image from "next/image";
import Man from "@/public/landing-page/Man.svg";

import { ImArrowDownRight2 } from "react-icons/im";

const Footer = () => {
  return (
    <div className="w-[100vw] h-auto bg-tertiary-100 flex flex-col py-[72px] px-[200px] md:px-[5%]">
      <div className="flex justify-between w-full">
        <div className="w-[400px] flex flex-col gap-1">
          <div className="text-primary-10 font-extrabold text-[40px] leading-[60px] w-full flex items-center gap-3">
            Transition
            <Image src={Man} alt="man" className="w-[60px] h-[60px] " />
            <h1 className="text-primary-base"> to</h1>
          </div>
          <h1 className="text-primary-base font-extrabold text-[40px] leading-[60px]">
            Glory 🕊️
          </h1>
        </div>
        <div className="flex flex-col items-end gap-1">
          <ImArrowDownRight2 size={"26px"} className="text-primary-base" />
          <div className="gap-4 flex flex-col items-end text-primary-10 font-normal">
            <p className=" text-[24px] leading-[36px] ">
              LOCATION
            </p>
            <p className="text-[20px] leading-[30px] ">Iyara, Ijumu, Kogi State, Nigeria.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
